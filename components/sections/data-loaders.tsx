'use client';
import { SectionContainer, ViewContainer } from '@/components/layouts';
import { CTAContainer, CTADescription, CTAHeadline } from '@/components/ui';
import { AppsConnectedUsableExample } from '@/components/ui/usables';

export function DataLoadersSection() {
  return (
    <SectionContainer id="data-loaders">
      <ViewContainer className="flex flex-row-reverse items-center justify-around max-lg:flex-col max-xl:items-center max-xl:gap-12">
        <CTAContainer>
          <CTAHeadline>Integrate with your existing workflow...</CTAHeadline>
          <CTADescription>
            Seamlessly connect to your meeting platforms and CRM systems using our 
            suite of integrations with popular tools such as <b>Zoom</b>,{' '}
            <b>Microsoft Teams</b>, <b>Airtable</b>, <b>Slack</b>, <b>Notion</b>,
            and many more...
          </CTADescription>
          <CTADescription>
            Power your meeting intelligence with advanced AI algorithms to extract
            the most relevant insights and action items for your team.
          </CTADescription>
        </CTAContainer>
        <AppsConnectedUsableExample />
      </ViewContainer>
    </SectionContainer>
  );
}
