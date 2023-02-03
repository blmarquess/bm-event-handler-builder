import * as Types from './@types'

const responses: Types.IResponse = {
  ok: { message: 'Event has ben success processed!' },
  notFound: { message: 'Event not found!' }
}
class DefaultRepository implements Types.IContractRepository {
  async getContractByReferenceId(_id: string) {
    return {
      status: 'Not_Found',
      updateDescription: 'Not_Found'
    }
  }
}
export class WebhookHandlerBuilder {
  constructor(
    private useCases: Types.IUseCases = {},
    private repository: Types.IContractRepository = new DefaultRepository(),
    private dictRoles: Types.IDictRoles = {},
    private response = responses
  ) {}

  private async execFlowActions(contract: Types.IContract, actionsArray: string[]): Promise<void> {
    let contractInWork = contract
    for (const useCase of actionsArray) {
      contractInWork = await this.useCases[useCase](contractInWork)
    }
  }

  async handler(event: Types.IEvent) {
    const contract = await this.repository.getContractByReferenceId(event.referenceId)
    const notMappedEvent = !this.dictRoles[event.event]
    if (notMappedEvent) {
      return this.response.notFound
    }
    const notActionsForThisStatus = !this.dictRoles[event.event][contract.status]
    if (notActionsForThisStatus) {
      return this.response.notFound
    }
    await this.execFlowActions(contract, this.dictRoles[event.event][contract.status])
    return this.response.ok
  }

  public setRepository(repository: Types.IContractRepository): this {
    this.repository = repository
    return this
  }

  public setUseCases(useCases: Types.IUseCases) {
    this.useCases = useCases
    return this
  }

  public setDictRoles(dictRoles: Types.IDictRoles) {
    this.dictRoles = dictRoles
    return this
  }

  public addUseCase(useCaseName: string, useCase: Function) {
    Object.assign(this.useCases, { [useCaseName]: useCase })
    return this
  }

  public addActionRole(event: string, contractStatus: string, caseExecutionSequence: string[]) {
    if (!this.dictRoles[event]) {
      Object.assign(this.dictRoles, { [event]: { [contractStatus]: caseExecutionSequence } })
      return this
    }
    this.dictRoles[event][contractStatus] = caseExecutionSequence
    return this
  }

  public setResponse(responses: Types.IResponse) {
    this.response = responses
    return this
  }
}
