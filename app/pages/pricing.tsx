import React from 'react';
import styled from 'styled-components';

const PricingWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const PricingTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const PricingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ItemName = styled.span`
  font-weight: bold;
`;

const ItemPrice = styled.span`
  color: #007bff;
`;

function Pricing() {
  return (
    <PricingWrapper>
      <PricingTitle>Pricing</PricingTitle>

      <PricingItem>
        <ItemName>Basic Plan</ItemName>
        <ItemPrice>$9.99/month</ItemPrice>
      </PricingItem>

      <PricingItem>
        <ItemName>Pro Plan</ItemName>
        <ItemPrice>$19.99/month</ItemPrice>
      </PricingItem>

      <PricingItem>
        <ItemName>Premium Plan</ItemName>
        <ItemPrice>$29.99/month</ItemPrice>
      </PricingItem>
    </PricingWrapper>
  );
}

export default Pricing;
