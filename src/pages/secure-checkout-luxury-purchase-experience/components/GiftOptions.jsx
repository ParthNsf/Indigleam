import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';
import Select from '../../../components/ui/Select';

const GiftOptions = ({ giftData, onGiftChange }) => {
  const [isGift, setIsGift] = useState(giftData?.isGift || false);

  const packagingOptions = [
    {
      value: 'standard',
      label: 'Standard Gift Box',
      description: 'Elegant black box with gold ribbon',
      price: 0
    },
    {
      value: 'premium',
      label: 'Premium Gift Box',
      description: 'Luxury velvet box with custom engraving',
      price: 25
    },
    {
      value: 'signature',
      label: 'Signature Collection Box',
      description: 'Hand-crafted wooden box with certificate',
      price: 75
    }
  ];

  const deliveryDateOptions = [
    { value: 'standard', label: 'Standard Delivery' },
    { value: 'specific', label: 'Specific Date' },
    { value: 'holiday', label: 'Holiday Delivery' }
  ];

  const handleGiftToggle = (checked) => {
    setIsGift(checked);
    onGiftChange({ ...giftData, isGift: checked });
  };

  const handleGiftDataChange = (field, value) => {
    onGiftChange({ ...giftData, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-playfair font-semibold text-foreground mb-4">Gift Options</h3>
        
        <Checkbox
          label="This is a gift"
          description="Add special packaging and delivery options"
          checked={isGift}
          onChange={(e) => handleGiftToggle(e?.target?.checked)}
        />
      </div>
      {isGift && (
        <div className="space-y-6 pl-6 border-l-2 border-primary/20">
          <div>
            <h4 className="font-medium text-foreground mb-4">Gift Packaging</h4>
            
            <div className="space-y-3">
              {packagingOptions?.map((option) => (
                <div
                  key={option?.value}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    giftData?.packaging === option?.value
                      ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                  }`}
                  onClick={() => handleGiftDataChange('packaging', option?.value)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium text-foreground">{option?.label}</h5>
                      <p className="text-sm text-muted-foreground">{option?.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">
                        {option?.price === 0 ? 'Free' : `+$${option?.price}`}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Gift Message</h4>
            
            <div className="space-y-4">
              <Input
                label="Recipient Name"
                type="text"
                placeholder="Enter recipient's name"
                value={giftData?.recipientName || ''}
                onChange={(e) => handleGiftDataChange('recipientName', e?.target?.value)}
              />
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Personal Message
                </label>
                <textarea
                  className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  rows={4}
                  placeholder="Write your personal message here..."
                  value={giftData?.message || ''}
                  onChange={(e) => handleGiftDataChange('message', e?.target?.value)}
                  maxLength={200}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {(giftData?.message || '')?.length}/200 characters
                </p>
              </div>
              
              <Input
                label="From (Your Name)"
                type="text"
                placeholder="Your name"
                value={giftData?.senderName || ''}
                onChange={(e) => handleGiftDataChange('senderName', e?.target?.value)}
              />
            </div>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Delivery Timing</h4>
            
            <Select
              label="Delivery Preference"
              options={deliveryDateOptions}
              value={giftData?.deliveryTiming || 'standard'}
              onChange={(value) => handleGiftDataChange('deliveryTiming', value)}
            />
            
            {giftData?.deliveryTiming === 'specific' && (
              <div className="mt-4">
                <Input
                  label="Preferred Delivery Date"
                  type="date"
                  value={giftData?.specificDate || ''}
                  onChange={(e) => handleGiftDataChange('specificDate', e?.target?.value)}
                  min={new Date()?.toISOString()?.split('T')?.[0]}
                />
              </div>
            )}
          </div>

          <div className="p-4 bg-accent/10 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="Gift" size={20} className="text-accent mt-0.5" />
              <div>
                <h4 className="font-medium text-accent-foreground">Gift Services</h4>
                <ul className="text-sm text-accent-foreground/80 mt-1 space-y-1">
                  <li>• Complimentary gift wrapping with every order</li>
                  <li>• Handwritten gift cards available</li>
                  <li>• Discrete packaging with no pricing information</li>
                  <li>• Gift receipt included for easy exchanges</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftOptions;