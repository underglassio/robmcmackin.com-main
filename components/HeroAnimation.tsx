import { motion } from 'framer-motion';
import Image from 'next/image';

const phoneFadeIn = {
  hidden: { opacity: 0, top: '40%', right: '-2%' },
  show: {
    opacity: 1,
    top: '20%',
    right: '6%'
  }
};

const tabletFadeIn = {
  hidden: { opacity: 0, top: '60%', right: '4%' },
  show: {
    opacity: 1,
    top: '51%',
    right: '41%'
  }
};

const appFadeIn = {
  hidden: { opacity: 0, top: '60%', right: '4%' },
  show: {
    opacity: 1,
    top: '8%',
    right: '38%'
  }
};

export default function HeroAnimation() {
  return (
    <div
      style={{ width: 364, height: 364, transform: 'scale(1.2)' }}
      className="hidden md:flex justify-center w-full items-center relative"
    >
      <motion.div
        variants={tabletFadeIn}
        initial="hidden"
        animate="show"
        transition={{
          delay: 0.2,
          opacity: { duration: 0.1 },
          top: { type: 'spring', bounce: 0.3, duration: 1.5 },
          right: { type: 'easeOut', duration: 0.3 }
        }}
        className="absolute z-20 animate-floating"
      >
        <Image
          alt="Web design"
          src="/hero/tablet.png"
          layout="fixed"
          width={188.44}
          quality={100}
          height={134.44}
          priority={true}
        />
      </motion.div>
      <motion.div
        variants={appFadeIn}
        initial="hidden"
        animate="show"
        transition={{
          delay: 0.2,
          opacity: { duration: 0.1 },
          top: { type: 'spring', bounce: 0.3, duration: 1.5 },
          right: { type: 'easeOut', duration: 0.4 }
        }}
        className="absolute z-10 animate-floating animation-delay-2"
      >
        <Image
          alt="Native mobile and desktop app design"
          src="/hero/desktop.png"
          layout="fixed"
          width={211.33}
          quality={100}
          height={146}
          priority={true}
        />
      </motion.div>
      <motion.div
        variants={phoneFadeIn}
        transition={{
          delay: 0.2,
          opacity: { duration: 0.1 },
          top: { type: 'spring', bounce: 0.3, duration: 1.2 },
          right: { type: 'easeOut', duration: 0.3 }
        }}
        initial="hidden"
        animate="show"
        className="absolute z-10 animate-floating animation-delay-1"
      >
        <Image
          alt="Mobile app design"
          src="/hero/phone.png"
          priority={true}
          layout="fixed"
          quality={100}
          width={107.78}
          height={175.78}
        />
      </motion.div>
      <div style={{ bottom: 0, right: 0 }} className="absolute z-0 opacity-0">
        <Image
          alt="Portal"
          layout="fixed"
          src="/hero/portal.png"
          width={246.22}
          quality={100}
          priority={true}
          height={205.78}
        />
      </div>
      <div style={{ top: 176.9, left: 126.45 }} className="absolute z-50">
        <Image
          alt="Mask"
          layout="fixed"
          // objectFit="none"
          src="/hero/mask.svg"
          quality={100}
          priority={true}
          width={322.72}
          height={249}
        />
      </div>
    </div>
  );
}
