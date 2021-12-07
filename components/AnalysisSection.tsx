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
        <div className="mb-3 flex flex-col hover:scale-[1.04] active:scale-[.9] hover:opacity-80 overflow-hidden  transition justify-center items-center rounded-xl pt-3">
          <div
            className="duration-1000 w-full h-[4.8rem] rounded-t-xl bg-cover bg-no-repeat "
            style={{
              backgroundImage: `url("${logo}") `,
              backgroundPositionY: '-0.7rem'
            }}
          >
            {/* <Image alt={text} quality={100} src={logo} width={85} height={85} /> */}
          </div>
          <div className="w-full bg-black p-1 rounded-b-xl text-center">
            <span className="text-cream font-bold text-sm tracking-wide">
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
        <div className="body text-black w-full md:max-w-lg mb-2">
          Exploring how great digital products around the world connect to
          specific&nbsp;niches (or just ridiculously long app-store reviews).
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-2 w-full">
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
            text="KakaoBank"
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
