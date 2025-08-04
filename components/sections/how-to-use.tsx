'use client';
import { cn } from '@/helpers';
import { SectionContainer, ViewContainer } from '@/components/layouts';
import {
  CTAContainer,
  CTADescription,
  CTAHeadline,
  FeatureCard,
  FeatureContentProps,
  FeatureIcon,
} from '@/components/ui';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export type StepType = 'build' | 'export' | 'logs' | 'manage';

const HowToUseStepsList: Array<FeatureContentProps & { option: StepType }> = [
  {
    option: 'build',
    icon: 'no-code',
    title: 'Meeting Connection',
    description:
      'Automatically connects to Zoom or Teams meetings for seamless integration.',
  },
  {
    option: 'export',
    icon: 'export',
    title: 'Real-Time Processing',
    description:
      'Captures and transcribes conversations accurately with AI-driven analysis.',
  },
  {
    option: 'logs',
    icon: 'stats',
    title: 'AI Analysis & CRM Integration',
    description:
      "Reviews transcripts for key points, pain areas, action items and matches meeting details with existing records.",
  },
  {
    option: 'manage',
    icon: 'support',
    title: 'Action Assignment & Execution',
    description:
      'Creates tasks, sends personalized notifications, and crafts customized follow-ups addressing specific concerns.',
  },
];

export function HowToUseSection() {
  const [step, setStep] = useState<StepType>('build');
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.document.body.clientWidth);
    };
    // Initial update for screen-width
    updateScreenWidth();
    // Event listener for window resize
    window.addEventListener('resize', updateScreenWidth);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SectionContainer id="how-to-use" className="bg-black">
      <ViewContainer className="max-lg:grid">
        <CTAContainer>
          <CTAHeadline sectionTheme="dark">
            How CoNNIE AI Works - Step-by-Step Process
          </CTAHeadline>
          <CTADescription sectionTheme="dark">
            From meeting connection to automated execution, CoNNIE AI handles the entire 
            post-meeting workflow so you can focus on what matters most.
          </CTADescription>
        </CTAContainer>
        <div className="how-to-use-steps-content-container mt-12 flex flex-row items-center justify-between max-xl:flex-col-reverse max-xl:gap-12 gap-6">
          <div className="how-to-use-steps-list-wrapper flex flex-col gap-4 items-start max-xl:grid max-xl:grid-cols-2 max-xl:gap-12 max-lg:hidden max-lg:mt-12 max-lg:w-fit max-lg:mx-auto">
            {HowToUseStepsList.map(
              (
                stepItem: FeatureContentProps & { option: StepType },
                index: number,
              ) => {
                return (
                  <motion.div
                    className={cn(
                      'step-button p-4 rounded-3xl cursor-pointer pr-24 select-none max-lg:w-fit max-lg:pr-4',
                      step === stepItem.option && 'bg-neutral-900',
                      step !== stepItem.option && 'hover:bg-neutral-950',
                    )}
                    onClick={() => {
                      setStep(stepItem.option);
                    }}
                    whileHover={{
                      x: screenWidth > 1030 ? 6 : 0,
                    }}
                    transition={{
                      type: 'spring',
                      bounce: 0.65,
                    }}
                    key={index}>
                    <FeatureCard
                      {...stepItem}
                      direction="horizontal"
                      sectionTheme="dark"
                    />
                  </motion.div>
                );
              },
            )}
          </div>
          <div className="how-to-use-steps-list-wrapper flex-row items-center justify-center gap-4 hidden max-lg:flex w-full">
            {HowToUseStepsList.map(
              (
                stepItem: FeatureContentProps & { option: StepType },
                index: number,
              ) => {
                return (
                  <button
                    key={index}
                    className={cn(
                      'flex flex-col items-center gap-3 cursor-pointer select-none hover:brightness-100',
                    )}
                    onClick={() => setStep(stepItem.option)}>
                    <FeatureIcon
                      icon={stepItem.icon}
                      className="w-16 h-16 hover:scale-95 transition-all active:scale-90"
                    />
                    <p
                      className={cn(
                        'text-white',
                        step === stepItem.option && 'text-blue-500',
                      )}>
                      {stepItem.title}
                    </p>
                  </button>
                );
              },
            )}
          </div>
          <div className="step-content-video-wrapper w-fit bg-gradient-to-b from-neutral-100 to-white flex flex-row items-center justify-center p-8 rounded-xl h-auto shadow-inner">
            {step === 'build' && (
              <video
                width="600"
                height="300"
                autoPlay
                loop
                muted
                className="shadow-xl rounded-lg"
                onError={(e) =>
                  console.error(
                    'video in how-to-use section is not rendering',
                    e,
                  )
                }>
                <source
                  src={`/media/videos/build-tab.webm`}
                  type="video/webm"
                />
              </video>
            )}
            {step === 'export' && (
              <video
                width="600"
                height="300"
                autoPlay
                loop
                muted
                className="shadow-xl rounded-lg"
                onError={(e) =>
                  console.error(
                    'video in how-to-use section is not rendering',
                    e,
                  )
                }>
                <source
                  src={`/media/videos/export-tab.webm`}
                  type="video/webm"
                />
              </video>
            )}
            {step === 'logs' && (
              <video
                width="600"
                height="300"
                autoPlay
                loop
                muted
                className="shadow-xl rounded-lg"
                onError={(e) =>
                  console.error(
                    'video in how-to-use section is not rendering',
                    e,
                  )
                }>
                <source src={`/media/videos/logs-tab.webm`} type="video/webm" />
              </video>
            )}
            {step === 'manage' && (
              <video
                width="600"
                height="300"
                autoPlay
                loop
                muted
                className="shadow-xl rounded-lg"
                onError={(e) =>
                  console.error(
                    'video in how-to-use section is not rendering',
                    e,
                  )
                }>
                <source
                  src={`/media/videos/manager-tab.webm`}
                  type="video/webm"
                />
              </video>
            )}
          </div>
        </div>
      </ViewContainer>
    </SectionContainer>
  );
}
