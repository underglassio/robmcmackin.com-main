import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import AnalysisSection from '../components/AnalysisSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';

import AboutSection from '../components/AboutSection';

import { fadeIn } from '../lib/animations';
import { motion } from 'framer-motion';

const vspace = 'h-6';

export default function Home() {
  const [path, setPath] = useState(null);

  useEffect(() => {
    const path1 = window.location.hash;
    if (path != path1) {
      setPath(path1);
    }
  });

  useEffect(() => {
    const path = window.location.hash;
    if (path && path.includes('#')) {
      const id = path.replace('#', '');
      if (id) {
        document.querySelector('#' + id).scrollIntoView({ behavior: 'auto' });
      }
    }
  }, [path]);
  return (
    <Container>
      <div className="px-4 lg:px-0 pt-8 md:pt-0 flex flex-col justify-center items-start w-full  max-w-3xl  mx-auto pb-16">
        <div className="flex items-end justify-between sm:flex-row w-full relative translate md:h-[7rem] transform-gpu overflow-hidden">
          <motion.div
            variants={fadeIn}
            transition={{
              y: { type: 'spring', bounce: 0.3, duration: 1.7 },
              duration: 0.3,
              delay: 0.05
            }}
            animate="show"
            initial="hidden"
          >
            <span className="text-black font-normal md:pr-8 leading-snug text-lg md:text-xl block">
              I help startups design digital products that people love.
            </span>
          </motion.div>
        </div>
        <span className={vspace} />
        <ProjectsSection />
        <span className={vspace} />
        <AnalysisSection />
        <span className={vspace} />
        <AboutSection />
        <span className={vspace} />
        <ServicesSection />
        <span className={vspace} />
      </div>
    </Container>
  );
}
