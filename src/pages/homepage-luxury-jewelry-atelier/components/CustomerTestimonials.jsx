import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CustomerTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      location: "New York, NY",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      title: "Exceptional Quality & Service",
      content: `The virtual try-on feature was incredible - I could see exactly how the diamond earrings would look before purchasing. The quality exceeded my expectations, and the personal concierge service made me feel like royalty. This is luxury shopping redefined.`,
      purchase: "Eternal Radiance Diamond Earrings",
      verified: true,
      date: "December 2024"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      location: "Los Angeles, CA",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      title: "Perfect Engagement Ring Experience",
      content: `Finding the perfect engagement ring was stressful until I discovered LuxeJewels. The 360° product views and expert consultation helped me choose a ring that was absolutely perfect. My fiancée was speechless - in the best way possible.`,
      purchase: "Heritage Gold Engagement Ring",
      verified: true,
      date: "November 2024"
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "Chicago, IL",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      title: "Sustainable Luxury at Its Finest",
      content: `I love that LuxeJewels combines luxury with ethical practices. The craftsmanship is impeccable, and knowing that my jewelry is responsibly sourced makes it even more special. The modern minimalist collection perfectly matches my style.`,
      purchase: "Modern Minimalist Necklace Set",
      verified: true,
      date: "January 2025"
    },
    {
      id: 4,
      name: "David Chen",
      location: "San Francisco, CA",
      avatar: "https://randomuser.me/api/portraits/men/35.jpg",
      rating: 5,
      title: "Seamless Digital Experience",
      content: `The entire shopping experience was flawless. From browsing collections to the secure checkout process, everything felt premium yet accessible. The AR try-on technology is revolutionary - it's like having a personal jewelry store at home.`,
      purchase: "Classic Diamond Watch",
      verified: true,
      date: "December 2024"
    }
  ];

  const stats = [
    { value: "4.9", label: "Average Rating", icon: "Star" },
    { value: "50K+", label: "Happy Customers", icon: "Users" },
    { value: "98%", label: "Satisfaction Rate", icon: "Heart" },
    { value: "24/7", label: "Expert Support", icon: "MessageCircle" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="MessageSquare" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Customer Stories</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            What Our Customers
            <span className="block text-primary">Are Saying</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real customers who have experienced the LuxeJewels difference. 
            Every review is verified and authentic.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats?.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-background rounded-2xl luxury-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat?.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            {testimonials?.map((testimonial, index) => (
              <div
                key={testimonial?.id}
                className={`transition-all duration-700 ${
                  index === currentTestimonial
                    ? 'opacity-100 transform translate-x-0'
                    : index < currentTestimonial
                    ? 'opacity-0 transform -translate-x-full absolute inset-0'
                    : 'opacity-0 transform translate-x-full absolute inset-0'
                }`}
              >
                <div className="bg-background rounded-3xl p-8 lg:p-12 luxury-shadow">
                  {/* Quote Icon */}
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Icon name="Quote" size={32} className="text-primary" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    <div className="flex space-x-1">
                      {[...Array(testimonial?.rating)]?.map((_, i) => (
                        <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-playfair font-bold text-foreground text-center mb-6">
                    {testimonial?.title}
                  </h3>

                  {/* Content */}
                  <blockquote className="text-lg text-muted-foreground text-center leading-relaxed mb-8 max-w-3xl mx-auto">
                    "{testimonial?.content}"
                  </blockquote>

                  {/* Customer Info */}
                  <div className="flex items-center justify-center space-x-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Image
                          src={testimonial?.avatar}
                          alt={testimonial?.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        {testimonial?.verified && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                            <Icon name="Check" size={12} color="white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial?.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial?.location}
                        </div>
                      </div>
                    </div>

                    <div className="hidden lg:block w-px h-12 bg-border"></div>

                    <div className="text-center">
                      <div className="text-sm font-medium text-foreground">
                        Purchased
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial?.purchase}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {testimonial?.date}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <Icon name="ChevronLeft" size={20} className="text-foreground" />
            </button>

            {/* Indicators */}
            <div className="flex space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-primary scale-125' :'bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <Icon name="ChevronRight" size={20} className="text-foreground" />
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-16 border-t border-border/30">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Icon name="Shield" size={20} className="text-primary" />
            <span className="text-sm">Verified Reviews</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Icon name="Award" size={20} className="text-primary" />
            <span className="text-sm">Trustpilot Excellent</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Icon name="Users" size={20} className="text-primary" />
            <span className="text-sm">50,000+ Happy Customers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;