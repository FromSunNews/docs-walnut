import React from 'react';
import TextRevealByWord from '@/components/ui/text-reveal';
import { useTheme } from 'nextra-theme-docs';
import { SparklesCore } from '@/components/ui/sparkles';
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconApps,
  IconCloud,
  IconCurrencyDollar,
  IconDeviceGamepad2,
  IconDeviceLaptop,
  IconDevices,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconPlayerPlay,
  IconRotate,
  IconRouteAltLeft,
  IconTerminal2,
  IconWorld,
} from "@tabler/icons-react";
import BlurFade from '@/components/ui/blur-fade';

const features = [
  {
    title: "Decentralized Computing Power",
    description:
      "Access distributed GPU and CPU resources from a global network of providers for your computational needs.",
    icon: <IconCloud />,
  },
  {
    title: "AI & ML Optimization",
    description:
      "Perfect for training AI models, machine learning tasks, and other compute-intensive operations.",
    icon: <IconAdjustmentsBolt />,
  },
  {
    title: "Earn by Sharing",
    description:
      "Monetize your idle computing resources by sharing them with users who need additional processing power.",
    icon: <IconCurrencyDollar />,
  },
  {
    title: "Global Network",
    description: "Connect with computing resources worldwide through our decentralized infrastructure.",
    icon: <IconWorld />,
  },
  {
    title: "Multi-Device Support",
    description: "Access computational resources from any device, anywhere in the world.",
    icon: <IconDevices />,
  },
  {
    title: "Real-time Scaling",
    description:
      "Scale your computing power up or down instantly based on your project needs.",
    icon: <IconEaseInOut />,
  },
  {
    title: "Secure Processing",
    description:
      "Enterprise-grade security for all computational tasks with blockchain-based verification.",
    icon: <IconTerminal2 />,
  },
  {
    title: "Resource Optimization",
    description: "Smart allocation of computing resources ensures maximum efficiency and performance.",
    icon: <IconRotate />,
  },
];

const KeyFeatureSection: React.FC = () => {
  return (
    <section className="py-20 mb-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center relative z-10 mx-auto h-56">
          <TextRevealByWord
            text="THE FEATURES"
            className="flex items-center justify-center text-5xl font-extrabold adaptive-text"
          />
          <div className="w-[45rem] h-40 -mt-6 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
        </div>

        <div className="-mt-20 w-full dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <BlurFade delay={0.25} duration={0.75} inView>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default KeyFeatureSection;
