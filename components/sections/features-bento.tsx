'use client';
import { SectionContainer, ViewContainer } from '@/components/layouts';
import {
  AnalyseReportsUsableExample,
  AnalyseWebsiteUsableExample,
  UsageOptionsUsableExample,
} from '@/components/ui/usables';

export function FeaturesBento() {
  return (
    <SectionContainer id="features-bento">
      <ViewContainer>
        <div>
          <h2 className="font-bold text-center text-6xl max-lg:text-4xl max-md:text-3xl">
            The Post-Meeting Chaos <br />
            Ends Here
          </h2>
          <p className="text-center text-neutral-500 mt-8">
            Meeting notes scattered across different tools, follow-ups getting delayed or forgotten, 
            key insights slipping through the cracks, and manual CRM updates eating up valuable time.
          </p>
        </div>
        <div className="mt-24 grid grid-cols-3 gap-6 max-xl:grid-cols-2 max-lg:grid-cols-1 max-xl:gap-12 max-lg:w-fit max-lg:mx-auto max-lg:gap-6">
          <AnalyseWebsiteUsableExample />
          <AnalyseReportsUsableExample />
          <UsageOptionsUsableExample />
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}
