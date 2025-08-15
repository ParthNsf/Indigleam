import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OccasionStyling = () => {
  const [selectedOccasion, setSelectedOccasion] = useState('wedding');
  const [selectedLook, setSelectedLook] = useState(null);

  const occasions = [
    { id: 'wedding', name: 'Wedding', icon: 'Heart', color: 'text-rose-500' },
    { id: 'professional', name: 'Professional', icon: 'Briefcase', color: 'text-blue-500' },
    { id: 'date', name: 'Date Night', icon: 'Moon', color: 'text-purple-500' },
    { id: 'celebration', name: 'Celebration', icon: 'Sparkles', color: 'text-yellow-500' },
    { id: 'casual', name: 'Casual', icon: 'Sun', color: 'text-green-500' },
    { id: 'formal', name: 'Formal Event', icon: 'Crown', color: 'text-indigo-500' }
  ];

  const occasionStyles = {
    wedding: {
      title: "Wedding & Bridal",
      description: "Elegant pieces for your special day and celebrations",
      looks: [
        {
          id: 1,
          name: "Classic Bridal",
          description: "Timeless elegance for the bride",
          items: ["Pearl Drop Earrings", "Delicate Tennis Necklace", "Solitaire Ring"],
          price: 3200,
          image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
          tips: ["Choose pieces that complement your dress neckline", "Consider your hairstyle when selecting earrings", "Opt for comfortable pieces you can wear all day"]
        },
        {
          id: 2,
          name: "Modern Bride",
          description: "Contemporary style with clean lines",
          items: ["Geometric Studs", "Layered Chain Necklace", "Stackable Bands"],
          price: 2800,
          image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
          tips: ["Mix metals for a modern look", "Choose geometric shapes for contemporary appeal", "Layer different textures and finishes"]
        },
        {
          id: 3,
          name: "Vintage Romance",
          description: "Romantic vintage-inspired pieces",
          items: ["Art Deco Earrings", "Vintage Pearl Strand", "Antique-Style Ring"],
          price: 4100,
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
          tips: ["Look for intricate details and filigree work", "Choose pieces with historical charm", "Consider family heirloom integration"]
        }
      ]
    },
    professional: {
      title: "Professional & Business",
      description: "Sophisticated pieces for the workplace",
      looks: [
        {
          id: 4,
          name: "Executive Elegance",
          description: "Polished look for leadership roles",
          items: ["Classic Pearl Studs", "Simple Gold Chain", "Professional Watch"],
          price: 1850,
          image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop",
          tips: ["Keep it simple and refined", "Choose quality over quantity", "Avoid overly trendy pieces"]
        },
        {
          id: 5,
          name: "Creative Professional",
          description: "Stylish pieces for creative industries",
          items: ["Unique Geometric Earrings", "Layered Necklaces", "Statement Ring"],
          price: 1200,
          image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop",
          tips: ["Express personality while staying professional", "Mix textures and shapes", "Choose conversation starters"]
        }
      ]
    },
    date: {
      title: "Date Night & Romance",
      description: "Captivating pieces for romantic occasions",
      looks: [
        {
          id: 6,
          name: "Dinner Date Glam",
          description: "Sophisticated glamour for evening dates",
          items: ["Diamond Drop Earrings", "Delicate Pendant", "Cocktail Ring"],
          price: 2400,
          image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
          tips: ["Choose pieces that catch candlelight", "Consider your outfit\'s neckline", "Add subtle sparkle"]
        },
        {
          id: 7,
          name: "Casual Romance",
          description: "Effortless beauty for casual dates",
          items: ["Hoop Earrings", "Layered Chains", "Stackable Rings"],
          price: 890,
          image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
          tips: ["Keep it comfortable and natural", "Choose pieces you can move in", "Layer for visual interest"]
        }
      ]
    },
    celebration: {
      title: "Special Celebrations",
      description: "Statement pieces for memorable moments",
      looks: [
        {
          id: 8,
          name: "Birthday Celebration",
          description: "Festive pieces for birthday parties",
          items: ["Statement Earrings", "Bold Necklace", "Celebration Ring"],
          price: 3500,
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
          tips: ["Go bold with statement pieces", "Choose your birthstone", "Mix metals for fun"]
        },
        {
          id: 9,
          name: "Anniversary Style",
          description: "Romantic pieces for anniversaries",
          items: ["Heart Pendant", "Eternity Band", "Love Knot Earrings"],
          price: 2900,
          image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
          tips: ["Choose symbolic designs", "Consider matching sets", "Add personal engravings"]
        }
      ]
    },
    casual: {
      title: "Everyday Casual",
      description: "Comfortable pieces for daily wear",
      looks: [
        {
          id: 10,
          name: "Weekend Casual",
          description: "Relaxed style for weekends",
          items: ["Simple Studs", "Delicate Chain", "Everyday Ring"],
          price: 650,
          image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop",
          tips: ["Choose comfortable, lightweight pieces", "Opt for durable materials", "Keep it simple and versatile"]
        },
        {
          id: 11,
          name: "Boho Chic",
          description: "Free-spirited casual style",
          items: ["Feather Earrings", "Layered Chains", "Stackable Rings"],
          price: 480,
          image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop",
          tips: ["Mix textures and materials", "Layer different lengths", "Choose natural elements"]
        }
      ]
    },
    formal: {
      title: "Formal Events",
      description: "Elegant pieces for black-tie occasions",
      looks: [
        {
          id: 12,
          name: "Black Tie Elegance",
          description: "Sophisticated glamour for formal events",
          items: ["Chandelier Earrings", "Statement Necklace", "Cocktail Ring"],
          price: 4800,
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
          tips: ["Choose dramatic statement pieces", "Consider your gown\'s details", "Add maximum sparkle"]
        },
        {
          id: 13,
          name: "Gala Glamour",
          description: "Red carpet worthy pieces",
          items: ["Diamond Studs", "Tennis Necklace", "Eternity Band"],
          price: 6200,
          image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
          tips: ["Invest in classic pieces", "Choose high-quality stones", "Keep the focus on one statement piece"]
        }
      ]
    }
  };

  const currentOccasion = occasionStyles?.[selectedOccasion];

  return (
    <div className="bg-card rounded-2xl luxury-shadow overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-playfair font-bold text-foreground">Occasion Styling Guide</h3>
            <p className="text-sm text-muted-foreground mt-1">Curated looks for every special moment</p>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" size={24} className="text-primary" />
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Occasion Selector */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-foreground mb-4">Choose Your Occasion</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {occasions?.map((occasion) => (
              <button
                key={occasion?.id}
                onClick={() => setSelectedOccasion(occasion?.id)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 text-center ${
                  selectedOccasion === occasion?.id
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 bg-secondary'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                  selectedOccasion === occasion?.id ? 'bg-primary/20' : 'bg-background'
                }`}>
                  <Icon name={occasion?.icon} size={24} className={selectedOccasion === occasion?.id ? 'text-primary' : occasion?.color} />
                </div>
                <h5 className="font-medium text-foreground text-sm">{occasion?.name}</h5>
              </button>
            ))}
          </div>
        </div>

        {/* Occasion Content */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-playfair font-bold text-foreground mb-2">{currentOccasion?.title}</h4>
            <p className="text-muted-foreground">{currentOccasion?.description}</p>
          </div>

          {/* Looks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentOccasion?.looks?.map((look) => (
              <div key={look?.id} className="bg-secondary rounded-xl overflow-hidden hover:luxury-shadow-hover transition-all duration-300">
                <img
                  src={look?.image}
                  alt={look?.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h5 className="text-lg font-semibold text-foreground mb-2">{look?.name}</h5>
                  <p className="text-sm text-muted-foreground mb-4">{look?.description}</p>
                  
                  <div className="mb-4">
                    <h6 className="text-sm font-medium text-foreground mb-2">Includes:</h6>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {look?.items?.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Icon name="Check" size={14} className="text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-primary">${look?.price?.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground">{look?.items?.length} pieces</span>
                  </div>

                  <div className="flex space-x-2 mb-4">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1"
                      onClick={() => setSelectedLook(look)}
                      iconName="Eye"
                    >
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      iconName="Camera"
                    >
                      Try On
                    </Button>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="ShoppingBag"
                  >
                    Shop This Look
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Look Details */}
        {selectedLook && (
          <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-foreground">{selectedLook?.name} - Styling Tips</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedLook(null)}
                iconName="X"
              >
                Close
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedLook?.image}
                  alt={selectedLook?.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div>
                <h5 className="font-semibold text-foreground mb-3">Expert Styling Tips:</h5>
                <ul className="space-y-2">
                  {selectedLook?.tips?.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Icon name="Lightbulb" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 flex space-x-3">
                  <Button variant="default" size="sm" iconName="ShoppingBag">
                    Add All to Cart
                  </Button>
                  <Button variant="outline" size="sm" iconName="Heart">
                    Save Look
                  </Button>
                  <Button variant="outline" size="sm" iconName="Share">
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* General Styling Tips */}
        <div className="mt-8 bg-accent/10 rounded-xl p-6 border border-accent/20">
          <div className="flex items-start space-x-3">
            <Icon name="Star" size={24} className="text-accent mt-1" />
            <div>
              <h5 className="font-semibold text-foreground mb-2">Universal Styling Guidelines</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Consider your outfit's color palette when choosing metals</li>
                  <li>• Balance statement pieces with delicate accents</li>
                  <li>• Match the formality of jewelry to the occasion</li>
                  <li>• Consider your personal comfort and lifestyle</li>
                </ul>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Layer different lengths for visual interest</li>
                  <li>• Choose pieces that complement your body type</li>
                  <li>• Don't be afraid to mix metals for modern appeal</li>
                  <li>• Invest in versatile pieces that work for multiple occasions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OccasionStyling;