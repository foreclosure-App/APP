import styled from 'styled-components';
import Page from 'components/Page';
import FaqSection from 'views/PricingPage/FaqSection';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';

export default function PricingPage() {
  return (
    <Page title="Pricing" description="Cupidatat et reprehenderit ullamco aute ullamco anim tempor.">
      <Wrapper>
        <PricingTablesSection />
        <FaqSection />

        <StepsSection>
          <StepsTitle>Steps to Sell Your Home to Our Company</StepsTitle>
          <StepsList>
            <StepItem>Step 1: Contact us to schedule a home evaluation.</StepItem>
            <StepItem>Step 2: Our team will visit your home and assess its value.</StepItem>
            <StepItem>Step 3: We will provide you with a fair cash offer for your home.</StepItem>
            <StepItem>Step 4: If you accept the offer, we will proceed with the paperwork.</StepItem>
            <StepItem>Step 5: We will handle all the necessary legal and financial processes.</StepItem>
            <StepItem>Step 6: Once everything is finalized, we will close the deal and purchase your home.</StepItem>
          </StepsList>
        </StepsSection>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const StepsSection = styled.section`
  margin-top: 4rem;
  text-align: center;
  font-size: 1.5rem;
`;

const StepsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const StepsList = styled.ul`
  list-style-type: decimal;
  padding-left: 2rem;
`;

const StepItem = styled.li`
  margin-bottom: 1rem;
`;
