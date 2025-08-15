import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ManifestoSection = () => {
  const principles = [
    {
      icon: "Gem",
      title: "Accessible Luxury",
      description: "Premium quality jewelry that doesn't compromise on craftsmanship while remaining attainable for modern lifestyles."
    },
    {
      icon: "Heart",
      title: "Emotional Connection",
      description: "Every piece is designed to celebrate life's precious moments and become part of your personal story."
    },
    {
      icon: "Shield",
      title: "Ethical Excellence",
      description: "Responsibly sourced materials and transparent practices that honor both artisans and the environment."
    },
    {
      icon: "Sparkles",
      title: "Innovation Heritage",
      description: "Timeless designs enhanced by cutting-edge technology for a truly modern luxury experience."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                <Icon name="Crown" size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Our Philosophy</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground leading-tight">
                Accessible Luxury
                <span className="block text-primary">Redefined</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                At LuxeJewels, we believe luxury should inspire, not intimidate. We've created a new paradigm where Cartier's heritage craftsmanship meets Zara's modern accessibility, making fine jewelry a natural 
                part of your everyday elegance.
              </p>
            </div>

            {/* Manifesto Quote */}
            <div className="relative">
              <div className="absolute -left-4 -top-2">
                <Icon name="Quote" size={32} className="text-primary/20" />
              </div>
              <blockquote className="text-xl lg:text-2xl font-cormorant italic text-foreground leading-relaxed pl-8">
                "Every piece tells your story. Luxury that fits your life. 
                Crafted for your moments."
              </blockquote>
              <cite className="block text-right text-muted-foreground mt-4 font-medium">
                — LuxeJewels Design Philosophy
              </cite>
            </div>

            {/* Principles Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              {principles?.map((principle, index) => (
                <div
                  key={index}
                  className="group p-6 bg-background rounded-2xl luxury-shadow hover:luxury-shadow-hover transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon name={principle?.icon} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {principle?.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {principle?.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-3xl luxury-shadow">
              <Image
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=1000&fit=crop&crop=center"
                alt="Luxury jewelry craftsmanship"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent">
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-6 luxury-shadow">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Icon name="Award" size={24} color="white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">Master Crafted</h4>
                        <p className="text-sm text-muted-foreground">Since 2018</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Each piece undergoes 47 quality checkpoints before reaching you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-8 -right-8 bg-background rounded-2xl p-6 luxury-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-background rounded-2xl p-6 luxury-shadow">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">4.9★</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 -left-4 w-8 h-8 bg-primary/20 rounded-full sparkle-animation"></div>
            <div className="absolute bottom-1/3 -right-6 w-6 h-6 bg-accent/30 rounded-full gentle-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;