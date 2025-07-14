import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Zap } from 'lucide-react';
import { services } from '../data/services';
import WestsideLogo from '../assets/westside_welding_logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 flex flex-col items-start">
            <img src={WestsideLogo} alt="Westside Welding Logo" className="object-contain mb-4" style={{ height: '280px', maxHeight: '280px', width: 'auto', display: 'block' }} />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional mobile welding and fabrication services across Hertfordshire, London, and surrounding areas. 
              With over 30 years of experience, we provide 24/7 emergency response for construction, industrial, and plant equipment repairs.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/westside-welding" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map(service => (
                <li key={service.id}>
                  <a href={`/#quote?service=${service.id}`} className="hover:text-orange-400 transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="/#quote?service=other" className="hover:text-orange-400 transition-colors">Other</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-400" />
                <a href="tel:+441707332872" className="text-gray-400 hover:text-orange-400 transition-colors">
                  01707 332872
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:westsideweld@hotmail.co.uk" className="text-gray-400 hover:text-blue-400 transition-colors">
                  westsideweld@hotmail.co.uk
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-green-400 mt-1" />
                <span className="text-gray-400">
                  Hertfordshire, UK<br />
                  Serving: Herts, Beds, London, Essex
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Westside Welding & Engineering Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>CSCS Certified</span>
              <span>Fully Insured</span>
              <span>ASME XI Qualified</span>
            </div>
          </div>
          <div className="text-center mt-4 text-xs text-gray-500">
            Company Registration: England & Wales | VAT Registered | Public Liability Insurance: £6M
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;