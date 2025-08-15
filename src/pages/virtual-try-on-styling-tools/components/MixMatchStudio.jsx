import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MixMatchStudio = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentLook, setCurrentLook] = useState(null);
  const [savedLooks, setSavedLooks] = useState([]);

  const categories = [
    { id: 'all', name: 'All Items', icon: 'Grid3X3' },
    { id: 'rings', name: 'Rings', icon: 'Circle' },
    { id: 'earrings', name: 'Earrings', icon: 'Sparkles' },
    { id: 'necklaces', name: 'Necklaces', icon: 'Heart' },
    { id: 'bracelets', name: 'Bracelets', icon: 'Watch' }
  ];

  const jewelryItems = [
    {
      id: 1,
      name: "Classic Diamond Studs",
      category: "earrings",
      price: 850,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop",
      collection: "Timeless"
    },
    {
      id: 2,
      name: "Gold Chain Necklace",
      category: "necklaces",
      price: 680,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop",
      collection: "Essential"
    },
    {
      id: 3,
      name: "Solitaire Ring",
      category: "rings",
      price: 2400,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop",
      collection: "Signature"
    },
    {
      id: 4,
      name: "Tennis Bracelet",
      category: "bracelets",
      price: 1950,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop",
      collection: "Classic"
    },
    {
      id: 5,
      name: "Pearl Drop Earrings",
      category: "earrings",
      price: 450,
      image: "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?w=200&h=200&fit=crop",
      collection: "Elegant"
    },
    {
      id: 6,
      name: "Layered Chain Set",
      category: "necklaces",
      price: 320,
      image: "https://images.pixabay.com/photo/2017/08/01/11/48/jewelry-2564394_1280.jpg?w=200&h=200&fit=crop",
      collection: "Modern"
    },
    {
      id: 7,
      name: "Stackable Rings",
      category: "rings",
      price: 180,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop",
      collection: "Trendy"
    },
    {
      id: 8,
      name: "Charm Bracelet",
      category: "bracelets",
      price: 290,
      image: "https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg?w=200&h=200&fit=crop",
      collection: "Personal"
    }
  ];

  const curatedLooks = [
    {
      id: 1,
      name: "Professional Elegance",
      description: "Perfect for office and business meetings",
      items: [1, 2, 3],
      totalPrice: 3930,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Evening Glamour",
      description: "Sophisticated look for special occasions",
      items: [5, 6, 4],
      totalPrice: 1060,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Casual Chic",
      description: "Effortless style for everyday wear",
      items: [7, 8, 6],
      totalPrice: 790,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=200&fit=crop"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? jewelryItems 
    : jewelryItems?.filter(item => item?.category === activeCategory);

  const toggleItemSelection = (item) => {
    setSelectedItems(prev => {
      const isSelected = prev?.some(selected => selected?.id === item?.id);
      if (isSelected) {
        return prev?.filter(selected => selected?.id !== item?.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const clearSelection = () => {
    setSelectedItems([]);
    setCurrentLook(null);
  };

  const saveLook = () => {
    if (selectedItems?.length > 0) {
      const newLook = {
        id: Date.now(),
        name: `My Look ${savedLooks?.length + 1}`,
        items: selectedItems?.map(item => item?.id),
        totalPrice: selectedItems?.reduce((sum, item) => sum + item?.price, 0),
        createdAt: new Date()?.toLocaleDateString()
      };
      setSavedLooks(prev => [...prev, newLook]);
    }
  };

  const loadCuratedLook = (look) => {
    const lookItems = jewelryItems?.filter(item => look?.items?.includes(item?.id));
    setSelectedItems(lookItems);
    setCurrentLook(look);
  };

  const totalPrice = selectedItems?.reduce((sum, item) => sum + item?.price, 0);

  return (
    <div className="bg-card rounded-2xl luxury-shadow overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-playfair font-bold text-foreground">Mix & Match Studio</h3>
            <p className="text-sm text-muted-foreground mt-1">Create and visualize complete jewelry looks</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={clearSelection}
              disabled={selectedItems?.length === 0}
              iconName="X"
            >
              Clear
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={saveLook}
              disabled={selectedItems?.length === 0}
              iconName="Heart"
            >
              Save Look
            </Button>
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Current Selection */}
        {selectedItems?.length > 0 && (
          <div className="bg-primary/5 rounded-xl p-6 mb-8 border border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-foreground">Your Current Look</h4>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">${totalPrice?.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">{selectedItems?.length} items</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {selectedItems?.map((item) => (
                <div key={item?.id} className="relative bg-background rounded-lg p-3">
                  <button
                    onClick={() => toggleItemSelection(item)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center text-xs hover:bg-destructive/80 transition-colors duration-200"
                  >
                    <Icon name="X" size={12} />
                  </button>
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className="w-full h-16 object-cover rounded-lg mb-2"
                  />
                  <h5 className="font-medium text-foreground text-xs">{item?.name}</h5>
                  <p className="text-primary font-semibold text-xs">${item?.price?.toLocaleString()}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="default" size="sm" iconName="Camera">
                Virtual Try-On
              </Button>
              <Button variant="outline" size="sm" iconName="Share">
                Share Look
              </Button>
              <Button variant="outline" size="sm" iconName="ShoppingBag">
                Add All to Cart
              </Button>
            </div>
          </div>
        )}

        {/* Curated Looks */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-foreground mb-4">Curated Looks</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {curatedLooks?.map((look) => (
              <div key={look?.id} className="bg-secondary rounded-xl overflow-hidden hover:luxury-shadow-hover transition-all duration-300">
                <img
                  src={look?.image}
                  alt={look?.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h5 className="font-semibold text-foreground mb-1">{look?.name}</h5>
                  <p className="text-sm text-muted-foreground mb-3">{look?.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-primary font-semibold">${look?.totalPrice?.toLocaleString()}</span>
                    <span className="text-xs text-muted-foreground">{look?.items?.length} pieces</span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    onClick={() => loadCuratedLook(look)}
                    iconName="Eye"
                    iconPosition="left"
                  >
                    Try This Look
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories?.map((category) => (
            <Button
              key={category?.id}
              variant={activeCategory === category?.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveCategory(category?.id)}
              iconName={category?.icon}
              iconPosition="left"
            >
              {category?.name}
            </Button>
          ))}
        </div>

        {/* Jewelry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems?.map((item) => {
            const isSelected = selectedItems?.some(selected => selected?.id === item?.id);
            return (
              <div
                key={item?.id}
                className={`relative bg-secondary rounded-xl p-4 cursor-pointer transition-all duration-200 hover:luxury-shadow-hover ${
                  isSelected ? 'ring-2 ring-primary bg-primary/5' : ''
                }`}
                onClick={() => toggleItemSelection(item)}
              >
                {isSelected && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <Icon name="Check" size={12} />
                  </div>
                )}
                <img
                  src={item?.image}
                  alt={item?.name}
                  className="w-full h-24 object-cover rounded-lg mb-3"
                />
                <h5 className="font-medium text-foreground text-sm mb-1">{item?.name}</h5>
                <p className="text-xs text-muted-foreground mb-2">{item?.collection} Collection</p>
                <p className="text-primary font-semibold">${item?.price?.toLocaleString()}</p>
                <div className="mt-3 flex space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 text-xs"
                    iconName="Eye"
                  >
                    View
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 text-xs"
                    iconName="Camera"
                  >
                    Try On
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Saved Looks */}
        {savedLooks?.length > 0 && (
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-foreground mb-4">Your Saved Looks</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedLooks?.map((look) => (
                <div key={look?.id} className="bg-secondary rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-medium text-foreground">{look?.name}</h5>
                    <button className="text-muted-foreground hover:text-destructive">
                      <Icon name="Trash2" size={16} />
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {look?.items?.length} items • ${look?.totalPrice?.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">Saved on {look?.createdAt}</p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs">
                      Load
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 text-xs">
                      Share
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tips */}
        <div className="mt-8 bg-accent/10 rounded-xl p-6 border border-accent/20">
          <div className="flex items-start space-x-3">
            <Icon name="Lightbulb" size={24} className="text-accent mt-1" />
            <div>
              <h5 className="font-semibold text-foreground mb-2">Styling Tips</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Mix metals for a modern, eclectic look</li>
                <li>• Layer necklaces of different lengths for depth</li>
                <li>• Stack rings on multiple fingers for impact</li>
                <li>• Balance statement pieces with delicate accents</li>
                <li>• Consider your outfit's neckline when choosing necklaces</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MixMatchStudio;