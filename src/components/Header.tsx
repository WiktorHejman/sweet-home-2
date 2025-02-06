'use client'

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const SCROLL_OFFSET = 80;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') || href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '').replace('#', '');
      setIsMenuOpen(false);

      if (pathname !== '/') {
        router.push(`/#${targetId}`);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - SCROLL_OFFSET;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const targetId = window.location.hash.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - SCROLL_OFFSET;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: pathname === '/' ? '#o-nas' : '/#o-nas', label: 'O nas' },
    { href: '/domki', label: 'Domki' },
    { href: '/galeria', label: 'Galeria' },
    { href: pathname === '/' ? '#cennik' : '/#cennik', label: 'Cennik' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || isMenuOpen
        ? 'bg-earth-900/90 backdrop-blur-sm border-b border-earth-800/50 translate-y-0 opacity-100'
        : 'bg-transparent -translate-y-full opacity-0'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="relative group z-50">
          <Link
            href="/"
            className="font-bold text-2xl text-neutral-200 transition-colors duration-200 hover:text-white"
          >
            <Image src="/logo_lasownia_pic_white.png" alt="Lasownia" width={36} height={36} className="w-10 h-10" />
          </Link>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forest-400 transition-all duration-300 group-hover:w-full"></span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-lg px-3 py-1 font-medium text-neutral-300 hover:text-earth-100
              transition-all duration-100 rounded-lg
              hover:bg-forest-900/30 hover:backdrop-blur-sm"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </Link>
          ))}

          <button className="
            relative overflow-hidden px-6 py-2 rounded-lg
            bg-forest-500/10 text-forest-300
            border border-forest-500/20
            hover:bg-forest-500/20 hover:border-forest-500/30
            transition-all duration-300
            group text-lg font-semibold
          ">
            <span className="relative z-10">Rezerwacja</span>
            <span className="
              absolute inset-0 -translate-y-full bg-forest-500/10
              group-hover:translate-y-0
              transition-transform duration-300
            "></span>
            <span className="
              absolute inset-0 translate-y-full bg-forest-500/10
              group-hover:translate-y-0
              transition-transform duration-300
            "></span>
          </button>
        </nav>

        <button
          className="md:hidden p-2 text-neutral-200 hover:text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Menu</span>
          <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
            <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ top: 0 }}
            className="fixed left-0 top-0 w-full h-screen md:hidden bg-earth-900/95 backdrop-blur-md"
          >
            <div className="h-full flex flex-col justify-between px-6 py-24">
              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      className="w-full text-center block py-4 text-3xl font-medium
                      text-neutral-300 hover:text-earth-100
                      transition-colors duration-300
                      border-b border-forest-800/30"
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="w-full px-4"
              >
                <button className="
                  w-full py-5 rounded-2xl
                  bg-forest-500/10 text-forest-300
                  border-2 border-forest-500/20
                  hover:bg-forest-500/20 hover:border-forest-500/30
                  active:bg-forest-500/30
                  transition-all duration-300
                  text-2xl font-semibold
                  shadow-lg shadow-forest-900/20
                ">
                  Rezerwacja
                </button>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
