import React from 'react';
import { Shield, Award, Clock, Users, Wrench } from 'lucide-react';
import TarmacLogo from '../assets/Tarmac_logo.png';
import CemexLogo from '../assets/cemex_logo.png';
import LiebherrLogo from '../assets/liebherr_logo.png';
import FMConwayLogo from '../assets/fm_conway_logo.png';
import BenninghovenLogo from '../assets/benninghoven_logo.png';
import AggregateIndustriesLogo from '../assets/Aggregate_Industries_logo.png';

const features = [
  {
    icon: Clock,
    title: 'Over 30 years of expert mobile welding',
    description: 'Three decades of industry experience serving construction and industrial clients across the region'
  },
  {
    icon: Wrench,
    title: 'Heavy machinery, structural, plant repairs',
    description: 'Specialized in all types of welding from emergency repairs to complex fabrication projects'
  },
  {
    icon: Award,
    title: 'Certified welders — CSCS, IPAF',
    description: 'All our welders hold current industry certifications and undergo regular skills assessments'
  },
  {
    icon: Users,
    title: 'Fully equipped mobile welding units',
    description: 'State-of-the-art mobile workshops with all welding processes and equipment on board'
  }
];

const logos = [
  TarmacLogo,
  CemexLogo,
  LiebherrLogo,
  FMConwayLogo,
  BenninghovenLogo,
  AggregateIndustriesLogo
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Westside Welding</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The leading mobile welding specialists in Hertfordshire, trusted by major construction companies for over three decades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-xl border border-blue-500/30">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By Logos Marquee Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Trusted by Industry Leaders</h3>
          <div className="overflow-x-hidden w-full">
            <div className="animate-marquee space-x-16 items-center" style={{ animation: 'marquee 30s linear infinite' }}>
              {[...logos, ...logos].map((logo, idx) => {
                let height = 'h-16', minWidth = '120px', maxWidth = '160px';
                if (logo === LiebherrLogo) {
                  height = 'h-64'; minWidth = '480px'; maxWidth = '640px';
                } else if (logo === BenninghovenLogo) {
                  height = 'h-32'; minWidth = '240px'; maxWidth = '320px';
                }
                return (
                  <img
                    key={idx}
                    src={logo}
                    alt="Client Logo"
                    className={`object-contain grayscale opacity-80 hover:opacity-100 transition-all duration-300 ${height}`}
                    style={{ minWidth, maxWidth }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;