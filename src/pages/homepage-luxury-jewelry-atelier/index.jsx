import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ManifestoSection from './components/ManifestoSection';
import FeaturedCollections from './components/FeaturedCollections';
import SocialProofTicker from './components/SocialProofTicker';
import DigitalAtelierExperience from './components/DigitalAtelierExperience';
import CustomerTestimonials from './components/CustomerTestimonials';
import TrustSignalsFooter from './components/TrustSignalsFooter';

const HomepageLuxuryJewelryAtelier = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>LuxeJewels - Luxury Jewelry Atelier | Accessible Digital Luxury</title>
        <meta 
          name="description" 
          content="Discover LuxeJewels' premium jewelry collections combining Cartier's heritage luxury with modern accessibility. Experience virtual try-on, expert concierge service, and ethically sourced diamonds." 
        />
        <meta name="keywords" content="luxury jewelry, diamond rings, ethical jewelry, virtual try-on, premium accessories, engagement rings" />
        <meta property="og:title" content="LuxeJewels - Luxury Jewelry Atelier" />
        <meta property="og:description" content="Redefining luxury jewelry through accessible elegance and innovative digital experiences." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage-luxury-jewelry-atelier" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section with Cinematic Video */}
          <HeroSection />

          {/* Accessible Luxury Manifesto */}
          <ManifestoSection />

          {/* Featured Collections Carousel */}
          <FeaturedCollections />

          {/* Social Proof Ticker */}
          <SocialProofTicker />

          {/* Digital Atelier Experience */}
          <DigitalAtelierExperience />

          {/* Customer Testimonials */}
          <CustomerTestimonials />
        </main>

        {/* Trust Signals Footer */}
        <TrustSignalsFooter />
      </div>
    </>
  );
};

export default HomepageLuxuryJewelryAtelier;