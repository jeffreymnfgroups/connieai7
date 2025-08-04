'use client';
import { cn } from '@/helpers';
import { SectionContainer, ViewContainer } from '@/components/layouts';
import {
  Button,
  CTAContainer,
  CTADescription,
  CTAHeadline,
  CTAList,
} from '@/components/ui';
import Image from 'next/image';

export interface TestimonialCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  fullName: string;
  avatar: string;
  companyLogo: string;
  designation: string;
  content: string;
}

const TestimonialList: TestimonialCardProps[] = [
  {
    content:
      'CoNNIE AI has transformed our sales process. We never miss follow-ups anymore, and our team saves 3 hours per day on manual CRM updates. The AI insights are incredibly accurate.',
    designation: 'Sales Director',
    fullName: 'Sarah Chen',
    avatar:
      'https://www.stack-ai.com/_next/image?url=%2Fmichaelcarvin.jpeg&w=384&q=75',
    companyLogo:
      'https://www.stack-ai.com/_next/image?url=%2Fsmartasset.png&w=384&q=75',
  },
  {
    content:
      'Since implementing CoNNIE AI, our onboarding success rate increased by 40%. The automated task creation and personalized follow-ups have made our training sessions much more effective.',
    designation: 'HR Manager',
    fullName: 'Marcus Rodriguez',
    avatar:
      'https://www.stack-ai.com/_next/image?url=%2Fyardenshaked.jpeg&w=384&q=75',
    companyLogo: 'https://www.stack-ai.com/varos.svg',
  },
  {
    content:
      'The post-meeting automation is incredible. Our project teams now have instant access to action items and insights. CoNNIE AI has eliminated the chaos that used to follow our client meetings.',
    designation: 'Project Manager',
    fullName: 'Lisa Thompson',
    avatar:
      'https://www.stack-ai.com/_next/image?url=%2Fbrucerasa.jpeg&w=384&q=75',
    companyLogo:
      'https://www.stack-ai.com/_next/image?url=%2Fdexer.webp&w=384&q=75',
  },
  {
    content:
      'CoNNIE AI is like having a personal assistant for every meeting. The CRM integration is seamless, and the AI-generated insights help us focus on what really matters. Game-changing productivity tool.',
    designation: 'VP Sales',
    fullName: 'David Kim',
    avatar:
      'https://www.stack-ai.com/_next/image?url=%2Fdingrinshtein.png&w=384&q=75',
    companyLogo:
      'https://www.stack-ai.com/_next/image?url%2FEmpire%20Media%20Square%20Logo.png&w=384&q=75',
  },
  {
    content:
      "We've reduced our follow-up time from days to minutes. CoNNIE AI's ability to extract key pain points and create personalized follow-ups has significantly improved our client relationships.",
    designation: 'Account Manager',
    fullName: 'Jennifer Park',
    avatar:
      'https://www.stack-ai.com/_next/image?url=%2Fvicentezavarce.avif&w=384&q=75',
    companyLogo:
      'https://www.stack-ai.com/_next/image?url%2Fyummy.png&w=384&q=75',
  },
  {
    content:
      'The meeting intelligence is spot-on. CoNNIE AI captures everything we miss and turns it into actionable next steps. Our team productivity has increased dramatically since we started using it.',
    designation: 'Team Lead',
    fullName: 'Alex Johnson',
    avatar: 'https://www.stack-ai.com/_next/image?url%2Ftsoof.jpeg&w=384&q=75',
    companyLogo:
      'https://www.stack-ai.com/_next/image?url%2FEmpire%20Media%20Square%20Logo.png&w=384&q=75',
  },
  {
    content:
      'CoNNIE AI has streamlined our entire meeting workflow. From transcription to task creation, everything happens automatically. It\'s like having a superhuman assistant for every call.',
    designation: 'Operations Director',
    fullName: 'Rachel Green',
    avatar:
      'https://www.stack-ai.com/_next/image?url%2Ftennison.jpeg&w=384&q=75',
    companyLogo:
      'https://www.stack-ai.com/_next/image?url%2Ftruewind.png&w=384&q=75',
  },
];

export function TestimonialSection() {
  return (
    <SectionContainer id="testimonials" className="relative">
      <ViewContainer className="flex flex-row items-start gap-12 max-lg:grid max-lg:items-center">
        <div className="testimonials-top-layer grid gap-44 items-start justify-around max-lg:flex-col max-xl:items-start max-xl:gap-30 lg:sticky lg:top-36 max-lg:w-fit max-lg:mx-auto">
          <CTAContainer className="">
            <CTAHeadline>Trusted by teams who never miss a key moment</CTAHeadline>
            <CTADescription>
              See how CoNNIE AI is transforming meeting workflows and boosting 
              productivity for sales teams, onboarding specialists, and project managers.
            </CTADescription>
            <CTAList>
              <Button variant="gloss" withArrow size="lg">
                {'Start Your Free Trial'}
              </Button>
            </CTAList>
          </CTAContainer>
          <TestimonialCard {...TestimonialList[0]} className="max-lg:hidden" />
        </div>
        <div className="grid testimonials-bottom-layer-grid-wrapper gap-x-12 gap-y-16 max-lg:w-fit max-lg:mx-auto max-lg:mt-12">
          <TestimonialCard {...TestimonialList[0]} className="lg:hidden" />
          {TestimonialList.map(
            (testimonial: TestimonialCardProps, index: number) => {
              if (index) {
                return <TestimonialCard {...testimonial} key={index} />;
              }
            },
          )}
        </div>
        <CTAList className="lg:hidden">
          <Button size="lg" withArrow>
            Schedule a Demo
          </Button>
        </CTAList>
      </ViewContainer>
    </SectionContainer>
  );
}

function TestimonialCard({
  className,
  content,
  avatar,
  fullName,
  designation,
  companyLogo,
  ...args
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'testimonial-card relative border rounded-3xl py-6 px-10 max-w-[600px]',
        className,
      )}
      {...args}>
      <div className="testimonial-author-details-container flex flex-row items-center justify-between absolute -top-8">
        <div className="author-details-wrapper p-2 bg-white flex flex-row items-center gap-2">
          <Image
            src={avatar}
            alt={fullName}
            className="rounded-full"
            width={40}
            height={40}
            priority
          />
          <div className="author-name-designation-wrapper flex flex-col items-start gap-1">
            <p className="text-sm font-medium">{fullName}</p>
            <p className="text-xs font-medium text-neutral-500">
              {designation}
            </p>
          </div>
        </div>
      </div>
      <div className="testimonial-content-wrapper w-full h-full flex flex-col items-start gap-6 justify-center mt-2">
        <p className="text font-medium">{`\"${content}\"`}</p>
        <div className="author-companyLogo-wrapper w-full flex flex-row items-center justify-end">
          <Image
            src={companyLogo}
            alt="company-logo"
            width={
              fullName === 'Michael Carvin' || fullName === 'Tennison Chan'
                ? 100
                : 60
            }
            height={60}
          />
        </div>
      </div>
    </div>
  );
}
