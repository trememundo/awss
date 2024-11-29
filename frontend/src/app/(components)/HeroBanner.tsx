import Image from 'next/image';

const HeroBanner: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-gray-100">
      {/* Contenedor de la imagen con Next.js */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <Image
          src="https://img.freepik.com/foto-gratis/pareja-moda-moda-aislada-pared-blanca-estudio_155003-44529.jpg?t=st=1732590915~exp=1732594515~hmac=49c6d3201a358dceca42645367dc2b06fa27389fc8296832f0b042f164bf2860&w=1380"
          alt="Couple walking with style, perfect for fashion inspiration"
          fill
          objectFit="cover"  
          objectPosition="center" 
        />
      </div>

      {/* Overlay oscuro para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Contenedor de texto centrado */}
      <div className="container mx-auto px-6 py-12 h-full flex items-center justify-center relative z-20">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            Level up your style with our summer collections
          </h1>
          <button 
            className="px-6 py-3 bg-black text-white rounded mt-4"
            aria-label="Shop our summer collections now"
          >
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
