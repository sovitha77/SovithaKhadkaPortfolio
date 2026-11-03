import React from 'react';
// Used in JSX below; this rule may not recognize JSX member expressions.
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import assets from '../assets/profile-cropped.webp';
import { aboutInfo } from '../assets/assets.js';

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.05 }}
      id='about'
      className='section-shell section-shell-alt'
    >
      <div className='container mx-auto max-w-7xl px-6'>
        <div className='section-heading mb-10 sm:mb-14'>
          <p className='section-kicker'>A bit about me</p>
          <h2 className='mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
            Thoughtful design. <span className='text-gradient'>Solid engineering.</span>
          </h2>
        </div>

        <div className='grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14'>
          <div className='mx-auto w-full max-w-[260px]'>
            <div className='about-portrait relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 p-2'>
              <div className='portrait-frame relative h-full overflow-hidden rounded-[1.35rem]'>
                <img
                  src={assets}
                  alt='Sovitha Khadka'
                  loading='lazy'
                  className='portrait-photo absolute inset-0 h-full w-full object-cover'
                />
                <div className='portrait-shade absolute inset-0' />
                <div className='absolute inset-x-0 bottom-0 p-5'>
                  <p className='text-xs uppercase tracking-[0.2em] text-white/65'>Currently based in</p>
                  <p className='mt-1 flex items-center gap-2 font-semibold text-white'>
                    <FaMapMarkerAlt className='text-cyan-300' aria-hidden='true' /> Kathmandu, Nepal
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-2xl font-semibold text-white'>Hi, I&apos;m Sovitha.</h3>
            <p className='mt-5 text-base leading-7 text-slate-300'>
              I&apos;m a frontend and full-stack developer who enjoys turning complex ideas into simple, useful
              digital experiences. I work across React, Next.js, Node.js, Django, and databases to build
              products that feel thoughtful and work reliably.
            </p>
            <p className='mt-4 text-base leading-7 text-slate-400'>
              From shaping a responsive interface to connecting it with APIs and business logic, I care about
              the details that make a product clear, accessible, and ready to grow.
            </p>

            <a href='#contact' className='mt-6 inline-flex items-center gap-2 font-semibold text-cyan-200 transition hover:text-white'>
              Have a project in mind? Let&apos;s talk <FaArrowUpRightFromSquare aria-hidden='true' className='text-xs' />
            </a>

            <div className='mt-8 grid gap-3 sm:grid-cols-3'>
              {aboutInfo.map((item) => (
                <div key={item.title} className='about-value-card rounded-xl border border-white/[0.08] bg-white/[0.035] p-4'>
                  <item.icon className='text-xl text-cyan-300' aria-hidden='true' />
                  <h4 className='mt-3 font-semibold text-white'>{item.title}</h4>
                  <p className='mt-1 text-xs leading-5 text-slate-400'>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
