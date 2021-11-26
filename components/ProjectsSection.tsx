import { motion } from 'framer-motion';
import FeaturedProjectCard from '../components/FeaturedProjectCard';
import { containerFadeIn, childFadeIn } from '../lib/animations';

const MotionProject = motion(FeaturedProjectCard, { forwardMotionProps: true });

export default function ProjectsSection() {
  return (
    <motion.div
      variants={containerFadeIn}
      initial="hidden"
      animate="show"
      className="flex-wrap"
    >
      <h2 className="px-2">Projects</h2>
      <ul className="flex w-full flex-wrap">
        <MotionProject
          variants={childFadeIn}
          transition={{
            y: { type: 'spring', bounce: 0.4, duration: 1.6 },
            duration: 0.4
          }}
          title="Slite"
          key={1}
          description="App · Web · Brand"
          image="/static/images/projects/slite-thumbnail.png"
          slug="slite"
          color="secondary"
        />
        <MotionProject
          variants={childFadeIn}
          transition={{
            y: { type: 'spring', bounce: 0.4, duration: 1.6 },
            duration: 0.4
          }}
          key={2}
          title="Beyond Translation"
          description="Web"
          image="/static/images/projects/beyond-translation-cover.png"
          slug="beyond-translation"
          color="primary"
        />
        <MotionProject
          variants={childFadeIn}
          transition={{
            y: { type: 'spring', bounce: 0.4, duration: 1.6 },
            duration: 0.4
          }}
          key={3}
          title="Booli"
          description="Game · Web"
          image="/static/images/projects/booli-cover.png"
          slug=""
          color="primary"
        />
        <MotionProject
          variants={childFadeIn}
          transition={{
            y: { type: 'spring', bounce: 0.4, duration: 1.6 },
            duration: 0.4
          }}
          key={4}
          title="Omnious"
          description="Brand · Web · Brand"
          image="/static/images/projects/omnious-cover.png"
          slug="beyond-translation"
          color="secondary"
        />
      </ul>
    </motion.div>
  );
}
