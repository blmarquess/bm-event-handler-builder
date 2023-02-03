import { WebhookHandlerBuilder } from '../main'
import * as contractUseCases from '../useCases/contract'
import { Events } from './mokes/events'

const te = contractUseCases.activeContract()
console.log('🚀 -> te', te)

describe('Webhook Build Handler', () => {
  it('should return true, sample of health system test', () => {
    expect(1).toBe(1)
  })
  it('should possible create HandlerObject', () => {
    const builder = new WebhookHandlerBuilder()
    const handler = builder.handler(Events.PAYMENT_CREATED)

    expect(handler).toBeDefined()
    expect(builder).toHaveProperty('status')
  })
})

describe('Testes of received Event SUBSCRIPTION_CREATED', () => {
  it('When ACTIVE: Should exec [nothing] and result contract[nothing]', () => expect(1).toBe(1))
  it('When CANCELED: Should exec [actions] and result contract[]', () => expect(1).toBe(1))
  it('When PENDING: Should exec [actions] and result contract[]', () => expect(1).toBe(1))
  it('When REFUND: Should exec [actions] and result contract[]', () => expect(1).toBe(1))
  it('When TERMINATED: Should exec [actions] and result contract[]', () => expect(1).toBe(1))
})

describe('Testes of received Event SUBSCRIPTION_NOT_CREATED', () => {
  it('When ACTIVE: Should exec [actions] and result contract[]', () => expect(1).toBe(1))
  it('When CANCELED: Should exec [actions] and result contract[]', () => expect(1).toBe(1))
  it('When PENDING: Should exec [actions] and result contract[]', () => expect(1).toBe(1))
  it('When REFUND: Should exec [actions] and result contract[]', () => expect(1).toBe(1))
  it('When TERMINATED: Should exec [actions] and result contract[]', () => expect(1).toBe(1))
})
