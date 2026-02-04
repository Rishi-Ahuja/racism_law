import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import EmergencyBanner from './components/EmergencyBanner';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App bg-dark" itemScope itemType="https://schema.org/LegalService">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <About />
        <EmergencyBanner />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
