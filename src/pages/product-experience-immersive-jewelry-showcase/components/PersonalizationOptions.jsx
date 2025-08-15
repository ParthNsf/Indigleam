import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const PersonalizationOptions = ({ product }) => {
  const [engravingText, setEngravingText] = useState('');
  const [selectedFont, setSelectedFont] = useState('script');
  const [engravingPosition, setEngravingPosition] = useState('back');
  const [giftMessage, setGiftMessage] = useState('');
  const [giftWrap, setGiftWrap] = useState('luxury');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [activeTab, setActiveTab] = useState('engraving');

  const fontOptions = [
    { value: 'script', label: 'Elegant Script' },
    { value: 'serif', label: 'Classic Serif' },
    { value: 'sans', label: 'Modern Sans' },
    { value: 'monogram', label: 'Monogram Style' }
  ];

  const positionOptions = [
    { value: 'back', label: 'Back of Pendant' },
    { value: 'inside', label: 'Inside Band' },
    { value: 'clasp', label: 'Near Clasp' }
  ];

  const giftWrapOptions = [
    { value: 'luxury', label: 'Luxury Gift Box (+$25)' },
    { value: 'premium', label: 'Premium Velvet Box (+$15)' },
    { value: 'eco', label: 'Eco-Friendly Box (+$10)' },
    { value: 'none', label: 'No Gift Wrapping' }
  ];

  const tabs = [
    { id: 'engraving', label: 'Engraving', icon: 'Type' },
    { id: 'gifting', label: 'Gift Options', icon: 'Gift' },
    { id: 'preview', label: 'Preview', icon: 'Eye' }
  ];

  const maxEngravingLength = 30;
  const engravingPrice = 45;
  const giftWrapPrices = {
    luxury: 25,
    premium: 15,
    eco: 10,
    none: 0
  };

  const renderEngravingPreview = () => {
    const fontStyles = {
      script: 'font-serif italic',
      serif: 'font-serif',
      sans: 'font-sans',
      monogram: 'font-serif font-bold tracking-wider'
    };

    return (
      <div className="bg-muted/30 rounded-lg p-6 text-center">
        <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center relative overflow-hidden">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center luxury-shadow">
            <Icon name="Gem" size={32} color="var(--color-primary)" />
          </div>
          {engravingText && (
            <div className={`absolute bottom-2 text-xs text-primary ${fontStyles?.[selectedFont]}`}>
              {engravingText}
            </div>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          {engravingText ? 'Preview of your engraving' : 'Enter text to see preview'}
        </p>
      </div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'engraving':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <Input
                label="Engraving Text"
                type="text"
                value={engravingText}
                onChange={(e) => setEngravingText(e?.target?.value?.slice(0, maxEngravingLength))}
                placeholder="Enter your message..."
                description={`${engravingText?.length}/${maxEngravingLength} characters`}
                className="font-mono"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  label="Font Style"
                  options={fontOptions}
                  value={selectedFont}
                  onChange={setSelectedFont}
                />
                
                <Select
                  label="Position"
                  options={positionOptions}
                  value={engravingPosition}
                  onChange={setEngravingPosition}
                />
              </div>
            </div>
            {renderEngravingPreview()}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-foreground">Custom Engraving</h4>
                  <p className="text-sm text-muted-foreground">
                    Hand-engraved by master craftsmen
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">+${engravingPrice}</div>
                  <div className="text-xs text-muted-foreground">Additional 3-5 days</div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Engraving Guidelines</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={14} color="var(--color-success)" />
                  <span>Names, dates, and short messages</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={14} color="var(--color-success)" />
                  <span>Special characters and symbols available</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={14} color="var(--color-success)" />
                  <span>Multiple languages supported</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="X" size={14} color="var(--color-error)" />
                  <span>No inappropriate or copyrighted content</span>
                </li>
              </ul>
            </div>
          </div>
        );

      case 'gifting':
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <Select
                label="Gift Wrapping"
                options={giftWrapOptions}
                value={giftWrap}
                onChange={setGiftWrap}
                description="Choose your preferred gift presentation"
              />

              <Input
                label="Gift Message"
                type="text"
                value={giftMessage}
                onChange={(e) => setGiftMessage(e?.target?.value)}
                placeholder="Add a personal message for the recipient..."
                description="This will be included on a beautiful card"
              />

              <Input
                label="Preferred Delivery Date"
                type="date"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e?.target?.value)}
                description="We'll do our best to deliver by this date"
                min={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)?.toISOString()?.split('T')?.[0]}
              />
            </div>
            {/* Gift Wrap Preview */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-4">Gift Presentation</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {giftWrapOptions?.filter(option => option?.value !== 'none')?.map((option) => (
                  <div
                    key={option?.value}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                      giftWrap === option?.value
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setGiftWrap(option?.value)}
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                      <Icon name="Gift" size={24} color="var(--color-primary)" />
                    </div>
                    <h5 className="font-medium text-foreground text-center text-sm">
                      {option?.label?.split(' (+')?.[0]}
                    </h5>
                    <p className="text-xs text-center text-primary font-medium mt-1">
                      +${giftWrapPrices?.[option?.value]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Special Services */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-3">Special Services</h4>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" className="rounded border-border" />
                  <div className="flex-1">
                    <span className="font-medium text-foreground">White Glove Delivery</span>
                    <p className="text-sm text-muted-foreground">Personal delivery with signature required (+$50)</p>
                  </div>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" className="rounded border-border" />
                  <div className="flex-1">
                    <span className="font-medium text-foreground">Gift Receipt</span>
                    <p className="text-sm text-muted-foreground">Include gift receipt without pricing</p>
                  </div>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" className="rounded border-border" />
                  <div className="flex-1">
                    <span className="font-medium text-foreground">Insurance Coverage</span>
                    <p className="text-sm text-muted-foreground">Additional insurance for high-value items (+$25)</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        );

      case 'preview':
        return (
          <div className="space-y-6">
            <div className="bg-muted/30 rounded-lg p-6">
              <h4 className="font-semibold text-foreground mb-4">Personalization Summary</h4>
              
              <div className="space-y-4">
                {engravingText && (
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-medium text-foreground">Custom Engraving</h5>
                      <p className="text-sm text-muted-foreground">"{engravingText}"</p>
                      <p className="text-xs text-muted-foreground">
                        {fontOptions?.find(f => f?.value === selectedFont)?.label} • {positionOptions?.find(p => p?.value === engravingPosition)?.label}
                      </p>
                    </div>
                    <span className="font-semibold text-primary">+${engravingPrice}</span>
                  </div>
                )}

                {giftWrap !== 'none' && (
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-medium text-foreground">Gift Wrapping</h5>
                      <p className="text-sm text-muted-foreground">
                        {giftWrapOptions?.find(g => g?.value === giftWrap)?.label?.split(' (+')?.[0]}
                      </p>
                    </div>
                    <span className="font-semibold text-primary">+${giftWrapPrices?.[giftWrap]}</span>
                  </div>
                )}

                {giftMessage && (
                  <div>
                    <h5 className="font-medium text-foreground">Gift Message</h5>
                    <p className="text-sm text-muted-foreground italic">"{giftMessage}"</p>
                  </div>
                )}

                {deliveryDate && (
                  <div>
                    <h5 className="font-medium text-foreground">Preferred Delivery</h5>
                    <p className="text-sm text-muted-foreground">
                      {new Date(deliveryDate)?.toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* Total Additional Cost */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-foreground">Total Personalization</h4>
                  <p className="text-sm text-muted-foreground">Additional customization costs</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    +${(engravingText ? engravingPrice : 0) + giftWrapPrices?.[giftWrap]}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {engravingText ? 'Additional 3-5 days' : 'Ready to ship'}
                  </div>
                </div>
              </div>
            </div>
            {/* Production Timeline */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Production Timeline</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Order confirmation: Immediate</span>
                </div>
                {engravingText && (
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Engraving: 3-5 business days</span>
                  </div>
                )}
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Quality inspection: 1 business day</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Shipping: 2-3 business days</span>
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
            Personalization
          </h3>
          <p className="text-muted-foreground">
            Make it uniquely yours with custom engraving and gift options
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
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default PersonalizationOptions;