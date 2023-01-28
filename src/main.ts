import { IEvent, IResult, iContract } from './@types'

type IResponse = {
  ok: IResult
  notFound: IResult
}

// event.contractStatus: actions
export interface IDictActions {
  [index: string]: {
    [index: string]: string[]
  }
}

export interface IUseCases {
  [index: string]: Function
}

export interface IContractRepository {
  getContractByReferenceId: (referenceId: string) => iContract
}

const responses: IResponse = {
  ok: { message: 'Event has ben success processed!' },
  notFound: { message: 'Event not found!' }
}
export class WebhookHandlerBuilder {
  private response = responses
  constructor(
    private useCases: IUseCases,
    private repository: IContractRepository,
    private dictActions: IDictActions
  ) {}

  private async execFlowActions(contract: iContract, actions: string[]): Promise<void> {
    for (const useCase of actions) {
      await this.useCases[useCase](contract)
    }
  }

  async handler(event: IEvent) {
    const contract = this.repository.getContractByReferenceId(event.referenceId)
    const actions = this.dictActions[event.event][contract.status]
    if (actions) {
      await this.execFlowActions(contract, actions)
      return this.response.ok
    }
    return this.response.notFound
  }

  public setRepository(repository: IContractRepository): this {
    this.repository = repository
    return this
  }

  public addActionInDict(event: string, contractStatus: string, useCases: string[]): this {
    this.dictActions[event][contractStatus] = useCases
    return this
  }
}

export const actions = {
  activeContract: (contract: iContract) => {
    contract.status = 'ACTIVE'
    return contract
  },
  cancelContract: (contract: iContract) => {
    contract.status = 'CANCELED'
    return contract
  }
}

export const eventActions = {}
