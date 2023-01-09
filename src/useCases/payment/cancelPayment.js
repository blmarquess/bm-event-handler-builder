function cancelPayment() {
  console.log("Canceling payment...");
  return {
    payment: "CANCELED",
    deleted: true,
  };
}

module.exports = cancelPayment;
