export interface IResult {
  message: string
}

export interface IContract {
  status: string
  updateDescription: string
}

export interface IEvent {
  event: string
  eventDescription: string
  referenceId: string
  chargeDueDate: string
  subscriptionId?: string
  paymentId?: string
  creditCard?: {
    creditCardNumber: string
    creditCardBrand: string
    creditCardToken: string
  }
}

export interface IActions {
  [index: string]: Function
}

export interface useCases {
  contractRepository: (referenceId: string) => IContract
  activeContract: (contract: IContract) => IContract
  cancelContract: (contract: IContract) => IContract
  refundPayment: (contract: IContract) => IContract
  createInsurancePolicy: (contract: IContract) => IContract
  cancelInsurancePolicy: (contract: IContract) => IContract
}

export type IResponse = {
  ok: IResult
  notFound: IResult
}

export interface IDictRoles {
  [index: string]: {
    [index: string]: string[]
  }
}

export interface IUseCases {
  [index: string]: Function
}

export interface IContractRepository {
  getContractByReferenceId: (referenceId: string) => Promise<IContract>
}
