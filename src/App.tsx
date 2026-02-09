import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProofSection from './components/ProofSection';
import DiscoveryCard from './components/DiscoveryCard';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import LeadPopup from './components/LeadPopup';
import SocialProofPopup from './components/SocialProofPopup';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <ProofSection />
      <DiscoveryCard />
      <Testimonial />
      <Footer />
      <LeadPopup show={showPopup} onClose={() => setShowPopup(false)} />
      <SocialProofPopup />
    </div>
  );
}

export default App;
