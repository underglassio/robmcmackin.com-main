import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FadeInOnScroll from './FadeInOnScroll';
import HeroAnimation from '../components/HeroAnimation';
import { bounceTransition, childFadeIn } from '../lib/animations';

type ServiceProps = React.PropsWithChildren<{
  title: string;
  description: string;
}>;

const ServiceItem = React.forwardRef(
  ({ title, description }: ServiceProps, ref?: any) => {
    return (
      <div ref={ref} className="col-span-3 md:col-span-1 mb-7">
        <h3 className="font-medium text-base mb-2">
          <span className="text-[25px]">⤳ </span>
          {title}
        </h3>
        <span className="body leading-tight">{description}</span>
      </div>
    );
  }
);

ServiceItem.displayName = 'ServiceItem';

const MotionServiceItem = motion(ServiceItem);

export default function ServicesSection() {
  return (
    <FadeInOnScroll>
      <div className="flex items-center w-full">
        <div className="grid grid-cols-2 items-center">
          <div className="text-black col-span-2 md:col-span-1 dark:text-cream w-full mt-3">
            <h2>I can help you with</h2>
            <MotionServiceItem
              variants={childFadeIn}
              transition={bounceTransition}
              title="Strategy"
              description="User research, ideation and validation. Find direction and leave no stone unturned."
            />
            <MotionServiceItem
              variants={childFadeIn}
              transition={bounceTransition}
              title="Design"
              description="Premium UI and UX for your web or mobile app. I also tidy up those last details in code."
            />
            <MotionServiceItem
              variants={childFadeIn}
              transition={bounceTransition}
              title="Branding"
              description="Lock in your purpose and start with a clear message, without spending millions on an agency."
            />
          </div>

          <div className="col-span-1 flex place-items-center justify-end">
            <HeroAnimation />
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
