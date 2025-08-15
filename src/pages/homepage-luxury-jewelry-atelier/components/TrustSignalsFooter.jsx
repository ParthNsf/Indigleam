import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';


const TrustSignalsFooter = () => {
  const trustBadges = [
    {
      name: "SSL Secured",
      icon: "Shield",
      description: "256-bit encryption"
    },
    {
      name: "GIA Certified",
      icon: "Award",
      description: "Gemological Institute"
    },
    {
      name: "Ethical Sourcing",
      icon: "Leaf",
      description: "Conflict-free diamonds"
    },
    {
      name: "Lifetime Warranty",
      icon: "Clock",
      description: "Craftsmanship guarantee"
    }
  ];

  const paymentMethods = [
    "Visa", "Mastercard", "American Express", "PayPal", "Apple Pay", "Google Pay"
  ];

  const certifications = [
    {
      name: "Better Business Bureau",
      rating: "A+",
      icon: "Star"
    },
    {
      name: "Trustpilot",
      rating: "4.9/5",
      icon: "Heart"
    },
    {
      name: "Google Reviews",
      rating: "4.8/5",
      icon: "MessageCircle"
    }
  ];

  const footerLinks = {
    "Shop": [
      { name: "All Collections", path: "/shop-collections-interactive-jewelry-gallery" },
      { name: "Engagement Rings", path: "/shop-collections-interactive-jewelry-gallery" },
      { name: "Necklaces", path: "/shop-collections-interactive-jewelry-gallery" },
      { name: "Earrings", path: "/shop-collections-interactive-jewelry-gallery" },
      { name: "Bracelets", path: "/shop-collections-interactive-jewelry-gallery" },
      { name: "Watches", path: "/shop-collections-interactive-jewelry-gallery" }
    ],
    "Services": [
      { name: "Virtual Try-On", path: "/virtual-try-on-styling-tools" },
      { name: "Personal Concierge", path: "/personal-account-vip-member-sanctuary" },
      { name: "Custom Design", path: "/product-experience-immersive-jewelry-showcase" },
      { name: "Jewelry Care", path: "/personal-account-vip-member-sanctuary" },
      { name: "Sizing Guide", path: "/personal-account-vip-member-sanctuary" },
      { name: "Engraving", path: "/product-experience-immersive-jewelry-showcase" }
    ],
    "About": [
      { name: "Our Story", path: "/homepage-luxury-jewelry-atelier" },
      { name: "Craftsmanship", path: "/homepage-luxury-jewelry-atelier" },
      { name: "Sustainability", path: "/homepage-luxury-jewelry-atelier" },
      { name: "Press", path: "/homepage-luxury-jewelry-atelier" },
      { name: "Careers", path: "/homepage-luxury-jewelry-atelier" },
      { name: "Reviews", path: "/homepage-luxury-jewelry-atelier" }
    ],
    "Support": [
      { name: "Contact Us", path: "/personal-account-vip-member-sanctuary" },
      { name: "Shipping Info", path: "/secure-checkout-luxury-purchase-experience" },
      { name: "Returns", path: "/personal-account-vip-member-sanctuary" },
      { name: "Size Guide", path: "/personal-account-vip-member-sanctuary" },
      { name: "Care Instructions", path: "/personal-account-vip-member-sanctuary" },
      { name: "FAQ", path: "/personal-account-vip-member-sanctuary" }
    ]
  };

  const currentYear = new Date()?.getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border/30">
      {/* Trust Signals Section */}
      <div className="py-12 border-b border-border/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
              Your Trust is Our Priority
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing you with the highest level of security, 
              authenticity, and service excellence.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {trustBadges?.map((badge, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background rounded-2xl luxury-shadow hover:luxury-shadow-hover transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={badge?.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {badge?.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {badge?.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            {certifications?.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-background rounded-xl px-6 py-3 luxury-shadow">
                <Icon name={cert?.icon} size={20} className="text-primary" />
                <div>
                  <div className="font-medium text-foreground text-sm">
                    {cert?.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {cert?.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Payment Methods */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">Secure Payment Methods</p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {paymentMethods?.map((method, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg px-4 py-2 luxury-shadow text-sm font-medium text-foreground"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <Link 
                to="/homepage-luxury-jewelry-atelier" 
                className="flex items-center space-x-3"
              >
                <div className="relative">
                  <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center">
                    <Icon name="Gem" size={28} color="white" strokeWidth={2} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full sparkle-animation"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-playfair font-bold text-foreground">LuxeJewels</span>
                  <span className="text-sm font-cormorant text-muted-foreground -mt-1">Intimate Digital Luxury</span>
                </div>
              </Link>

              <p className="text-muted-foreground leading-relaxed">
                Redefining luxury jewelry through accessible elegance, ethical practices, 
                and innovative digital experiences. Every piece tells your story.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {['Instagram', 'Facebook', 'Twitter', 'Youtube']?.map((social, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300 luxury-shadow"
                  >
                    <Icon name={social} size={18} />
                  </button>
                ))}
              </div>

              {/* Newsletter */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Stay Updated</h4>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-300">
                    <Icon name="Send" size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks)?.map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h4 className="font-semibold text-foreground">{category}</h4>
                <ul className="space-y-2">
                  {links?.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link?.path}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                      >
                        {link?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="py-6 border-t border-border/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} LuxeJewels. All rights reserved. | Privacy Policy | Terms of Service
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span>Worldwide Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-primary" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-primary" />
                <span>Secure Shopping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TrustSignalsFooter;