import type { IContract } from './types'
import type { Model, Document } from 'mongoose'

/**
 * @params [String] productKey Array of product keys for product
 * @params [Object] mongoSchema Mongo schema to be used
 */
export abstract class MakeContractRepository<T> {
  /**
   *
   * @param productKey  Array of product keys for product
   * @param repository  Mongo schema to be used
   * @returns  class instance that implements IContractRepository with mongoose and the methods getContractByReferenceId
   * @example
   * const contractRepository = new MakeContractRepository(['productKeyBrand1', 'productKeyBrand2'], mongoSchema)
   * const contract = await contractRepository.getContractByReferenceId('referenceId-424242')
   *________________________________________________________________________________________
   * $: > console.log(contract)
   * $: > { status: 'ACTIVE', updateDescription: 'Contract activated' }
   *________________________________________________________________________________________
   */
  constructor(private readonly productKey: string[], private readonly repository: Model<T & Document>) {}

  async getContractByReferenceId(referenceId: string): Promise<IContract | null> {
    return await this.repository.findOne({ _id: referenceId, 'product.productKey': { $in: this.productKey } })
  }
}
