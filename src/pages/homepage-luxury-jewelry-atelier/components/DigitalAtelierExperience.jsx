import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const DigitalAtelierExperience = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 1,
      title: "Virtual Try-On",
      subtitle: "See Before You Believe",
      description: "Experience our revolutionary AR technology that lets you try on any piece of jewelry with stunning realism. See how each piece complements your style before making a decision.",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=400&fit=crop&crop=center",
      icon: "Camera",
      features: ["Real-time AR fitting", "Multiple angle views", "Share with friends", "Save favorites"],
      cta: "Try Virtual Fitting",
      link: "/virtual-try-on-styling-tools",
      badge: "AR Enabled"
    },
    {
      id: 2,
      title: "Personal Concierge",
      subtitle: "Your Jewelry Expert",
      description: "Connect with our certified jewelry experts for personalized recommendations, styling advice, and exclusive access to limited collections. Your personal luxury experience awaits.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
      icon: "MessageCircle",
      features: ["Expert consultation", "Personalized recommendations", "Exclusive previews", "24/7 support"],
      cta: "Chat with Expert",
      link: "/personal-account-vip-member-sanctuary",
      badge: "VIP Service"
    },
    {
      id: 3,
      title: "360° Product Views",
      subtitle: "Every Detail Revealed",
      description: "Explore every facet, every sparkle, and every detail with our immersive 360° product photography. Zoom in to see the craftsmanship that makes each piece extraordinary.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop&crop=center",
      icon: "RotateCw",
      features: ["360° rotation", "Macro zoom", "Light simulation", "Detail annotations"],
      cta: "Explore Products",
      link: "/product-experience-immersive-jewelry-showcase",
      badge: "HD Quality"
    }
  ];

  const benefits = [
    {
      icon: "Clock",
      title: "Save Time",
      description: "Shop from home with confidence"
    },
    {
      icon: "Shield",
      title: "Risk-Free",
      description: "30-day return guarantee"
    },
    {
      icon: "Heart",
      title: "Personal Touch",
      description: "Tailored to your preferences"
    },
    {
      icon: "Zap",
      title: "Instant Access",
      description: "Available 24/7 worldwide"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Smartphone" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Digital Innovation</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            Your Digital Atelier
            <span className="block text-primary">Experience</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how technology enhances your jewelry journey with immersive experiences 
            that bring luxury shopping into the digital age.
          </p>
        </div>

        {/* Main Feature Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Feature Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              {features?.map((feature, index) => (
                <button
                  key={feature?.id}
                  onClick={() => setActiveFeature(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    index === activeFeature
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-muted-foreground hover:text-foreground hover:bg-primary/10'
                  }`}
                >
                  <Icon name={feature?.icon} size={18} />
                  <span className="text-sm font-medium">{feature?.title}</span>
                </button>
              ))}
            </div>

            {/* Active Feature Details */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                <span className="text-xs font-medium text-primary">
                  {features?.[activeFeature]?.badge}
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-playfair font-bold text-foreground mb-2">
                  {features?.[activeFeature]?.title}
                </h3>
                <p className="text-xl font-cormorant text-primary mb-4">
                  {features?.[activeFeature]?.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {features?.[activeFeature]?.description}
                </p>
              </div>

              {/* Feature List */}
              <div className="grid grid-cols-2 gap-3">
                {features?.[activeFeature]?.features?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link to={features?.[activeFeature]?.link}>
                <Button
                  variant="default"
                  size="lg"
                  iconName={features?.[activeFeature]?.icon}
                  iconPosition="left"
                  className="gold-gradient hover:luxury-shadow-hover"
                >
                  {features?.[activeFeature]?.cta}
                </Button>
              </Link>
            </div>
          </div>

          {/* Feature Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl luxury-shadow">
              <Image
                src={features?.[activeFeature]?.image}
                alt={features?.[activeFeature]?.title}
                className="w-full h-96 object-cover"
              />
              
              {/* Interactive Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <Icon name={features?.[activeFeature]?.icon} size={16} color="white" />
                      </div>
                      <span className="font-medium text-foreground">
                        {features?.[activeFeature]?.title} Active
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Experience the future of jewelry shopping
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full sparkle-animation"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/30 rounded-full gentle-bounce"></div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits?.map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 bg-background rounded-2xl luxury-shadow hover:luxury-shadow-hover transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={benefit?.icon} size={24} className="text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">
                {benefit?.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {benefit?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalAtelierExperience;