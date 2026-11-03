// Used in JSX below; this rule may not recognize JSX member expressions.
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Education = () => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.65, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.05 }}
    id='education'
    className='section-shell'
  >
    <div className='container mx-auto max-w-7xl px-6'>
      <div className='mb-10 sm:mb-12'>
        <p className='section-kicker'>Learning &amp; growth</p>
        <h2 className='mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl'>Education</h2>
        <p className='mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base'>
          Academic foundations and continued learning in software development.
        </p>
      </div>

      <div className='mx-auto grid max-w-5xl gap-4 md:grid-cols-2'>
        <article className='rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 sm:p-6'>
          <p className='text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200'>2022 - 2026</p>
          <h3 className='mb-2 mt-3 text-xl font-semibold text-white'>Bachelor in Information Technology</h3>
          <p className='text-sm text-slate-300'>
            Padmakanya Multiple Campus <span className='text-slate-500'>· Kathmandu, Nepal</span>
          </p>
          <p className='mt-4 text-sm leading-6 text-slate-400'>
            Focused on software development, data structures, algorithms, and practical web application building.
          </p>
        </article>

        <article className='rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 sm:p-6'>
          <p className='text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200'>2019 - 2021</p>
          <h3 className='mb-2 mt-3 text-xl font-semibold text-white'>+2 Science</h3>
          <p className='text-sm text-slate-300'>
            National School of Sciences <span className='text-slate-500'>· Kathmandu, Nepal</span>
          </p>
          <p className='mt-4 text-sm leading-6 text-slate-400'>
            Science stream with a strong foundation in mathematics and technical subjects.
          </p>
        </article>

        <article className='rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 sm:col-span-2 sm:p-6'>
          <p className='text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200'>2019</p>
          <h3 className='mb-2 mt-3 text-xl font-semibold text-white'>School Level</h3>
          <p className='text-sm text-slate-300'>
            Manakamana English Boarding School <span className='text-slate-500'>· Beshishar, Lamjung</span>
          </p>
        </article>
      </div>
    </div>
  </motion.section>
);

export default Education;
