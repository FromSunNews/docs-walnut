import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion/Accordion"
import { BackgroundBeams } from '@/components/ui/background-beams';
import { MagicCard } from '@/components/ui/magic-card';
import { useTheme } from 'nextra-theme-docs';
import BlurFade from '@/components/ui/blur-fade';

const faqItems = [
  {
    question: "How can I share my computing resources?",
    answer: "To become a resource provider on WALNUT, simply register your node, specify your GPU/CPU specifications, and set your pricing. Our platform will automatically connect you with users who need computing power."
  },
  {
    question: "How do I earn rewards for sharing?",
    answer: "Providers earn WALNUT tokens based on their resource contribution and usage time. Rewards are automatically distributed through smart contracts, with payments processed in real-time as users utilize your computing power."
  },
  {
    question: "What types of computational tasks are supported?",
    answer: "WALNUT supports a wide range of computational tasks including AI model training, machine learning operations, data processing, and other GPU/CPU intensive workloads. Our network automatically matches tasks with appropriate resources."
  },
  {
    question: "How is security maintained?",
    answer: "We implement multiple security layers including blockchain verification, encrypted data transmission, and secure containerization for all computational tasks. Each process runs in isolation to ensure data privacy and system integrity."
  },
  {
    question: "What are the minimum hardware requirements for providers?",
    answer: "Resource providers should have modern GPU/CPU hardware with reliable internet connectivity. We recommend at least 16GB RAM, recent generation GPU (for GPU providers), and stable broadband connection for optimal performance."
  },
  {
    question: "How is pricing determined?",
    answer: "Pricing is market-driven, with providers setting their base rates. Our dynamic pricing algorithm adjusts rates based on demand, computational power, and network conditions to ensure fair compensation for providers and value for users."
  }
];

const FAQSection: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="py-20 background relative overflow-hidden">
      <BackgroundBeams />
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-5xl font-bold text-center mb-12 adaptive-text">
          FAQ
        </div>

        <Accordion type="single" collapsible className="space-y-6">
          {faqItems.map((item, index) => (
            <BlurFade key={index} inView delay={0.25 * index} yOffset={10}>
              <AccordionItem value={`item-${index}`}>
                {theme === "dark" ? (
                  <MagicCard gradientOpacity={1} className='shadow-lg flex flex-col justify-stretch'>
                    <AccordionTrigger
                      className="px-6 pb-5 text-lg font-semibold adaptive-text transition-all"
                    >
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent
                      className="px-6 pb-5 adaptive-text"
                    >
                      {item.answer}
                    </AccordionContent>
                  </MagicCard>
                ) : (
                  <MagicCard gradientOpacity={0.2} className='shadow-lg flex flex-col justify-stretch'>
                    <AccordionTrigger
                      className="px-6 pb-5 text-lg font-semibold adaptive-text transition-all"
                    >
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent
                      className="px-6 pb-5 adaptive-text"
                    >
                      {item.answer}
                    </AccordionContent>
                  </MagicCard>
                )}
              </AccordionItem>
            </BlurFade>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;