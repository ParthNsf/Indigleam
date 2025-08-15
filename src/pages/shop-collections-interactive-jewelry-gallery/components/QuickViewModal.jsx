import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const QuickViewModal = ({ product, isOpen, onClose, onWishlistToggle, onAddToCart }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');

  if (!isOpen || !product) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })?.format(price);
  };

  const images = [
    product?.image,
    product?.hoverImage,
    ...(product?.additionalImages || [])
  ]?.filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative bg-background rounded-2xl luxury-shadow max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-playfair font-bold text-foreground">Quick View</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-h-[calc(90vh-80px)] overflow-y-auto">
          {/* Images */}
          <div className="p-6">
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square rounded-lg overflow-hidden luxury-shadow">
                <Image
                  src={images?.[selectedImage]}
                  alt={product?.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              {images?.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {images?.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                        selectedImage === index 
                          ? 'border-primary' :'border-border hover:border-primary/50'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product?.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="p-6 space-y-6">
            {/* Basic Info */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h1 className="text-2xl font-playfair font-bold text-foreground mb-1">
                    {product?.name}
                  </h1>
                  <p className="text-muted-foreground">{product?.collection}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onWishlistToggle(product?.id)}
                  className={`${product?.isWishlisted ? 'text-destructive' : 'text-muted-foreground'}`}
                >
                  <Icon name="Heart" size={20} />
                </Button>
              </div>

              {/* Rating */}
              {product?.rating && (
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={`${
                          i < Math.floor(product?.rating)
                            ? 'text-primary fill-current' :'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">{product?.rating}</span>
                  <span className="text-sm text-muted-foreground">({product?.reviews} reviews)</span>
                </div>
              )}

              {/* Price */}
              <div className="flex items-center space-x-3 mb-4">
                {product?.originalPrice && product?.originalPrice > product?.price && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product?.originalPrice)}
                  </span>
                )}
                <span className="text-3xl font-bold text-foreground">
                  {formatPrice(product?.price)}
                </span>
                {product?.discount && (
                  <span className="px-2 py-1 bg-destructive text-destructive-foreground text-sm font-medium rounded-full">
                    -{product?.discount}% OFF
                  </span>
                )}
              </div>
            </div>

            {/* Features */}
            {product?.features && product?.features?.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {product?.features?.map((feature, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product?.sizes && product?.sizes?.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-foreground">Size</h3>
                  <Button variant="ghost" size="sm" className="text-primary text-xs">
                    Size Guide
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product?.sizes?.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors duration-200 ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border text-foreground hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications */}
            {product?.specifications && (
              <div>
                <h3 className="text-sm font-medium text-foreground mb-3">Specifications</h3>
                <div className="space-y-2">
                  {Object.entries(product?.specifications)?.map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{key}:</span>
                      <span className="text-foreground font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-border">
              <Button
                variant="default"
                size="lg"
                onClick={() => onAddToCart(product)}
                className="w-full"
                iconName="ShoppingBag"
                iconPosition="left"
              >
                Add to Cart
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Link 
                  to={`/product-experience-immersive-jewelry-showcase?id=${product?.id}`}
                  className="w-full"
                >
                  <Button variant="outline" size="lg" className="w-full">
                    View Full Details
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Camera"
                  iconPosition="left"
                  className="w-full"
                >
                  Try AR
                </Button>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="flex items-center justify-center space-x-6 pt-4 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Icon name="Shield" size={14} />
                <span>Certified</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Truck" size={14} />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="RotateCcw" size={14} />
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;