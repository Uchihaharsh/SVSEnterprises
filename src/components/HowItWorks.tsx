const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Easy Installation',
      description: 'Mount the Agni Kawach Fire Ball in strategic locations using the provided brackets or place it in high-risk areas.'
    },
    {
      number: '02',
      title: 'Automatic Detection',
      description: 'The fire ball continuously monitors its surroundings and automatically detects fire or excessive heat.'
    },
    {
      number: '03',
      title: 'Instant Activation',
      description: 'Upon detecting fire, the ball automatically activates within 3-5 seconds, requiring no human intervention.'
    },
    {
      number: '04',
      title: 'Fire Suppression',
      description: 'The ball disperses fire-extinguishing powder in all directions, effectively suppressing the fire at its source.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How Fire Ball Extinguishers Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Simple yet effective automatic fire protection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 dark:bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-lg shadow-sm text-white bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600 transition-colors duration-200"
          >
            Get Protected Today →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;