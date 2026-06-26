import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#time', label: 'Time Together', icon: '⏳' },
  { href: '#moments', label: 'Moments', icon: '📸' },
  { href: '#travels', label: 'Travels', icon: '✈️' },
  { href: '#song', label: 'Our Song', icon: '🎵' },
  { href: '#timeline', label: 'Timeline', icon: '💫' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d0d0f]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30'
          : 'bg-[#0d0d0f]/70 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo / brand */}
          <span
            className="gradient-text font-semibold text-base sm:text-lg tracking-wide hidden sm:block"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            ♡ WeGo Together
          </span>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-all duration-200 hover:bg-white/5 group"
                >
                  <span className="mr-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                    {link.icon}
                  </span>
                  {link.label}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-3/4 transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul
          className="flex flex-col py-2 px-4 gap-1 border-t border-white/5"
          onClick={() => setIsOpen(false)}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <span>{link.icon}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
