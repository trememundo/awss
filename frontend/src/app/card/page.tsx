// components/Dashboard.tsx
import React from 'react';

const Dashboard: React.FC = () => {
  
  const purchases = [
    { id: 1, product: 'T-shirt', date: '2024-11-20', amount: '$25.00' },
    { id: 2, product: 'Shoes', date: '2024-11-19', amount: '$45.00' },
    { id: 3, product: 'Backpack', date: '2024-11-18', amount: '$60.00' },
    { id: 4, product: 'Sweater', date: '2024-11-17', amount: '$35.00' },
  ];

  const totalPurchases = purchases.length;
  const totalAmount = purchases.reduce((acc, purchase) => acc + parseFloat(purchase.amount.replace('$', '')), 0);

  return (
    <section className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center text-gray-800">Dashboard de Compras</h2>
          
          {/* Resumen de compras */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold">Total Compras</h3>
              <p className="text-xl mt-2">{totalPurchases} compras</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold">Ingreso Total</h3>
              <p className="text-xl mt-2">${totalAmount.toFixed(2)}</p>
            </div>
            <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold">Promedio por Compra</h3>
              <p className="text-xl mt-2">${(totalAmount / totalPurchases).toFixed(2)}</p>
            </div>
          </div>

          {/* Lista de compras */}
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">ID</th>
                  <th className="py-2 px-4 border-b text-left">Producto</th>
                  <th className="py-2 px-4 border-b text-left">Fecha</th>
                  <th className="py-2 px-4 border-b text-left">Monto</th>
                </tr>
              </thead>
              <tbody>
                {purchases.map((purchase) => (
                  <tr key={purchase.id}>
                    <td className="py-2 px-4 border-b">{purchase.id}</td>
                    <td className="py-2 px-4 border-b">{purchase.product}</td>
                    <td className="py-2 px-4 border-b">{purchase.date}</td>
                    <td className="py-2 px-4 border-b">{purchase.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
