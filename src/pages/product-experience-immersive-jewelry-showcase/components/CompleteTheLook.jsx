import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CompleteTheLook = ({ currentProduct }) => {
  const [selectedLook, setSelectedLook] = useState(0);

  const looks = [
    {
      id: 1,
      name: "Elegant Evening",
      description: "Perfect for formal occasions and special events",
      influencer: "Sarah Chen",
      influencerImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      totalPrice: 2850,
      items: [
        {
          id: currentProduct?.id,
          name: currentProduct?.name,
          price: currentProduct?.price,
          image: currentProduct?.mainImage,
          isCurrentProduct: true
        },
        {
          id: 2,
          name: "Diamond Tennis Bracelet",
          price: 1200,
          image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop"
        },
        {
          id: 3,
          name: "Pearl Drop Earrings",
          price: 450,
          image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=300&h=300&fit=crop"
        }
      ]
    },
    {
      id: 2,
      name: "Modern Minimalist",
      description: "Clean lines for contemporary style",
      influencer: "Emma Rodriguez",
      influencerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      totalPrice: 2200,
      items: [
        {
          id: currentProduct?.id,
          name: currentProduct?.name,
          price: currentProduct?.price,
          image: currentProduct?.mainImage,
          isCurrentProduct: true
        },
        {
          id: 4,
          name: "Geometric Ring",
          price: 380,
          image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop"
        },
        {
          id: 5,
          name: "Delicate Chain Bracelet",
          price: 320,
          image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop"
        }
      ]
    },
    {
      id: 3,
      name: "Vintage Romance",
      description: "Timeless pieces with romantic appeal",
      influencer: "Isabella Thompson",
      influencerImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      totalPrice: 3100,
      items: [
        {
          id: currentProduct?.id,
          name: currentProduct?.name,
          price: currentProduct?.price,
          image: currentProduct?.mainImage,
          isCurrentProduct: true
        },
        {
          id: 6,
          name: "Vintage Rose Gold Ring",
          price: 680,
          image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=300&h=300&fit=crop"
        },
        {
          id: 7,
          name: "Art Deco Brooch",
          price: 520,
          image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop"
        }
      ]
    }
  ];

  const currentLook = looks?.[selectedLook];
  const complementaryItems = currentLook?.items?.filter(item => !item?.isCurrentProduct);

  return (
    <div className="bg-card rounded-2xl p-6 luxury-shadow">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-playfair font-semibold text-foreground">
            Complete the Look
          </h3>
          <p className="text-muted-foreground">
            Curated styling suggestions from fashion influencers
          </p>
        </div>

        {/* Look Selector */}
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {looks?.map((look, index) => (
            <button
              key={look?.id}
              onClick={() => setSelectedLook(index)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedLook === index
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {look?.name}
            </button>
          ))}
        </div>

        {/* Current Look */}
        <div className="space-y-4">
          {/* Influencer Info */}
          <div className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg">
            <Image
              src={currentLook?.influencerImage}
              alt={currentLook?.influencer}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-foreground">{currentLook?.influencer}</h4>
              <p className="text-sm text-muted-foreground">{currentLook?.description}</p>
            </div>
            <Button variant="ghost" size="sm" iconName="Instagram">
            </Button>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentLook?.items?.map((item, index) => (
              <div
                key={item?.id}
                className={`relative bg-white rounded-lg p-4 border-2 transition-all duration-300 ${
                  item?.isCurrentProduct
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:luxury-shadow'
                }`}
              >
                {item?.isCurrentProduct && (
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                    Current
                  </div>
                )}
                
                <div className="aspect-square mb-3 overflow-hidden rounded-lg">
                  <Image
                    src={item?.image}
                    alt={item?.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <h5 className="font-medium text-foreground text-sm line-clamp-2">
                    {item?.name}
                  </h5>
                  <p className="font-semibold text-primary">
                    ${item?.price?.toLocaleString()}
                  </p>
                  
                  {!item?.isCurrentProduct && (
                    <Button
                      variant="outline"
                      size="sm"
                      fullWidth
                      iconName="Plus"
                      iconPosition="left"
                    >
                      Add to Cart
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Look Summary */}
          <div className="bg-muted/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-foreground">Complete Look Total</h4>
              <span className="text-xl font-bold text-primary">
                ${currentLook?.totalPrice?.toLocaleString()}
              </span>
            </div>
            
            <div className="flex space-x-3">
              <Button
                variant="default"
                className="flex-1"
                iconName="ShoppingBag"
                iconPosition="left"
              >
                Add All to Cart
              </Button>
              <Button
                variant="outline"
                iconName="Heart"
              >
              </Button>
              <Button
                variant="outline"
                iconName="Share2"
              >
              </Button>
            </div>
          </div>

          {/* Styling Tips */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <h4 className="font-semibold text-foreground mb-2 flex items-center space-x-2">
              <Icon name="Lightbulb" size={18} color="var(--color-primary)" />
              <span>Styling Tip</span>
            </h4>
            <p className="text-sm text-muted-foreground">
              {currentLook?.name === "Elegant Evening"&& "Layer these pieces for maximum impact. The necklace should sit just above the neckline, while the bracelet adds subtle sparkle to your wrist movements."
              }
              {currentLook?.name === "Modern Minimalist" && "Keep the focus on clean lines and geometric shapes. These pieces work beautifully with structured clothing and neutral colors."
              }
              {currentLook?.name === "Vintage Romance" && "Mix metals thoughtfully - the warm tones of rose gold complement the vintage aesthetic. Perfect for garden parties or romantic dinners."
              }
            </p>
          </div>
        </div>

        {/* Related Collections */}
        <div className="border-t border-border pt-4">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-foreground">Explore More Styles</h4>
            <Link
              to="/shop-collections-interactive-jewelry-gallery"
              className="text-primary hover:text-primary/80 text-sm font-medium flex items-center space-x-1"
            >
              <span>View All</span>
              <Icon name="ArrowRight" size={14} />
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-3 mt-3">
            {["Bridal Collection", "Everyday Elegance", "Statement Pieces"]?.map((collection, index) => (
              <Link
                key={index}
                to="/shop-collections-interactive-jewelry-gallery"
                className="text-center p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-300"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Icon name="Gem" size={16} color="var(--color-primary)" />
                </div>
                <span className="text-xs text-muted-foreground">{collection}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteTheLook;