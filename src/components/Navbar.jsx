import React from 'react';
import { FaArrowUpRightFromSquare, FaBars, FaXmark } from 'react-icons/fa6';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
];

function Navbar() {
  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setShowMenu(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => setShowMenu(false);

  return (
    <header className='site-header fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6'>
      <nav className='nav-shell mx-auto max-w-7xl rounded-2xl border border-white/10 px-4 sm:px-5'>
        <div className='flex h-[60px] items-center justify-between'>
          <a href='#home' onClick={closeMenu} className='text-lg font-bold tracking-tight text-white sm:text-xl'>
            Sovitha<span className='text-cyan-300'>.</span>
          </a>

          <div className='hidden items-center gap-1 md:flex'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className='rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white'
              >
                {link.name}
              </a>
            ))}
            <a href='#contact' className='button-primary ml-2 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-950'>
              Hire me <FaArrowUpRightFromSquare aria-hidden='true' />
            </a>
          </div>

          <button
            type='button'
            onClick={() => setShowMenu((open) => !open)}
            className='inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-lg text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 md:hidden'
            aria-label={showMenu ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={showMenu}
            aria-controls='mobile-navigation'
          >
            {showMenu ? <FaXmark aria-hidden='true' /> : <FaBars aria-hidden='true' />}
          </button>
        </div>

        {showMenu && (
          <div id='mobile-navigation' className='mobile-nav-panel mb-3 border-t border-white/10 pt-3 md:hidden'>
            <div className='grid grid-cols-2 gap-2'>
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className='flex min-h-12 items-center gap-3 rounded-xl px-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.07] hover:text-white'
                >
                  <span className='font-mono text-xs text-cyan-300/70'>0{index + 1}</span>
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href='#contact'
              onClick={closeMenu}
              className='button-primary mt-3 flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-slate-950'
            >
              Let&apos;s work together <FaArrowUpRightFromSquare aria-hidden='true' />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
