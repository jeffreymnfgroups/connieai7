'use client';
import Link from 'next/link';
import { SectionContainer, ViewContainer } from '@/components/layouts';
import {
  Button,
  CTAContainer,
  CTADescription,
  CTAHeadline,
  CTAList,
  FeatureCard,
  FeatureContentProps,
} from '@/components/ui';

const BasicFeatureList: FeatureContentProps[] = [
  {
    icon: 'no-code',
    title: 'Captures & Analyzes Transcripts',
    description:
      'Auto-processes every sales call, onboarding training, team meeting, or implementation call with real-time transcript capture and AI-driven content analysis.',
  },
  {
    icon: 'prebuilt',
    title: 'Finds the Right CRM Record',
    description:
      'AI matches meeting content to correct account in CRM/micro-CRM with seamless data synchronization and Airtable integration.',
  },
  {
    icon: 'security',
    title: 'Executes Next Steps Instantly',
    description:
      'Project updates, onboarding actions, and sales follow-ups automatically assigned with task creation in project management tools.',
  },
  {
    icon: 'support',
    title: 'Custom Follow-Ups & Personalization',
    description:
      'AI tailors follow-ups based on conversation key pain points with contextual messaging that adapts to discussion context.',
  },
];

export function BasicFeatureSection() {
  return (
    <SectionContainer id="features">
      <ViewContainer className="flex flex-row items-start justify-between max-lg:grid max-lg:gap-24 max-xl:relative">
        <CTAContainer className="max-xl:sticky max-xl:top-12 max-lg:top-0 max-lg:relative">
          <CTAHeadline>End-to-End Meeting Intelligence & Automation</CTAHeadline>
          <CTADescription>
            This isn't just meeting transcription—it's complete execution automation. 
            CoNNIE AI transforms your meetings into clear, actionable insights—so you 
            never miss a key moment again.
          </CTADescription>
          <CTAList>
            <Link href="#features-bento" className="grid">
              <Button size="lg" withArrow>
                Experience CoNNIE AI
              </Button>
            </Link>
          </CTAList>
        </CTAContainer>
        <div className="feature-content-grid grid grid-cols-2 items-start gap-12 max-xl:grid-cols-1 max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:w-fit max-lg:mx-auto">
          {BasicFeatureList.map(
            (feature: FeatureContentProps, index: number) => {
              return <FeatureCard {...feature} key={index} />;
            },
          )}
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}
