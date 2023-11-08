import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Rapid Home Purchase Process',
    description:
      'Close quickly, avoid foreclosure stress. We streamline home sales, ensuring a fast, efficient process to relieve your financial burden swiftly.',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'No Fees or Commissions',
    description:
      'Save money with zero extra costs. Our service requires no fees or commissions, ensuring you get the full offer amount without deductions.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Fair Market Value Offers',
    description:
      'Receive honest, competitive home offers. We evaluate your property thoroughly to present an offer that reflects fair market value.',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Buy Homes As-Is',
    description:
      "Sell your home in any condition. Don't worry about repairs or renovations; we purchase your property exactly as it stands.",
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Personalized Service Approach',
    description:
      'Tailored assistance for individual needs. Our experts provide personalized solutions, considering your unique situation for the best outcome.',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Legalities and Paperwork Handled',
    description:
      'We manage all legal paperwork. From legal work to documentation, we handle everything, simplifying the sale process for you.',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Immediate Financial Relief',
    description:
      'Quickly alleviate mortgage payment pressures. Our process is designed to provide immediate relief from mortgage obligations and financial strain.',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Transparent Communication',
    description:
      "Honesty and clarity from start. We maintain open, transparent communication throughout, ensuring you're informed every step of the way.",
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: ' Post-Sale Support',
    description: "Guidance continues after home sale. Our relationship doesn't end at the sale; we offer support to help you move forward.",
  },
];

export default function FeaturesPage() {
  return (
    <Page title="Features" description="Elit aute do nisi Lorem id ea culpa sint duis eu tempor dolore elit.">
      <Wrapper>
        <SectionTitle>Check out this quick introduction</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" />
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
