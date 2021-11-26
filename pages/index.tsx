import React from 'react';
import Container from '../components/Container';
import AnalysisSection from '../components/AnalysisSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import HeroAnimation from '../components/HeroAnimation';
import AboutSection from '../components/AboutSection';

import { fadeIn } from '../lib/animations';
import { motion } from 'framer-motion';

const vspace = 'h-14';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start w-full max-w-3xl  mx-auto pb-16">
        <div className="flex items-center justify-between sm:flex-row w-full relative px-2 translate transform-gpu">
          <div>
            <motion.div
              variants={fadeIn}
              transition={{
                y: { type: 'spring', bounce: 0.4, duration: 1.7 },
                duration: 0.4
              }}
              animate="show"
              initial="hidden"
              className="w-full flex mb-1"
            >
              <h1 className="font-black w-full text-2xl md:text-3xl leading-none tracking-tight text-black dark:text-white mb-1">
                Rob
                <br />M<span>c</span>Mackin
              </h1>
            </motion.div>

            <motion.div
              variants={fadeIn}
              transition={{
                y: { type: 'spring', bounce: 0.3, duration: 1.7 },
                duration: 0.4,
                delay: 0.05
              }}
              animate="show"
              initial="hidden"
            >
              <span className="text-black body md:text-sm mb-2">
                Helping startups design the next generation <br />
                of digital products and brands.
              </span>
            </motion.div>
          </div>
          <HeroAnimation />
        </div>
        <span className={vspace} />
        <ProjectsSection />
        <span className={vspace} />
        <AnalysisSection />
        <span className={vspace} />
        <AboutSection />
        <span className={vspace} />
        <ServicesSection />
        <span className="h-8" />
      </div>
    </Container>
  );
}
