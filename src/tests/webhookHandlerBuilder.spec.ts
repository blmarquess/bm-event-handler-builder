import UseCases from './mocks/useCases'
import WebhookHandlerBuilder from '../main'
import { Events, Repository, responseMessages } from './mocks'

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
  it('Should possibly add new useCase after adding in constructor', async () => {
    const useCaseSpy = jest.spyOn(UseCases, 'createInsurancePolicy')
    const builder = new WebhookHandlerBuilder({}, repository.setPending())
      .addUseCase('createInsurancePolicy', UseCases.createInsurancePolicy)
      .addActionRole('PAYMENT_CONFIRMED', 'PENDING', ['createInsurancePolicy'])
    await builder.handler(Events.PAYMENT_CONFIRMED)
    expect(builder).toBeDefined()
    expect(useCaseSpy).toHaveBeenCalled()
  })
  it('Should possibly add new repository after new instance class', () => {
    const builder = new WebhookHandlerBuilder({})
    builder.setRepository(repository.setActive())
    expect(builder).toBeDefined()
  })
  it('Should possibly add new repository after adding in constructor', () => {
    const builder = new WebhookHandlerBuilder({}, repository.setActive())
    expect(builder).toBeDefined()
  })
  it('Should possibly add new useCase after new instance class', () => {
    const builder = new WebhookHandlerBuilder({})
    builder.addUseCase('createInsurancePolicy', UseCases.createInsurancePolicy)
    expect(builder).toBeDefined()
  })
  it('Should possibly add new useCase after adding in constructor', () => {
    const builder = new WebhookHandlerBuilder(UseCases)
    expect(builder).toBeDefined()
  })
  it('Should possibly set use cases after new instance class', () => {
    const builder = new WebhookHandlerBuilder({})
    builder.setUseCases(UseCases)
    expect(builder).toBeDefined()
  })
  it('Should possibly add new action role after new instance class', () => {
    const builder = new WebhookHandlerBuilder({})
    builder.addActionRole('PAYMENT_CONFIRMED', 'PENDING', ['activeContract', 'createInsurancePolicy'])
    expect(builder).toBeDefined()
  })
  it('Should possibly add new action role after adding in constructor', () => {
    const builder = new WebhookHandlerBuilder({}, repository.setPending(), {
      PAYMENT_CONFIRMED: {
        PENDING: ['activeContract', 'createInsurancePolicy']
      }
    })
    expect(builder).toBeDefined()
  })
  it('Should possibly set action roles after new instance class', () => {
    const builder = new WebhookHandlerBuilder({})
    builder.setDictRoles({
      PAYMENT_CONFIRMED: {
        PENDING: ['activeContract', 'createInsurancePolicy']
      }
    })
    expect(builder).toBeDefined()
  })
  it('Should possibly add new action role after new instance class', () => {
    const builder = new WebhookHandlerBuilder({}, repository, {
      PAYMENT_CONFIRMED: {
        PENDING: ['activeContract', 'createInsurancePolicy']
      }
    })
    builder.addActionRole('PAYMENT_CONFIRMED', 'PENDING', ['activeContract', 'createInsurancePolicy'])
    expect(builder).toBeDefined()
  })
  it('Should possibly set responses after adding in constructor', async () => {
    const testMessage = { message: 'Not found' }
    const builder = new WebhookHandlerBuilder({})
    builder.setResponse({
      notFound: { message: 'Not found' },
      ok: { message: 'Ok' }
    })
    expect(await builder.handler(Events.PAYMENT_CREATED)).toEqual(testMessage)
  })
})

describe('Testes of failure cases', () => {
  it('Should when received Event and has role and not has useCases corresponding response notFound message', async () => {
    const builder = new WebhookHandlerBuilder({})
    builder.addActionRole('PAYMENT_CONFIRMED', 'PENDING', ['activeContract', 'createInsurancePolicy'])
    expect(await builder.handler(Events.PAYMENT_CONFIRMED)).toEqual(responseMessages.notFound)
  })
  it('Should when received Event and not has role want response notFound message', async () => {
    const builder = new WebhookHandlerBuilder({})
    builder.addActionRole('PAYMENT_CONFIRMED', 'PENDING', ['activeContract', 'createInsurancePolicy'])
    expect(await builder.handler(Events.PAYMENT_CONFIRMED)).toEqual(responseMessages.notFound)
  })
})
