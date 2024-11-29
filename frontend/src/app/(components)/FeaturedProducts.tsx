import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mjcerlntucqytxulopzr.supabase.co';  
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qY2VybG50dWNxeXR4dWxvcHpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3NTI4NDcsImV4cCI6MjA0ODMyODg0N30.6ZIwGWhX3ZnWIcpG7LFmfpcGBQWJA_oPUEWCmoX20N8';  // Sustituye con tu clave pública
const supabase = createClient(supabaseUrl, supabaseKey);

// Definimos la estructura de los productos
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Controla el índice de los productos visibles

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('products').select('*');
        if (error) {
          throw new Error(error.message);
        }
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Funciones para mover el índice de los productos
  const handleNext = () => {
    if (currentIndex + 4 < products.length) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>

        {/* Indicador de carga */}
        {loading && <p className="text-gray-500">Loading...</p>}

        {/* Mensaje de error */}
        {error && <p className="text-red-500">Error: {error}</p>}

        {/* Contenedor de productos con desplazamiento */}
        <div className="relative">
          <div className="flex items-center justify-between">
            {/* Flecha izquierda */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
            >
              &lt;
            </button>

            {/* Contenedor de productos que se puede desplazar */}
            <div className=''>
              <div className="flex w-full space-x-16 px-16 ">
              {!loading && !error && products.length > 0 ? (
                products.slice(currentIndex, currentIndex + 4).map((product) => (
                  <div key={product.id} className="bg-white rounded shadow p-4 max-w-xs">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-48 w-[500px] object-cover mb-4 rounded"
                    />
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  </div>
                ))
              ) : (
                !loading && <p className="text-gray-500">No products found.</p>
              )}
            </div>
            </div>
            

            {/* Flecha derecha */}
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
