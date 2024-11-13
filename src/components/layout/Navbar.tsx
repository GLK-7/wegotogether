import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-[#c74ade] to-[#a855f7] py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center">
          {/* Botão de hambúrguer para dispositivos móveis */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#] focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-[#1e1e1e]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>

          {/* Links de navegação para desktop centralizados */}
          <ul className="hidden md:flex justify-center flex-1 space-x-4">
            <li>
              <a
                href="#time"
                className="text-[#] font-bold transition duration-300 ease-in-out hover:text-[#fff] hover:bg-white/10 px-4 py-2 rounded"
              >
                Time Together
              </a>
            </li>
            <li>
              <a
                href="#moments"
                className="text-[#] font-bold transition duration-300 ease-in-out hover:text-[#fff] hover:bg-white/10 px-4 py-2 rounded"
              >
                Moments
              </a>
            </li>
            <li>
              <a
                href="#song"
                className="text-[#] font-bold transition duration-300 ease-in-out hover:text-[#fff] hover:bg-white/10 px-4 py-2 rounded"
              >
                Song
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className="text-[#] font-bold transition duration-300 ease-in-out hover:text-[#fff] hover:bg-white/10 px-4 py-2 rounded"
              >
                Timeline
              </a>
            </li>
          </ul>
        </div>

        {/* Menu de hambúrguer para dispositivos móveis */}
        {isOpen && (
          <>
            <ul
              className="md:hidden flex flex-col justify-center flex-wrap items-center gap-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <li>
                <a
                  href="#time"
                  className="text-[#] font-bold transition duration-300 ease-in-out hover:text-[#fff] hover:bg-white/10 px-4 py-2 rounded"
                >
                  Time Together
                </a>
              </li>
              <li>
                <a
                  href="#moments"
                  className="text-[#] font-bold transition duration-300 ease-in-out hover:text-[#fff] hover:bg-white/10 px-4 py-2 rounded"
                >
                  Moments
                </a>
              </li>
              <li>
                <a
                  href="#song"
                  className="text-[#] font-bold transition duration-300 ease-in-out hover:text-[#fff] hover:bg-white/10 px-4 py-2 rounded"
                >
                  Song
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  className="text-[#] font-bold transition duration-300 ease-in-out hover:text-[#fff] hover:bg-white/10 px-4 py-2 rounded"
                >
                  Timeline
                </a>
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
