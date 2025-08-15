import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Home',
      path: '/homepage-luxury-jewelry-atelier',
      icon: 'Home'
    },
    {
      name: 'Collections',
      path: '/shop-collections-interactive-jewelry-gallery',
      icon: 'Gem'
    },
    {
      name: 'Try On',
      path: '/virtual-try-on-styling-tools',
      icon: 'Camera'
    },
    {
      name: 'Account',
      path: '/personal-account-vip-member-sanctuary',
      icon: 'User'
    }
  ];

  const moreItems = [
    {
      name: 'Product Experience',
      path: '/product-experience-immersive-jewelry-showcase',
      icon: 'Eye'
    },
    {
      name: 'Checkout',
      path: '/secure-checkout-luxury-purchase-experience',
      icon: 'ShoppingBag'
    }
  ];

  const isActivePath = (path) => location?.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md luxury-shadow' : 'bg-background'
    }`}>
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage-luxury-jewelry-atelier" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
          >
            <div className="relative">
              <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center">
                <Icon name="Gem" size={24} color="white" strokeWidth={2} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full sparkle-animation"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-playfair font-bold text-foreground">LuxeJewels</span>
              <span className="text-xs font-cormorant text-muted-foreground -mt-1">Intimate Digital Luxury</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActivePath(item?.path)
                    ? 'bg-primary/10 text-primary border border-primary/20' :'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span className="font-medium">{item?.name}</span>
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300">
                <Icon name="MoreHorizontal" size={18} />
                <span className="font-medium">More</span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-56 bg-popover border border-border rounded-luxury luxury-shadow opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-2">
                  {moreItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActivePath(item?.path)
                          ? 'bg-primary/10 text-primary' :'text-foreground hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      <Icon name={item?.icon} size={18} />
                      <span className="font-medium">{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="relative p-2 text-foreground hover:text-primary transition-colors duration-300">
              <Icon name="Search" size={20} />
            </button>
            
            <button className="relative p-2 text-foreground hover:text-primary transition-colors duration-300">
              <Icon name="Heart" size={20} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                3
              </span>
            </button>
            
            <button className="relative p-2 text-foreground hover:text-primary transition-colors duration-300">
              <Icon name="ShoppingBag" size={20} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                2
              </span>
            </button>

            <Button 
              variant="default" 
              size="sm"
              className="ml-4"
              iconName="Sparkles"
              iconPosition="left"
            >
              Try AR
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-6 py-4 bg-card border-t border-border">
            <nav className="space-y-2">
              {[...navigationItems, ...moreItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActivePath(item?.path)
                      ? 'bg-primary/10 text-primary border border-primary/20' :'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span className="font-medium">{item?.name}</span>
                </Link>
              ))}
            </nav>
            
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
              <div className="flex items-center space-x-4">
                <button className="relative p-2 text-foreground hover:text-primary transition-colors duration-300">
                  <Icon name="Search" size={20} />
                </button>
                
                <button className="relative p-2 text-foreground hover:text-primary transition-colors duration-300">
                  <Icon name="Heart" size={20} />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                    3
                  </span>
                </button>
                
                <button className="relative p-2 text-foreground hover:text-primary transition-colors duration-300">
                  <Icon name="ShoppingBag" size={20} />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                    2
                  </span>
                </button>
              </div>
              
              <Button 
                variant="default" 
                size="sm"
                iconName="Sparkles"
                iconPosition="left"
                onClick={() => setIsMenuOpen(false)}
              >
                Try AR
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;