import React from 'react';
// Used in JSX below; this rule may not recognize JSX member expressions.
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { skills } from '../assets/assets.js';

function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.05 }}
      id='skills'
      className='section-shell'
    >
      <div className='container mx-auto max-w-7xl px-6'>
        <div className='section-heading mb-10 sm:mb-12'>
          <p className='section-kicker'>My toolkit</p>
          <h2 className='mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
            Skills for the <span className='text-gradient'>whole stack</span>
          </h2>
          <p className='mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base'>
            The tools and practices I use to take a product from the first interface to a reliable release.
          </p>
        </div>

        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {skills.map((skill) => (
            <article key={skill.title} className='rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 transition hover:border-cyan-200/25 hover:bg-white/[0.055] sm:p-6'>
              <div className='flex items-center gap-4'>
                <span className='flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-200/15 bg-cyan-200/[0.07]'>
                  <skill.icon className='h-5 w-5 text-cyan-200' aria-hidden='true' />
                </span>
                <h3 className='text-lg font-semibold text-white'>{skill.title}</h3>
              </div>
              <p className='mt-4 text-sm leading-6 text-slate-400'>{skill.description}</p>
              <div className='mt-5 flex flex-wrap gap-2'>
                {skill.tags.map((tech) => (
                  <span key={tech} className='rounded-md bg-slate-800/80 px-2.5 py-1 text-xs text-slate-300'>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
