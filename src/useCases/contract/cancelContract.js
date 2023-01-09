function cancelContract() {
  console.log("Canceling contract...");
  return {
    status: "CANCELED",
    id: "1",
    paymentMethod: "CREDIT_CARD",
    amount: 100,
    currency: "BRL",
    description: "Teste",
    items: [{}],
  };
}

module.exports = cancelContract;
