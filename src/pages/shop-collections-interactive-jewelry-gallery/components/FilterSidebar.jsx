import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ filters, onFilterChange, onClearFilters, isOpen, onToggle }) => {
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [searchQuery, setSearchQuery] = useState('');

  const filterCategories = [
    {
      id: 'category',
      title: 'Category',
      options: [
        { id: 'rings', label: 'Rings', count: 234, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=60&h=60&fit=crop' },
        { id: 'necklaces', label: 'Necklaces', count: 189, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=60&h=60&fit=crop' },
        { id: 'earrings', label: 'Earrings', count: 156, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=60&h=60&fit=crop' },
        { id: 'bracelets', label: 'Bracelets', count: 98, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=60&h=60&fit=crop' },
        { id: 'watches', label: 'Watches', count: 67, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=60&h=60&fit=crop' }
      ]
    },
    {
      id: 'metal',
      title: 'Metal Type',
      options: [
        { id: 'gold', label: '18K Gold', count: 312, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=60&h=60&fit=crop' },
        { id: 'white-gold', label: 'White Gold', count: 245, image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=60&h=60&fit=crop' },
        { id: 'rose-gold', label: 'Rose Gold', count: 189, image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=60&h=60&fit=crop' },
        { id: 'platinum', label: 'Platinum', count: 134, image: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=60&h=60&fit=crop' },
        { id: 'silver', label: 'Sterling Silver', count: 98, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=60&h=60&fit=crop' }
      ]
    },
    {
      id: 'gemstone',
      title: 'Gemstones',
      options: [
        { id: 'diamond', label: 'Diamond', count: 456, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=60&h=60&fit=crop' },
        { id: 'emerald', label: 'Emerald', count: 123, image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=60&h=60&fit=crop' },
        { id: 'ruby', label: 'Ruby', count: 89, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=60&h=60&fit=crop' },
        { id: 'sapphire', label: 'Sapphire', count: 76, image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=60&h=60&fit=crop' },
        { id: 'pearl', label: 'Pearl', count: 54, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=60&h=60&fit=crop' }
      ]
    },
    {
      id: 'occasion',
      title: 'Occasion',
      options: [
        { id: 'engagement', label: 'Engagement', count: 234 },
        { id: 'wedding', label: 'Wedding', count: 189 },
        { id: 'anniversary', label: 'Anniversary', count: 156 },
        { id: 'birthday', label: 'Birthday', count: 98 },
        { id: 'everyday', label: 'Everyday Wear', count: 345 }
      ]
    },
    {
      id: 'style',
      title: 'Style',
      options: [
        { id: 'classic', label: 'Classic', count: 234 },
        { id: 'modern', label: 'Modern', count: 189 },
        { id: 'vintage', label: 'Vintage', count: 156 },
        { id: 'minimalist', label: 'Minimalist', count: 98 },
        { id: 'statement', label: 'Statement', count: 67 }
      ]
    }
  ];

  const handlePriceChange = (type, value) => {
    const newRange = { ...priceRange, [type]: value };
    setPriceRange(newRange);
    onFilterChange('priceRange', newRange);
  };

  const handleFilterToggle = (categoryId, optionId) => {
    const currentFilters = filters?.[categoryId] || [];
    const newFilters = currentFilters?.includes(optionId)
      ? currentFilters?.filter(id => id !== optionId)
      : [...currentFilters, optionId];
    
    onFilterChange(categoryId, newFilters);
  };

  const handleSearchChange = (e) => {
    const value = e?.target?.value;
    setSearchQuery(value);
    onFilterChange('search', value);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-0 left-0 h-screen lg:h-auto w-80 bg-background border-r border-border z-50 lg:z-auto
        transform transition-transform duration-300 lg:transform-none overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-playfair font-bold text-foreground">Filters</h2>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                Clear All
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggle}
                className="lg:hidden"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
          </div>

          {/* Search */}
          <div className="mb-6">
            <Input
              type="search"
              placeholder="Search jewelry..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full"
            />
          </div>

          {/* Price Range */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-foreground mb-4">Price Range</h3>
            <div className="space-y-4">
              <div className="flex space-x-3">
                <Input
                  type="number"
                  placeholder="Min"
                  value={priceRange?.min}
                  onChange={(e) => handlePriceChange('min', e?.target?.value)}
                  className="flex-1"
                />
                <Input
                  type="number"
                  placeholder="Max"
                  value={priceRange?.max}
                  onChange={(e) => handlePriceChange('max', e?.target?.value)}
                  className="flex-1"
                />
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>$500</span>
                <span>$50,000+</span>
              </div>
            </div>
          </div>

          {/* Filter Categories */}
          <div className="space-y-8">
            {filterCategories?.map((category) => (
              <div key={category?.id}>
                <h3 className="text-lg font-medium text-foreground mb-4">{category?.title}</h3>
                <div className="space-y-3">
                  {category?.options?.map((option) => (
                    <div key={option?.id} className="flex items-center space-x-3">
                      <Checkbox
                        checked={filters?.[category?.id]?.includes(option?.id) || false}
                        onChange={() => handleFilterToggle(category?.id, option?.id)}
                      />
                      {option?.image && (
                        <div className="w-8 h-8 rounded-full overflow-hidden luxury-shadow">
                          <img
                            src={option?.image}
                            alt={option?.label}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">{option?.label}</span>
                        <span className="text-xs text-muted-foreground">({option?.count})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Special Features */}
          <div className="mt-8 pt-6 border-t border-border">
            <h3 className="text-lg font-medium text-foreground mb-4">Special Features</h3>
            <div className="space-y-3">
              {[
                { id: 'ethically-sourced', label: 'Ethically Sourced' },
                { id: 'custom-engraving', label: 'Custom Engraving Available' },
                { id: 'certified', label: 'Certified Gemstones' },
                { id: 'handcrafted', label: 'Handcrafted' },
                { id: 'limited-edition', label: 'Limited Edition' }
              ]?.map((feature) => (
                <div key={feature?.id} className="flex items-center space-x-3">
                  <Checkbox
                    checked={filters?.features?.includes(feature?.id) || false}
                    onChange={() => handleFilterToggle('features', feature?.id)}
                  />
                  <span className="text-sm font-medium text-foreground">{feature?.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;