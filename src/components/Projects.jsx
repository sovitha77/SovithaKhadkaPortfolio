import React from 'react';
// Used in JSX below; this rule may not recognize JSX member expressions.
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { projects } from '../assets/assets.js';
import ProjectCard from './ProjectCard.jsx';

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.01 }}
      id='projects'
      className='section-shell'
    >
      <div className='container mx-auto max-w-7xl px-6'>
        <div className='section-heading mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between'>
          <div>
            <p className='section-kicker'>Things I&apos;ve built</p>
            <h2 className='mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
              Selected <span className='text-gradient'>projects</span>
            </h2>
            <p className='mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base'>
              A few real-world products and experiments across frontend, backend, and full-stack development.
            </p>
          </div>
          <a
            href='https://github.com/sovitha77'
            target='_blank'
            rel='noreferrer'
            className='inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white'
          >
            More on GitHub <FaArrowRight aria-hidden='true' />
          </a>
        </div>

        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3'>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
