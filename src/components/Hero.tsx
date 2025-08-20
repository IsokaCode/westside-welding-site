import React, { useState } from 'react';
import { Phone, FileText, Star, Check, MapPin, MessageCircle, Zap } from 'lucide-react';
import PhonePopup from './PhonePopup';
import { useIsMobile } from '../hooks/useIsMobile';

const Hero: React.FC = () => {
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const isMobile = useIsMobile();

  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmergencyCall = (e: React.MouseEvent) => {
    if (!isMobile) {
      e.preventDefault();
      setShowPhonePopup(true);
    }
    // On mobile, let the default tel: link behavior work
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Welding Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/162568/welding-welder-steel-sparks-162568.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gray-900/85 backdrop-blur-[1px]" />

      {/* Industrial Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Enhanced Animated Welding Sparks */}
      <div className="absolute top-20 right-10 w-3 h-3 bg-yellow-400 rounded-full animate-pulse opacity-90 shadow-lg shadow-yellow-400/60" />
      <div className="absolute top-32 right-20 w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-100 opacity-80 shadow-lg shadow-orange-500/60" />
      <div className="absolute top-40 right-8 w-2 h-2 bg-yellow-300 rounded-full animate-ping delay-200 opacity-90 shadow-lg shadow-yellow-300/60" />
      <div className="absolute bottom-32 left-16 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300 opacity-70 shadow-lg shadow-blue-400/60" />
      <div className="absolute top-60 left-10 w-2 h-2 bg-orange-400 rounded-full animate-bounce delay-500 opacity-80 shadow-lg shadow-orange-400/60" />
      <div className="absolute bottom-40 right-32 w-3 h-3 bg-yellow-500 rounded-full animate-ping delay-700 opacity-85 shadow-lg shadow-yellow-500/60" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 drop-shadow-lg">
              24/7 Emergency
            </span>
            <br />
            Mobile Welding in
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300 drop-shadow-lg">Hertfordshire & London</span>
          </h1>

          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mb-8 shadow-lg" />

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Get emergency welding support.<br />
              Mobile welding plant repairs and light to medium steel welding and fabrication.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a 
                href={isMobile ? "tel:07836648694" : "#"}
                onClick={handleEmergencyCall}
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-10 py-5 rounded-xl font-bold text-xl flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/40 border border-orange-400/50 backdrop-blur-sm"
            >
              <Phone className="w-6 h-6" />
              <span>Call Now — Emergency Response</span>
            </a>
            <button 
              onClick={scrollToQuote}
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-10 py-5 rounded-xl font-bold text-xl flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/40 border border-blue-400/50 backdrop-blur-sm"
            >
              <FileText className="w-6 h-6" />
              <span>Request a Free Quote</span>
            </button>
          </div>

          {/* Trust Strip */}
          <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-8 border border-gray-700/60 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm md:text-base">
              <div className="flex items-center justify-center space-x-3 text-yellow-400">
                <Star className="w-6 h-6 fill-current drop-shadow-lg" />
                <span className="font-bold drop-shadow-sm">30+ Years Experience</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-green-400">
                <Check className="w-6 h-6 drop-shadow-lg" />
                <span className="font-bold drop-shadow-sm">Fully Insured</span>
              </div>
                              <a 
                href="https://g.co/kgs/pkKvQVB" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <MessageCircle className="w-6 h-6 drop-shadow-lg" />
                <span className="font-bold drop-shadow-sm">5-Star Google Reviews</span>
              </a>
              <div className="flex items-center justify-center space-x-3 text-orange-400">
                <MapPin className="w-6 h-6 drop-shadow-lg" />
                <span className="font-bold drop-shadow-sm">Same-Day Callout</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
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

export default Hero;