import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield, Award, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const serviceAreas = [
    'Hertfordshire', 'Bedfordshire', 'London', 'Essex',
    'Buckinghamshire', 'North London', 'Middlesex', 'Cambridgeshire'
  ];

  const certifications = [
    'ASME XI Certified',
    'CSCS Card Holders',
    'IPAF Certified',
    'PASMA Qualified',
    'Fully Insured (£2M)',
    'Health & Safety Compliant'
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">Touch</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to get your welding project started? Contact us today for a free consultation and quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-3 rounded-lg border border-orange-500/30">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Address</h4>
                    <p className="text-orange-400 font-bold">Westside Welding and Engineering Ltd.</p>
                    <p className="text-white">9 Broadfield Place, Welwyn Garden City, Herts. AL8 6LJ</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-3 rounded-lg border border-orange-500/30">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Phone</h4>
                    <a href="tel:07836648694" className="text-orange-400 hover:text-orange-300 text-lg font-bold block">07836 648694</a>
                    <a href="tel:01707332872" className="text-orange-400 hover:text-orange-300 text-lg font-bold block">01707 332872</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-lg border border-blue-500/30">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Email</h4>
                    <a href="mailto:westsideweld@hotmail.co.uk" className="text-blue-400 hover:text-blue-300">
                      westsideweld@hotmail.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Clock className="w-6 h-6 text-blue-400" />
                <span>Operating Hours</span>
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Monday - Friday:</span>
                  <span className="text-white font-semibold">7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Saturday:</span>
                  <span className="text-white font-semibold">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sunday:</span>
                  <span className="text-white font-semibold">Emergency only</span>
                </div>
                <div className="border-t border-gray-700 pt-3 mt-4">
                  <div className="flex justify-between">
                    <span className="text-orange-400 font-semibold">Emergency Service:</span>
                    <span className="text-orange-400 font-semibold">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas & Certifications */}
          <div className="space-y-8">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-blue-400" />
                <span>Service Coverage Areas</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="bg-gray-800/50 border border-gray-600/50 rounded-lg p-3 text-center hover:border-blue-500/50 transition-colors">
                    <span className="text-white font-semibold">{area}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gray-800/50 border border-blue-500/30 rounded-lg">
                <p className="text-blue-400 text-sm text-center">
                  <strong>Coverage Radius:</strong> Up to 50 miles from Hertfordshire base for emergency callouts
                </p>
              </div>
            </div>

            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Shield className="w-6 h-6 text-green-400" />
                <span>Certifications & Insurance</span>
              </h3>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gray-800/50 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-sm text-center">
                  All certifications are current and regularly updated. Insurance coverage: £2M Public Liability
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Whether it's an emergency repair or a planned project, we're here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+441234567890"
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 border border-orange-500/30"
              >
                <Phone className="w-5 h-5" />
                <span>Call Emergency Line</span>
              </a>
              <button 
                onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 border border-blue-500/30"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;