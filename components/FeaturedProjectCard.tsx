import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import cn from 'classnames';

type CardProps = React.PropsWithChildren<{
  title: string;
  description: string;
  slug: string;
  image: string;
  color: string;
}>;

const FeaturedProjectCard = React.forwardRef(
  ({ title, description, slug, image, color }: CardProps, ref?: any) => {
    return (
      <div
        style={{ transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)' }}
        className="hover:scale-[1.01] active:scale-[.98] sm:w-1/2 p-2 out-expo duration-1000 transition"
      >
        <div ref={ref} className="">
          <Link scroll={false} href={`/project/${slug}`}>
            <a className={cn('transform group  ', ' overflow-hidden w-full  ')}>
              <div
                className={`bg-${color} flex flex-col rounded-xl overflow-hidden dark:bg-gray-900`}
              >
                <div className="flex transition-opacity relative ">
                  <div className="bg-cream opacity-0 transition-opacity group-hover:opacity-10 w-full h-full absolute z-40" />
                  <Image
                    width={511}
                    height={224}
                    quality={100}
                    alt={title}
                    src={image}
                  ></Image>
                </div>
                <div className="w-full"></div>
                <div className="w-full flex bg-black dark:bg-cream justify-between items-center pt-3  pb-2.5 px-4 text-cream dark:text-gray-700">
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
