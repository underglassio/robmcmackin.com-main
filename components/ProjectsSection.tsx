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
          position="scale(.9) translateY(12px)"
          description="App · Web · Brand"
          video="/static/videos/slite-cover.mp4"
          thumbnail="/static/images/projects/slite/slite-thumbnail.png"
          slug="slite"
          color="#FF99B0"
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
          description="Web"
          video="/static/videos/bt.mp4"
          position="translate(62px, 89px) scale(1.2)"
          slug="beyond-translation"
          color="#6B5CF7"
        />
        <MotionProject
          variants={childFadeIn}
          transition={{
            y: { type: 'spring', bounce: 0.4, duration: 1.6 },
            duration: 0.4
          }}
          key={3}
          title="Booli"
          position=" scale(.8)"
          description="Game · Web"
          video="/static/videos/booli.mp4"
          slug="booli"
          color="#FF99B0"
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
          color="#6B5CF7"
          fullWidth
        />
      </ul>
    </motion.div>
  );
}
