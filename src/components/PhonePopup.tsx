import React from 'react';
import { Phone, X, Copy } from 'lucide-react';

interface PhonePopupProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber: string;
  title: string;
}

const PhonePopup: React.FC<PhonePopupProps> = ({ isOpen, onClose, phoneNumber, title }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber);
    // You could add a toast notification here if you want
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-md w-full shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="text-center mb-6">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-4 rounded-xl mb-4">
            <Phone className="w-12 h-12 text-white mx-auto mb-3" />
            <p className="text-white text-lg font-semibold">Emergency Contact</p>
          </div>
          
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 mb-4">
            <p className="text-3xl font-bold text-orange-400 mb-2">{phoneNumber}</p>
            <p className="text-gray-300 text-sm">Available 24/7 for emergency callouts</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="flex-1 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
          
          <button
            onClick={copyToClipboard}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Copy className="w-5 h-5" />
            <span>Copy Number</span>
          </button>
        </div>
        
        <div className="mt-4 text-center">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhonePopup; 