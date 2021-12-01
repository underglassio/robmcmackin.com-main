export const fadeIn = {
  hidden: { opacity: 0, y: -15 },
  show: {
    opacity: 1,
    y: 0
  }
};

export const containerFadeIn = {
  hidden: { opacity: 0, y: -15 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.8,
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};
export const childFadeIn = {
  hidden: { opacity: 0, y: -15 },
  show: { opacity: 1, y: 0 }
};

export const bounceTransition = {
  y: { type: 'spring', bounce: 0.4, duration: 1.2 },
  duration: 0.4
};
