import React from 'react';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  const hasDemo = demo && demo !== '#';
  const hasCode = code && code !== '#';

  return (
    <article className='project-card group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035]'>
      <div className='project-image-wrap relative aspect-[16/10] overflow-hidden bg-slate-800'>
        <img
          src={image}
          alt={`${title} project preview`}
          loading='lazy'
          className='h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent opacity-70' />
        <span className='absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur'>
          Selected work
        </span>
      </div>

      <div className='flex flex-1 flex-col p-5 sm:p-6'>
        <h3 className='text-xl font-semibold tracking-tight text-white'>{title}</h3>
        <p className='mt-2 flex-1 text-sm leading-6 text-slate-400'>{description}</p>

        <div className='mt-5 flex flex-wrap gap-2'>
          {tech.map((item) => (
            <span key={item} className='rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300'>
              {item}
            </span>
          ))}
        </div>

        <div className='mt-6 flex items-center gap-3 border-t border-white/[0.08] pt-4'>
          {hasDemo ? (
            <a href={demo} target='_blank' rel='noreferrer' className='button-primary inline-flex items-center gap-2 rounded-lg px-3.5 py-2.5 text-sm font-semibold text-slate-950'>
              Live preview <FaArrowUpRightFromSquare aria-hidden='true' />
            </a>
          ) : (
            <span className='rounded-lg border border-white/10 px-3.5 py-2.5 text-sm text-slate-500'>Preview unavailable</span>
          )}
          {hasCode && (
            <a href={code} target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-cyan-200/40 hover:text-white'>
              <FaGithub aria-hidden='true' /> Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
