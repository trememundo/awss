
import Image from 'next/image';

const Brands: React.FC = () => {
  
  const brands = [
    { name: 'chanel', logo: 'https://www.shutterstock.com/shutterstock/photos/2404629953/display_1500/stock-vector-chanel-icon-logo-symbol-sign-line-art-black-white-template-italy-product-famous-graphic-design-2404629953.jpg' },
    { name: 'calvinklein', logo: 'https://www.shutterstock.com/shutterstock/photos/2275517233/display_1500/stock-vector-louis-vuitton-icon-lvmh-sign-logo-art-design-template-modern-paris-france-famous-flat-black-white-2275517233.jpg' },
    { name: 'versace', logo: 'https://www.shutterstock.com/shutterstock/photos/2394420281/display_1500/stock-vector--lion-head-baroque-design-graphic-2394420281.jpg' },
    { name: 'gucci', logo: 'https://www.shutterstock.com/shutterstock/photos/2269882361/display_1500/stock-vector-gucci-icon-logo-symbol-line-art-black-white-template-italy-product-famous-graphic-design-vector-2269882361.jpg' },
    { name: 'dolcegabbana', logo: 'https://www.shutterstock.com/shutterstock/photos/2380843465/display_1500/stock-vector-dolce-and-gabbana-vector-logo-d-and-g-2380843465.jpg' },
    { name: 'adidas', logo: 'https://www.shutterstock.com/shutterstock/photos/2410035509/display_1500/stock-vector-vinnytsia-ukraine-january-adidas-vector-logo-brand-emblem-sign-isolated-on-white-2410035509.jpg' },
    { name: 'levis', logo: 'https://img.freepik.com/vector-premium/retro-levis-501-jeans-modelo-hombre-nina-mujer-vector-arte-digital-ilustracion-papel-pared-fondo_985204-20515.jpg?w=826' }
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-6">Brands</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          {brands.map((brand) => (
            <div key={brand.name} className="flex items-center justify-center">
              <Image
                src={brand.logo}  
                alt={brand.name}   
                width={120}         
                height={50}         
                className="object-contain"  
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
