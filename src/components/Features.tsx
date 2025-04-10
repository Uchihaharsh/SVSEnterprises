import { Shield, Zap, Clock, Target } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-red-600 dark:text-red-500" />,
      title: 'Automatic Activation',
      description: 'Self-activates when in contact with fire, requiring no human intervention.'
    },
    {
      icon: <Target className="w-12 h-12 text-red-600 dark:text-red-500" />,
      title: '360° Coverage',
      description: 'Provides complete coverage in all directions, protecting the entire area.'
    },
    {
      icon: <Clock className="w-12 h-12 text-red-600 dark:text-red-500" />,
      title: 'Quick Response',
      description: 'Activates within 3-5 seconds of fire contact for immediate protection.'
    },
    {
      icon: <Zap className="w-12 h-12 text-red-600 dark:text-red-500" />,
      title: 'Easy Installation',
      description: 'Simple to install and requires no maintenance or special training.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Advanced Fire Protection Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Our fire ball extinguishers combine innovative technology with reliable protection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;