import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InvestmentValue = ({ product }) => {
  const [activeTab, setActiveTab] = useState('value');

  const tabs = [
    { id: 'value', label: 'Investment Value', icon: 'TrendingUp' },
    { id: 'care', label: 'Care Guide', icon: 'Heart' },
    { id: 'warranty', label: 'Warranty', icon: 'Shield' }
  ];

  const valueMetrics = [
    {
      label: 'Current Market Value',
      value: `$${product?.price?.toLocaleString()}`,
      change: '+12%',
      trend: 'up',
      description: 'Based on recent comparable sales'
    },
    {
      label: 'Historical Appreciation',
      value: '8.5% annually',
      change: '+2.1%',
      trend: 'up',
      description: 'Average over past 5 years'
    },
    {
      label: 'Rarity Score',
      value: '9.2/10',
      change: 'Rare',
      trend: 'neutral',
      description: 'Limited production piece'
    },
    {
      label: 'Resale Potential',
      value: '85-90%',
      change: 'Excellent',
      trend: 'up',
      description: 'Of original purchase price'
    }
  ];

  const careInstructions = [
    {
      category: 'Daily Care',
      icon: 'Sun',
      instructions: [
        'Remove before swimming, showering, or exercising',
        'Apply perfume and cosmetics before putting on jewelry',
        'Store in original jewelry box when not wearing',
        'Avoid contact with harsh chemicals and cleaning products'
      ]
    },
    {
      category: 'Cleaning',
      icon: 'Droplets',
      instructions: [
        'Clean gently with warm soapy water and soft brush',
        'Rinse thoroughly and pat dry with soft cloth',
        'Professional cleaning recommended every 6 months',
        'Avoid ultrasonic cleaners for delicate stones'
      ]
    },
    {
      category: 'Storage',
      icon: 'Package',
      instructions: [
        'Store in individual compartments to prevent scratching',
        'Keep away from direct sunlight and extreme temperatures',
        'Use anti-tarnish strips for silver pieces',
        'Ensure clasps are closed to prevent tangling'
      ]
    }
  ];

  const warrantyFeatures = [
    {
      title: 'Lifetime Craftsmanship Guarantee',
      description: 'We guarantee the structural integrity and craftsmanship of your piece for life.',
      icon: 'Award'
    },
    {
      title: 'Free Annual Inspection',
      description: 'Complimentary annual inspection and cleaning at any LuxeJewels location.',
      icon: 'Search'
    },
    {
      title: 'Stone Security Promise',
      description: 'If a stone becomes loose within 2 years, we\'ll reset it free of charge.',
      icon: 'Gem'
    },
    {
      title: 'Upgrade Program',
      description: 'Trade up to a higher value piece within 2 years for full credit.',
      icon: 'ArrowUp'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'value':
        return (
          <div className="space-y-6">
            {/* Value Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {valueMetrics?.map((metric, index) => (
                <div key={index} className="bg-muted/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{metric?.label}</h4>
                    <div className={`flex items-center space-x-1 text-sm ${
                      metric?.trend === 'up' ? 'text-success' : 
                      metric?.trend === 'down' ? 'text-error' : 'text-muted-foreground'
                    }`}>
                      {metric?.trend === 'up' && <Icon name="TrendingUp" size={14} />}
                      {metric?.trend === 'down' && <Icon name="TrendingDown" size={14} />}
                      <span>{metric?.change}</span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{metric?.value}</div>
                  <p className="text-sm text-muted-foreground">{metric?.description}</p>
                </div>
              ))}
            </div>
            {/* Investment Insights */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-4 flex items-center space-x-2">
                <Icon name="Lightbulb" size={20} color="var(--color-primary)" />
                <span>Investment Insights</span>
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-foreground">Premium Materials</h5>
                    <p className="text-sm text-muted-foreground">
                      Crafted with {product?.metal} and certified {product?.stoneType}, ensuring lasting value.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-foreground">Limited Production</h5>
                    <p className="text-sm text-muted-foreground">
                      Part of our exclusive {product?.collection} collection with limited availability.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} color="var(--color-success)" className="mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-foreground">Brand Heritage</h5>
                    <p className="text-sm text-muted-foreground">
                      LuxeJewels pieces have shown consistent appreciation over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Market Comparison */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Market Position</h4>
              <div className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-muted-foreground">Comparable Pieces Range</span>
                  <span className="text-sm font-medium text-foreground">
                    ${(product?.price * 0.8)?.toLocaleString()} - ${(product?.price * 1.3)?.toLocaleString()}
                  </span>
                </div>
                <div className="relative">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-3/5"></div>
                  </div>
                  <div className="absolute top-0 left-3/5 transform -translate-x-1/2">
                    <div className="w-3 h-3 bg-primary rounded-full -mt-0.5"></div>
                    <div className="text-xs text-primary font-medium mt-1 whitespace-nowrap">
                      Your piece
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'care':
        return (
          <div className="space-y-6">
            {careInstructions?.map((category, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-semibold text-foreground flex items-center space-x-2">
                  <Icon name={category?.icon} size={18} color="var(--color-primary)" />
                  <span>{category?.category}</span>
                </h4>
                <div className="bg-muted/30 rounded-lg p-4">
                  <ul className="space-y-2">
                    {category?.instructions?.map((instruction, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                        <Icon name="Dot" size={16} className="mt-1 flex-shrink-0" />
                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            {/* Professional Services */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-4">Professional Care Services</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h5 className="font-medium text-foreground">Complimentary Services</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Annual professional cleaning</li>
                    <li>• Prong tightening inspection</li>
                    <li>• Polish and refinishing</li>
                    <li>• Storage consultation</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium text-foreground">Premium Services</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Rhodium re-plating</li>
                    <li>• Stone replacement</li>
                    <li>• Sizing adjustments</li>
                    <li>• Custom modifications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'warranty':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {warrantyFeatures?.map((feature, index) => (
                <div key={index} className="bg-muted/30 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={feature?.icon} size={18} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">{feature?.title}</h5>
                      <p className="text-sm text-muted-foreground">{feature?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Warranty Terms */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-4">Warranty Coverage</h4>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div>
                  <h5 className="font-medium text-foreground mb-2">What's Covered</h5>
                  <ul className="space-y-1">
                    <li>• Manufacturing defects in materials and workmanship</li>
                    <li>• Prong wear and stone loosening (first 2 years)</li>
                    <li>• Clasp and closure mechanisms</li>
                    <li>• Plating and finish integrity</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-foreground mb-2">What's Not Covered</h5>
                  <ul className="space-y-1">
                    <li>• Damage from misuse, accidents, or normal wear</li>
                    <li>• Scratches on metal surfaces</li>
                    <li>• Damage from improper cleaning or storage</li>
                    <li>• Modifications by unauthorized jewelers</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Contact Information */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-4">Warranty Support</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <Icon name="Phone" size={20} color="var(--color-primary)" className="mx-auto mb-2" />
                  <div className="font-medium text-foreground">Call Us</div>
                  <div className="text-muted-foreground">1-800-LUXE-CARE</div>
                </div>
                <div className="text-center">
                  <Icon name="Mail" size={20} color="var(--color-primary)" className="mx-auto mb-2" />
                  <div className="font-medium text-foreground">Email</div>
                  <div className="text-muted-foreground">care@luxejewels.com</div>
                </div>
                <div className="text-center">
                  <Icon name="MapPin" size={20} color="var(--color-primary)" className="mx-auto mb-2" />
                  <div className="font-medium text-foreground">Visit Store</div>
                  <div className="text-muted-foreground">Find locations</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-card rounded-2xl p-6 luxury-shadow">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-playfair font-semibold text-foreground">
            Investment & Care
          </h3>
          <p className="text-muted-foreground">
            Protecting your investment for generations
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-muted/30 rounded-lg p-1">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === tab?.id
                  ? 'bg-primary text-primary-foreground luxury-shadow'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span className="hidden sm:inline">{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {renderTabContent()}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4 border-t border-border">
          <Button variant="outline" fullWidth iconName="Download" iconPosition="left">
            Download Care Guide
          </Button>
          <Button variant="outline" fullWidth iconName="Calendar" iconPosition="left">
            Schedule Service
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentValue;