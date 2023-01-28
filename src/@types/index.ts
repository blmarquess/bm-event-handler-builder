export interface IResult {
  message: string
}

export interface iContract {
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
  getContractByReferenceId: (referenceId: string) => iContract
  activeContract: (contract: iContract) => iContract
  cancelContract: (contract: iContract) => iContract
  refundPayment: (contract: iContract) => iContract
  createInsurancePolicy: (contract: iContract) => iContract
  cancelInsurancePolicy: (contract: iContract) => iContract
  notifyPartner: (contract: iContract) => iContract
}
