import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CollectionHeader = ({ 
  title, 
  description, 
  totalProducts, 
  viewMode, 
  onViewModeChange, 
  sortBy, 
  onSortChange,
  onFilterToggle,
  comparedCount,
  onClearComparison
}) => {
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'New Arrivals' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  return (
    <div className="bg-background border-b border-border">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=400&fit=crop&crop=center')] bg-cover bg-center opacity-10"></div>
        <div className="relative px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            {description}
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Gem" size={16} />
              <span>{totalProducts} Pieces</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span>Certified Authentic</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Truck" size={16} />
              <span>Free Shipping</span>
            </div>
          </div>
        </div>
      </div>
      {/* Toolbar */}
      <div className="px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Left Section */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={onFilterToggle}
              iconName="Filter"
              iconPosition="left"
              className="lg:hidden"
            >
              Filters
            </Button>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Showing</span>
              <span className="font-medium text-foreground">{totalProducts}</span>
              <span>results</span>
            </div>

            {/* Comparison Bar */}
            {comparedCount > 0 && (
              <div className="flex items-center space-x-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                <Icon name="GitCompare" size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">
                  {comparedCount} items to compare
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClearComparison}
                  className="text-primary hover:text-primary/80 p-1"
                >
                  <Icon name="X" size={14} />
                </Button>
              </div>
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e?.target?.value)}
                className="appearance-none bg-background border border-border rounded-lg px-4 py-2 pr-8 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {sortOptions?.map((option) => (
                  <option key={option?.value} value={option?.value}>
                    {option?.label}
                  </option>
                ))}
              </select>
              <Icon 
                name="ChevronDown" 
                size={16} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none" 
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-muted rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onViewModeChange('grid')}
                className="px-3 py-1"
              >
                <Icon name="Grid3X3" size={16} />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onViewModeChange('list')}
                className="px-3 py-1"
              >
                <Icon name="List" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionHeader;