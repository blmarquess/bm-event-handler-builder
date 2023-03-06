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

const productKey = 'productKey'
const useCases = { activeContract: (contract) => { ...contract, status: 'ACTIVE'}}
const repository = { getContractByReferenceId: (id) => contract }
const dictRoles - { 'PAYMENT_CONFIRMED': {
  active: [ 'activeContract' ],
  pending: ['cancelContract']
}}

const handlerBuilder = new WebhookHandlerBuilder({productKey, useCases, repository, dictRoles});

export handlerBuilder.handler(EventReceived)
```

> The product key is required on the constructor. outers properties have possible to "add use cases, repositories, and roles" after instance from setProperty:

create instance:

```TypeScript
import  WebhookHandlerBuilder from 'bm-ev-handler-builder';

const handlerBuilder = new WebhookHandlerBuilder({productKey});
handlerBuilder.setRepository(myRepository)
handlerBuilder.setUseCases(myUseCases)
handlerBuilder.setDictRoles(myRoles)

export handlerBuilder.handler(EventReceived)
```

Has possible to add use cases, repositories, and roles after instance one by one:

```TypeScript
import  WebhookHandlerBuilder from 'bm-ev-handler-builder';

const handlerBuilder = new WebhookHandlerBuilder({productKey});
// roles
handlerBuilder.addActionRole('PAYMENT_CONFIRMED', 'PENDING', ['activeContract'])

// useCases
handlerBuilder.addUseCase('myUseCasesFunctionName', myUseCasesFunction)
handlerBuilder.setDictRoles(myRoles)

export handlerBuilder.handler(EventReceived)
```
