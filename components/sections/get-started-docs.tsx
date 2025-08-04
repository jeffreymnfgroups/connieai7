'use client';
import Image from 'next/image';
import {
  ScreenMockup,
  SectionContainer,
  ViewContainer,
} from '@/components/layouts';
import {
  Button,
  CTAContainer,
  CTADescription,
  CTAHeadline,
  CTAList,
  IconContentWrapper,
  IconContentWrapperDescription,
  IconContentWrapperHeadline,
} from '../ui';
import { ReactNode } from 'react';
import { Blocks, Code, Sparkles, Workflow } from 'lucide-react';

type DocsContentBlockType = {
  icon: ReactNode;
  headline: string;
  description: string;
};

const DocsContentBlocks: DocsContentBlockType[] = [
  {
    icon: <Sparkles className="w-4 h-4" />,
    headline: 'Meeting Intelligence',
    description: 'Learn how CoNNIE AI transforms your meetings into actionable insights.',
  },
  {
    icon: <Blocks className="w-4 h-4" />,
    headline: 'Integration Guide',
    description:
      'Set up seamless connections with Zoom, Teams, and your CRM systems.',
  },
  {
    icon: <Workflow className="w-4 h-4" />,
    headline: 'Automation Workflows',
    description: 'Configure automated follow-ups and task creation for your team.',
  },
  {
    icon: <Code className="w-4 h-4" />,
    headline: 'API Documentation',
    description:
      "Integrate CoNNIE AI into your existing applications with our comprehensive API.",
  },
];

export function GetStartedWithDocumentationSection() {
  return (
    <SectionContainer id="get-started-with-docs">
      <ViewContainer className="flex flex-row items-center justify-center gap-24">
        <ScreenMockup className="-ml-[600px]">
          <Image
            src="/media/docs-demo.svg"
            alt="get-started-with-docs-example-screenshot"
            priority
            className="rounded-xl border"
            width={900}
            height={500}
          />
        </ScreenMockup>
        <div className="docs-section-content-wrapper max-lg:flex max-lg:flex-col max-lg:items-center">
          <CTAContainer>
            <CTAHeadline className="lg:w-full">
              Get Started with CoNNIE AI Documentation
            </CTAHeadline>
            <CTADescription className="lg:w-[60ch]">
              Discover the full capabilities of CoNNIE AI by exploring our
              detailed documentation. From meeting intelligence to automation
              workflows, our documentation is your go-to resource for seamless
              integration and harnessing the power of our platform. <br />
              <br />
              Empower your team with CoNNIE AI - the key to unlocking
              limitless possibilities in meeting productivity!
            </CTADescription>
            <CTAList>
              <Button withArrow variant="gloss" size="lg">
                Explore CoNNIE AI Docs
              </Button>
              <Button withArrow variant="secondary" size="lg">
                Contact Us
              </Button>
            </CTAList>
          </CTAContainer>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 mt-12 gap-x-12">
            {DocsContentBlocks.map(
              (block: DocsContentBlockType, index: number) => {
                return (
                  <IconContentWrapper
                    key={index}
                    icon={block.icon}
                    className="lg:w-[340px]">
                    <IconContentWrapperHeadline>
                      {block.headline}
                    </IconContentWrapperHeadline>
                    <IconContentWrapperDescription>
                      {block.description}
                    </IconContentWrapperDescription>
                  </IconContentWrapper>
                );
              },
            )}
          </div>
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}
