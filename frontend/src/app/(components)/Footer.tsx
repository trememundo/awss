const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-gray-800 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sección de NOSTRA */}
        <div>
          <h2 className="text-2xl font-bold">NOSTRA</h2>
          <p className="mt-4 text-gray-800">
            Specializes in providing high-quality, stylish products for your wardrobe.
          </p>
        </div>

        {/* Sección de Shop */}
        <div>
          <h3 className="text-lg font-bold">Shop</h3>
          <ul className="mt-4 space-y-2 text-gray-800">
            <li><a href="#" className="hover:underline" aria-label="Ver todas las colecciones">All Collections</a></li>
            <li><a href="#" className="hover:underline" aria-label="Ver edición de invierno">Winter Edition</a></li>
            <li><a href="#" className="hover:underline" aria-label="Ver descuentos">Discount</a></li>
          </ul>
        </div>

        {/* Sección de Company */}
        <div>
          <h3 className="text-lg font-bold">Company</h3>
          <ul className="mt-4 space-y-2 text-gray-800">
            <li><a href="#" className="hover:underline" aria-label="Acerca de nosotros">About Us</a></li>
            <li><a href="#" className="hover:underline" aria-label="Contactar con nosotros">Contact</a></li>
            <li><a href="#" className="hover:underline" aria-label="Programa de afiliados">Affiliates</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-800 text-sm">
        &copy; {new Date().getFullYear()} Nostra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
