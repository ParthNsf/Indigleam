import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const WishlistManager = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Ethereal Diamond Tennis Bracelet",
      price: 3200.00,
      originalPrice: 3200.00,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400",
      category: "bracelets",
      inStock: true,
      priceDropped: false,
      addedDate: "2024-08-01",
      description: "Timeless elegance with ethically sourced diamonds",
      notifications: {
        priceAlert: true,
        stockAlert: true
      }
    },
    {
      id: 2,
      name: "Vintage Rose Gold Ring",
      price: 1850.00,
      originalPrice: 2100.00,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400",
      category: "rings",
      inStock: true,
      priceDropped: true,
      addedDate: "2024-07-28",
      description: "Art Deco inspired design with vintage charm",
      notifications: {
        priceAlert: true,
        stockAlert: false
      }
    },
    {
      id: 3,
      name: "Pearl Cascade Earrings",
      price: 950.00,
      originalPrice: 950.00,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
      category: "earrings",
      inStock: false,
      priceDropped: false,
      addedDate: "2024-07-15",
      description: "Freshwater pearls in cascading design",
      notifications: {
        priceAlert: false,
        stockAlert: true
      }
    },
    {
      id: 4,
      name: "Celestial Star Necklace",
      price: 2400.00,
      originalPrice: 2400.00,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
      category: "necklaces",
      inStock: true,
      priceDropped: false,
      addedDate: "2024-06-20",
      description: "Constellation-inspired design with sapphires",
      notifications: {
        priceAlert: true,
        stockAlert: true
      }
    },
    {
      id: 5,
      name: "Heritage Gold Cufflinks",
      price: 680.00,
      originalPrice: 750.00,
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400",
      category: "accessories",
      inStock: true,
      priceDropped: true,
      addedDate: "2024-06-10",
      description: "Classic design with modern craftsmanship",
      notifications: {
        priceAlert: true,
        stockAlert: false
      }
    }
  ]);

  const categories = [
    { key: 'all', label: 'All Items', count: wishlistItems?.length },
    { key: 'rings', label: 'Rings', count: wishlistItems?.filter(item => item?.category === 'rings')?.length },
    { key: 'necklaces', label: 'Necklaces', count: wishlistItems?.filter(item => item?.category === 'necklaces')?.length },
    { key: 'earrings', label: 'Earrings', count: wishlistItems?.filter(item => item?.category === 'earrings')?.length },
    { key: 'bracelets', label: 'Bracelets', count: wishlistItems?.filter(item => item?.category === 'bracelets')?.length },
    { key: 'accessories', label: 'Accessories', count: wishlistItems?.filter(item => item?.category === 'accessories')?.length }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? wishlistItems 
    : wishlistItems?.filter(item => item?.category === selectedCategory);

  const removeFromWishlist = (itemId) => {
    setWishlistItems(prev => prev?.filter(item => item?.id !== itemId));
  };

  const toggleNotification = (itemId, notificationType) => {
    setWishlistItems(prev => prev?.map(item => 
      item?.id === itemId 
        ? {
            ...item,
            notifications: {
              ...item?.notifications,
              [notificationType]: !item?.notifications?.[notificationType]
            }
          }
        : item
    ));
  };

  const shareWishlist = () => {
    // Handle wishlist sharing
    console.log('Sharing wishlist...');
  };

  return (
    <div className="bg-card rounded-2xl p-6 luxury-shadow">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-playfair font-semibold text-foreground mb-2">My Wishlist</h2>
          <p className="text-sm text-muted-foreground">
            {wishlistItems?.length} item{wishlistItems?.length !== 1 ? 's' : ''} saved for later
          </p>
        </div>
        
        <div className="flex gap-3 mt-4 sm:mt-0">
          <Button 
            variant="outline" 
            size="sm" 
            iconName="Share2" 
            iconPosition="left"
            onClick={shareWishlist}
          >
            Share List
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            iconName="Download" 
            iconPosition="left"
          >
            Export
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
      {/* Wishlist Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems?.map((item) => (
          <div key={item?.id} className="border border-border rounded-xl overflow-hidden hover:luxury-shadow-hover transition-all duration-300">
            <div className="relative">
              <div className="aspect-square overflow-hidden">
                <Image 
                  src={item?.image} 
                  alt={item?.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Status Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {item?.priceDropped && (
                  <div className="bg-success text-success-foreground px-2 py-1 rounded-full text-xs font-medium">
                    Price Drop!
                  </div>
                )}
                {!item?.inStock && (
                  <div className="bg-warning text-warning-foreground px-2 py-1 rounded-full text-xs font-medium">
                    Out of Stock
                  </div>
                )}
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromWishlist(item?.id)}
                className="absolute top-3 right-3 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all duration-300"
              >
                <Icon name="X" size={16} />
              </button>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{item?.name}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item?.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-foreground">${item?.price?.toLocaleString()}</span>
                  {item?.priceDropped && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${item?.originalPrice?.toLocaleString()}
                    </span>
                  )}
                </div>
                <span className="text-xs text-muted-foreground">
                  Added {new Date(item.addedDate)?.toLocaleDateString()}
                </span>
              </div>

              {/* Notification Settings */}
              <div className="flex items-center gap-4 mb-4 text-xs">
                <button
                  onClick={() => toggleNotification(item?.id, 'priceAlert')}
                  className={`flex items-center gap-1 transition-colors duration-300 ${
                    item?.notifications?.priceAlert ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <Icon name={item?.notifications?.priceAlert ? "Bell" : "BellOff"} size={12} />
                  Price Alert
                </button>
                <button
                  onClick={() => toggleNotification(item?.id, 'stockAlert')}
                  className={`flex items-center gap-1 transition-colors duration-300 ${
                    item?.notifications?.stockAlert ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <Icon name={item?.notifications?.stockAlert ? "Package" : "PackageX"} size={12} />
                  Stock Alert
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Link to="/product-experience-immersive-jewelry-showcase" className="flex-1">
                  <Button 
                    variant={item?.inStock ? "default" : "outline"} 
                    size="sm" 
                    fullWidth
                    disabled={!item?.inStock}
                    iconName={item?.inStock ? "ShoppingBag" : "Eye"}
                    iconPosition="left"
                  >
                    {item?.inStock ? "Add to Cart" : "View Details"}
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="sm" 
                  iconName="Share2"
                  className="px-3"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredItems?.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Heart" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No items in this category</h3>
          <p className="text-muted-foreground mb-6">
            {selectedCategory === 'all' 
              ? "Start building your wishlist by exploring our collections." 
              : `No ${selectedCategory} items in your wishlist yet.`}
          </p>
          <Link to="/shop-collections-interactive-jewelry-gallery">
            <Button variant="default" iconName="Gem" iconPosition="left">
              Explore Collections
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default WishlistManager;