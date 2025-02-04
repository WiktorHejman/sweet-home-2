'use client'
import Image from 'next/image';
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
        ? 'bg-earth-900/90 backdrop-blur-sm border-b border-earth-800/50 translate-y-0 opacity-100'
        : 'bg-transparent -translate-y-full opacity-0'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="relative group">
          <Link
            href="/"
            className="font-bold text-2xl text-neutral-200 transition-colors duration-200 hover:text-white"
          >
            <Image src="/logo_lasownia_pic_white.png" alt="Lasownia" width={36} height={36} />
          </Link>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forest-400 transition-all duration-300 group-hover:w-full"></span>
        </div>

        <nav className="flex items-center gap-8">
          {[
            { href: '/#about', label: 'O nas' },
            { href: '/domki', label: 'Domki' },
            { href: '/galeria', label: 'Galeria' },
            { href: '/#pricing', label: 'Cennik' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-lg px-3 py-1 font-medium text-neutral-300 hover:text-earth-100
                         transition-all duration-100 rounded-lg
                         hover:bg-forest-900/30 hover:backdrop-blur-sm"
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
      </div>
    </header>
  );
};

export default Header;