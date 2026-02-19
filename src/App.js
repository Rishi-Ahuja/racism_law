import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import CTA from './components/CTA';
import WhoWeAre from './components/WhoWeAre';
import IntakeForm from './components/IntakeForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPage from './pages/PrivacyPage';
import './index.css';

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  if (showPrivacy) {
    return (
      <div className="App min-h-screen page-bg text-white">
        <PrivacyPage onBack={() => setShowPrivacy(false)} />
      </div>
    );
  }

  return (
    <div className="App min-h-screen bg-dark page-bg" itemScope itemType="https://schema.org/LegalService">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <CTA />
        <WhoWeAre />
        <IntakeForm />
        <FAQ />
      </main>
      <Footer onPrivacyClick={() => setShowPrivacy(true)} />
    </div>
  );
}

export default App;
