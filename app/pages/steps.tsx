import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';
import FaqSection from 'views/PricingPage/FaqSection';
// import PricingTablesSection from 'views/PricingPage/PricingTablesSection';

export default function PricingPage() {
  return (
    <Page title="Steps to Save Yourself from Foreclosure">
      <Wrapper>
        <StepsSection>
          <StepsList>
            <StepItem>Complete this form ADD A LINK to provide us with basic information about your home.</StepItem>
            <StepItem>You will immediately learn if you pre-quality for our program.</StepItem>
            <StepItem>If you pre-qualify, you will receive an email to create an account.</StepItem>
            <StepItem>You'll provide us with a copy of your payoff statement, pictures of your home, and other necessary information.</StepItem>
            <StepItem>Once our team has reviewed your information, we'll send you a contract to sign.</StepItem>
            <StepItem>We'll take care of the title search and other due diligence.</StepItem>
            <StepItem>A closing will be scheduled and we'll sign the final documents.</StepItem>
          </StepsList>
        </StepsSection>

        <FaqSection />
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
  font-size: 2rem;
`;

const StepsTitle = styled.h2`
font-size: 5.2rem;
font-weight: bold;
line-height: 1.1;
letter-spacing: -0.03em;
text-align: center;

${media('<=tablet')} {
  font-size: 4.6rem;
}
`;

const StepsList = styled.ul`
  list-style-type: decimal;
  padding-left: 2rem;
  justify: left;
`;

const StepItem = styled.li`
  margin-bottom: 1rem;
`;
