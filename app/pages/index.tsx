import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Image from "next/legacy/image";
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';


import homepic from '../images/rowan-home.png'


export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          
          <BasicSection imageUrl={homepic} title="Trust is critical." overTitle="Why Trust Us?">
            <p>
            With compassion and an understanding of the distress foreclosure brings, we provide a <strong>zero-risk solution</strong> by settling the mortgage for homeowners with equity and absorbing all closing and associated costs, making the process stress-free and straight forward.{' '}
            </p>
          </BasicSection>
          <BasicSection imageUrl={homepic} title="How We Can Help." overTitle="Help is at hand" reversed>
            <p>
            We extend a helping hand to individuals facing foreclosure, ensuring a smooth transition while preserving their financial stability. Our services are tailored to meet the unique needs of each client, offering a holistic approach to overcoming the challenges of foreclosure. Here’s how we can help:
            </p>
            <ul>
              <li><strong>Free Consultation:</strong> Speak with our foreclosure specialists to understand your options.</li>
              <li><strong>Legal Support:</strong> Our network of local attorneys will ensure a fully transparent and and well thought out strategy.</li>
              <li><strong>Financial Consultation:</strong> If there is a chance you can avoid losing your home, we want to help by looking at key ways to manage your finances better.</li>
                <li><strong>Negotiation with Lenders:</strong> We&apos;ll talk to your lenders to negotiate terms and stop the foreclosure process.</li>
                <li><strong>Quick Sale Options:</strong> We are able to move far faster than banks so you&apos;ll be out of trouble within a week or two.</li>
            </ul>
          </BasicSection>
          <BasicSection imageUrl={homepic} title="Your Path to Financial Freedom Starts Here" overTitle="Freedom">
            <p>
            We sympathize with your situation and know the stress and pain your going through. While there is no magic pill that will make it all go away, we can help you get your life back on track by avoiding the devastating negative affects that a foreclosure with have on your credit and future buying power.
            </p>
          </BasicSection>
          <BasicSection imageUrl={homepic} title="There may Still be Hope." overTitle="Knowledge is power" reversed>
            <p>
            Before doing anything, we recommend going through our knowledge center with resources designed to educate you on every aspect of your financial situation.{' '}
              <strong>Knowledge is power</strong>,  and we aim to empower you to make the best decisions for your future.
            </p>
            <ul>
            <ul><Link href="/help-center">Help Center</Link> </ul>
            </ul>
          </BasicSection>
          <BasicSection imageUrl={homepic} title="Get Started Today" overTitle="Start now">
            <p>
            {' '}
              Ready to get started? Complete our 2 minute application to instantly see if you quality.
              <ul><Link href="/contact">Contact us</Link> 
              </ul>
            </p>
          </BasicSection>
          
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
