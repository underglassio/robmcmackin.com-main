import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Button from 'components/Button';
import FadeInOnScroll from './FadeInOnScroll';
import { childFadeIn, bounceTransition } from '../lib/animations';

import { useInView } from 'react-intersection-observer';

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
        className="mr-4 group transform   pb-2 pt-4 w-1/6  rounded-md"
      >
        <div className="mb-3 flex flex-col justify-center items-center">
          <div
            style={{
              width: 70,
              height: 70,
              transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)'
            }}
            className="mb-3 group-hover:opacity-80 group-hover:scale-[1.04] group-active:scale-[.9] duration-1000 transition"
          >
            <Image alt={text} quality={100} src={logo} width={85} height={85} />
          </div>
          <span className="text-black font-medium">{text}</span>
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
      <div className="px-2 py-12 w-full">
        <h2>Writing</h2>
        <div className="body text-black w-full md:max-w-lg mb-6">
          Discover insights from my exploration into how great digital products
          around the world connect to specific&nbsp;niches.
        </div>
        <div className="flex w-full">
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
            text="Kakao&nbsp;Bank"
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
        </div>
      </div>
    </FadeInOnScroll>
  );
}
