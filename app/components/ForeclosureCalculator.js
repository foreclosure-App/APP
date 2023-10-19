import React, { useState } from 'react';
import styled from 'styled-components';

const ForeclosureCalculatorWrapper = styled.div`
  max-width: 800px; /* Updated max-width */
  margin: 0 auto;
  padding: 60px; /* Updated padding */
  border: 2px solid #ccc; /* Updated border */
  border-radius: 8px; /* Updated border-radius */
`;

const CalculatorTitle = styled.h1`
  text-align: center;
  margin-bottom: 30px; /* Updated margin-bottom */
  font-size: 28px; /* Updated font-size */
`;

const FormGroup = styled.div`
  margin-bottom: 20px; /* Updated margin-bottom */
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px; /* Updated margin-bottom */
  font-size: 18px; /* Updated font-size */
`;

const Input = styled.input`
  width: 100%;
  padding: 10px; /* Updated padding */
  border: 1px solid #ccc;
  border-radius: 5px; /* Updated border-radius */
`;

const CalculateButton = styled.button`
  display: block;
  width: 100%;
  padding: 15px; /* Updated padding */
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px; /* Updated border-radius */
  cursor: pointer;
`;

const ResultContainer = styled.div`
  margin-top: 30px; /* Updated margin-top */
`;

const ResultItem = styled.p`
  margin-bottom: 10px; /* Updated margin-bottom */
  font-size: 18px; /* Updated font-size */
`;

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
    <ForeclosureCalculatorWrapper>
      <CalculatorTitle>Foreclosure Calculator</CalculatorTitle>

      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="loan-amount">Loan Amount:</Label>
          <Input
            type="number"
            id="loan-amount"
            name="loan-amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="interest-rate">Interest Rate:</Label>
          <Input
            type="number"
            id="interest-rate"
            name="interest-rate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="loan-term">Loan Term (in years):</Label>
          <Input
            type="number"
            id="loan-term"
            name="loan-term"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="monthly-payment">Monthly Payment:</Label>
          <Input
            type="number"
            id="monthly-payment"
            name="monthly-payment"
            value={monthlyPayment}
            onChange={(e) => setMonthlyPayment(e.target.value)}
            required
          />
        </FormGroup>

        <CalculateButton type="submit">Calculate</CalculateButton>
      </form>

      <ResultContainer>
        <ResultItem>Total Interest: ${totalInterest.toFixed(2)}</ResultItem>
        <ResultItem>Total Payment: ${totalPayment.toFixed(2)}</ResultItem>
        <ResultItem>Remaining Balance: ${remainingBalance.toFixed(2)}</ResultItem>
      </ResultContainer>
    </ForeclosureCalculatorWrapper>
  );
}

export default ForeclosureCalculator;
