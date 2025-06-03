import React from 'react';
import { Flame, MapPin, Phone, Mail, Clock, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flame className="h-6 w-6 text-blue-400" />
              <span className="font-semibold text-xl text-white">
                Jones Gas Services
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Gas Safe Registered plumbing and heating specialists serving Belfast and surrounding areas.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+447787396692" className="hover:text-blue-300">
                  +44 7787 396692
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@jonesgasservices.com" className="hover:text-blue-300">
                  info@jonesgasservices.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                8 Stanfield Row, Belfast, BT7 2HA
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Opening Hours</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Mon–Fri: 08:00–17:30
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Sat: 08:00–13:00
              </p>
              <p className="text-amber-400 mt-3">
                24/7 Emergency Service Available
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-300">Boiler Repairs</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">Oil to Gas Conversions</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">Annual Servicing</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">General Plumbing</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300">Emergency Repairs</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Jones Gas Services. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Shield className="h-5 w-5 text-green-500" />
            <span>Gas Safe Registered Engineer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;