import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from 'components/Button';
import FadeInOnScroll from './FadeInOnScroll';
import { childFadeIn, bounceTransition } from '../lib/animations';

type AnalysisProps = React.PropsWithChildren<{
  href: string;
  text: string;
  logo: string;
}>;
const AnalysisItem = React.forwardRef(
  ({ href, text, logo }: AnalysisProps, ref?: any) => {
    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        href={href}
        className=" transform  pt-4  rounded-md"
      >
        <div className="mb-3 flex flex-col w-[5rem] md:w-[7.9rem]  relative hover:scale-[1.02] active:scale-[1.01] hover:opacity-80 overflow-hidden transition justify-center items-center rounded-xl">
          <div
            className="duration-1000 w-full h-[3.2rem]  md:h-[6.3rem] rounded-t-xl bg-cover bg-no-repeat "
            style={{
              backgroundImage: `url("${logo}") `,
              backgroundPositionY: '-0.7rem'
            }}
          ></div>
          <div className="w-full bg-black p-2 rounded-b-xl text-center z-40 h-full">
            <span className="text-cream block font-bold text-sm tracking-wide leading-snug">
              {text}
            </span>
          </div>
        </div>
      </a>
    );
  }
);

AnalysisItem.displayName = 'AnalysisItem';

const MotionAnalysisItem = motion(AnalysisItem);

export default function AnalysisSection() {
  return (
    <FadeInOnScroll className="w-full">
      <a className="anchor" id="writing" />
      <div className="py-12 w-full">
        <h2>Writing</h2>
        <div className="body text-black w-full md:max-w-lg">
          Exploring how great product teams around the world use design to
          connect with their audience.
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-3 w-full">
          <MotionAnalysisItem
            text="Hopper"
            transition={bounceTransition}
            variants={childFadeIn}
            logo="/logos/hopper.png"
            href="https://underglass.io/read/Hopper"
          />
          <MotionAnalysisItem
            text="Bench"
            transition={bounceTransition}
            variants={childFadeIn}
            logo="/logos/bench.png"
            href="https://underglass.io/read/Bench"
          />
          <MotionAnalysisItem
            text="ZigZag"
            transition={bounceTransition}
            variants={childFadeIn}
            logo="/logos/zigzag.png"
            href="https://underglass.io/read/Zigzag"
          />
          <MotionAnalysisItem
            text="KBank"
            transition={bounceTransition}
            variants={childFadeIn}
            logo="/logos/kakao-bank.png"
            href="https://underglass.io/read/Kakao%20Bank"
          />
          <MotionAnalysisItem
            text="Blendle"
            transition={bounceTransition}
            variants={childFadeIn}
            logo="/logos/blendle.png"
            href="https://underglass.io/read/Blendle"
          />
          <MotionAnalysisItem
            text="Coinbase"
            transition={bounceTransition}
            variants={childFadeIn}
            logo="/logos/coinbase.png"
            href="https://underglass.io/read/Coinbase"
          />
        </div>
        <div className="inline-block">
          <Button
            ghost
            className="mt-4"
            arrow
            href="http://underglass.io"
            rel="noreferrer"
            target="_blank"
          >
            <>More analysis</>
          </Button>
          <a className="anchor" id="about" />
        </div>
      </div>
    </FadeInOnScroll>
  );
}
