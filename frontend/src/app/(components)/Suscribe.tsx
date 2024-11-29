// components/Suscribe.tsx
import React from 'react';

const Suscribe: React.FC = () => {
  return (
    <section className="bg-black text-gray-800 py-12 flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h2 className="text-4xl text-gray-800 font-bold">NOSTRA</h2>
        <h3 className="mt-4 text-gray-800 text-xl">
          Subscribe to our newsletter to get updates to our latest collection.
        </h3>

        <p className="mt-10 text-gray-800 text-lg">
          Get 20% off on your first order just by subscribing to our newsletter!
        </p>

        <div className="mt-6">
          <p className="text-gray-800 mb-2 text-lg">Enter your email:</p>

          <form className="flex flex-col sm:flex-row items-center gap-4 justify-center text-gray-800">
            <input
              type="email"
              placeholder="Your email here"
              required
              className="px-4 py-2 rounded-md border-2 border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit" 
              className="mt-4 sm:mt-0 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-xl"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-4 text-gray-800 text-sm">
          <p>You will be able to unsubscribe at any time.</p>
        </div>

        <div className="mt-2 text-gray-800 text-sm">
          <p>Read our privacy policy here.</p>
        </div>
      </div>
    </section>
  );
};

export default Suscribe;
