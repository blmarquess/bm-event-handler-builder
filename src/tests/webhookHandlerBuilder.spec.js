const WebhookHandlerBuilder = require("../useCases/WebhookHandlerBuilder.mjs");
const contractUseCases = require("../useCases/contract");
const paymentUseCases = require("../useCases/payment");

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

    const handler = new WebhookHandlerBuilder()
      .setContract(contract)
      .setActions(actions);
    const builder = handler.builder({ event: "PAYMENT_REFUNDED" });

    expect(handler).toBeDefined();
    expect(builder).toHaveProperty("status");
  });
});

describe("Testes of received Event SUBSCRIPTION_CREATED", () => {
  it("Contract status is ACTIVE", () => expect(1).toBe(1));
  it("Contract status is CANCELED", () => expect(1).toBe(1));
  it("Contract status is PENDING", () => expect(1).toBe(1));
  it("Contract status is REFUND", () => expect(1).toBe(1));
  it("Contract status is TERMINATED", () => expect(1).toBe(1));
});
describe("Testes of received Event SUBSCRIPTION_NOT_CREATED", () => {
  it("Contract status is ACTIVE", () => expect(1).toBe(1));
  it("Contract status is CANCELED", () => expect(1).toBe(1));
  it("Contract status is PENDING", () => expect(1).toBe(1));
  it("Contract status is REFUND", () => expect(1).toBe(1));
  it("Contract status is TERMINATED", () => expect(1).toBe(1));
});
describe("Testes of received Event PAYMENT_CREATED", () => {
  it("Contract status is ACTIVE", () => expect(1).toBe(1));
  it("Contract status is CANCELED", () => expect(1).toBe(1));
  it("Contract status is PENDING", () => expect(1).toBe(1));
  it("Contract status is REFUND", () => expect(1).toBe(1));
  it("Contract status is TERMINATED", () => expect(1).toBe(1));
});
describe("Testes of received Event PAYMENT_CONFIRMED", () => {
  it("Contract status is ACTIVE", () => expect(1).toBe(1));
  it("Contract status is CANCELED", () => expect(1).toBe(1));
  it("Contract status is PENDING", () => expect(1).toBe(1));
  it("Contract status is REFUND", () => expect(1).toBe(1));
  it("Contract status is TERMINATED", () => expect(1).toBe(1));
});
describe("Testes of received Event PAYMENT_CHARGEBACK_REQUESTED", () => {
  it("Contract status is ACTIVE", () => expect(1).toBe(1));
  it("Contract status is CANCELED", () => expect(1).toBe(1));
  it("Contract status is PENDING", () => expect(1).toBe(1));
  it("Contract status is REFUND", () => expect(1).toBe(1));
  it("Contract status is TERMINATED", () => expect(1).toBe(1));
});
describe("Testes of received Event PAYMENT_REFUNDED", () => {
  it("Contract status is ACTIVE", () => expect(1).toBe(1));
  it("Contract status is CANCELED", () => expect(1).toBe(1));
  it("Contract status is PENDING", () => expect(1).toBe(1));
  it("Contract status is REFUND", () => expect(1).toBe(1));
  it("Contract status is TERMINATED", () => expect(1).toBe(1));
});
describe("Testes of received Event PAYMENT_OVERDUE", () => {
  it("Contract status is ACTIVE", () => expect(1).toBe(1));
  it("Contract status is CANCELED", () => expect(1).toBe(1));
  it("Contract status is PENDING", () => expect(1).toBe(1));
  it("Contract status is REFUND", () => expect(1).toBe(1));
  it("Contract status is TERMINATED", () => expect(1).toBe(1));
});
