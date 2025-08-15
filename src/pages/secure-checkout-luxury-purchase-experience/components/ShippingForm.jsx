import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ShippingForm = ({ formData, onFormChange, onShippingMethodChange, selectedShippingMethod }) => {
  const [sameAsBilling, setSameAsBilling] = useState(false);

  const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' }
  ];

  const stateOptions = [
    { value: 'ny', label: 'New York' },
    { value: 'ca', label: 'California' },
    { value: 'tx', label: 'Texas' },
    { value: 'fl', label: 'Florida' }
  ];

  const shippingMethods = [
    {
      id: 'standard',
      name: 'Standard Delivery',
      description: '5-7 business days',
      price: 25,
      icon: 'Truck'
    },
    {
      id: 'express',
      name: 'Express Delivery',
      description: '2-3 business days',
      price: 45,
      icon: 'Zap'
    },
    {
      id: 'overnight',
      name: 'Overnight Delivery',
      description: 'Next business day',
      price: 85,
      icon: 'Clock'
    },
    {
      id: 'white-glove',
      name: 'White Glove Service',
      description: 'Scheduled appointment with signature',
      price: 150,
      icon: 'Crown'
    }
  ];

  const handleInputChange = (field, value) => {
    onFormChange('shipping', { ...formData, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-playfair font-semibold text-foreground mb-4">Shipping Address</h3>
        
        <div className="mb-4">
          <Checkbox
            label="Same as billing address"
            checked={sameAsBilling}
            onChange={(e) => setSameAsBilling(e?.target?.checked)}
          />
        </div>

        {!sameAsBilling && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              type="text"
              required
              value={formData?.firstName || ''}
              onChange={(e) => handleInputChange('firstName', e?.target?.value)}
            />
            
            <Input
              label="Last Name"
              type="text"
              required
              value={formData?.lastName || ''}
              onChange={(e) => handleInputChange('lastName', e?.target?.value)}
            />
            
            <div className="md:col-span-2">
              <Input
                label="Address Line 1"
                type="text"
                required
                value={formData?.address1 || ''}
                onChange={(e) => handleInputChange('address1', e?.target?.value)}
              />
            </div>
            
            <div className="md:col-span-2">
              <Input
                label="Address Line 2 (Optional)"
                type="text"
                value={formData?.address2 || ''}
                onChange={(e) => handleInputChange('address2', e?.target?.value)}
              />
            </div>
            
            <Input
              label="City"
              type="text"
              required
              value={formData?.city || ''}
              onChange={(e) => handleInputChange('city', e?.target?.value)}
            />
            
            <Select
              label="State/Province"
              options={stateOptions}
              value={formData?.state || ''}
              onChange={(value) => handleInputChange('state', value)}
              required
            />
            
            <Input
              label="ZIP/Postal Code"
              type="text"
              required
              value={formData?.zipCode || ''}
              onChange={(e) => handleInputChange('zipCode', e?.target?.value)}
            />
            
            <Select
              label="Country"
              options={countryOptions}
              value={formData?.country || 'us'}
              onChange={(value) => handleInputChange('country', value)}
              required
            />
          </div>
        )}
      </div>
      <div>
        <h3 className="text-lg font-playfair font-semibold text-foreground mb-4">Delivery Method</h3>
        
        <div className="space-y-3">
          {shippingMethods?.map((method) => (
            <div
              key={method?.id}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                selectedShippingMethod === method?.id
                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
              }`}
              onClick={() => onShippingMethodChange(method?.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selectedShippingMethod === method?.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <Icon name={method?.icon} size={20} />
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground">{method?.name}</h4>
                    <p className="text-sm text-muted-foreground">{method?.description}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-medium text-foreground">
                    {method?.price === 0 ? 'Free' : `$${method?.price}`}
                  </p>
                  {method?.id === 'white-glove' && (
                    <p className="text-xs text-primary">Recommended for high-value items</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-accent/10 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Shield" size={20} className="text-accent mt-0.5" />
          <div>
            <h4 className="font-medium text-accent-foreground">Secure Delivery</h4>
            <p className="text-sm text-accent-foreground/80 mt-1">
              All orders are fully insured and require signature confirmation for your protection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;