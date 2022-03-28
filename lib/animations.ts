export const fadeIn = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0
  }
};

export const containerFadeIn = {
  hidden: { opacity: 0.2, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.02,
      duration: 0.4,
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
};
export const childFadeIn = {
  hidden: { opacity: 0.6, y: -10 },
  show: { opacity: 1, y: 0 }
};

export const bounceTransition = {
  y: { type: 'spring', bounce: 0.4, duration: 0.8 },
  duration: 0.2
};
