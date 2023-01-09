function activeContract() {
  console.log("Activating contract...");
  return {
    id: "1",
    status: "ACTIVE",
    paymentMethod: "CREDIT_CARD",
    amount: 100,
    currency: "BRL",
    description: "Teste",
    items: [{}],
  };
}

module.exports = activeContract;
