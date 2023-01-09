class WebhookHandlerBuilder {
  #contract;
  #actions;
  #event;
  #result = {
    status: true,
    message: "Event has been received",
    event: this.#event,
  };
  constructor() {}

  setContract(contract) {
    this.#contract = contract;
    return this;
  }

  setActions(actions) {
    this.#actions = actions;
    return this;
  }

  setEvent(event) {
    this.#event = event;
    return this;
  }

  builder(paymentEvent) {
    this.#event = paymentEvent;
    return this.#result;
  }
}

module.exports = WebhookHandlerBuilder;
