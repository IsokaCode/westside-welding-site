import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileSticky from './components/MobileSticky';
import ScrollToTop from './components/ScrollToTop';

function Home() {
  return (
    <>
      <Hero />
      <Contact />
    </>
  );
}

function ContactPage() {
  return (
    <section className="py-20 bg-gray-900 min-h-screen pt-32">
      <div className="container mx-auto px-4">
        <Contact />
        <div className="mt-12 flex justify-center">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.964964899624!2d-0.2108376842298582!3d51.80096497968209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48763a6e2e2e2e2f%3A0x2e2e2e2e2e2e2e2e!2s9%20Broadfield%20Pl%2C%20Welwyn%20Garden%20City%20AL8%206LJ!5e0!3m2!1sen!2suk!4v1680000000000!5m2!1sen!2suk"
            width="600"
            height="400"
            style={{ border: 0, borderRadius: '1rem', width: '100%', maxWidth: 600 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/booking" element={<QuoteForm />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <MobileSticky />
      </div>
    </Router>
  );
}

export default App;