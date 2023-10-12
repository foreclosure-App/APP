import styled from 'styled-components';
import ForeclosureCalculator from '/components/ForeclosureCalculator';
import Page from '/components/Page';
import FaqSection from '/views/PricingPage/FaqSection';

export default function PricingPage() {
  return (
    <Page title="Calculator" description="Cupidatat et reprehenderit ullamco aute ullamco anim tempor.">
      <Wrapper>
        <ForeclosureCalculator />
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
