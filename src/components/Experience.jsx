import React from 'react';
// Used in JSX below; this rule may not recognize JSX member expressions.
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { experience } from '../assets/assets.js';

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.05 }}
      id='experience'
      className='section-shell section-shell-alt'
    >
      <div className='container mx-auto max-w-7xl px-6'>
        <div className='mb-10 sm:mb-12'>
        <p className='section-kicker'>Where I&apos;ve contributed</p>
        <h2 className='mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
          Work <span className='text-gradient'>experience</span>
        </h2>
        <p className='mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base'>
          Practical experience collaborating on useful products and modern web solutions.
        </p>
        </div>

        <div className='mx-auto max-w-5xl space-y-4'>
        {experience.map((item) => (
          <article key={`${item.role}-${item.company}`} className='rounded-2xl border border-white/8hite/[0.035] p-5 sm:p-7'>
            <div className='mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200'>{item.role}</p>
                <h3 className='mt-1 text-xl font-semibold text-white sm:text-2xl'>{item.company}</h3>
              </div>
              <span className='inline-flex w-fit rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs font-medium text-slate-300'>
                {item.period}
              </span>
            </div>

            <ul className='grid gap-3 text-sm leading-6 text-slate-300 md:grid-cols-2'>
              {item.bullets.map((bullet) => (
                <li key={bullet} className='flex gap-3'>
                  <span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200' />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
