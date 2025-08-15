import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import all components
import VirtualTryOnCamera from './components/VirtualTryOnCamera';
import StyleAdvisor from './components/StyleAdvisor';
import SizeGuide from './components/SizeGuide';
import MixMatchStudio from './components/MixMatchStudio';
import EngravingPreview from './components/EngravingPreview';
import OccasionStyling from './components/OccasionStyling';
import TutorialVideos from './components/TutorialVideos';
import SocialSharing from './components/SocialSharing';
import TestimonialsSection from './components/TestimonialsSection';

const VirtualTryOnStylingTools = () => {
  const [activeTab, setActiveTab] = useState('try-on');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const tools = [
    {
      id: 'try-on',
      name: 'Virtual Try-On',
      icon: 'Camera',
      description: 'See how jewelry looks on you with AR',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'style-advisor',
      name: 'Style Advisor',
      icon: 'Sparkles',
      description: 'Get personalized recommendations',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'size-guide',
      name: 'Size Guide',
      icon: 'Ruler',
      description: 'Find your perfect fit',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      id: 'mix-match',
      name: 'Mix & Match',
      icon: 'Layers',
      description: 'Create complete looks',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'engraving',
      name: 'Engraving Preview',
      icon: 'Edit3',
      description: 'Customize with engraving',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    },
    {
      id: 'occasion',
      name: 'Occasion Styling',
      icon: 'Calendar',
      description: 'Looks for every event',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50'
    },
    {
      id: 'tutorials',
      name: 'Tutorials',
      icon: 'Play',
      description: 'Learn how to use tools',
      color: 'text-pink-500',
      bgColor: 'bg-pink-50'
    },
    {
      id: 'social',
      name: 'Social Sharing',
      icon: 'Share2',
      description: 'Get feedback from friends',
      color: 'text-teal-500',
      bgColor: 'bg-teal-50'
    },
    {
      id: 'testimonials',
      name: 'Reviews',
      icon: 'Star',
      description: 'See what others say',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'try-on':
        return <VirtualTryOnCamera selectedProduct={selectedProduct} onProductSelect={handleProductSelect} />;
      case 'style-advisor':
        return <StyleAdvisor />;
      case 'size-guide':
        return <SizeGuide />;
      case 'mix-match':
        return <MixMatchStudio />;
      case 'engraving':
        return <EngravingPreview />;
      case 'occasion':
        return <OccasionStyling />;
      case 'tutorials':
        return <TutorialVideos />;
      case 'social':
        return <SocialSharing />;
      case 'testimonials':
        return <TestimonialsSection />;
      default:
        return <VirtualTryOnCamera selectedProduct={selectedProduct} onProductSelect={handleProductSelect} />;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Icon name="Camera" size={32} className="text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Loading Virtual Tools...</h2>
            <p className="text-muted-foreground">Preparing your personalized experience</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Virtual Try-On & Styling Tools - LuxeJewels</title>
        <meta name="description" content="Experience LuxeJewels' advanced virtual try-on technology, personalized styling tools, and interactive guides. See how jewelry looks on you before you buy." />
        <meta name="keywords" content="virtual try-on, AR jewelry, jewelry styling, size guide, personalized recommendations" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
                Virtual Try-On & Styling Tools
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Experience the future of jewelry shopping with our advanced AR technology, 
                personalized styling advice, and interactive tools designed to help you find 
                the perfect pieces with confidence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => setActiveTab('try-on')}
                  iconName="Camera"
                  iconPosition="left"
                >
                  Start Virtual Try-On
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setActiveTab('style-advisor')}
                  iconName="Sparkles"
                  iconPosition="left"
                >
                  Get Style Advice
                </Button>
              </div>
            </div>

            {/* Tool Navigation */}
            <div className="bg-card rounded-2xl luxury-shadow p-6 mb-8">
              <h2 className="text-2xl font-playfair font-bold text-foreground mb-6 text-center">
                Choose Your Tool
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {tools?.map((tool) => (
                  <button
                    key={tool?.id}
                    onClick={() => setActiveTab(tool?.id)}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 text-left group ${
                      activeTab === tool?.id
                        ? 'border-primary bg-primary/5 luxury-shadow-hover'
                        : 'border-border hover:border-primary/50 bg-secondary hover:bg-secondary/80'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                      activeTab === tool?.id ? 'bg-primary/20' : `${tool?.bgColor} group-hover:scale-110`
                    }`}>
                      <Icon 
                        name={tool?.icon} 
                        size={24} 
                        className={activeTab === tool?.id ? 'text-primary' : tool?.color} 
                      />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {tool?.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {tool?.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Active Tool Component */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {renderActiveComponent()}
          </div>
        </section>

        {/* Features Overview */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">
                Why Choose Our Virtual Tools?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our cutting-edge technology and personalized approach make jewelry shopping 
                more confident, convenient, and enjoyable than ever before.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: 'Zap',
                  title: 'Advanced AR Technology',
                  description: 'State-of-the-art augmented reality for realistic try-on experiences',
                  stat: '96% accuracy rate'
                },
                {
                  icon: 'Users',
                  title: 'Personalized Recommendations',
                  description: 'AI-powered styling advice tailored to your unique preferences',
                  stat: '94% satisfaction'
                },
                {
                  icon: 'Shield',
                  title: 'Confident Shopping',
                  description: 'Reduce returns and increase confidence with accurate sizing',
                  stat: '40% fewer returns'
                },
                {
                  icon: 'Clock',
                  title: 'Save Time & Money',
                  description: 'Shop efficiently from home without multiple store visits',
                  stat: '2+ hours saved'
                }
              ]?.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature?.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature?.title}</h3>
                  <p className="text-muted-foreground mb-3">{feature?.description}</p>
                  <div className="text-primary font-semibold">{feature?.stat}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Showcase */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-6">
                  Powered by Cutting-Edge Technology
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: 'Eye',
                      title: 'Computer Vision',
                      description: 'Advanced facial recognition and tracking for precise jewelry placement'
                    },
                    {
                      icon: 'Cpu',
                      title: 'Machine Learning',
                      description: 'AI algorithms that learn your preferences and improve recommendations'
                    },
                    {
                      icon: 'Smartphone',
                      title: 'Cross-Platform',
                      description: 'Works seamlessly across all devices - mobile, tablet, and desktop'
                    },
                    {
                      icon: 'Palette',
                      title: 'Color Matching',
                      description: 'Accurate skin tone analysis for perfect metal and gemstone pairing'
                    }
                  ]?.map((tech, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={tech?.icon} size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{tech?.title}</h3>
                        <p className="text-muted-foreground">{tech?.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                    alt="Virtual Try-On Technology"
                    className="w-full h-64 object-cover rounded-xl luxury-shadow"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 luxury-shadow">
                    <div className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={20} className="text-green-500" />
                      <span className="font-semibold text-foreground">99.2% Uptime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">
              Ready to Transform Your Jewelry Shopping?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of satisfied customers who've discovered the perfect pieces 
              using our virtual tools. Start your personalized jewelry journey today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => setActiveTab('try-on')}
                iconName="Camera"
                iconPosition="left"
              >
                Try Virtual Try-On Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setActiveTab('tutorials')}
                iconName="Play"
                iconPosition="left"
              >
                Watch Tutorial Videos
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              No account required • Works on all devices • 100% free to use
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VirtualTryOnStylingTools;