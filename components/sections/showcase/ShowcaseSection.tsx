import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import Safari from '@/components/ui/safari';
import { useTheme } from 'nextra-theme-docs';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import { FollowerPointerCard } from '@/components/ui/following-pointer';
import Image from 'next/image';
import TypingAnimation from '@/components/ui/typing-animation';
import { LinkPreview } from '@/components/ui/link-preview';
import BlurFade from '@/components/ui/blur-fade';
import { FadeText } from '@/components/ui/fade-text';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

export default function ShowcaseSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [60, 0, 0, -60]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const z = useTransform(scrollYProgress, [0, 0.5, 1], [-500, 0, -500]);

  if (!mounted) return null;

  return (
    <section ref={sectionRef} className="bg-white relative dark:bg-black">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12",
        )}
      />
      <div className="container mx-auto">
        <FollowerPointerCard
          title={
            <div className="flex space-x-2 items-center">
              <Image
                src={"/logo/logo.png"}
                height="20"
                width="20"
                alt="thumbnail"
                className="rounded-full border-2 border-white"
              />
              <p>You</p>
            </div>
          }
        >
          <div className="max-w-4xl mx-auto" style={{ perspective: 2000 }}>
            <motion.div
              className="relative group mt-10"
              style={{
                rotateY,
                scale,
                opacity,
                z,
                transformStyle: "preserve-3d"
              }}
            >
              <div className=" absolute -inset-0.5 bg-gradient-to-br from-blue-400 to-pink-500 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-neon"></div>
              {/* Lớp phía sau */}
              {[...Array(20)].map((_, index) => (
                <div
                  key={index}
                  className="absolute inset-0 bg-gray-800 rounded-lg"
                  style={{
                    transform: `translateZ(${-10 * (index + 0.02)}px)`,
                    opacity: 0.1 - index * 0.01,
                  }}
                />
              ))}

              {/* Safari component */}
              <div className="relative" style={{ transform: 'translateZ(10px)' }}>
                <Safari
                  width={1200}
                  height={1200 * 0.47 + 90}
                  ratio={0.47}
                  url="walnut.io"
                  className={cn(
                    "w-full h-auto rounded-lg overflow-hidden"
                  )}
                  src={theme === "dark" ? "assets/about/show_case/submit_task.png" : "/assets/about/show_case/submit_task.png"}
                />
              </div>
            </motion.div>
          </div>
        </FollowerPointerCard>

        <div className="max-w-4xl mx-auto mt-20 px-4">
          <blockquote className="relative text-center mx-auto w-[80%]">
            <div className="relative z-0">
              <p className="text-xl">
                <em className="relative">
                  <svg className="absolute bottom-22 -start-8 size-16 z-0 text-gray-100 sm:h-24 sm:w-24 dark:text-neutral-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"></path>
                  </svg>
                  <TextGenerateEffect
                    className="relative z-10 adaptive-text text-2xl font-bold"
                    duration={0.2}
                    words={"WALNUT isn't just a platform; it's a decentralized computing network where you can share and access powerful GPU/CPU resources for AI training and ML tasks globally."}
                  />
                </em>
              </p>
            </div>
            <BlurFade delay={0.5} inView>
              <footer className="mt-6 relative z-10">
                <div className="text-base font-semibold adaptive-text"> James Warder - Founder of
                  <LinkPreview isStatic url="https://walnut-deploy.vercel.app/" imageSrc={theme === "dark" ? '/assets/about/how_to_work/blank1.png' : '/assets/about/how_to_work/blank1.png'}>
                    {" "}
                    <a href="https://walnut-deploy.vercel.app/" target="_blank" className="text-neutral-900 py-1 px-2 bg-yellow-400 rounded-full">Walnut</a>
                  </LinkPreview>
                </div>
              </footer>
            </BlurFade>
          </blockquote>
        </div>
      </div>
    </section>
  );
}