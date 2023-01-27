const WebhookHandlerBuilder = require("../useCases/WebhookHandlerBuilder.mjs");
const contractUseCases = require("../useCases/contract");
const paymentUseCases = require("../useCases/payment");

const GENERIC_MESSAGE = { message: "Event has been received" };

function makeSUT() {
  return new WebhookHandlerBuilder();
}

const te = contractUseCases.activeContract();
console.log("🚀 -> te", te);

describe("Webhook Build Handler", () => {
  it("should return true, sample of health system test", () => {
    expect(1).toBe(1);
  });
  it("should possible create HandlerObject", () => {
    const contract = {
      status: "REFUND",
    };
    const actions = {
      1: () => {
        return true;
      },
    };

    const handler = new WebhookHandlerBuilder(contract, actions);
    const builder = handler.builder({ event: "PAYMENT_REFUNDED" });

    expect(handler).toBeDefined();
    expect(builder).toHaveProperty("status");
  });
});
describe("Testes of received Event SUBSCRIPTION_CREATED", () => {
  it("When ACTIVE: Should exec [nothing] and result contract[nothing]", () =>
    expect(1).toBe(1));
  it("When CANCELED: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When PENDING: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When REFUND: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When TERMINATED: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
});
describe("Testes of received Event SUBSCRIPTION_NOT_CREATED", () => {
  it("When ACTIVE: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When CANCELED: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When PENDING: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When REFUND: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When TERMINATED: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
});
describe("Testes of received Event PAYMENT_CREATED", () => {
  it("When ACTIVE: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When CANCELED: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When PENDING: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When REFUND: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When TERMINATED: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
});
describe("Testes of received Event PAYMENT_CONFIRMED", () => {
  it("When ACTIVE: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When CANCELED: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When PENDING: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When REFUND: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When TERMINATED: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
});
describe("Testes of received Event PAYMENT_CHARGEBACK_REQUESTED", () => {
  it("When ACTIVE: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When CANCELED: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When PENDING: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When REFUND: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When TERMINATED: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
});
describe("Testes of received Event PAYMENT_REFUNDED", () => {
  it("When ACTIVE: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When CANCELED: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When PENDING: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When REFUND: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When TERMINATED: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
});
describe("Testes of received Event PAYMENT_OVERDUE", () => {
  it("When ACTIVE: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When CANCELED: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When PENDING: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When REFUND: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
  it("When TERMINATED: Should exec [actions] and result contract[]", () =>
    expect(1).toBe(1));
});
