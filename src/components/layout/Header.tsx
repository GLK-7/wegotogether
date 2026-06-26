import Navbar from '../layout/Navbar';
import us from '../../assets/profile.jpg';

const Header = () => {
  return (
    <>
      <header className="relative text-white text-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[#0d0d0f] z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/60 via-pink-950/40 to-transparent z-0" />

        {/* Decorative orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[100px] z-0 pointer-events-none" />
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-pink-600/10 blur-[80px] z-0 pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-[80px] z-0 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 px-4 py-16 pb-20">
          {/* Profile photo with ring */}
          <div className="relative float">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full animated-gradient p-[3px] blur-[2px] scale-105 opacity-70" />
            {/* Gradient border */}
            <div className="relative p-[3px] rounded-full animated-gradient">
              <div className="rounded-full overflow-hidden w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-[#0d0d0f]">
                <img
                  src={us}
                  alt="foto de perfil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="fade-in-up flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="text-pink-400/60 text-lg">✦</span>
              <p className="text-pink-300/70 text-sm sm:text-base font-medium tracking-[0.25em] uppercase">
                nossa história
              </p>
              <span className="text-pink-400/60 text-lg">✦</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="gradient-text glow-text">Our Love Story</span>
            </h1>

            <div className="heartbeat text-3xl mt-1 select-none">💕</div>

            <p className="text-gray-400 text-sm sm:text-base font-light tracking-wide mt-1">
              27 de Junho de 2023
            </p>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0d0d0f] to-transparent z-10" />
      </header>
      <Navbar />
    </>
  );
};

export default Header;
