import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SocialProofTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const recentPurchases = [
    {
      id: 1,
      customer: "Sarah M.",
      location: "New York, NY",
      item: "Eternal Radiance Diamond Ring",
      timeAgo: "2 minutes ago",
      verified: true
    },
    {
      id: 2,
      customer: "Michael R.",
      location: "Los Angeles, CA",
      item: "Heritage Gold Necklace",
      timeAgo: "5 minutes ago",
      verified: true
    },
    {
      id: 3,
      customer: "Emma L.",
      location: "Chicago, IL",
      item: "Modern Minimalist Earrings",
      timeAgo: "8 minutes ago",
      verified: true
    },
    {
      id: 4,
      customer: "David K.",
      location: "Miami, FL",
      item: "Classic Diamond Bracelet",
      timeAgo: "12 minutes ago",
      verified: true
    },
    {
      id: 5,
      customer: "Jessica T.",
      location: "Seattle, WA",
      item: "Vintage Inspired Ring Set",
      timeAgo: "15 minutes ago",
      verified: true
    },
    {
      id: 6,
      customer: "Robert H.",
      location: "Boston, MA",
      item: "Platinum Wedding Band",
      timeAgo: "18 minutes ago",
      verified: true
    }
  ];

  const stats = [
    {
      icon: "Users",
      value: "50,000+",
      label: "Happy Customers"
    },
    {
      icon: "Star",
      value: "4.9/5",
      label: "Average Rating"
    },
    {
      icon: "Award",
      value: "15+",
      label: "Industry Awards"
    },
    {
      icon: "Shield",
      value: "100%",
      label: "Authentic Guarantee"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recentPurchases?.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [recentPurchases?.length]);

  return (
    <section className="py-12 bg-secondary/20 border-y border-border/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Recent Purchases Ticker */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="text-lg font-semibold text-foreground">Recent Purchases</h3>
              <span className="text-sm text-muted-foreground">Live Updates</span>
            </div>

            <div className="relative h-20 overflow-hidden">
              {recentPurchases?.map((purchase, index) => (
                <div
                  key={purchase?.id}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === currentIndex
                      ? 'opacity-100 transform translate-y-0'
                      : index < currentIndex
                      ? 'opacity-0 transform -translate-y-full'
                      : 'opacity-0 transform translate-y-full'
                  }`}
                >
                  <div className="flex items-center space-x-4 p-4 bg-background rounded-xl luxury-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="ShoppingBag" size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-foreground">{purchase?.customer}</span>
                        {purchase?.verified && (
                          <Icon name="BadgeCheck" size={16} className="text-primary" />
                        )}
                        <span className="text-sm text-muted-foreground">from {purchase?.location}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        purchased <span className="text-foreground font-medium">{purchase?.item}</span>
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {purchase?.timeAgo}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Showing verified purchases only</span>
              <div className="flex items-center space-x-1">
                <Icon name="Eye" size={14} />
                <span>127 people viewing now</span>
              </div>
            </div>
          </div>

          {/* Trust Statistics */}
          <div className="grid grid-cols-2 gap-6">
            {stats?.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background rounded-xl luxury-shadow hover:luxury-shadow-hover transition-all duration-300"
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
        </div>
      </div>
    </section>
  );
};

export default SocialProofTicker;