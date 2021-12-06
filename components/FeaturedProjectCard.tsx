import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import cn from 'classnames';
import { BeforeLayoutMeasureListener } from 'framer-motion/types/render/utils/lifecycles';

type CardProps = React.PropsWithChildren<{
  title: string;
  description: string;
  slug: string;
  image?: string;
  video?: string;
  color: string;
  fullWidth?: boolean;
  position: string;
  tall?: boolean;
  thumbnail?: string;
}>;

const FeaturedProjectCard = React.forwardRef(
  (
    {
      title,
      description,
      slug,
      image,
      video,
      color,
      fullWidth,
      position,
      tall,
      thumbnail
    }: CardProps,
    ref?: any
  ) => {
    return (
      <div
        style={{ transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }}
        className={cn(
          'hover:scale-[1.005] active:scale-[1] cursor-pointer col-span-2 md:col-span-1 out-expo duration-1000 transition',
          fullWidth && 'md:col-span-2'
        )}
      >
        <div ref={ref} className="">
          <Link scroll={false} passHref href={`/project/${slug}`}>
            <a className="transform group overflow-hidden w-full">
              <div
                className={`bg-${color} flex flex-col rounded-xl overflow-hidden dark:bg-gray-900`}
              >
                <div className="flex transition-opacity relative ">
                  {thumbnail && (
                    <div
                      className="md:hidden absolute w-full h-full z-30"
                      style={{
                        background: `url(${thumbnail}) no-repeat center/contain ${color}`
                      }}
                    />
                  )}
                  <div
                    style={{
                      background: video
                        ? color
                        : `url(${image}) no-repeat ${position} ${color}`
                    }}
                    className={cn(
                      'bg-cream transition-opacity h- w-full z-20',
                      tall ? 'h-80 md:h-94' : 'h-80'
                    )}
                  >
                    {' '}
                    {!!video && (
                      <video
                        autoPlay
                        loop
                        muted
                        style={{ transform: position, borderRadius: 8 }}
                        className="z-10"
                        src={video}
                      />
                    )}
                  </div>
                </div>
                <div className="w-full"></div>
                <div className="w-full flex bg-black dark:bg-cream justify-between items-center pt-3 z-50  pb-2.5 px-4 text-cream dark:text-gray-700">
                  <h4 className="font-sans text-base font-bold">{title}</h4>
                  <span className="font-mono text-sm">{description}</span>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    );
  }
);

FeaturedProjectCard.displayName = 'FeaturedProjectCard';

export default FeaturedProjectCard;
