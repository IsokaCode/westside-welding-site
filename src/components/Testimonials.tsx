import React, { useState, useRef } from 'react';
import { testimonials as initialTestimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [form, setForm] = useState({ name: '', content: '', rating: 5 });
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (rating: number) => {
    setForm({ ...form, rating });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.content) return;
    setTestimonials([
      ...testimonials,
      {
        id: `user-${Date.now()}`,
        name: form.name,
        company: '',
        role: 'Just now',
        content: form.content,
        rating: form.rating,
      },
    ]);
    setForm({ name: '', content: '', rating: 5 });
  };

  // Marquee animation control
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Clients Say</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto mb-6" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the construction professionals who trust us
          </p>
        </div>

        {/* Marquee Reviews */}
        <div className="overflow-x-hidden w-full">
          <div
            ref={marqueeRef}
            className={`flex space-x-8 items-stretch animate-marquee-testimonials`}
            style={{
              animationPlayState: isPaused ? 'paused' : 'running',
              animationDuration: '60s',
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div
                key={testimonial.id + '-' + idx}
                className="bg-gray-800/70 border border-gray-700/50 rounded-2xl p-8 min-w-[350px] max-w-xs flex-shrink-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
                <blockquote className="text-lg text-gray-200 mb-4 leading-relaxed italic">
                  "{testimonial.content}"
            </blockquote>
            <div className="text-center">
                  <h4 className="text-lg font-bold text-white mb-1">{testimonial.name}</h4>
                  <p className="text-orange-400 font-semibold">{testimonial.role}</p>
                  {testimonial.company && <p className="text-blue-400 font-semibold">{testimonial.company}</p>}
            </div>
              </div>
            ))}
          </div>
              </div>

        {/* Add Review Form */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Add Your Review</h3>
          <form onSubmit={handleSubmit} className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-400"
              required
            />
            <textarea
              name="content"
              value={form.content}
              onChange={handleInputChange}
              placeholder="Your Review"
              className="p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-orange-400"
              rows={4}
              required
            />
            <div className="flex items-center space-x-2">
              <span className="text-gray-300">Rating:</span>
              {[1,2,3,4,5].map((star) => (
              <button 
                  type="button"
                  key={star}
                  onClick={() => handleRatingChange(star)}
                  className="focus:outline-none"
              >
                  <Star className={`w-6 h-6 ${form.rating >= star ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
              </button>
              ))}
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold py-3 rounded-lg transition-all duration-300"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;