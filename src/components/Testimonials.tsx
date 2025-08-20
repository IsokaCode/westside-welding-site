import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Clients Say</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - see what our customers are saying on Google Reviews
          </p>
        </div>

        {/* SociableKit Google Reviews Widget - Iframe Implementation */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8 mb-8">
            <iframe
              src="https://widgets.sociablekit.com/google-reviews/iframe/25584175"
              width="100%"
              height="600"
              style={{ border: 0, borderRadius: '1rem' }}
              title="Google Reviews"
            />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <a 
                href="https://g.co/kgs/pkKvQVB" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View All Google Reviews</span>
              </a>
              
              <a 
                href="https://www.google.com/search?sca_esv=a31e0798661b8982&rlz=1C1CHBF_en-GBGB999GB999&sxsrf=AE3TifOd1sjZ2I5BZB-XnlsRcwc1Vze02w:1754049199535&si=AMgyJEuzsz2NflaaWzrzdpjxXXRaJ2hfdMsbe_mSWso6src8sxyd9W_8a3EEtbuRtoknpFu1MzKivc4Npc44c2NWfM5VgDS4LpGpdfn6lnOCa8dNv7DN0nMSjCHbqjZYccxB8-dz8UMpxnymb8bpZAMbAHXKF5kVGGb-CXjP_dSVTGhfq7lbEvg%3D&q=Westside+Welding+and+Engineering+Ltd+Reviews&sa=X&ved=2ahUKEwjaztO7xumOAxXFQkEAHTSZAXYQ0bkNegQIHhAE&biw=1920&bih=957&dpr=1"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <Star className="w-5 h-5" />
                <span>Leave a Review</span>
              </a>
            </div>
            </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">5-Star Rated</h3>
              <p className="text-gray-300">Consistently rated 5 stars by our customers</p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-400 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Verified Reviews</h3>
              <p className="text-gray-300">All reviews are verified by Google</p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm">24/7</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Live Updates</h3>
              <p className="text-gray-300">Reviews update automatically in real-time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;