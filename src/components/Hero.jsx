import React from 'react';
// Used in JSX below; this rule may not recognize JSX member expressions.
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaArrowDown, FaArrowRight, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import assets from '../assets/profile-cropped.webp';

const focusAreas = ['Frontend engineering', 'Full-stack development', 'Product-minded UI'];

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      id='home'
      className='hero-section relative isolate overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36'
    >
      <div className='hero-glow hero-glow-one' />
      <div className='hero-glow hero-glow-two' />

      <div className='container relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16'>
        <div className='order-1 max-w-2xl'>
          <div className='mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-2 text-sm text-emerald-200'>
            <span className='h-2 w-2 animate-pulse rounded-full bg-emerald-300' />
            Open to frontend &amp; full-stack opportunities
          </div>

          <p className='mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300'>
            Software engineer · Kathmandu, Nepal
          </p>
          <h1 className='max-w-3xl text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl'>
            I build digital
            <span className='block text-gradient'>experiences that work.</span>
          </h1>
          <p className='mt-7 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8'>
            I&apos;m Sovitha Khadka, a frontend and full-stack developer who turns thoughtful design into
            responsive, dependable web products—from polished interfaces to the APIs behind them.
          </p>

          <div className='mt-8 flex flex-wrap gap-2'>
            {focusAreas.map((area) => (
              <span key={area} className='rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 sm:text-sm'>
                {area}
              </span>
            ))}
          </div>

          <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
            <a href='#projects' className='button-primary inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-semibold text-slate-950'>
              Explore my work <FaArrowRight aria-hidden='true' />
            </a>
            <a href='mailto:khadkabinisha48@gmail.com' className='inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3.5 font-semibold text-white transition hover:border-cyan-200/50 hover:bg-white/[0.08]'>
              <FaEnvelope aria-hidden='true' /> Let&apos;s talk
            </a>
          </div>

          <a href='#about' className='mt-10 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white'>
            A little more about me <FaArrowDown aria-hidden='true' className='text-xs' />
          </a>
        </div>

        <div className='order-2 mx-auto w-full max-w-[260px]'>
          <div className='portrait-shell relative mx-auto aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 p-2 shadow-2xl shadow-cyan-950/30'>
            <div className='portrait-frame relative h-full overflow-hidden rounded-[1.55rem]'>
              <img
                className='portrait-photo absolute inset-0 h-full w-full object-cover'
                src={assets}
                alt='Sovitha Khadka, software engineer'
                fetchPriority='high'
              />
              <div className='portrait-shade absolute inset-0' />
              <div className='absolute inset-x-0 bottom-0 p-5 sm:p-6'>
                <div className='flex items-end justify-between gap-3'>
                  <div>
                    <p className='text-xs font-medium uppercase tracking-[0.22em] text-white/70'>Based in</p>
                    <p className='mt-1 flex items-center gap-2 text-lg font-semibold text-white'>
                      <FaMapMarkerAlt className='text-cyan-300' aria-hidden='true' /> Kathmandu, Nepal
                    </p>
                  </div>
                  <span className='rounded-full border border-white/20 bg-slate-950/45 px-3 py-1.5 text-xs text-white backdrop-blur'>
                    Available for work
                  </span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
