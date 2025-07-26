import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, X, Zap } from 'lucide-react';

const MobileSticky: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky footer after scrolling past hero section
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50 p-4 shadow-2xl">
        <div className="flex items-center justify-around">
          <a 
            href="tel:07836648694"
            className="flex flex-col items-center space-y-1 text-orange-400 hover:text-orange-300 transition-colors"
          >
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-3 rounded-full border border-orange-500/30">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-semibold">Emergency</span>
          </a>

          <a 
            href="https://wa.me/447836648694"
            className="flex flex-col items-center space-y-1 text-green-400 hover:text-green-300 transition-colors"
          >
            <div className="bg-gradient-to-br from-green-600 to-green-700 p-3 rounded-full border border-green-500/30">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs font-semibold">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Quick Actions Floating Button (Desktop) */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        <div className="relative">
          {showQuickActions && (
            <div className="absolute bottom-16 right-0 bg-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 shadow-2xl">
              <div className="space-y-3 min-w-[200px]">
                <a 
                  href="tel:07836648694"
                  className="flex items-center space-x-3 text-orange-400 hover:text-orange-300 transition-colors p-2 hover:bg-gray-800/50 rounded-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">Emergency Call</span>
                </a>
                <a 
                  href="https://wa.me/447836648694"
                  className="flex items-center space-x-3 text-green-400 hover:text-green-300 transition-colors p-2 hover:bg-gray-800/50 rounded-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">WhatsApp</span>
                </a>
              </div>
            </div>
          )}

          <button
            onClick={() => setShowQuickActions(!showQuickActions)}
            className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 border border-orange-500/30"
          >
            {showQuickActions ? (
              <X className="w-6 h-6" />
            ) : (
              <Zap className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileSticky;