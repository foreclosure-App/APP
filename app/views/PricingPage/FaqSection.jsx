import styled from 'styled-components';
import Accordion from '/components/Accordion';
import SectionTitle from '/components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="What is [Your Company Name] and how can you help me?">
      We are a specialized service that helps homeowners avoid foreclosure by purchasing their homes quickly. Our team of experts will guide you through the process, offering a hassle-free solution to your urgent property concerns.
      </Accordion>
      <Accordion title=" How quickly can you buy my home?">
      The timeline can vary depending on various factors such as the condition of your home, its location, and the urgency of the foreclosure process. However, we aim to close deals as quickly as possible, often within 7-14 days.
      </Accordion>
      <Accordion title="Will I have to pay any fees or commissions?">
      We pride ourselves on transparency. All fees and processes will be clearly explained upfront. Generally, we cover the closing costs and there are no commissions involved since we are not acting as realtors but as direct buyers.
      </Accordion>
      <Accordion title="How do you determine the offer price for my home?">
      Our team will assess the value of your home based on its condition, location, and the current market trends. We aim to offer a fair price that benefits both parties.
      </Accordion>
      <Accordion title="What types of properties do you buy?">
        We buy all types of residential properties, including single-family homes, condos, townhouses, and even vacant land in some cases.
        </Accordion>
        <Accordion title="What if my home is in poor condition?">
        We buy homes in any condition. You don&apos;t need to worry about repairs or renovations; we&apos;ll take care of that.
        </Accordion>
        <Accordion title=" Do I have to accept your offer?">
        No, our offer is obligation-free. You are free to consider other options if you feel our offer doesn&apos;t meet your needs.
        </Accordion>
        <Accordion title="What happens after I agree to sell?">
        Once you accept our offer, we&apos;ll handle all the paperwork and details, coordinating with you to close the sale as quickly as possible.
        </Accordion>
        <Accordion title=" Is my information confidential?">
        Absolutely. We take your privacy very seriously and all information shared with us is confidential.
        </Accordion>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
