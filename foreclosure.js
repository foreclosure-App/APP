document.getElementById("foreclosure-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form values
  var loanAmount = parseFloat(document.getElementById("loan-amount").value);
  var interestRate = parseFloat(document.getElementById("interest-rate").value);
  var loanTerm = parseFloat(document.getElementById("loan-term").value);
  var monthlyPayment = parseFloat(document.getElementById("monthly-payment").value);

  // Perform calculation
  var totalInterest = (loanAmount * interestRate * loanTerm) / 100;
  var totalPayment = loanAmount + totalInterest;
  var remainingBalance = totalPayment - (monthlyPayment * loanTerm);

  // Display result
  var resultElement = document.getElementById("foreclosure-result");
  resultElement.innerHTML = "Total Interest: $" + totalInterest.toFixed(2) + "<br>";
  resultElement.innerHTML += "Total Payment: $" + totalPayment.toFixed(2) + "<br>";
  resultElement.innerHTML += "Remaining Balance: $" + remainingBalance.toFixed(2);
});
