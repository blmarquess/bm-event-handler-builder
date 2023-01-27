class WebhookHandlerBuilder {
  #contract;
  #actions;
  #event;
  #result = {
    status: true,
    message: "Event has been received",
    event: this.#event,
  };
  constructor(contract, event, actions) {
    this.#contract = contract;
    this.#event = event;
    this.#actions = actions;
  }

  setContract(contract) {
    this.#contract = contract;
    return this;
  }

  #makeBuilder() {}

  builder(paymentEvent) {
    this.#event = paymentEvent;
    return this.#result;
  }
}

module.exports = WebhookHandlerBuilder;
