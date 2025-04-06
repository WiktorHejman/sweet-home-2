import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-900/80 backdrop-blur-sm border-t border-forest-800/50">
      <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-b">
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-neutral-200 mb-4">Kontakt</h3>
            <div className="space-y-2">
              <a
                href="mailto:lasownia@gmail.com"
                className="flex items-center gap-2 text-neutral-300 hover:text-neutral-200 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>lasownia@gmail.com</span>
              </a>
              <a
                href="tel:+48781246140"
                className="flex items-center gap-2 text-neutral-300 hover:text-neutral-200 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+48 781 246 140</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-6">
              <Link
                href="/regulamin-strony"
                className="px-3 py-1 text-neutral-300 hover:text-earth-100
                         transition-all duration-100 rounded-lg
                         hover:bg-forest-900/30 hover:backdrop-blur-sm"
              >
                Regulamin strony
              </Link>
              <Link
                href="/regulamin-obiektu"
                className="px-3 py-1 text-neutral-300 hover:text-earth-100
                         transition-all duration-100 rounded-lg
                         hover:bg-forest-900/30 hover:backdrop-blur-sm"
              >
                Regulamin obiektu
              </Link>
              <Link
                href="/polityka-prywatnosci"
                className="px-3 py-1 text-neutral-300 hover:text-earth-100
                         transition-all duration-100 rounded-lg
                         hover:bg-forest-900/30 hover:backdrop-blur-sm"
              >
                Polityka prywatności
              </Link>
              <Link
                href="https://panel.hotres.pl/def/newsletter/sign/auth/cfe93315988584e90b92979885641d4c/id/3790/lang/pl"
                target="_blank"
                className="px-3 py-1 text-neutral-300 hover:text-earth-100
                         transition-all duration-100 rounded-lg
                         hover:bg-forest-900/30 hover:backdrop-blur-sm"
              >
                Newsletter
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800">
          <p className="text-center text-neutral-400 text-sm">
            © {currentYear} Lasownia. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};
