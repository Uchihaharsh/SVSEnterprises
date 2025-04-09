import React from 'react';
import { Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About SVS Enterprises
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your Trusted Partner in Fire Safety Solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Story</h3>
            <p className="text-gray-600 dark:text-gray-300">
              SVS Enterprises has emerged as a leading provider of innovative fire safety solutions in Maharashtra. 
              Our commitment to excellence and dedication to protecting lives and property has made us a trusted 
              name in the fire safety industry.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-red-600 dark:text-red-500 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Our Mission</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    To provide cutting-edge fire safety solutions that protect lives and property while 
                    ensuring peace of mind for our clients.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-red-600 dark:text-red-500 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Our Team</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Led by experienced professionals with deep knowledge of fire safety systems and 
                    regulations, our team is dedicated to delivering excellence in every aspect of our service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <video
              src="/videos/agni-kawach-demo.mp4"
              className="rounded-lg shadow-xl w-full h-auto dark:shadow-red-500/5"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Dual Protection System</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our fire extinguisher ball offers both active and passive protection methods. In active use, 
              simply throw it into the fire for immediate response. For passive protection, mount it in 
              strategic locations where it will self-activate when detecting fire, providing 24/7 automated 
              safety coverage.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Active Protection</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Quick response in emergencies - grab and throw the ball directly into the fire source 
                  for immediate fire suppression.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Passive Protection</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Mount in high-risk areas like kitchens, electrical panels, and storage rooms for 
                  automatic activation when fire is detected.
                </p>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="max-w-[400px] mx-auto">
              <div className="aspect-[9/16] relative">
                <video
                  src="/videos/agni-kawach-test.mp4"
                  className="rounded-lg shadow-xl w-full h-full object-cover absolute inset-0 dark:shadow-red-500/5"
                  controls
                  autoPlay
                  muted
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;