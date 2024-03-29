# Builder for handler event payments

## Description

This package provides a class builder of handlers to receive events and execute jobs from roles registered in this

## how to use

install in project with:

```bach
npm install bm-ev-handler-builder
```

or

```bach
yarn add bm-ev-handler-builder
```

create instance:

```JavaScript
import  { WebhookHandlerBuilder } from 'bm-ev-handler-builder';

const useCases = {
  activeContract: (contract) => ({ ...contract, status: 'ACTIVE'}),
  cancelContract: (contract) => ({ ...contract, status: 'CANCELED'})
  }

const repository = {
  getContractByReferenceId: (referenceId) => contract
  }

const dictRoles = { 'PAYMENT_CONFIRMED': {
  active: [ 'activeContract' ],
  pending: ['cancelContract']
}}

const handlerBuilder = new WebhookHandlerBuilder(useCases, repository, dictRoles);

export handlerBuilder.handler(EventReceived)
```

create instance:

```JavaScript
import  { WebhookHandlerBuilder } from 'bm-ev-handler-builder';

const handlerBuilder = new WebhookHandlerBuilder();
handlerBuilder.setRepository(myRepository)
handlerBuilder.setUseCases(myUseCases)
handlerBuilder.setDictRoles(myRoles)

export handlerBuilder.handler(EventReceived)
```

Has possible to add use cases, repositories, and roles after instance one by one:

```JavaScript
import  { WebhookHandlerBuilder } from 'bm-ev-handler-builder';

const handlerBuilder = new WebhookHandlerBuilder();

// roles
handlerBuilder.addActionRole('PAYMENT_CONFIRMED', 'PENDING', ['activeContract'])
handlerBuilder.addActionRole('PAYMENT_OVERDUE', 'ACTIVE', ['cancelContract'])

// useCases
handlerBuilder.addUseCase('cancelContract', cancelContractFunction)

// export handler to use e route
export handlerBuilder.handler(EventReceived)
```

<div align='center'> <br ><br ><br >
		
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/N4N2DC6XA)
		
</div>
