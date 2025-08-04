'use client';
import Image from 'next/image';
import { SectionContainer, ViewContainer } from '@/components/layouts';
import {
  Button,
  CTAContainer,
  CTADescription,
  CTAHeadline,
  CTAList,
} from '@/components/ui';

const CompanyLogoList = [
  'azure',
  'google-cloud',
  'meta',
  'aws',
  'openai',
  'mistral-ai',
  'mosaic',
  'anthropic',
];

export function ModelsUsedSection() {
  return (
    <SectionContainer id="models-from-companies">
      <ViewContainer className="flex flex-row items-center justify-between max-xl:flex-col max-xl:items-start max-xl:gap-12">
        <CTAContainer>
          <CTAHeadline>Powered by Advanced AI Intelligence</CTAHeadline>
          <CTADescription>
            Leverage cutting-edge AI models to transform your meetings into 
            actionable insights. Our platform uses state-of-the-art natural 
            language processing to extract key information and automate follow-ups.
          </CTADescription>
          <CTAList>
            <Button
              size="lg"
              withArrow
              variant="gloss"
              onClick={() =>
                window.open('https://www.stack-ai.com/blog/ai-assistants')
              }>
              Start Your Free Trial
            </Button>
          </CTAList>
        </CTAContainer>
        <div className="companies-logo-list-wrapper grid grid-cols-4 w-fit gap-12 items-center justify-center max-lg:w-fit max-lg:mx-auto max-lg:mt-6 max-md:grid-cols-2">
          {CompanyLogoList.map((logo: string, index: number) => {
            return (
              <Image
                src={`/media/company-logos/${logo}.svg`}
                alt={logo}
                key={index}
                width={logo === 'aws' ? 80 : 120}
                height={60}
                className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"
              />
            );
          })}
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}
