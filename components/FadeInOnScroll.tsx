import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { containerFadeIn } from '../lib/animations';
import cn from 'classnames';

type props = React.PropsWithChildren<{
  children: any;
  className?: string;
}>;

export default function FadeInOnScroll({ children, className }: props) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      variants={containerFadeIn}
      initial="hidden"
      animate={controls}
      className={cn('transform-gpu w', className)}
    >
      {children}
    </motion.div>
  );
}
