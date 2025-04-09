import React from 'react';
import { Check, X } from 'lucide-react';

const TechnicalComparison = () => {
  const features = [
    'Automatic Activation',
    'No Human Intervention',
    '360° Coverage',
    'Maintenance Free',
    'Easy Installation',
    'Sound Alert',
    'Non-Toxic',
    'CE Certified'
  ];

  const products = [
    {
      name: 'Agni Kawach',
      description: 'Advanced Fire Ball',
      features: [true, true, true, true, true, true, true, true]
    },
    {
      name: 'Traditional',
      description: 'Fire Extinguisher',
      features: [false, false, false, false, false, false, true, true]
    }
  ];

  return (
    <section id="technical" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Comparison
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            See how Agni Kawach compares to traditional fire extinguishers
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-t border-b border-gray-200 dark:border-gray-700">
                <th className="py-4 px-6 text-left text-gray-500 dark:text-gray-400 font-normal">Features</th>
                {products.map((product, index) => (
                  <th key={index} className="py-4 px-6 text-center">
                    <div className="font-bold text-gray-900 dark:text-white">{product.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{product.description}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150"
                >
                  <td className="py-4 px-6 text-gray-900 dark:text-white">{feature}</td>
                  {products.map((product, productIndex) => (
                    <td key={productIndex} className="py-4 px-6 text-center">
                      {product.features[index] ? (
                        <Check className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-500 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-lg shadow-sm text-white bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 transition-colors duration-200"
          >
            Get Your Agni Kawach Today →
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechnicalComparison;