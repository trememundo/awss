import React from 'react';
import { FaStar, FaTruck, FaBoxOpen, FaCheckCircle } from 'react-icons/fa';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Original Products',
      description:
        'We provide money back guarantee if the product you have purchased is not original.',
      icon: <FaStar aria-label="Original Products" />,
    },
    {
      title: 'Satisfaction Guarantee',
      description:
        'Exchange the product you’ve purchased if it doesn’t fit on you.',
      icon: <FaCheckCircle aria-label="Satisfaction Guarantee" />,
    },
    {
      title: 'New Arrivals Everyday',
      description:
        'We update our collections almost every day to keep up with the latest fashion.',
      icon: <FaBoxOpen aria-label="New Arrivals Everyday" />,
    },
    {
      title: 'Fast & Free Shipping',
      description:
        'We offer fast and free shipping for our loyal customers.',
      icon: <FaTruck aria-label="Fast & Free Shipping" />,
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          We provide best customer experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="text-4xl mb-4" aria-label={feature.title}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
