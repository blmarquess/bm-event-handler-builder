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

export type IUseCase = (contract: IContract, event?: IEvent) => Promise<IContract> | IContract

export type IUseCases = Record<string, IUseCase>

export interface IResponse {
  ok: IResult
  notFound: IResult
}

export type IDictRoles = Record<string, Record<string, string[]>>

export interface IContractRepository {
  getContractByReferenceId: (referenceId: string) => Promise<IContract>
}

export interface IConstructorParams {
  repository?: IContractRepository
  useCases?: IUseCases
  dictRoles?: IDictRoles
  response?: IResponse
}
