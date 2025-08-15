import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const OrderConfirmation = ({ orderData, onContinueShopping, onViewAccount }) => {
  const orderNumber = `LJ${Date.now()?.toString()?.slice(-8)}`;
  const estimatedDelivery = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const careInstructions = [
    {
      icon: 'Droplets',
      title: 'Gentle Cleaning',
      description: 'Clean with warm soapy water and soft brush'
    },
    {
      icon: 'Sun',
      title: 'Proper Storage',
      description: 'Store in individual pouches away from sunlight'
    },
    {
      icon: 'Shield',
      title: 'Professional Care',
      description: 'Annual professional inspection recommended'
    }
  ];

  const stylingTips = [
    'Layer delicate necklaces for a modern look',
    'Mix metals confidently - gold and silver complement beautifully',
    'Consider your neckline when choosing pendant length',
    'Stack rings in odd numbers for visual balance'
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Success Header */}
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Check" size={32} color="white" />
        </div>
        <h1 className="text-3xl font-playfair font-bold text-foreground mb-2">
          Order Confirmed!
        </h1>
        <p className="text-lg text-muted-foreground">
          Thank you for choosing LuxeJewels. Your order has been successfully placed.
        </p>
      </div>
      {/* Order Details */}
      <div className="bg-card rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-playfair font-semibold text-foreground">
              Order #{orderNumber}
            </h2>
            <p className="text-sm text-muted-foreground">
              Placed on {new Date()?.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Estimated Delivery</p>
            <p className="font-medium text-foreground">
              {estimatedDelivery?.toLocaleDateString('en-US', { 
                weekday: 'long',
                month: 'short', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>

        {/* Order Items */}
        <div className="space-y-4 mb-6">
          {orderData?.items?.map((item) => (
            <div key={item?.id} className="flex items-center space-x-4 p-4 bg-background rounded-lg">
              <div className="w-16 h-16 rounded-lg overflow-hidden">
                <Image 
                  src={item?.image} 
                  alt={item?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="font-medium text-foreground">{item?.name}</h3>
                <p className="text-sm text-muted-foreground">{item?.collection}</p>
                {item?.customization && (
                  <p className="text-xs text-primary mt-1">
                    <Icon name="Sparkles" size={12} className="inline mr-1" />
                    {item?.customization}
                  </p>
                )}
              </div>
              
              <div className="text-right">
                <p className="font-medium text-foreground">${item?.price?.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Qty: {item?.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="border-t border-border pt-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground">${orderData?.subtotal?.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-foreground">
                {orderData?.shipping === 0 ? 'Free' : `$${orderData?.shipping}`}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tax</span>
              <span className="text-foreground">${orderData?.tax}</span>
            </div>
            {orderData?.protection > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Protection</span>
                <span className="text-foreground">+${orderData?.protection}</span>
              </div>
            )}
            <div className="flex justify-between text-lg font-semibold pt-2 border-t border-border">
              <span className="text-foreground">Total</span>
              <span className="text-foreground">${orderData?.total?.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Next Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg p-6 text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Mail" size={24} className="text-primary" />
          </div>
          <h3 className="font-medium text-foreground mb-2">Email Confirmation</h3>
          <p className="text-sm text-muted-foreground">
            Order details and tracking info sent to your email
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Package" size={24} className="text-primary" />
          </div>
          <h3 className="font-medium text-foreground mb-2">Order Processing</h3>
          <p className="text-sm text-muted-foreground">
            Your order will be carefully prepared and shipped
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Truck" size={24} className="text-primary" />
          </div>
          <h3 className="font-medium text-foreground mb-2">Secure Delivery</h3>
          <p className="text-sm text-muted-foreground">
            Insured delivery with signature confirmation
          </p>
        </div>
      </div>
      {/* Care Instructions */}
      <div className="bg-card rounded-lg p-6">
        <h3 className="text-lg font-playfair font-semibold text-foreground mb-4">
          Jewelry Care Instructions
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {careInstructions?.map((instruction, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name={instruction?.icon} size={20} className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground">{instruction?.title}</h4>
                <p className="text-sm text-muted-foreground mt-1">{instruction?.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-4">
          <h4 className="font-medium text-foreground mb-3">Styling Tips</h4>
          <ul className="space-y-2">
            {stylingTips?.map((tip, index) => (
              <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Icon name="Sparkles" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="outline"
          size="lg"
          onClick={onContinueShopping}
          iconName="ArrowLeft"
          iconPosition="left"
        >
          Continue Shopping
        </Button>
        
        <Button
          variant="default"
          size="lg"
          onClick={onViewAccount}
          iconName="User"
          iconPosition="left"
        >
          View My Account
        </Button>
      </div>
      {/* Support Information */}
      <div className="text-center p-6 bg-accent/10 rounded-lg">
        <h4 className="font-medium text-accent-foreground mb-2">Need Help?</h4>
        <p className="text-sm text-accent-foreground/80 mb-4">
          Our luxury concierge team is here to assist you with any questions about your order.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex items-center space-x-2 text-sm text-accent-foreground">
            <Icon name="Phone" size={16} />
            <span>1-800-LUXE-JEWELS</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-accent-foreground">
            <Icon name="Mail" size={16} />
            <span>concierge@luxejewels.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;