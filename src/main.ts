import type {
  IContract,
  IContractRepository,
  IDictRoles,
  IEvent,
  IResponse,
  IResult,
  IUseCase,
  IUseCases
} from './types'

const responsesDefault: IResponse = {
  ok: { message: 'Event has ben success processed!' },
  notFound: { message: 'Event not found!' }
}
class DefaultRepository implements IContractRepository {
  async getContractByReferenceId(_id: string): Promise<{
    status: string
    updateDescription: string
  }> {
    return {
      status: 'Not_Found',
      updateDescription: 'Not_Found'
    }
  }
}

/**
 * Class to build webhook handler. This class is responsible for building the webhook handler to process the events provider by the gimymo application.
 * @param useCases  Object with all use cases functions {'useCaseName': useCaseFunction}
 * @param repository  Object with all repository implementes getContractByReferenceId {'getContractByReferenceId': (contractId: string) => Promise<Types.IContract>)}
 * @param dictRoles  Object with all roles {'EVENT_NAME': {'CONTRACT_STATUS': ['useCaseName', 'useCaseName']}}
 * @param response  Object with all responses {'ok': {message: 'Event has ben success processed!'}, 'notFound': {message: 'Event not found!'}}
 * @returns  Object with result response of successfully 'ok': {message: 'Event has ben success processed!'} or  'notFound': {message: 'Event not found!'}}
 */
export class WebhookHandlerBuilder {
  /**
   *
   * @param useCases  Object with all use cases functions {'useCaseName': useCaseFunction}
   * @param repository  Object with all repository implementes getContractByReferenceId {'getContractByReferenceId': (contractId: string) => Promise<Types.IContract>)}
   * @param dictRoles  Object with all roles {'EVENT_NAME': {'CONTRACT_STATUS': ['useCaseName', 'useCaseName']}}
   * @param response  Object with all responses {'ok': {message: 'Event has ben success processed!'}, 'notFound': {message: 'Event not found!'}}
   */
  constructor(
    private useCases: IUseCases = {},
    private repository: IContractRepository = new DefaultRepository(),
    private dictRoles: IDictRoles = {},
    private response = responsesDefault
  ) {}

  /**
   * @param contract  Contract object
   * @param actionsArray  Array with the names of the use cases to be executed in the order of the array
   * @returns
   * @throws Error('Use case not registered')
   **/
  private async execFlowActions(contract: IContract, actionsArray: string[], event: IEvent): Promise<void> {
    let contractInWork = contract
    for await (const useCase of actionsArray) {
      try {
        contractInWork = await this.useCases[useCase](contractInWork, event)
      } catch (error: any) {
        throw new Error(`Erro on use case ${useCase}: ${error.message}`)
      }
    }
  }

  /**
   *
   * @param event Receive a event object and execute the actions defined in the dictRoles
   * @returns response object with the message of the result of the execution of the actions when the event is found in the dictRoles
   * @throws Error('Use case not registered')
   * @throws Error('Contract not found')
   */
  async handler(eventNotification: IEvent): Promise<IResult> {
    const contract = await this.repository.getContractByReferenceId(eventNotification.referenceId)
    if (!contract) {
      return this.response.notFound
    }
    const notMappedEvent = !this.dictRoles[eventNotification.event]
    if (notMappedEvent) {
      return this.response.notFound
    }
    const notActionsForThisStatus = !this.dictRoles[eventNotification.event][contract.status]
    if (notActionsForThisStatus) {
      return this.response.notFound
    }
    await this.execFlowActions(contract, this.dictRoles[eventNotification.event][contract.status], eventNotification)
    return this.response.ok
  }

  /**
   *
   * @param repository  class instance that implements IContractRepository
   * @returns class instance
   */
  public setRepository(repository: IContractRepository): this {
    this.repository = repository
    return this
  }

  /**
   *
   * @param useCases object with the use cases to be used in the execution of the actions, all use cases must be functions that receive a contract object and return a contract object
   * @returns contract object
   */
  public setUseCases(useCases: IUseCases): this {
    this.useCases = useCases
    return this
  }

  /**
   *
   * @param dictRoles object with the actions to be executed for each event and status of the contract object chape {event: {status: [actions]}}
   * @returns
   */
  public setDictRoles(dictRoles: IDictRoles): this {
    this.dictRoles = dictRoles
    return this
  }

  /**
   *
   * @param useCaseName {string} name of the use case to be added. Example: 'activeContract'
   * @param useCase  {Function} function that receives a contract object and returns a contract object. Example: (contract) => { contract.status = 'ACTIVE'; return contract }
   * @returns
   */
  public addUseCase(useCaseName: string, useCase: IUseCase): this {
    Object.assign(this.useCases, { [useCaseName]: useCase })
    return this
  }

  /**
   *
   * @param event {string} type of event to be added to the roles. Example: 'PAYMENT_CREATED'
   * @param contractStatus {string} status of the contract for this role. Example: 'ACTIVE'
   * @param caseExecutionSequence {string[]} array with the names of the use cases to be executed in the order of the array. Example: ['activeContract', 'sendEmailWelcome']
   * @returns
   */
  public addActionRole(event: string, contractStatus: string, caseExecutionSequence: string[]): this {
    if (!this.dictRoles[event]) {
      Object.assign(this.dictRoles, { [event]: { [contractStatus]: caseExecutionSequence } })
      return this
    }
    this.dictRoles[event][contractStatus] = caseExecutionSequence
    return this
  }

  /**
   *
   * @param responses object with the messages to be returned in the handler function. Example this is default response: {ok: {message: 'Event has ben success processed!'}, notFound: {message: 'Event not found!'}}
   * @returns
   */
  public setResponse(responses: IResponse): this {
    this.response = responses
    return this
  }
}
