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
      <div className="px-4 md:px-0 pt-8 md:pt-0 flex flex-col justify-center items-start w-full max-w-3xl  mx-auto pb-16">
        <div className="flex items-center justify-between sm:flex-row w-full relative translate transform-gpu">
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
              <h1 className="font-black w-full text-3xl md:text-4xl leading-none tracking-tight text-black mb-1">
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
              <span className="text-black body mb-2 block">
                Helping start-ups design digital <br /> products that people
                love.
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
        <span className="h-4" />
        <ServicesSection />
        <span className="h-4" />
      </div>
    </Container>
  );
}
