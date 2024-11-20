import React from 'react';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import WordFadeIn from '@/components/ui/word-fade-in';
import { FadeText } from '@/components/ui/fade-text';

const content = [
  {
    title: "Connect to WALNUT Network",
    description:
      "Join our decentralized computing network securely on SUI blockchain, with multi-chain support coming soon. Whether you're a resource provider or user, getting started with WALNUT is simple and straightforward on any blockchain platform.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="/assets/about/how_to_work/login.png"
          className="w-full h-auto object-contain"
          alt="Connect to WALNUT Network"
        />
      </div>
    ),
  },
  {
    title: "Choose Your Role",
    description:
      "Share your idle GPU/CPU resources to earn rewards, or access computational power for your AI and ML tasks. Our smart contract system ensures fair and transparent transactions.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="/assets/about/how_to_work/register_node.png"
          className="w-full h-auto object-contain"
          alt="Choose Your Role in WALNUT"
        />
      </div>
    ),
  },
  {
    title: "Start Computing",
    description:
      "Experience seamless distributed computing power. Whether you're training AI models or running complex calculations, WALNUT's network of providers ensures optimal performance.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="/assets/about/how_to_work/submit_task.png"
          className="w-full h-auto object-contain"
          alt="WALNUT Computing Network"
        />
      </div>
    ),
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 background">
      <div className="container mx-auto">
        <WordFadeIn
          delay={0.25}
          className="text-5xl font-bold adaptive-text text-center mb-8"
          words="HOW IT WORKS"
        />
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <FadeText
            className="text-xl adaptive-text"
            direction="right"
            framerProps={{
              show: { transition: { delay: 0.5, duration: 1 } },
            }}
            text="Built on blockchain technology, WALNUT creates a decentralized marketplace for computing resources. Share your GPU/CPU power or access the computational resources you need for AI training and machine learning tasks through our secure and efficient network."
          />
        </div>
        <StickyScroll content={content} />
      </div>
    </section>
  );
};

export default HowItWorks;