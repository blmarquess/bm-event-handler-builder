import { IResult } from '../@types'

export class WebhookHandlerBuilder {
  private result: IResult
  constructor(private actions: object, public eventActionList: object) {
    this.actions = actions
  }

  setContract() {
    return this
  }

  makeBuilder() {}

  builder() {
    return this.result
  }
  handler(contract: iContract, event: IEvent) {
    return this.eventActionList[event.event][contract.status]
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
