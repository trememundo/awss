'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
};

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false); // Modal de edición
  const [isLoading, setLoading] = useState(false); 
  const [isError, setError] = useState<string | null>(null); 

  const [productToEdit, setProductToEdit] = useState<Product | null>(null); // Producto a editar
  const [newProduct, setNewProduct] = useState<{ name: string; price: number; image?: string }>({
    name: '',
    price: 0,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase.from('products').select('*');
        if (error) {
          throw error;
        }
        setProducts(data || []);
      } catch (err) {
        setError('Error al obtener los productos');
        console.error('Error al obtener los productos:', err);
      }
    };

    fetchProducts();
  }, []);

  const handleCreateProduct = async () => {
    if (!newProduct.name || newProduct.price <= 0) {
      setError('Por favor ingresa un nombre y un precio válido.');
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('products')
        .insert([{
          name: newProduct.name, 
          price: newProduct.price, 
          image: newProduct.image || null, 
          created_at: new Date(),
          updated_at: new Date()
        }]);


      if (error) {
        setError(`Error al crear el producto: ${error.message}`);
        throw error;
      }

      if (data && Array.isArray(data)) {
        setProducts((prev) => [...prev, data[0]]);
      }

      setModalOpen(false); 
      setNewProduct({ name: '', price: 0, image: '' }); // Reset fields
    } catch (err) {
      setError('Error al crear el producto');
      console.error('Error al crear el producto:', err);
    } finally {
      setLoading(false);
    }
  };

  // Función para eliminar un producto
  const handleDeleteProduct = async (id: string) => {
    try {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) {
        setError(`Error al eliminar el producto: ${error.message}`);
        throw error;
      }
      setProducts(products.filter((product) => product.id !== id));
    } catch (err) {
      setError('Error al eliminar el producto');
      console.error('Error al eliminar el producto:', err);
    }
  };

  // Función para editar un producto
  const handleEditProduct = async (id: string, updatedProduct: { name: string; price: number }) => {
    try {
      const { data, error } = await supabase
        .from('products')
        .update(updatedProduct)
        .eq('id', id);

      if (error) {
        setError(`Error al editar el producto: ${error.message}`);
        throw error;
      }

      if (data) {
        setProducts(products.map((product) => (product.id === id ? { ...product, ...updatedProduct } : product)));
        setEditModalOpen(false);  // Cerrar el modal después de guardar los cambios
        setProductToEdit(null);   // Limpiar el producto a editar
      }
    } catch (err) {
      setError('Error al editar el producto');
      console.error('Error al editar el producto:', err);
    }
  };

  // Abre el modal de edición con los datos del producto seleccionado
  const openEditModal = (product: Product) => {
    setProductToEdit(product); 
    setEditModalOpen(true); 
  };

  return (
    <div className="p-6 space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Dashboard de Productos</h1>
      </header>

      <div className="flex justify-end">
        <button
          onClick={() => setModalOpen(true)}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Crear Producto
        </button>
      </div>

      {/* Modal para crear producto */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold mb-4">Crear Producto</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCreateProduct();
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Precio</label>
                <input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
                  className="w-full px-4 py-2 border rounded-md"
                  step="0.01"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Imagen URL</label>
                <input
                  type="text"
                  name="image"
                  value={newProduct.image || ''}
                  onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Crear Producto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal para editar el producto */}
      {isEditModalOpen && productToEdit && (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-xl font-semibold mb-4">Editar Producto</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const updatedPrice = parseFloat((form.elements.namedItem('price') as HTMLInputElement).value);
                handleEditProduct(productToEdit.id, {
                  name: (form.elements.namedItem('name') as HTMLInputElement).value,
                  price: isNaN(updatedPrice) ? 0 : updatedPrice, // Validación para asegurarse que el precio sea un número válido
                });
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={productToEdit.name}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Precio</label>
                <input
                  type="number"
                  name="price"
                  defaultValue={productToEdit.price}
                  className="w-full px-4 py-2 border rounded-md"
                  step="0.01"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setEditModalOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isError && <p className="text-red-500">{isError}</p>}

      <section>
        <h2 className="text-xl font-semibold">Productos:</h2>
        <ul className="space-y-4 mt-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : products.length === 0 ? (
            <p>No hay productos disponibles.</p>
          ) : (
            products.map((product) => (
              <li key={product.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md">
                <div className="flex items-center">
                  {product.image && (
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded mr-4" />
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-600">Precio: ${product.price}</p>
                  </div>
                  <div className="space-x-2">
                    <button
                      onClick={() => openEditModal(product)} 
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </section>
    </div>
  );
};

export default ProductsPage;
