import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProductGrid = ({ products, viewMode, onWishlistToggle, onQuickView, onCompareToggle, comparedItems }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })?.format(price);
  };

  const ProductCard = ({ product }) => {
    const isHovered = hoveredProduct === product?.id;
    const isWishlisted = product?.isWishlisted;
    const isCompared = comparedItems?.includes(product?.id);

    return (
      <div
        className={`group relative bg-card rounded-lg overflow-hidden luxury-shadow hover:luxury-shadow-hover transition-all duration-300 ${
          viewMode === 'list' ? 'flex' : ''
        }`}
        onMouseEnter={() => setHoveredProduct(product?.id)}
        onMouseLeave={() => setHoveredProduct(null)}
      >
        {/* Product Image */}
        <div className={`relative overflow-hidden ${
          viewMode === 'list' ? 'w-48 h-48' : 'aspect-square'
        }`}>
          <Image
            src={isHovered && product?.hoverImage ? product?.hoverImage : product?.image}
            alt={product?.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {product?.isNew && (
              <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                New
              </span>
            )}
            {product?.isLimited && (
              <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                Limited
              </span>
            )}
            {product?.discount && (
              <span className="px-2 py-1 bg-destructive text-destructive-foreground text-xs font-medium rounded-full">
                -{product?.discount}%
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className={`absolute top-3 right-3 flex flex-col space-y-2 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <Button
              variant="secondary"
              size="icon"
              onClick={() => onWishlistToggle(product?.id)}
              className={`w-8 h-8 ${isWishlisted ? 'text-destructive' : ''}`}
            >
              <Icon name={isWishlisted ? "Heart" : "Heart"} size={16} />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={() => onCompareToggle(product?.id)}
              className={`w-8 h-8 ${isCompared ? 'bg-primary text-primary-foreground' : ''}`}
            >
              <Icon name="GitCompare" size={16} />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={() => onQuickView(product)}
              className="w-8 h-8"
            >
              <Icon name="Eye" size={16} />
            </Button>
          </div>

          {/* Quick Actions Overlay */}
          <div className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="flex space-x-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => onQuickView(product)}
                className="flex-1 bg-white/90 text-foreground hover:bg-white"
              >
                Quick View
              </Button>
              <Link
                to={`/product-experience-immersive-jewelry-showcase?id=${product?.id}`}
                className="flex-1"
              >
                <Button variant="default" size="sm" className="w-full">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Product Info */}
        <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="font-playfair font-medium text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                {product?.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{product?.collection}</p>
            </div>
            {product?.rating && (
              <div className="flex items-center space-x-1 ml-2">
                <Icon name="Star" size={14} className="text-primary fill-current" />
                <span className="text-sm font-medium text-foreground">{product?.rating}</span>
                <span className="text-xs text-muted-foreground">({product?.reviews})</span>
              </div>
            )}
          </div>

          {/* Features */}
          {product?.features && product?.features?.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {product?.features?.slice(0, 2)?.map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                >
                  {feature}
                </span>
              ))}
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
            
            {viewMode === 'list' && (
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onWishlistToggle(product?.id)}
                  iconName={isWishlisted ? "Heart" : "Heart"}
                  iconPosition="left"
                  className={isWishlisted ? 'text-destructive border-destructive' : ''}
                >
                  {isWishlisted ? 'Saved' : 'Save'}
                </Button>
                <Link to={`/product-experience-immersive-jewelry-showcase?id=${product?.id}`}>
                  <Button variant="default" size="sm">
                    View Details
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Additional Info for List View */}
          {viewMode === 'list' && (
            <div className="mt-3 pt-3 border-t border-border">
              <p className="text-sm text-muted-foreground line-clamp-2">
                {product?.description}
              </p>
              {product?.specifications && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {Object.entries(product?.specifications)?.slice(0, 3)?.map(([key, value]) => (
                    <span key={key} className="text-xs text-muted-foreground">
                      <span className="font-medium">{key}:</span> {value}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  if (products?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
          <Icon name="Search" size={32} className="text-muted-foreground" />
        </div>
        <h3 className="text-xl font-playfair font-medium text-foreground mb-2">
          No jewelry found
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          We couldn't find any pieces matching your criteria. Try adjusting your filters or search terms.
        </p>
        <Button variant="outline" onClick={() => window.location?.reload()}>
          Clear All Filters
        </Button>
      </div>
    );
  }

  return (
    <div className={`
      ${viewMode === 'grid' ?'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' :'space-y-6'
      }
    `}>
      {products?.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;