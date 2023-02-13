# Builder for handler event payments

## Description

This package provides a class builder of handlers to receive events and execute jobs from roles registered in this

## how to use

install in project with:

```bach
npm install bm-ev-handler-builder
```

create instance:

```TypeScript
import  WebhookHandlerBuilder from 'bm-ev-handler-builder';

const useCases = { activeContract: (contract) => { ...contract, status: 'ACTIVE'}}
const repository = { getContractByReferenceId: (id) => contract }
const dictRoles - { 'PAYMENT_CONFIRMED': {
  active: [ 'activeContract' ],
  pending: ['cancelContract']
}}


const handlerBuilder = new WebhookHandlerBuilder(useCases, repository, dictRoles);

export handlerBuilder.handler(EventReceived)
```

Has possible to add use cases, repositories, and roles after instance from set:

create instance:

```TypeScript
import  WebhookHandlerBuilder from 'bm-ev-handler-builder';

const handlerBuilder = new WebhookHandlerBuilder();
handlerBuilder.setRepository(myRepository)
handlerBuilder.setUseCases(myUseCases)
handlerBuilder.setDictRoles(myRoles)

export handlerBuilder.handler(EventReceived)
```

Has possible to add use cases, repositories, and roles after instance one by one:

```TypeScript
import  WebhookHandlerBuilder from 'bm-ev-handler-builder';

const handlerBuilder = new WebhookHandlerBuilder();
// roles
handlerBuilder..addActionRole('PAYMENT_CONFIRMED', 'PENDING', ['activeContract'])

// useCases
handlerBuilder.addUseCase('myUseCasesFunctionName', myUseCasesFunction)
handlerBuilder.setDictRoles(myRoles)

export handlerBuilder.handler(EventReceived)
```
