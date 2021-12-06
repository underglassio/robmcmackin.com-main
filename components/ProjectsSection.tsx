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
      className="w-full"
    >
      <a className="anchor" id="projects" />
      <ul className="grid grid-cols-2 gap-4">
        <MotionProject
          variants={childFadeIn}
          transition={{
            y: { type: 'spring', bounce: 0.4, duration: 1.6 },
            duration: 0.4
          }}
          title="Slite"
          key={1}
          position="40px 40px/98%"
          description="App · Web · Brand"
          video="/static/images/projects/slite/slite-cover.webm"
          thumbnail="/static/images/projects/slite/slite-thumbnail.png"
          slug="slite"
          color="#ff8cb1"
          fullWidth
          tall
        />
        <MotionProject
          variants={childFadeIn}
          transition={{
            y: { type: 'spring', bounce: 0.4, duration: 1.6 },
            duration: 0.4
          }}
          key={2}
          title="Beyond Translation"
          position="-50% -50%/122%"
          description="Web"
          video="/static/images/projects/bt/bt.webm"
          slug="beyond-translation"
          color="#6046ee"
        />
        <MotionProject
          variants={childFadeIn}
          transition={{
            y: { type: 'spring', bounce: 0.4, duration: 1.6 },
            duration: 0.4
          }}
          key={3}
          title="Booli"
          position="center 45px/80%"
          description="Game · Web"
          video="/static/images/projects/booli/booli.webm"
          slug="booli"
          color="#fe80a6"
        />
        <MotionProject
          variants={childFadeIn}
          transition={{
            y: { type: 'spring', bounce: 0.4, duration: 1.6 },
            duration: 0.4
          }}
          key={4}
          title="Omnious"
          position="center 42px/90%"
          description="App · Web · Brand"
          image="/static/images/projects/omnious/omnious-cover.png"
          thumbnail="/static/images/projects/omnious/omnious-thumbnail.png"
          slug="omnious"
          color="#6C52F2"
          fullWidth
        />
      </ul>
    </motion.div>
  );
}
