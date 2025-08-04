import React, { useState, useEffect } from 'react';
import { Send, Upload, Clock, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { services } from '../data/services';
import { useLocation } from 'react-router-dom';
import PhonePopup from './PhonePopup';
import { useIsMobile } from '../hooks/useIsMobile';

function getServiceFromQuery(locationSearch: string) {
  const params = new URLSearchParams(locationSearch);
  return params.get('service') || '';
}

const QuoteForm: React.FC = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    urgency: '',
    location: '',
    description: '',
    file: null as File | null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const serviceFromQuery = getServiceFromQuery(location.search);
    if (serviceFromQuery) {
      setFormData((prev) => ({ ...prev, serviceType: serviceFromQuery }));
    }
  }, [location.search]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Formspree will handle the submission automatically
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  };

  const handleEmergencyCall = (e: React.MouseEvent) => {
    if (!isMobile) {
      e.preventDefault();
      setShowPhonePopup(true);
    }
    // On mobile, let the default tel: link behavior work
  };

  if (isSubmitted) {
    return (
      <section id="quote" className="py-20 bg-gray-900 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gray-800/50 border border-green-500/50 rounded-2xl p-12 shadow-2xl">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Quote Request Received!</h3>
              <p className="text-gray-300 text-lg mb-6">
                We'll review your requirements and get back to you within 15 minutes during business hours.
              </p>
              <p className="text-orange-400 font-semibold">
                For emergency requests, call us directly at <a href="tel:07836648694" className="underline hover:text-orange-300">07836 648 694</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="quote" className="py-20 bg-gray-900 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Free Quote</span>
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mb-6" />
              <p className="text-xl text-gray-300">
                Need emergency welding? Get a callback in under 15 minutes during business hours
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Quick Contact Options */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-orange-400" />
                    <span>Emergency Response</span>
                  </h3>
                  <p className="text-gray-300 mb-4">For urgent repairs and breakdowns</p>
                  <a 
                    href={isMobile ? "tel:07836648694" : "#"}
                    onClick={handleEmergencyCall}
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 border border-orange-500/30"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call: 07836 648 694</span>
                  </a>
                </div>

                <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-4">WhatsApp Quote</h3>
                  <p className="text-gray-300 mb-4">Send photos and get instant estimate</p>
                  <a 
                    href="https://wa.me/447836648694"
                    className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 border border-green-500/30"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>

                <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-2">Response Times</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Emergency:</span>
                      <span className="text-orange-400 font-semibold">2-4 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Urgent:</span>
                      <span className="text-blue-400 font-semibold">Same day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Standard:</span>
                      <span className="text-green-400 font-semibold">24-48 hours</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote Form */}
              <div className="lg:col-span-2">
                <form 
                  action="https://formspree.io/f/xpzgwqkz" 
                  method="POST"
                  onSubmit={handleSubmit} 
                  className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 shadow-2xl"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                        placeholder="07836 648 694"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                        placeholder="your.email@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Service Type *</label>
                      <select
                        name="serviceType"
                        required
                        value={formData.serviceType}
                        onChange={(e) => setFormData(prev => ({ ...prev, serviceType: e.target.value }))}
                        className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                      >
                        <option value="">Select service type</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>{service.title}</option>
                        ))}
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Urgency Level *</label>
                      <select
                        name="urgency"
                        required
                        value={formData.urgency}
                        onChange={(e) => setFormData(prev => ({ ...prev, urgency: e.target.value }))}
                        className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                      >
                        <option value="">Select urgency</option>
                        <option value="emergency">Emergency (2-4 hours)</option>
                        <option value="urgent">Urgent (Same day)</option>
                        <option value="standard">Standard (24-48 hours)</option>
                        <option value="planned">Planned work</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                        className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                        placeholder="Site address or postcode"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-white font-semibold mb-2">Project Description *</label>
                    <textarea
                      name="description"
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors resize-none"
                      placeholder="Describe the work needed, materials, access requirements, etc."
                    />
                  </div>

                  <div className="mb-8">
                    <label className="block text-white font-semibold mb-2">Upload Photos (Optional)</label>
                    <div className="border-2 border-dashed border-gray-600/50 rounded-lg p-6 text-center hover:border-blue-500/50 transition-colors">
                      <input
                        type="file"
                        name="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <Upload className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                        <p className="text-gray-300">
                          {formData.file ? formData.file.name : 'Click to upload photos of the work area'}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">Helps us provide accurate quotes</p>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 border border-orange-500/30"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Quote Request</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PhonePopup
        isOpen={showPhonePopup}
        onClose={() => setShowPhonePopup(false)}
        phoneNumber="07836 648 694"
        title="Emergency Response"
      />
    </>
  );
};

export default QuoteForm;