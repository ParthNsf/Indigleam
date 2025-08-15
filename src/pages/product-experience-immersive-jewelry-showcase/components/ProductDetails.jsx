import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ProductDetails = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0]?.value || '');
  const [selectedFinish, setSelectedFinish] = useState(product?.finishes?.[0]?.value || '');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  const tabs = [
    { id: 'details', label: 'Details', icon: 'Info' },
    { id: 'specifications', label: 'Specifications', icon: 'FileText' },
    { id: 'craftsmanship', label: 'Craftsmanship', icon: 'Award' },
    { id: 'care', label: 'Care Guide', icon: 'Heart' }
  ];

  const specifications = [
    { label: 'Metal', value: product?.metal },
    { label: 'Purity', value: product?.purity },
    { label: 'Weight', value: product?.weight },
    { label: 'Dimensions', value: product?.dimensions },
    { label: 'Stone Type', value: product?.stoneType },
    { label: 'Carat Weight', value: product?.caratWeight },
    { label: 'Clarity', value: product?.clarity },
    { label: 'Color Grade', value: product?.colorGrade }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              {product?.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Key Features</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {product?.features?.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} color="var(--color-primary)" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Occasion</h4>
                <div className="flex flex-wrap gap-2">
                  {product?.occasions?.map((occasion, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {occasion}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'specifications':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {specifications?.filter(spec => spec?.value)?.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">{spec?.label}</span>
                  <span className="font-medium text-foreground">{spec?.value}</span>
                </div>
              ))}
            </div>
            {product?.certificate && (
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Award" size={20} color="var(--color-primary)" />
                  <div>
                    <h4 className="font-semibold text-foreground">Certified Authentic</h4>
                    <p className="text-sm text-muted-foreground">
                      Certificate #{product?.certificate} from {product?.certifyingBody}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      
      case 'craftsmanship':
        return (
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              {product?.craftsmanshipStory}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Users" size={24} color="var(--color-primary)" />
                </div>
                <h4 className="font-semibold text-foreground">Master Artisans</h4>
                <p className="text-sm text-muted-foreground">
                  Crafted by skilled jewelers with decades of experience
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Clock" size={24} color="var(--color-primary)" />
                </div>
                <h4 className="font-semibold text-foreground">Time Investment</h4>
                <p className="text-sm text-muted-foreground">
                  {product?.craftingTime} hours of meticulous handwork
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Gem" size={24} color="var(--color-primary)" />
                </div>
                <h4 className="font-semibold text-foreground">Premium Materials</h4>
                <p className="text-sm text-muted-foreground">
                  Ethically sourced precious metals and gemstones
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'care':
        return (
          <div className="space-y-4">
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3 flex items-center space-x-2">
                <Icon name="Heart" size={18} color="var(--color-primary)" />
                <span>Care Instructions</span>
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {product?.careInstructions?.map((instruction, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                    <span>{instruction}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Storage Tips</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Store in original jewelry box</li>
                  <li>• Keep away from direct sunlight</li>
                  <li>• Separate from other jewelry</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Professional Service</h4>
                <p className="text-sm text-muted-foreground">
                  Complimentary cleaning and inspection every 6 months at any LuxeJewels location.
                </p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Product Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                {product?.collection}
              </span>
              {product?.isNew && (
                <span className="px-3 py-1 bg-success/10 text-success text-xs rounded-full font-medium">
                  New Arrival
                </span>
              )}
            </div>
            <h1 className="text-3xl font-playfair font-bold text-foreground">
              {product?.name}
            </h1>
            <p className="text-muted-foreground">
              {product?.shortDescription}
            </p>
          </div>
          
          <Button variant="ghost" size="sm" iconName="Heart">
          </Button>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-4">
          <span className="text-3xl font-bold text-foreground">
            ${product?.price?.toLocaleString()}
          </span>
          {product?.originalPrice && (
            <span className="text-xl text-muted-foreground line-through">
              ${product?.originalPrice?.toLocaleString()}
            </span>
          )}
          {product?.financing && (
            <span className="text-sm text-primary">
              or ${product?.financing?.monthlyPayment}/month
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={16}
                color={i < Math.floor(product?.rating) ? "var(--color-primary)" : "var(--color-muted-foreground)"}
                className={i < Math.floor(product?.rating) ? "fill-current" : ""}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {product?.rating} ({product?.reviewCount} reviews)
          </span>
        </div>
      </div>
      {/* Product Options */}
      <div className="space-y-4 border-t border-border pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product?.sizes && (
            <Select
              label="Size"
              options={product?.sizes}
              value={selectedSize}
              onChange={setSelectedSize}
            />
          )}
          
          {product?.finishes && (
            <Select
              label="Finish"
              options={product?.finishes}
              value={selectedFinish}
              onChange={setSelectedFinish}
            />
          )}
        </div>

        {/* Quantity */}
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-foreground">Quantity:</span>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              iconName="Minus"
            >
            </Button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setQuantity(quantity + 1)}
              iconName="Plus"
            >
            </Button>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="space-y-3 border-t border-border pt-6">
        <Button
          variant="default"
          size="lg"
          fullWidth
          iconName="ShoppingBag"
          iconPosition="left"
        >
          Add to Cart - ${(product?.price * quantity)?.toLocaleString()}
        </Button>
        
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" iconName="Heart" iconPosition="left">
            Save to Wishlist
          </Button>
          <Button variant="outline" iconName="Share2" iconPosition="left">
            Share
          </Button>
        </div>
      </div>
      {/* Product Information Tabs */}
      <div className="border-t border-border pt-6">
        <div className="flex space-x-1 mb-6 overflow-x-auto">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === tab?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        <div className="min-h-[200px]">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;