import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';


const CartSummary = ({ items, onQuantityChange, onRemove, isEditable = true }) => {
  const subtotal = items?.reduce((sum, item) => sum + (item?.price * item?.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-card rounded-lg p-6">
      <h3 className="text-lg font-playfair font-semibold text-foreground mb-6">Order Summary</h3>
      <div className="space-y-4 mb-6">
        {items?.map((item) => (
          <div key={item?.id} className="flex items-start space-x-4 p-4 bg-background rounded-lg">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden">
              <Image 
                src={item?.image} 
                alt={item?.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-foreground truncate">{item?.name}</h4>
              <p className="text-sm text-muted-foreground">{item?.collection}</p>
              {item?.customization && (
                <p className="text-xs text-primary mt-1">
                  <Icon name="Sparkles" size={12} className="inline mr-1" />
                  {item?.customization}
                </p>
              )}
              <p className="text-sm font-medium text-foreground mt-1">
                ${item?.price?.toLocaleString()}
              </p>
            </div>
            
            <div className="flex flex-col items-end space-y-2">
              {isEditable ? (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onQuantityChange(item?.id, item?.quantity - 1)}
                    disabled={item?.quantity <= 1}
                    className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-muted disabled:opacity-50"
                  >
                    <Icon name="Minus" size={12} />
                  </button>
                  <span className="text-sm font-medium w-8 text-center">{item?.quantity}</span>
                  <button
                    onClick={() => onQuantityChange(item?.id, item?.quantity + 1)}
                    className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-muted"
                  >
                    <Icon name="Plus" size={12} />
                  </button>
                </div>
              ) : (
                <span className="text-sm text-muted-foreground">Qty: {item?.quantity}</span>
              )}
              
              {isEditable && (
                <button
                  onClick={() => onRemove(item?.id)}
                  className="text-xs text-muted-foreground hover:text-destructive transition-colors"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-3 pt-4 border-t border-border">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="text-foreground">${subtotal?.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="text-foreground">
            {shipping === 0 ? 'Free' : `$${shipping}`}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Tax</span>
          <span className="text-foreground">${tax?.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold pt-2 border-t border-border">
          <span className="text-foreground">Total</span>
          <span className="text-foreground">${total?.toLocaleString()}</span>
        </div>
      </div>
      {subtotal < 500 && (
        <div className="mt-4 p-3 bg-accent/10 rounded-lg">
          <p className="text-xs text-accent-foreground">
            <Icon name="Truck" size={12} className="inline mr-1" />
            Add ${(500 - subtotal)?.toLocaleString()} more for free shipping
          </p>
        </div>
      )}
    </div>
  );
};

export default CartSummary;