import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RecommendationsSection = ({ recommendations, onWishlistToggle }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })?.format(price);
  };

  if (!recommendations || recommendations?.length === 0) {
    return null;
  }

  return (
    <div className="bg-muted/30 py-12">
      <div className="px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">
            Personal Recommendations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Curated pieces selected based on your browsing history and style preferences
          </p>
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations?.map((product) => (
            <div
              key={product?.id}
              className="group bg-background rounded-lg overflow-hidden luxury-shadow hover:luxury-shadow-hover transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Recommendation Badge */}
                <div className="absolute top-3 left-3">
                  <div className="flex items-center space-x-1 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    <Icon name="Sparkles" size={12} />
                    <span>For You</span>
                  </div>
                </div>

                {/* Wishlist Button */}
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => onWishlistToggle(product?.id)}
                  className={`absolute top-3 right-3 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    product?.isWishlisted ? 'text-destructive' : ''
                  }`}
                >
                  <Icon name="Heart" size={16} />
                </Button>

                {/* Quick Actions */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to={`/product-experience-immersive-jewelry-showcase?id=${product?.id}`}
                    className="w-full"
                  >
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full bg-white/90 text-foreground hover:bg-white"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="mb-2">
                  <h3 className="font-playfair font-medium text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {product?.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{product?.collection}</p>
                </div>

                {/* Match Reason */}
                <div className="flex items-center space-x-1 mb-3">
                  <Icon name="Target" size={12} className="text-primary" />
                  <span className="text-xs text-primary font-medium">
                    {product?.matchReason}
                  </span>
                </div>

                {/* Rating */}
                {product?.rating && (
                  <div className="flex items-center space-x-1 mb-3">
                    <Icon name="Star" size={14} className="text-primary fill-current" />
                    <span className="text-sm font-medium text-foreground">{product?.rating}</span>
                    <span className="text-xs text-muted-foreground">({product?.reviews})</span>
                  </div>
                )}

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {product?.originalPrice && product?.originalPrice > product?.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(product?.originalPrice)}
                      </span>
                    )}
                    <span className="text-lg font-bold text-foreground">
                      {formatPrice(product?.price)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
          >
            View More Recommendations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationsSection;