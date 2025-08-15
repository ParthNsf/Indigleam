import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';


const QuickActions = () => {
  const quickActions = [
    {
      title: "Virtual Try-On",
      description: "Experience AR jewelry fitting",
      icon: "Camera",
      link: "/virtual-try-on-styling-tools",
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Browse Collections",
      description: "Explore new arrivals",
      icon: "Gem",
      link: "/shop-collections-interactive-jewelry-gallery",
      color: "bg-accent/10 text-accent"
    },
    {
      title: "Book Consultation",
      description: "Personal styling session",
      icon: "Calendar",
      action: "book",
      color: "bg-success/10 text-success"
    },
    {
      title: "Care Guide",
      description: "Jewelry maintenance tips",
      icon: "Heart",
      action: "care",
      color: "bg-warning/10 text-warning"
    }
  ];

  const handleAction = (action) => {
    if (action === 'book') {
      // Handle booking consultation
      console.log('Booking consultation...');
    } else if (action === 'care') {
      // Handle care guide
      console.log('Opening care guide...');
    }
  };

  return (
    <div className="bg-card rounded-2xl p-6 luxury-shadow mb-8">
      <h2 className="text-xl font-playfair font-semibold text-foreground mb-6">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions?.map((action, index) => (
          <div key={index}>
            {action?.link ? (
              <Link to={action?.link} className="block">
                <div className="p-4 rounded-xl border border-border hover:luxury-shadow-hover transition-all duration-300 group cursor-pointer">
                  <div className={`w-12 h-12 rounded-lg ${action?.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={action?.icon} size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{action?.title}</h3>
                  <p className="text-sm text-muted-foreground">{action?.description}</p>
                </div>
              </Link>
            ) : (
              <div 
                onClick={() => handleAction(action?.action)}
                className="p-4 rounded-xl border border-border hover:luxury-shadow-hover transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg ${action?.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={action?.icon} size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{action?.title}</h3>
                <p className="text-sm text-muted-foreground">{action?.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;