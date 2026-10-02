import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoBanner from './components/DemoBanner';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';



function App() {
  return (
    <div className="landing-container d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Hero />
        <Features />
        <DemoBanner />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;