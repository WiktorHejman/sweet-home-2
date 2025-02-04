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
      className={`fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm shadow transition-all duration-300 ${scrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-xl">
          <Link href="/">
            Lasownia
          </Link>
        </div>
        <nav className="space-x-4">
          <Link href="/#about" className="hover:underline">
            O nas
          </Link>
          <Link href="/domki" className="hover:underline">
            Domki
          </Link>
          <Link href="/galeria" className="hover:underline">
            Galeria
          </Link>
          <Link href="/#pricing" className="hover:underline">
            Cennik
          </Link>
          <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
            Rezerwacja
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;