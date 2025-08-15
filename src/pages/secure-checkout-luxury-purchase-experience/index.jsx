import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import CheckoutProgress from './components/CheckoutProgress';
import CartSummary from './components/CartSummary';
import ShippingForm from './components/ShippingForm';
import PaymentForm from './components/PaymentForm';
import GiftOptions from './components/GiftOptions';
import OrderProtection from './components/OrderProtection';
import OrderConfirmation from './components/OrderConfirmation';

const SecureCheckout = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const steps = [
    { id: 'cart', name: 'Cart Review' },
    { id: 'shipping', name: 'Shipping' },
    { id: 'payment', name: 'Payment' },
    { id: 'review', name: 'Review' }
  ];

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Eternal Elegance Diamond Necklace",
      collection: "Signature Collection",
      price: 2850,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      customization: "Engraved: \'Forever Yours'"
    },
    {
      id: 2,
      name: "Rose Gold Infinity Earrings",
      collection: "Modern Romance",
      price: 1250,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop"
    }
  ]);

  const [formData, setFormData] = useState({
    shipping: {},
    payment: {}
  });

  const [selectedShippingMethod, setSelectedShippingMethod] = useState('standard');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card');
  const [giftData, setGiftData] = useState({});
  const [protectionData, setProtectionData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items?.map(item => 
        item?.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(items => items?.filter(item => item?.id !== itemId));
  };

  const handleFormChange = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const handleNextStep = () => {
    if (currentStep < steps?.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handlePlaceOrder();
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsProcessing(false);
    setOrderComplete(true);
  };

  const calculateOrderTotals = () => {
    const subtotal = cartItems?.reduce((sum, item) => sum + (item?.price * item?.quantity), 0);
    const shipping = subtotal > 500 ? 0 : 25;
    const tax = Math.round(subtotal * 0.08 * 100) / 100;
    const protection = Object.values(protectionData)?.length > 0 ? 
      (protectionData?.insurance ? 89 : 0) + 
      (protectionData?.warranty ? 149 : 0) + 
      (protectionData?.care ? 199 : 0) : 0;
    const giftPackaging = giftData?.packaging === 'premium' ? 25 : 
                         giftData?.packaging === 'signature' ? 75 : 0;
    const total = subtotal + shipping + tax + protection + giftPackaging;

    return { subtotal, shipping, tax, protection, giftPackaging, total };
  };

  const orderTotals = calculateOrderTotals();

  const handleContinueShopping = () => {
    navigate('/shop-collections-interactive-jewelry-gallery');
  };

  const handleViewAccount = () => {
    navigate('/personal-account-vip-member-sanctuary');
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-6 lg:px-8">
            <OrderConfirmation
              orderData={{
                items: cartItems,
                ...orderTotals
              }}
              onContinueShopping={handleContinueShopping}
              onViewAccount={handleViewAccount}
            />
          </div>
        </main>
      </div>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-playfair font-semibold text-foreground mb-2">
                Review Your Cart
              </h2>
              <p className="text-muted-foreground">
                Verify your selections before proceeding to checkout
              </p>
            </div>
            
            <CartSummary
              items={cartItems}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemoveItem}
              isEditable={true}
            />
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-playfair font-semibold text-foreground mb-2">
                Shipping Information
              </h2>
              <p className="text-muted-foreground">
                Where should we deliver your luxury jewelry?
              </p>
            </div>
            <ShippingForm
              formData={formData?.shipping}
              onFormChange={handleFormChange}
              selectedShippingMethod={selectedShippingMethod}
              onShippingMethodChange={setSelectedShippingMethod}
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-playfair font-semibold text-foreground mb-2">
                Payment & Options
              </h2>
              <p className="text-muted-foreground">
                Secure payment processing with luxury service options
              </p>
            </div>
            <PaymentForm
              formData={formData?.payment}
              onFormChange={handleFormChange}
              selectedPaymentMethod={selectedPaymentMethod}
              onPaymentMethodChange={setSelectedPaymentMethod}
            />
            <GiftOptions
              giftData={giftData}
              onGiftChange={setGiftData}
            />
            <OrderProtection
              protectionData={protectionData}
              onProtectionChange={setProtectionData}
            />
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-playfair font-semibold text-foreground mb-2">
                Review Your Order
              </h2>
              <p className="text-muted-foreground">
                Please review all details before placing your order
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <CartSummary
                  items={cartItems}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemoveItem}
                  isEditable={false}
                />
              </div>
              
              <div className="space-y-6">
                {/* Shipping Summary */}
                <div className="bg-card rounded-lg p-6">
                  <h3 className="font-medium text-foreground mb-4">Shipping Details</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                      {formData?.shipping?.firstName} {formData?.shipping?.lastName}
                    </p>
                    <p className="text-muted-foreground">{formData?.shipping?.address1}</p>
                    {formData?.shipping?.address2 && (
                      <p className="text-muted-foreground">{formData?.shipping?.address2}</p>
                    )}
                    <p className="text-muted-foreground">
                      {formData?.shipping?.city}, {formData?.shipping?.state} {formData?.shipping?.zipCode}
                    </p>
                  </div>
                </div>

                {/* Payment Summary */}
                <div className="bg-card rounded-lg p-6">
                  <h3 className="font-medium text-foreground mb-4">Payment Method</h3>
                  <div className="flex items-center space-x-3">
                    <Icon name="CreditCard" size={20} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {selectedPaymentMethod === 'card' ? 'Credit/Debit Card' :
                       selectedPaymentMethod === 'paypal' ? 'PayPal' :
                       selectedPaymentMethod === 'apple-pay' ? 'Apple Pay' :
                       selectedPaymentMethod === 'financing'? 'Luxury Financing' : 'Cryptocurrency'}
                    </span>
                  </div>
                </div>

                {/* Gift Options Summary */}
                {giftData?.isGift && (
                  <div className="bg-card rounded-lg p-6">
                    <h3 className="font-medium text-foreground mb-4">Gift Options</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>Recipient: {giftData?.recipientName}</p>
                      <p>Packaging: {giftData?.packaging}</p>
                      {giftData?.message && <p>Message included</p>}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
                Secure Checkout
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete your luxury jewelry purchase with confidence. 
                Your transaction is protected by enterprise-grade security.
              </p>
            </div>

            {/* Progress Indicator */}
            <CheckoutProgress currentStep={currentStep} steps={steps} />

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Step Content */}
              <div className="lg:col-span-2">
                {renderStepContent()}
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-card rounded-lg p-6 mb-6">
                    <h3 className="text-lg font-playfair font-semibold text-foreground mb-4">
                      Order Total
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="text-foreground">${orderTotals?.subtotal?.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="text-foreground">
                          {orderTotals?.shipping === 0 ? 'Free' : `$${orderTotals?.shipping}`}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tax</span>
                        <span className="text-foreground">${orderTotals?.tax}</span>
                      </div>
                      {orderTotals?.protection > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Protection</span>
                          <span className="text-foreground">+${orderTotals?.protection}</span>
                        </div>
                      )}
                      {orderTotals?.giftPackaging > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Gift Packaging</span>
                          <span className="text-foreground">+${orderTotals?.giftPackaging}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-lg font-semibold pt-3 border-t border-border">
                        <span className="text-foreground">Total</span>
                        <span className="text-foreground">${orderTotals?.total?.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Security Badges */}
                  <div className="bg-card rounded-lg p-6">
                    <h4 className="font-medium text-foreground mb-4">Secure Checkout</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Icon name="Shield" size={16} className="text-primary" />
                        <span className="text-sm text-muted-foreground">SSL Encrypted</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Lock" size={16} className="text-primary" />
                        <span className="text-sm text-muted-foreground">Fraud Protection</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Award" size={16} className="text-primary" />
                        <span className="text-sm text-muted-foreground">Certified Secure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-8 border-t border-border">
              <Button
                variant="ghost"
                onClick={handlePreviousStep}
                disabled={currentStep === 0}
                iconName="ArrowLeft"
                iconPosition="left"
              >
                Previous Step
              </Button>

              <div className="flex items-center space-x-4 my-4 sm:my-0">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Phone" size={16} />
                  <span>Need help? Call 1-800-LUXE-JEWELS</span>
                </div>
              </div>

              <Button
                variant="default"
                onClick={handleNextStep}
                loading={isProcessing}
                disabled={cartItems?.length === 0}
                iconName={currentStep === steps?.length - 1 ? "CreditCard" : "ArrowRight"}
                iconPosition="right"
                size="lg"
              >
                {isProcessing ? 'Processing...' : 
                 currentStep === steps?.length - 1 ? 'Place Order' : 'Continue'}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SecureCheckout;