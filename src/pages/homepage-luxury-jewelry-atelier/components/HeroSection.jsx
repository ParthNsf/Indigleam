import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const heroSlides = [
    {
      id: 1,
      title: "Eternal Radiance Collection",
      subtitle: "Where Heritage Meets Modern Elegance",
      description: "Discover our signature diamond collection featuring ethically sourced stones and contemporary designs that celebrate life's precious moments.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop&crop=center",
      cta: "Explore Collection",
      badge: "New Arrival"
    },
    {
      id: 2,
      title: "Artisan Crafted Excellence",
      subtitle: "Handcrafted by Master Jewelers",
      description: "Each piece tells a story of meticulous craftsmanship, combining traditional techniques with innovative design for the modern connoisseur.",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1920&h=1080&fit=crop&crop=center",
      cta: "View Craftsmanship",
      badge: "Limited Edition"
    },
    {
      id: 3,
      title: "Virtual Try-On Experience",
      subtitle: "See Before You Believe",
      description: "Revolutionary AR technology lets you experience our jewelry in stunning detail from the comfort of your home.",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&h=1080&fit=crop&crop=center",
      cta: "Try Now",
      badge: "AR Enabled"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [heroSlides?.length]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides?.length) % heroSlides?.length);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-background">
      {/* Background Video Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent z-10"></div>
      {/* Hero Slides */}
      <div className="relative h-full">
        {heroSlides?.map((slide, index) => (
          <div
            key={slide?.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <Image
              src={slide?.image}
              alt={slide?.title}
              className="w-full h-full object-cover"
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent z-20">
              <div className="container mx-auto px-6 lg:px-8 h-full flex items-center">
                <div className="max-w-2xl">
                  {/* Badge */}
                  <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                    <div className="w-2 h-2 bg-primary rounded-full sparkle-animation"></div>
                    <span className="text-sm font-medium text-primary">{slide?.badge}</span>
                  </div>

                  {/* Title */}
                  <h1 className="text-5xl lg:text-7xl font-playfair font-bold text-foreground mb-4 leading-tight">
                    {slide?.title}
                  </h1>

                  {/* Subtitle */}
                  <h2 className="text-xl lg:text-2xl font-cormorant text-muted-foreground mb-6">
                    {slide?.subtitle}
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                    {slide?.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="default"
                      size="lg"
                      iconName="Sparkles"
                      iconPosition="left"
                      className="gold-gradient hover:luxury-shadow-hover"
                    >
                      {slide?.cta}
                    </Button>
                    
                    <Link to="/virtual-try-on-styling-tools">
                      <Button
                        variant="outline"
                        size="lg"
                        iconName="Camera"
                        iconPosition="left"
                        className="border-primary/30 hover:bg-primary/5"
                      >
                        Virtual Try-On
                      </Button>
                    </Link>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center space-x-6 mt-8 pt-8 border-t border-border/30">
                    <div className="flex items-center space-x-2">
                      <Icon name="Shield" size={20} className="text-primary" />
                      <span className="text-sm text-muted-foreground">Certified Authentic</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Truck" size={20} className="text-primary" />
                      <span className="text-sm text-muted-foreground">Free Shipping</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="RotateCcw" size={20} className="text-primary" />
                      <span className="text-sm text-muted-foreground">30-Day Returns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
          >
            <Icon name="ChevronLeft" size={20} className="text-foreground" />
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {heroSlides?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary scale-125' :'bg-background/60 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
          >
            <Icon name="ChevronRight" size={20} className="text-foreground" />
          </button>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-30">
        <div className="flex flex-col items-center space-y-2 text-muted-foreground">
          <span className="text-sm font-medium transform rotate-90 origin-center">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent gentle-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;