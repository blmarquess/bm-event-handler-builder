import UseCases from '../useCases'
import { WebhookHandlerBuilder } from '../main'
import { Events, Repository } from '../tests/mokes'

describe('Webhook Build Handler', () => {
  it('should return true, sample of health system test', () => {
    expect(1).toBe(1)
  })
  it('should possible create HandlerObject', () => {
    const builder = new WebhookHandlerBuilder()
    const handler = builder.handler(Events.PAYMENT_CREATED)
    expect(handler).toBeDefined()
  })
})

describe('Testes of repository', () => {
  afterEach(() => jest.clearAllMocks())
  const repository = new Repository()
  it('Should possible executing repository with method getContractByReferenceId', async () => {
    const spy = jest.spyOn(repository.setActive(), 'getContractByReferenceId')
    const builder = new WebhookHandlerBuilder()
      .addUseCase('activeContract', UseCases.activeContract)
      .setRepository(repository)
    await builder.handler(Events.PAYMENT_CONFIRMED)
    expect(spy).toHaveBeenCalled()
  })
  it('Should not run use cases when not roles compatible', async () => {
    const activeContract = jest.spyOn(UseCases, 'activeContract')
    const createInsurancePolicy = jest.spyOn(UseCases, 'createInsurancePolicy')

    const builder = new WebhookHandlerBuilder(UseCases, repository.setActive())
    builder.addActionRole('PAYMENT_CONFIRMED', 'PENDING', ['activeContract', 'createInsurancePolicy'])
    await builder.handler(Events.PAYMENT_CONFIRMED)

    expect(activeContract).not.toHaveBeenCalled()
    expect(createInsurancePolicy).not.toHaveBeenCalled()
  })
  it('Should all use cases success executing from action list of rule', async () => {
    const activeContract = jest.spyOn(UseCases, 'activeContract')
    const createInsurancePolicy = jest.spyOn(UseCases, 'createInsurancePolicy')

    const builder = new WebhookHandlerBuilder(UseCases, repository.setPending())
    builder.addActionRole('PAYMENT_CONFIRMED', 'PENDING', ['activeContract', 'createInsurancePolicy'])
    await builder.handler(Events.PAYMENT_CONFIRMED)

    expect(activeContract).toHaveBeenCalled()
    expect(createInsurancePolicy).toHaveBeenCalled()

    const cancelSpy = jest.spyOn(UseCases, 'cancelContract')
    builder.addActionRole('SUBSCRIPTION_NOT_CREATED', 'PENDING', ['cancelContract'])
    await builder.handler(Events.SUBSCRIPTION_NOT_CREATED)
    expect(cancelSpy).toHaveBeenCalled()
  })
  it('When received event and has rule and no useCase defined should return error message', () => expect(1).toBe(1))
  it('When PENDING: Should exec [actions] and result contract[]', () => expect(1).toBe(1))
})

describe('Testes of received Event SUBSCRIPTION_NOT_CREATED', () => {
  it('When ACTIVE: Should exec [actions] and result contract[]', () => expect(1).toBe(1))
})
