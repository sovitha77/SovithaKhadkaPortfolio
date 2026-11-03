import React from 'react';
// Used in JSX below; this rule may not recognize JSX member expressions.
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { socialLinks } from '../assets/assets';

const contactItems = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'khadkabinisha48@gmail.com',
    href: 'mailto:khadkabinisha48@gmail.com',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+977 9846900867',
    href: 'tel:+9779846900867',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Kathmandu, Nepal',
  },
];

const Contact = () => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.65, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.05 }}
    id='contact'
    className='section-shell section-shell-alt'
  >
    <div className='container mx-auto max-w-7xl px-6'>
      <div className='contact-panel grid gap-8 overflow-hidden rounded-[1.75rem] border border-white/10 p-6 sm:p-9 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:p-12'>
        <div>
          <p className='section-kicker'>Have a good one in mind?</p>
          <h2 className='mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl'>
            Let&apos;s build something <span className='text-gradient'>people love to use.</span>
          </h2>
          <p className='mt-4 max-w-lg text-sm leading-6 text-slate-400 sm:text-base'>
            I&apos;m open to frontend and full-stack roles, freelance projects, and thoughtful collaborations.
            Tell me what you&apos;re working on.
          </p>

          <a
            href='mailto:khadkabinisha48@gmail.com?subject=Let%27s%20work%20together'
            className='button-primary mt-7 inline-flex items-center gap-2 rounded-xl px-5 py-3.5 font-semibold text-slate-950'
          >
            Start a conversation <FaArrowUpRightFromSquare aria-hidden='true' />
          </a>

          <div className='mt-8 flex gap-3'>
            <a href={socialLinks[0].url} target='_blank' rel='noreferrer' aria-label='GitHub profile' className='flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-200/40 hover:text-white'>
              <FaGithub aria-hidden='true' />
            </a>
            <a href={socialLinks[1].url} target='_blank' rel='noreferrer' aria-label='LinkedIn profile' className='flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-200/40 hover:text-white'>
              <FaLinkedin aria-hidden='true' />
            </a>
          </div>
        </div>

        <div className='flex flex-col justify-center gap-3'>
          {contactItems.map(({ icon, label, value, href }) => {
            const content = (
              <>
                <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-200/[0.08] text-cyan-200'>
                  {React.createElement(icon, { 'aria-hidden': true })}
                </span>
                <span className='min-w-0'>
                  <span className='block text-xs text-slate-500'>{label}</span>
                  <span className='mt-0.5 block break-words text-sm font-medium text-slate-200'>{value}</span>
                </span>
              </>
            );

            return href ? (
              <a key={label} href={href} className='flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.035] p-4 transition hover:border-cyan-200/25 hover:bg-white/[0.06]'>
                {content}
              </a>
            ) : (
              <div key={label} className='flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.035] p-4'>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </motion.section>
);

export default Contact;
