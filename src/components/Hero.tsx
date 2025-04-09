import { type FC } from 'react';
import { motion } from 'framer-motion';

const Hero: FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left mb-12 lg:mb-0"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white dark:text-gray-100 mb-6"
            >
              Protect What 
              <span className="block text-red-500 dark:text-red-400 mt-2">Matters Most</span>
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl sm:text-3xl text-red-500 dark:text-red-400 font-semibold mb-6"
            >
              Agni Kawach Fire Extinguisher Ball
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 dark:text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Advanced fire protection technology that activates automatically, providing 360° coverage
              and peace of mind for your property and loved ones.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#about"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-lg text-white 
                  hover:bg-white hover:text-black dark:border-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-900 
                  transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>

          {/* Product image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden group">
              {/* Main Product Image */}
              <img
                src="/images/agni-kawach.jpg"
                alt="Agni Kawach Fire Extinguisher Ball"
                className="w-full h-full object-cover transition-transform duration-500"
              />

              {/* Product Features Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-8 left-8 z-20 bg-black/90 text-white p-6 rounded-xl max-w-[280px]"
                style={{
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)'
                }}
              >
                <h3 className="text-red-500 text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-base">
                    <span className="mr-3 text-red-500">✓</span>
                    <span className="text-gray-100">Automatic Activation</span>
                  </li>
                  <li className="flex items-center text-base">
                    <span className="mr-3 text-red-500">✓</span>
                    <span className="text-gray-100">360° Coverage</span>
                  </li>
                  <li className="flex items-center text-base">
                    <span className="mr-3 text-red-500">✓</span>
                    <span className="text-gray-100">Easy Installation</span>
                  </li>
                  <li className="flex items-center text-base">
                    <span className="mr-3 text-red-500">✓</span>
                    <span className="text-gray-100">ISO Certified</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { text: 'CE', subtext: 'Certified' },
              { text: 'ISO', subtext: '9001:2015' },
              { text: 'UL', subtext: 'Listed' },
              { text: '24/7', subtext: 'Protection' }
            ].map((cert, index) => (
              <motion.div 
                key={cert.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-2 bg-white/10 rounded-full flex items-center justify-center
                  transform group-hover:scale-110 transition-all duration-300 hover:bg-white/20">
                  <span className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {cert.text}
                  </span>
                </div>
                <p className="text-sm text-gray-400 group-hover:text-white transition-colors">
                  {cert.subtext}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;