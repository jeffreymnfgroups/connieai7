'use client';
import { SectionContainer, ViewContainer } from '@/components/layouts';
import { Button, CTAList } from '@/components/ui';

export function CTASection() {
  return (
    <SectionContainer
      id="cta-section"
      className="xl:h-[460px] border-b border-b-neutral-100">
      <ViewContainer>
        <div className="cta-content-wrapper flex flex-col items-center gap-3 -mt-12">
          <h1 className="leading-snug font-bold text-6xl max-lg:text-5xl max-md:text-3xl">
            Transform your meetings into actionable insights
          </h1>
          <p className="text-lg max-md:text-sm">
            Get secure, powerful meeting intelligence in minutes
          </p>
          <CTAList className="mt-6 max-md:flex max-md:flex-row max-md:w-fit max-md:mt-2">
            <Button withArrow variant="gloss" className="md:hidden">
              Start Your Free Trial
            </Button>
            <Button
              withArrow
              size="lg"
              variant="gloss"
              className="max-md:hidden">
              Start Your Free Trial
            </Button>
            <Button
              withArrow
              size="lg"
              variant="secondary"
              className="max-md:hidden">
              Schedule a Demo
            </Button>
          </CTAList>
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}
