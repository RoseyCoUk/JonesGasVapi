import React from 'react';
import { Phone, ArrowDown, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="h-8 w-8 text-green-500" />
            <span className="text-lg font-medium text-green-600">Gas Safe Registered</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Expert Plumbing & Gas Services
            <span className="block text-blue-600 mt-2">in Belfast</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional boiler repairs, installations, and maintenance services for both domestic and commercial properties.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
          <button 
            onClick={scrollToDemo}
            className="px-8 py-4 bg-blue-600 text-white rounded-full flex items-center gap-2 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Phone className="h-5 w-5" />
            <span className="font-medium">Contact Us Now</span>
          </button>
          
          <button 
            onClick={scrollToDemo}
            className="px-8 py-4 bg-white text-blue-600 border border-blue-500 rounded-full flex items-center gap-2 hover:bg-gray-50 transition-all duration-300"
          >
            <ArrowDown className="h-5 w-5" />
            <span className="font-medium">Our Services</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;