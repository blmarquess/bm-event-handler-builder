import * as Types from '@/@types'

export class Repository implements Types.IContractRepository {
  private contract: Types.IContract = {
    status: 'PENDING',
    updateDescription: 'Contract Pending'
  }

  async getContractByReferenceId(_id: string) {
    return this.contract
  }

  public setActive() {
    this.contract = {
      status: 'ACTIVE',
      updateDescription: 'Contract active'
    }
    return this
  }

  public setPending() {
    this.contract = {
      status: 'PENDING',
      updateDescription: 'Contract pending'
    }
    return this
  }
}
