import React from 'react';

const Footer = () => (
  <footer className='border-t border-white/[0.08] bg-[#080b11] py-6'>
    <div className='container mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-center sm:flex-row sm:text-left'>
      <a href='#home' className='font-semibold tracking-tight text-white'>
        Sovitha<span className='text-cyan-300'>.</span>
      </a>
      <p className='text-xs text-slate-500'>
        © {new Date().getFullYear()} Sovitha Khadka. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
