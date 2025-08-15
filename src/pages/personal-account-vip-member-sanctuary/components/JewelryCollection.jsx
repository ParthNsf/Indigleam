import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const JewelryCollection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const myCollection = [
    {
      id: 1,
      name: "Celestial Diamond Necklace",
      category: "necklaces",
      purchaseDate: "2024-08-10",
      price: 2850.00,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
      careSchedule: {
        lastCleaning: "2024-08-12",
        nextCleaning: "2024-11-12",
        frequency: "quarterly"
      },
      insurance: {
        appraised: true,
        value: 3200.00,
        lastAppraisal: "2024-08-10"
      },
      specifications: {
        metal: "18K White Gold",
        stones: "0.75ct Diamond",
        size: "16 inch chain"
      },
      styling: [
        "Perfect for evening events and formal occasions",
        "Pairs beautifully with matching diamond earrings",
        "Complements both black-tie and cocktail attire"
      ],
      careNotes: "Professional cleaning recommended every 3 months. Store in provided jewelry box."
    },
    {
      id: 2,
      name: "Vintage Gold Bracelet",
      category: "bracelets",
      purchaseDate: "2024-06-22",
      price: 3200.00,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
      careSchedule: {
        lastCleaning: "2024-07-01",
        nextCleaning: "2024-10-01",
        frequency: "quarterly"
      },
      insurance: {
        appraised: true,
        value: 3500.00,
        lastAppraisal: "2024-06-22"
      },
      specifications: {
        metal: "14K Yellow Gold",
        stones: "None",
        size: "7.5 inches"
      },
      styling: [
        "Versatile piece for both casual and formal wear",
        "Stacks beautifully with other gold bracelets",
        "Timeless design that complements any outfit"
      ],
      careNotes: "Gentle cleaning with soft cloth. Avoid harsh chemicals."
    },
    {
      id: 3,
      name: "Pearl Drop Earrings",
      category: "earrings",
      purchaseDate: "2024-07-15",
      price: 825.00,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
      careSchedule: {
        lastCleaning: "2024-07-20",
        nextCleaning: "2024-10-20",
        frequency: "quarterly"
      },
      insurance: {
        appraised: true,
        value: 900.00,
        lastAppraisal: "2024-07-15"
      },
      specifications: {
        metal: "Sterling Silver",
        stones: "Freshwater Pearls",
        size: "1.5 inch drop"
      },
      styling: [
        "Elegant choice for business and formal events",
        "Complements both light and dark color palettes",
        "Perfect for bridal and special occasions"
      ],
      careNotes: "Store separately to prevent scratching. Clean with damp cloth only."
    },
    {
      id: 4,
      name: "Custom Engagement Ring",
      category: "rings",
      purchaseDate: "2024-05-10",
      price: 4200.00,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
      careSchedule: {
        lastCleaning: "2024-08-01",
        nextCleaning: "2024-11-01",
        frequency: "quarterly"
      },
      insurance: {
        appraised: true,
        value: 4800.00,
        lastAppraisal: "2024-05-10"
      },
      specifications: {
        metal: "Platinum",
        stones: "1.2ct Diamond (Round Cut)",
        size: "Size 6"
      },
      styling: [
        "Statement piece perfect for special occasions",
        "Pairs beautifully with simple wedding band",
        "Timeless design suitable for daily wear"
      ],
      careNotes: "Professional inspection every 6 months. Avoid contact with lotions and perfumes."
    }
  ];

  const categories = [
    { key: 'all', label: 'All Items', count: myCollection?.length },
    { key: 'rings', label: 'Rings', count: myCollection?.filter(item => item?.category === 'rings')?.length },
    { key: 'necklaces', label: 'Necklaces', count: myCollection?.filter(item => item?.category === 'necklaces')?.length },
    { key: 'earrings', label: 'Earrings', count: myCollection?.filter(item => item?.category === 'earrings')?.length },
    { key: 'bracelets', label: 'Bracelets', count: myCollection?.filter(item => item?.category === 'bracelets')?.length }
  ];

  const filteredCollection = selectedCategory === 'all' 
    ? myCollection 
    : myCollection?.filter(item => item?.category === selectedCategory);

  const getCareStatus = (item) => {
    const nextCleaning = new Date(item.careSchedule.nextCleaning);
    const today = new Date();
    const daysUntilCleaning = Math.ceil((nextCleaning - today) / (1000 * 60 * 60 * 24));
    
    if (daysUntilCleaning < 0) {
      return { status: 'overdue', color: 'text-destructive', message: 'Cleaning overdue' };
    } else if (daysUntilCleaning <= 30) {
      return { status: 'due_soon', color: 'text-warning', message: `Cleaning due in ${daysUntilCleaning} days` };
    } else {
      return { status: 'good', color: 'text-success', message: 'Care up to date' };
    }
  };

  const scheduleService = (itemId, serviceType) => {
    console.log(`Scheduling ${serviceType} for item ${itemId}`);
  };

  return (
    <div className="bg-card rounded-2xl p-6 luxury-shadow">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-playfair font-semibold text-foreground mb-2">My Jewelry Collection</h2>
          <p className="text-sm text-muted-foreground">
            {myCollection?.length} piece{myCollection?.length !== 1 ? 's' : ''} • Total value: ${myCollection?.reduce((sum, item) => sum + item?.insurance?.value, 0)?.toLocaleString()}
          </p>
        </div>
        
        <div className="flex items-center gap-3 mt-4 lg:mt-0">
          <div className="flex bg-muted rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-all duration-300 ${
                viewMode === 'grid' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'
              }`}
            >
              <Icon name="Grid3X3" size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-all duration-300 ${
                viewMode === 'list' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'
              }`}
            >
              <Icon name="List" size={16} />
            </button>
          </div>
          
          <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
            Export Collection
          </Button>
        </div>
      </div>
      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories?.map((category) => (
          <button
            key={category?.key}
            onClick={() => setSelectedCategory(category?.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              selectedCategory === category?.key
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted/50 text-muted-foreground hover:bg-muted'
            }`}
          >
            {category?.label} ({category?.count})
          </button>
        ))}
      </div>
      {/* Collection Items */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCollection?.map((item) => {
            const careStatus = getCareStatus(item);
            return (
              <div key={item?.id} className="border border-border rounded-xl overflow-hidden hover:luxury-shadow-hover transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <Image 
                    src={item?.image} 
                    alt={item?.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item?.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Purchased {new Date(item.purchaseDate)?.toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-foreground">${item?.insurance?.value?.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Insured Value</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Care Status:</span>
                      <span className={`font-medium ${careStatus?.color}`}>{careStatus?.message}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Last Appraisal:</span>
                      <span className="text-foreground">{new Date(item.insurance.lastAppraisal)?.toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      iconName="Calendar" 
                      iconPosition="left"
                      onClick={() => scheduleService(item?.id, 'cleaning')}
                      className="flex-1"
                    >
                      Schedule Care
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      iconName="Eye"
                      className="px-3"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredCollection?.map((item) => {
            const careStatus = getCareStatus(item);
            return (
              <div key={item?.id} className="border border-border rounded-xl p-6 hover:luxury-shadow-hover transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="w-full lg:w-32 h-32 rounded-lg overflow-hidden">
                    <Image 
                      src={item?.image} 
                      alt={item?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{item?.name}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span>Purchased: {new Date(item.purchaseDate)?.toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{item?.specifications?.metal}</span>
                          <span>•</span>
                          <span>{item?.specifications?.stones || 'No stones'}</span>
                        </div>
                      </div>
                      <div className="text-right mt-2 lg:mt-0">
                        <div className="text-xl font-bold text-foreground">${item?.insurance?.value?.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">Insured Value</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="p-3 bg-background rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon name="Calendar" size={16} className="text-primary" />
                          <span className="text-sm font-medium text-foreground">Care Status</span>
                        </div>
                        <span className={`text-sm ${careStatus?.color}`}>{careStatus?.message}</span>
                      </div>
                      
                      <div className="p-3 bg-background rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon name="Shield" size={16} className="text-primary" />
                          <span className="text-sm font-medium text-foreground">Insurance</span>
                        </div>
                        <span className="text-sm text-muted-foreground">Up to date</span>
                      </div>
                      
                      <div className="p-3 bg-background rounded-lg">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon name="Sparkles" size={16} className="text-primary" />
                          <span className="text-sm font-medium text-foreground">Condition</span>
                        </div>
                        <span className="text-sm text-success">Excellent</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        iconName="Calendar" 
                        iconPosition="left"
                        onClick={() => scheduleService(item?.id, 'cleaning')}
                      >
                        Schedule Cleaning
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        iconName="FileText" 
                        iconPosition="left"
                        onClick={() => scheduleService(item?.id, 'appraisal')}
                      >
                        Update Appraisal
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        iconName="Palette" 
                        iconPosition="left"
                      >
                        Styling Tips
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        iconName="Eye" 
                        iconPosition="left"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {filteredCollection?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Gem" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No items in this category</h3>
          <p className="text-muted-foreground mb-6">
            {selectedCategory === 'all' 
              ? "Your collection is empty. Start building your jewelry collection today." 
              : `No ${selectedCategory} in your collection yet.`}
          </p>
          <Button variant="default" iconName="Plus" iconPosition="left">
            Add New Item
          </Button>
        </div>
      )}
    </div>
  );
};

export default JewelryCollection;