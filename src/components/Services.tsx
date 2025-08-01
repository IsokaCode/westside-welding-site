import React from 'react';
import { services } from '../data/services';
import * as LucideIcons from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const navigate = useNavigate();
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon className="w-8 h-8" /> : <LucideIcons.Wrench className="w-8 h-8" />;
  };

  return (
    <section id="services" className="py-20 bg-gray-800 pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">Services</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive mobile welding and fabrication services for construction, industrial, and emergency applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`relative bg-gray-900/80 backdrop-blur-sm border rounded-xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group ${
                service.emergency 
                  ? 'border-orange-500/50 hover:border-orange-400 shadow-lg shadow-orange-500/10' 
                  : 'border-gray-700/50 hover:border-blue-500/50 shadow-md hover:shadow-blue-500/10'
              }`}
            >
              {service.emergency && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold animate-pulse border border-orange-400/30">
                  24/7 EMERGENCY
                </div>
              )}

              <div className={`inline-flex p-4 rounded-xl mb-6 border ${
                service.emergency 
                  ? 'bg-gradient-to-br from-orange-600 to-orange-700 border-orange-500/30' 
                  : 'bg-gradient-to-br from-blue-600 to-blue-700 border-blue-500/30'
              }`}>
                <div className="text-white">
                  {getIcon(service.icon)}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wide">What's Included:</h4>
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                {service.emergency ? (
                  <button className="w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white border border-orange-500/30">
                    Call Emergency Line
                  </button>
                ) : (
                  <button
                    className="w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white border border-blue-500/30 text-center"
                    onClick={() => navigate(`/booking?service=${service.id}`)}
                  >
                    Get Quote
                </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Service Areas */}
        <div className="mt-16 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-white text-center mb-6 flex items-center justify-center space-x-2">
            <LucideIcons.MapPin className="w-6 h-6 text-orange-400" />
            <span>Service Coverage Areas</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['Hertfordshire', 'Bedfordshire', 'London', 'Essex', 'Buckinghamshire', 'North London', 'Middlesex', 'Cambridgeshire'].map((area, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-600/50 rounded-lg p-3 hover:bg-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <span className="text-white font-semibold">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;