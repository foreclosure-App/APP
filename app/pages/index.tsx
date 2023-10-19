import Image from 'next/image';
import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
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
            We understand that facing foreclosure is overwhelming. The stress, the uncertainty, the feeling that youre running out of options.{' '}
              <Link href="/help-center">cool link</Link> But take a deep breath. Youve come to the right place.
            </p>
          </BasicSection>
          <BasicSection imageUrl={homepic} title="How We Can Help" overTitle="lorem ipsum" reversed>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quidem error incidunt a doloremque voluptatem porro inventore{' '}
              <strong>voluptate quo deleniti animi laboriosam</strong>. Possimus ullam velit rem itaque consectetur, in distinctio?
            </p>
            <ul>
              <li>Free Consultation: Speak with our foreclosure specialists to understand your options.</li>
              <li>Legal Support: Our network of attorneys will guide you through the legal maze.</li>
              <li>Financial Planning: Customized plans to help you manage your finances better.</li>
              <li>Negotiation with Lenders: We'll talk to your lenders to negotiate terms that work for you.</li>
              <li>Quick Sale Options: If needed, we can help you sell your home quickly to avoid foreclosure.</li>
            </ul>
          </BasicSection>
          <BasicSection imageUrl={homepic} title="Your Path to Financial Freedom Starts Here" overTitle="Freedom">
            <p>
            Your Path to Financial Freedom Starts Here{' '}
              <Link href="/help-center">cool link</Link> Our step-by-step guides, FAQs, and resources are designed to educate you on every aspect of foreclosure. Knowledge is power, and we aim to empower you to make the best decisions for your future.
            </p>
          </BasicSection>
          <BasicSection imageUrl={homepic} title="How We Can Help" overTitle="lorem ipsum" reversed>
            <p>
            Our step-by-step guides, FAQs, and resources are designed to educate you on every aspect of foreclosure.{' '}
              <strong>Knowledge is power,</strong>.  and we aim to empower you to make the best decisions for your future.
            </p>
            <ul>
            <ul><Link href="/help-center">How to Avoid Foreclosure</Link> </ul>
            <ul><Link href="/help-center">Understanding Your Finances</Link> </ul>
            <ul><Link href="/help-center">Legal Procedures Explained</Link> </ul>
            </ul>
          </BasicSection>
          <BasicSection imageUrl={homepic} title="Get Started Today" overTitle="Start now">
            <p>
            {' '}
              <Link href="/contact">Contact us</Link> 
            </p>
          </BasicSection>
          <BasicSection imageUrl={homepic} title="Transparent and Upfront" overTitle="Transparent" reversed>
            <p>
            We believe in complete transparency. {' '}
              <strong>ALL</strong> fees and processes will be explained upfront, so there are no surprises. Your trust is our most valuable asset.
            </p>
            <ul>
            </ul>
          </BasicSection>
          <BasicSection imageUrl={homepic} title="We're Here for You" overTitle="You">
            <p>
            Our support doesn&apost end once you&aposve avoided foreclosure. {' '}
            We offer ongoing financial planning and support to ensure you never find yourself in this situation again.
            </p>
          </BasicSection>
          <BasicSection imageUrl={homepic} title="Contact Information" overTitle="Contact" reversed>
            <p>
            Our step-by-step guides, FAQs, and resources are designed to educate you on every aspect of foreclosure.{' '}
              <strong>Knowledge is power,</strong>.  and we aim to empower you to make the best decisions for your future.
            </p>
            <ul>
            <ul><Link href="/contact">Phone: [Your Phone Number]</Link> </ul>
            <ul><Link href="/contact">Email: [Your Email Address]</Link> </ul>
            <ul><Link href="/contact">Address: [Your Office Address]</Link> </ul>
            </ul>
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
