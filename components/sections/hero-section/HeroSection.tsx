import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RetroGrid from '@/components/ui/retro-grid';
import ShimmerButton from '@/components/ui/shimmer-button';
import BlurIn from '@/components/ui/blur-in';
import { FadeText } from '@/components/ui/fade-text';
import BlurFade from '@/components/ui/blur-fade';
import WordPullUp from '@/components/ui/word-pull-up';
import BoxReveal from '@/components/ui/box-reveal';
import { useTheme } from 'nextra-theme-docs';
import Safari from '@/components/ui/safari';
import { FaPlay } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const scrollToVideo = () => {
    const videoSection = document.getElementById('video-section');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex w-full flex-col items-center justify-center bg-gradient-to-b dark:from-neutral-950 dark:to-black py-20">
      <RetroGrid />
      <div className="relative flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="text-7xl font-extrabold relative group inline-block">
            <BlurIn
              duration={1.25}
              word="WALNUT"
              className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
            />
            <span className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-30 group-hover:opacity-50 transition-opacity duration-300"></span>
          </div>
        </div>

        <div className='mb-6'>
          <BlurFade delay={0.25} duration={0.75} inView>
            <WordPullUp
              className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-wider adaptive-text"
              words="Decentralized Computing Power for AI & ML"
            />
          </BlurFade>
        </div>

        <div className='mb-6'>
          <BlurFade inView delay={0.25 * 5} yOffset={10}>
            <BoxReveal boxColor={"#3b83f62f"} duration={0.75} delay={0.25 * 5}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-blue-400">
                Share & Access GPU/CPU Resources Globally
              </h2>
            </BoxReveal>
          </BlurFade>
        </div>

        <div className='mb-[-10px]'>
          <BlurFade delay={0.25 * 7} inView>
            <p className="text-xl text-adaptive-text mb-12 max-w-3xl mx-auto">
              Join the future of distributed computing. Share your idle computing resources or access powerful GPU/CPU clusters for AI training, Machine Learning, and intensive computational tasks through our decentralized network.
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.25 * 8} inView>
          <div className='flex flex-row items-center justify-center md:flex-row gap-x-6'>
            <ShimmerButton
              onClick={() => {
                window.open("https://walnut.vercel.app/", "_blank");
              }}
              className="hover:scale-[1.15] shadow-2xl m-auto">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Start Computing
              </span>
            </ShimmerButton>

            <button
              onClick={scrollToVideo}
              className="h-[55px] px-2 rounded-full relative inline-flex items-center justify-center p-0.5 overflow-hidden font-medium group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-0"
            >
              <div className="flex flex-row justify-center items-center relative px-5 py-2.5 ease-in bg-white dark:bg-neutral-950 rounded-full group-hover:bg-opacity-0 transition-all duration-300 hover:scale-[1.15]">
                <FaPlay className="mr-2" />
                <div>Watch Demo</div>
              </div>
            </button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default HeroSection;
