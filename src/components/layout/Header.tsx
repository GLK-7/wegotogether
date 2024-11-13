import Navbar from '../layout/Navbar';
import us from '../../assets/profile.jpg';

const Header = () => {
  return (
    <>
      <header className="relative bg-cover bg-center text-white text-center py-8 shadow-lg">
        {/* Gradiente sobre a imagem de fundo */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ec4899] to-[#c74ade] z-0"></div>

        {/* Conteúdo do header */}
        <div className="relative z-10 gap-6 flex flex-col">
          <div className="w-80 h-80 rounded border-4 border-[#1e1e1e] overflow-hidden mx-auto mb-4 shadow-lg">
            <img
              src={us}
              alt="foto de perfil"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-[#1e1e1e] text-5xl font-bold tracking-wide mb-4">
            Our Love Story S2
          </h1>
          <div className="flex flex-col justify-center items-center gap-2"></div>
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
