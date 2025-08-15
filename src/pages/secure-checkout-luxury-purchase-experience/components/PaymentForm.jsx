import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';

const PaymentForm = ({ formData, onFormChange, onPaymentMethodChange, selectedPaymentMethod }) => {
  const [showSavedCards, setShowSavedCards] = useState(false);

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'Visa, Mastercard, American Express',
      icon: 'CreditCard'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      description: 'Pay with your PayPal account',
      icon: 'Wallet'
    },
    {
      id: 'apple-pay',
      name: 'Apple Pay',
      description: 'Touch ID or Face ID',
      icon: 'Smartphone'
    },
    {
      id: 'financing',
      name: 'Luxury Financing',
      description: '0% APR for 12 months',
      icon: 'Calendar'
    },
    {
      id: 'crypto',
      name: 'Cryptocurrency',
      description: 'Bitcoin, Ethereum accepted',
      icon: 'Coins'
    }
  ];

  const monthOptions = Array.from({ length: 12 }, (_, i) => ({
    value: String(i + 1)?.padStart(2, '0'),
    label: String(i + 1)?.padStart(2, '0')
  }));

  const yearOptions = Array.from({ length: 10 }, (_, i) => {
    const year = new Date()?.getFullYear() + i;
    return { value: String(year), label: String(year) };
  });

  const savedCards = [
    {
      id: 'card1',
      type: 'Visa',
      last4: '4242',
      expiry: '12/26',
      isDefault: true
    },
    {
      id: 'card2',
      type: 'Mastercard',
      last4: '8888',
      expiry: '08/25',
      isDefault: false
    }
  ];

  const handleInputChange = (field, value) => {
    onFormChange('payment', { ...formData, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-playfair font-semibold text-foreground mb-4">Payment Method</h3>
        
        <div className="space-y-3 mb-6">
          {paymentMethods?.map((method) => (
            <div
              key={method?.id}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                selectedPaymentMethod === method?.id
                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
              }`}
              onClick={() => onPaymentMethodChange(method?.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selectedPaymentMethod === method?.id
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
                
                {method?.id === 'financing' && (
                  <div className="text-right">
                    <p className="text-xs text-primary font-medium">Qualified buyers</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedPaymentMethod === 'card' && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium text-foreground">Card Details</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSavedCards(!showSavedCards)}
              iconName="CreditCard"
              iconPosition="left"
            >
              {showSavedCards ? 'Add New Card' : 'Use Saved Card'}
            </Button>
          </div>

          {showSavedCards ? (
            <div className="space-y-3">
              {savedCards?.map((card) => (
                <div
                  key={card?.id}
                  className="p-4 border border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon name="CreditCard" size={20} className="text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">
                          {card?.type} •••• {card?.last4}
                        </p>
                        <p className="text-sm text-muted-foreground">Expires {card?.expiry}</p>
                      </div>
                    </div>
                    {card?.isDefault && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Default
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <Input
                label="Card Number"
                type="text"
                placeholder="1234 5678 9012 3456"
                required
                value={formData?.cardNumber || ''}
                onChange={(e) => handleInputChange('cardNumber', e?.target?.value)}
              />
              
              <Input
                label="Cardholder Name"
                type="text"
                placeholder="John Doe"
                required
                value={formData?.cardName || ''}
                onChange={(e) => handleInputChange('cardName', e?.target?.value)}
              />
              
              <div className="grid grid-cols-3 gap-4">
                <Select
                  label="Month"
                  options={monthOptions}
                  value={formData?.expiryMonth || ''}
                  onChange={(value) => handleInputChange('expiryMonth', value)}
                  required
                />
                
                <Select
                  label="Year"
                  options={yearOptions}
                  value={formData?.expiryYear || ''}
                  onChange={(value) => handleInputChange('expiryYear', value)}
                  required
                />
                
                <Input
                  label="CVV"
                  type="text"
                  placeholder="123"
                  maxLength={4}
                  required
                  value={formData?.cvv || ''}
                  onChange={(e) => handleInputChange('cvv', e?.target?.value)}
                />
              </div>
              
              <Checkbox
                label="Save this card for future purchases"
                checked={formData?.saveCard || false}
                onChange={(e) => handleInputChange('saveCard', e?.target?.checked)}
              />
            </div>
          )}
        </div>
      )}
      {selectedPaymentMethod === 'financing' && (
        <div className="p-4 bg-accent/10 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={20} className="text-accent mt-0.5" />
            <div>
              <h4 className="font-medium text-accent-foreground">Luxury Financing Options</h4>
              <p className="text-sm text-accent-foreground/80 mt-1">
                Qualified buyers can enjoy 0% APR for 12 months on purchases over $1,000. 
                Credit check required. Terms and conditions apply.
              </p>
              <Button variant="outline" size="sm" className="mt-3">
                Check Eligibility
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="space-y-4 pt-4 border-t border-border">
        <h4 className="font-medium text-foreground">Security & Protection</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3 p-3 bg-card rounded-lg">
            <Icon name="Shield" size={20} className="text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">SSL Encrypted</p>
              <p className="text-xs text-muted-foreground">256-bit security</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-card rounded-lg">
            <Icon name="Lock" size={20} className="text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Fraud Protection</p>
              <p className="text-xs text-muted-foreground">100% secure payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;