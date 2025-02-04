'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-800/50 translate-y-0 opacity-100'
        : 'bg-transparent -translate-y-full opacity-0'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="relative group">
          <Link
            href="/"
            className="font-bold text-2xl text-neutral-200 transition-colors duration-200 hover:text-white"
          >
            Lasownia
          </Link>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
        </div>

        <nav className="flex items-center gap-8">
          {[
            { href: '/#about', label: 'O nas', dotColor: 'bg-emerald-500' },
            { href: '/domki', label: 'Domki', dotColor: 'bg-amber-500' },
            { href: '/galeria', label: 'Galeria', dotColor: 'bg-blue-500' },
            { href: '/#pricing', label: 'Cennik', dotColor: 'bg-purple-500' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group flex items-center gap-2 text-neutral-300 hover:text-neutral-200 transition-colors duration-200"
            >
              <span className={`w-1 h-1 rounded-full ${link.dotColor} group-hover:w-2 transition-all duration-200`}></span>
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neutral-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <button className="
            relative overflow-hidden px-6 py-2 rounded-lg
            bg-emerald-500/10 text-emerald-500
            border border-emerald-500/20
            hover:bg-emerald-500/20 hover:border-emerald-500/30
            transition-all duration-300
            group
          ">
            <span className="relative z-10">Rezerwacja</span>
            <span className="
              absolute inset-0 -translate-y-full bg-emerald-500/10
              group-hover:translate-y-0
              transition-transform duration-300
            "></span>
            <span className="
              absolute inset-0 translate-y-full bg-emerald-500/10
              group-hover:translate-y-0
              transition-transform duration-300
            "></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;