import React from 'react';
import { FiShoppingCart, FiSettings } from 'react-icons/fi';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const cartItemsCount = 2;

  return (
    <div>
      {/* Mensaje promocional */}
      <div className="bg-black text-white text-sm py-2 text-center">
        Sign up and <span className="font-bold">GET 20% OFF</span> for your first order.
      </div>

      {/* Contenido principal del Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 lg:px-20 py-4 flex justify-between items-center">

          {/* Logo */}     
          <h2 className="text-2xl font-bold text-gray-800">
            <Link href="/dashboard" passHref>
              NOSTRA
            </Link>
          </h2>
          
          {/* Menú de navegación */}
          <ul className="hidden md:flex space-x-8 font-medium text-gray-600">
          <Link href="/Shop" passHref>
            <li className="hover:text-gray-800 cursor-pointer">Shop</li>
          </Link>

          <Link href="/MostWantend" passHref>
            <li className="hover:text-gray-800 cursor-pointer">Most Wanted</li>
          </Link>

          <Link href="/NewArrival" passHref>
            <li className="hover:text-gray-800 cursor-pointer">New Arrival</li>
          </Link>

          <Link href="/Brands" passHref>
            <li className="hover:text-gray-800 cursor-pointer">Brands</li>
            </Link>
          </ul>

          {/* Botones de configuración y carrito */}
          <div className="flex items-center space-x-4">
            {/* Enlace al dashboard de configuración */}
            <Link href="/products" passHref>
              <button
                aria-label="Settings"
                className="text-gray-600 hover:text-gray-800 transition duration-200"
              >
                <FiSettings size={20} />
              </button>
            </Link>

            {/* Enlace al carrito */}
            <Link href="/card" passHref>
              <button
                aria-label="Cart"
                className="text-gray-600 hover:text-gray-800 transition duration-200 relative"
              >
                <FiShoppingCart size={20} />
                {/* Indicador de cantidad de productos */}
                {cartItemsCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 transform translate-x-2 -translate-y-2">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
