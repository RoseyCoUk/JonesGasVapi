import React from 'react';
import { Wrench, Shield, Clock, Calendar, Award, Flame } from 'lucide-react';
import { Feature } from '../types';

const Features = () => {
  const features: Feature[] = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Gas Safe Registered",
      description: "Fully certified and registered gas engineers for your safety and peace of mind."
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-500" />,
      title: "Expert Services",
      description: "Professional boiler repairs, installations, and general plumbing services."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: "Quick Response",
      description: "Fast response times for emergency repairs and urgent plumbing issues."
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-500" />,
      title: "Annual Servicing",
      description: "Regular maintenance with reminder service to keep your systems efficient."
    },
    {
      icon: <Flame className="h-8 w-8 text-blue-500" />,
      title: "Oil to Gas",
      description: "Professional oil to gas conversion services for improved efficiency."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-500" />,
      title: "Quality Assured",
      description: "Guaranteed workmanship and professional service every time."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Professional Gas & Plumbing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted plumbing and heating solutions for domestic and commercial clients in Belfast
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;