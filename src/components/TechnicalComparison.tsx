import React from 'react';

const TechnicalComparison = () => {
  const specifications = [
    { name: 'Type A', cylinder2kg: 'Water / Spray foam / ABC / Wet Chemical', cylinder5kg: 'Water / Spray foam / ABC / Wet Chemical', agniKawach: 'One Agni Kawach - Fire Extinguisher Ball for all' },
    { name: 'Type B', cylinder2kg: 'Foam / CO2 / ABC', cylinder5kg: 'Foam / CO2 / ABC', agniKawach: 'One Agni Kawach - Fire Extinguisher Ball for all' },
    { name: 'Type C', cylinder2kg: 'ABC', cylinder5kg: 'ABC', agniKawach: 'One Agni Kawach - Fire Extinguisher Ball for all' },
    { name: 'Electric', cylinder2kg: 'ABC / CO2', cylinder5kg: 'ABC / CO2', agniKawach: 'One Agni Kawach - Fire Extinguisher Ball for all' },
    { name: 'Cooking Oils & Fats', cylinder2kg: 'Wet Chemical', cylinder5kg: 'Wet Chemical', agniKawach: 'One Agni Kawach - Fire Extinguisher Ball for all' },
    { name: 'How to Use it?', cylinder2kg: 'Pull - Aim - Squeez - Sweap', cylinder5kg: 'Pull - Aim - Squeez - Sweap', agniKawach: 'Just through into the fire' },
    { name: 'Mobility', cylinder2kg: 'Difficult', cylinder5kg: 'Difficult', agniKawach: 'Easy to carry' },
    { name: 'Placement/Fitment', cylinder2kg: 'Only Wall mounted', cylinder5kg: 'Only Wall mounted', agniKawach: 'Can be Placed anywhere i.e. Ceiling, Wall, Inside panel, and placed on table, etc. making it suitable for all applications' },
    { name: 'Operation', cylinder2kg: 'Only 5% people in the world can use these type of cylinders. Manual and difficult to use.', cylinder5kg: 'Only 5% people in the world can use these type of cylinders. Manual and difficult to use.', agniKawach: 'Only when Flame touches Agni Kawach - Fire Extinguisher Ball, it burst and automatically spread the powder.' },
    { name: 'Automatic Response time', cylinder2kg: 'No such system, Operated manually', cylinder5kg: 'No such system, Operated manually', agniKawach: 'Automatic activates in less than 5-10 seconds' },
    { name: 'Safety Distance', cylinder2kg: 'Need to get close to the fire', cylinder5kg: 'Need to get close to the fire', agniKawach: 'Can be thrown from safe 20 ft. distance' }
  ];

  return (
    <section id="technical" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AGNI KAWACH EXTINGUISHER CO.
          </h2>
          <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">
            TECHNICAL COMPARISON
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">Specification</th>
                <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">Cylinder 2 KG</th>
                <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">Cylinder 5 KG</th>
                <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">Agni Kawach</th>
              </tr>
            </thead>
            <tbody>
              {specifications.map((spec, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="border border-gray-300 dark:border-gray-700 p-4 font-medium">{spec.name}</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">{spec.cylinder2kg}</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">{spec.cylinder5kg}</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">{spec.agniKawach}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TechnicalComparison;