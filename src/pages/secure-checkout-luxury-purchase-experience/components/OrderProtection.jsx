import React from 'react';
import Icon from '../../../components/AppIcon';
import { Checkbox } from '../../../components/ui/Checkbox';

const OrderProtection = ({ protectionData, onProtectionChange }) => {
  const protectionOptions = [
    {
      id: 'insurance',
      name: 'Purchase Protection Insurance',
      description: 'Covers loss, theft, and accidental damage for 2 years',
      price: 89,
      recommended: true,
      features: [
        'Worldwide coverage',
        'No deductible',
        'Quick claim process',
        '24/7 customer support'
      ]
    },
    {
      id: 'warranty',
      name: 'Extended Warranty',
      description: 'Extends manufacturer warranty to 5 years total',
      price: 149,
      recommended: false,
      features: [
        'Manufacturing defects',
        'Professional repairs',
        'Authorized service centers',
        'Replacement guarantee'
      ]
    },
    {
      id: 'care',
      name: 'Premium Care Package',
      description: 'Annual professional cleaning and maintenance',
      price: 199,
      recommended: true,
      features: [
        'Annual professional cleaning',
        'Prong tightening',
        'Stone security check',
        'Complimentary polishing'
      ]
    }
  ];

  const handleProtectionChange = (optionId, checked) => {
    const updatedProtection = { ...protectionData };
    if (checked) {
      updatedProtection[optionId] = true;
    } else {
      delete updatedProtection?.[optionId];
    }
    onProtectionChange(updatedProtection);
  };

  const totalProtectionCost = protectionOptions?.reduce((total, option) => {
    return total + (protectionData?.[option?.id] ? option?.price : 0);
  }, 0);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-playfair font-semibold text-foreground mb-2">Order Protection</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Protect your investment with our comprehensive coverage options
        </p>
      </div>
      <div className="space-y-4">
        {protectionOptions?.map((option) => (
          <div
            key={option?.id}
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              protectionData?.[option?.id]
                ? 'border-primary bg-primary/5' :'border-border'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start space-x-3">
                <Checkbox
                  checked={protectionData?.[option?.id] || false}
                  onChange={(e) => handleProtectionChange(option?.id, e?.target?.checked)}
                />
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium text-foreground">{option?.name}</h4>
                    {option?.recommended && (
                      <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{option?.description}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-medium text-foreground">+${option?.price}</p>
              </div>
            </div>
            
            {protectionData?.[option?.id] && (
              <div className="ml-8 pl-4 border-l-2 border-primary/20">
                <h5 className="text-sm font-medium text-foreground mb-2">Included Benefits:</h5>
                <ul className="space-y-1">
                  {option?.features?.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={14} className="text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      {totalProtectionCost > 0 && (
        <div className="p-4 bg-card rounded-lg border border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Shield" size={20} className="text-primary" />
              <div>
                <h4 className="font-medium text-foreground">Total Protection Cost</h4>
                <p className="text-sm text-muted-foreground">
                  {Object.keys(protectionData)?.length} protection{Object.keys(protectionData)?.length > 1 ? 's' : ''} selected
                </p>
              </div>
            </div>
            <p className="text-lg font-semibold text-foreground">+${totalProtectionCost}</p>
          </div>
        </div>
      )}
      <div className="p-4 bg-accent/10 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-accent mt-0.5" />
          <div>
            <h4 className="font-medium text-accent-foreground">Why Choose Protection?</h4>
            <p className="text-sm text-accent-foreground/80 mt-1">
              Fine jewelry is a significant investment. Our protection plans ensure your pieces 
              remain beautiful and secure for years to come, giving you complete peace of mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProtection;