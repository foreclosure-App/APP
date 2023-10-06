import React, { useState } from 'react';

function ForeclosureCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [remainingBalance, setRemainingBalance] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform calculation
    const calculatedTotalInterest = (loanAmount * interestRate * loanTerm) / 100;
    const calculatedTotalPayment = parseFloat(loanAmount) + calculatedTotalInterest;
    const calculatedRemainingBalance = calculatedTotalPayment - (monthlyPayment * loanTerm);

    // Update state with calculated values
    setTotalInterest(calculatedTotalInterest);
    setTotalPayment(calculatedTotalPayment);
    setRemainingBalance(calculatedRemainingBalance);
  };

  return (
    <div>
      <h1>Foreclosure Calculator</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="loan-amount">Loan Amount:</label>
        <input
          type="number"
          id="loan-amount"
          name="loan-amount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          required
        />

        <label htmlFor="interest-rate">Interest Rate:</label>
        <input
          type="number"
          id="interest-rate"
          name="interest-rate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          required
        />

        <label htmlFor="loan-term">Loan Term (in years):</label>
        <input
          type="number"
          id="loan-term"
          name="loan-term"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          required
        />

        <label htmlFor="monthly-payment">Monthly Payment:</label>
        <input
          type="number"
          id="monthly-payment"
          name="monthly-payment"
          value={monthlyPayment}
          onChange={(e) => setMonthlyPayment(e.target.value)}
          required
        />

        <button type="submit">Calculate</button>
      </form>

      <div id="foreclosure-result">
        <p>Total Interest: ${totalInterest.toFixed(2)}</p>
        <p>Total Payment: ${totalPayment.toFixed(2)}</p>
        <p>Remaining Balance: ${remainingBalance.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ForeclosureCalculator;
