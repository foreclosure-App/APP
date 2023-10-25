import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked questions</SectionTitle>
      <Accordion title="What is [Your Company Name] and how can you help me?">
      We are a specialized service that helps homeowners avoid foreclosure by paying off the remaining portion of their loan quickly to avoid their bank foreclosuring on their hom. Our team of experts will guide you through the process, offering a hassle-free solution that reduces your stress and anxiety - and saves you from ruining your credit by defaulting on your loan.
      </Accordion>
      <Accordion title="Does everyone qualify?">
      Unfortunetly no. It will depend on the outstanding balance of your loan, the equity you have in your home, its location and condition, and general market trends. 
      </Accordion>
      <Accordion title="How quickly can you buy my home?">
      The timeline can vary depending on various factors such as the condition of your home, its location, and the urgency of the foreclosure process. However, we aim to close deals as quickly as possible, often within 7-14 days.
      </Accordion>
      <Accordion title="Will I have to pay any fees or commissions?">
      There is absolutely no cost to you and we cover all closing costs.
      </Accordion>
      <Accordion title="How do you determine the offer price for my home?">
      Our team will assess the value of your home based on its condition, location, and the current market trends. We aim to offer a fair price that benefits both parties.
      </Accordion>
      <Accordion title="What types of properties do you buy?">
        We buy all types of residential properties, including single-family homes, condos, townhouses, and even vacant land in some cases.
        </Accordion>
        <Accordion title="What if my home is in poor condition?">
        We buy homes in any condition, however, homes in particluarly poor condition do require special consideration and in some cases may disquality the home.
        </Accordion>
        <Accordion title="Do I have to pay for repairs?">
        You don&apos;t need to worry about repairs or renovations; we&apos;ll take care of that. 
        </Accordion>
        <Accordion title="What will your offer be?">
        If your home qualifies, it will be the amount of your outstanding loan. 
        </Accordion>
        <Accordion title="What happens after I agree to sell?">
        Once you accept our offer, we&apos;ll handle all the paperwork and details, coordinating with you to close the sale as quickly as possible.
        </Accordion>
        <Accordion title=" Is my information confidential?">
        Absolutely. We take your privacy very seriously and all information shared with us is confidential.
        </Accordion>
        <Accordion title="How does this differ from my bank foreclosing on my home?">
          Like a foreclosure, you will lose the equity you have in your home. However, unlike a foreclosure, you can avoid the devastating impact to your credit and the inability to buy another home for many years to come.  
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
