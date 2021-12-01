import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import FadeInOnScroll from './FadeInOnScroll';
import { bounceTransition, childFadeIn } from '../lib/animations';

type ServiceProps = React.PropsWithChildren<{
  title: string;
  description: string;
}>;

const ServiceItem = React.forwardRef(
  ({ title, description }: ServiceProps, ref?: any) => {
    return (
      <div ref={ref} className="mb-8 col-span-3 md:col-span-1">
        <h3 className="font-bold text-base mb-1">{title}</h3>
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
      <div className="items-center w-full">
        <h2>I can help you with</h2>
        <div className="text-black grid grid-cols-3 gap-6 dark:text-cream w-full mt-6 ">
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
      </div>
    </FadeInOnScroll>
  );
}
