import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import AccountHeader from './components/AccountHeader';
import QuickActions from './components/QuickActions';
import OrderHistory from './components/OrderHistory';
import WishlistManager from './components/WishlistManager';
import VipRewards from './components/VipRewards';
import PersonalProfile from './components/PersonalProfile';
import JewelryCollection from './components/JewelryCollection';

const PersonalAccountVipMemberSanctuary = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const userData = {
    id: 1,
    firstName: "Isabella",
    lastName: "Rodriguez",
    name: "Isabella Rodriguez",
    email: "isabella.rodriguez@email.com",
    phone: "+1 (555) 123-4567",
    birthDate: "1990-03-15",
    anniversary: "2018-06-20",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
    vipTier: "Platinum",
    memberSince: "March 2020",
    rewardPoints: 4250,
    lifetimeSpent: 18500,
    preferredStyle: "classic",
    metalPreference: "gold",
    gemstonePreference: "diamonds",
    budgetRange: "2500_5000",
    notifications: {
      newCollections: true,
      priceAlerts: true,
      personalOffers: true,
      careReminders: true
    }
  };

  const navigationTabs = [
    {
      key: 'overview',
      label: 'Overview',
      icon: 'Home',
      description: 'Dashboard and quick actions'
    },
    {
      key: 'orders',
      label: 'Order History',
      icon: 'Package',
      description: 'Track your purchases and deliveries'
    },
    {
      key: 'wishlist',
      label: 'Wishlist',
      icon: 'Heart',
      description: 'Saved items and notifications'
    },
    {
      key: 'collection',
      label: 'My Collection',
      icon: 'Gem',
      description: 'Your jewelry collection and care'
    },
    {
      key: 'rewards',
      label: 'VIP Rewards',
      icon: 'Star',
      description: 'Points, benefits, and exclusive access'
    },
    {
      key: 'profile',
      label: 'Profile',
      icon: 'User',
      description: 'Personal information and preferences'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <QuickActions />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-6 luxury-shadow">
                  <h3 className="text-lg font-playfair font-semibold text-foreground mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-background rounded-lg">
                      <div className="w-10 h-10 bg-success/20 text-success rounded-full flex items-center justify-center">
                        <Icon name="Package" size={16} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">Order Delivered</p>
                        <p className="text-sm text-muted-foreground">Celestial Diamond Necklace • Aug 12</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-background rounded-lg">
                      <div className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                        <Icon name="Star" size={16} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">Points Earned</p>
                        <p className="text-sm text-muted-foreground">285 points from recent purchase</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-background rounded-lg">
                      <div className="w-10 h-10 bg-warning/20 text-warning rounded-full flex items-center justify-center">
                        <Icon name="Heart" size={16} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">Price Drop Alert</p>
                        <p className="text-sm text-muted-foreground">Vintage Rose Gold Ring • Save $250</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card rounded-2xl p-6 luxury-shadow">
                  <h3 className="text-lg font-playfair font-semibold text-foreground mb-4">Care Reminders</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-background rounded-lg">
                      <div className="w-10 h-10 bg-accent/20 text-accent rounded-full flex items-center justify-center">
                        <Icon name="Calendar" size={16} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">Cleaning Due Soon</p>
                        <p className="text-sm text-muted-foreground">Custom Engagement Ring • Due in 15 days</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-background rounded-lg">
                      <div className="w-10 h-10 bg-success/20 text-success rounded-full flex items-center justify-center">
                        <Icon name="Shield" size={16} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">Insurance Updated</p>
                        <p className="text-sm text-muted-foreground">All pieces covered and up to date</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'orders':
        return <OrderHistory />;
      case 'wishlist':
        return <WishlistManager />;
      case 'collection':
        return <JewelryCollection />;
      case 'rewards':
        return <VipRewards user={userData} />;
      case 'profile':
        return <PersonalProfile user={userData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AccountHeader user={userData} />
          
          {/* Navigation Tabs */}
          <div className="bg-card rounded-2xl p-2 luxury-shadow mb-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {navigationTabs?.map((tab) => (
                <button
                  key={tab?.key}
                  onClick={() => setActiveTab(tab?.key)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 group ${
                    activeTab === tab?.key
                      ? 'bg-primary text-primary-foreground luxury-shadow'
                      : 'hover:bg-muted/50 text-foreground'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon 
                      name={tab?.icon} 
                      size={20} 
                      className={`${
                        activeTab === tab?.key ? 'text-primary-foreground' : 'text-primary'
                      } group-hover:scale-110 transition-transform duration-300`}
                    />
                    <span className="font-medium">{tab?.label}</span>
                  </div>
                  <p className={`text-xs ${
                    activeTab === tab?.key ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}>
                    {tab?.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {renderTabContent()}
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center">
                  <Icon name="Gem" size={24} color="white" strokeWidth={2} />
                </div>
                <div>
                  <span className="text-xl font-playfair font-bold text-foreground">LuxeJewels</span>
                  <p className="text-sm font-cormorant text-muted-foreground">VIP Member Sanctuary</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Your personal luxury jewelry experience, crafted with care and attention to every detail.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300">
                  <Icon name="Phone" size={20} />
                </button>
                <button className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300">
                  <Icon name="Mail" size={20} />
                </button>
                <button className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300">
                  <Icon name="MessageCircle" size={20} />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Account Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button className="hover:text-primary transition-colors duration-300">Order Support</button></li>
                <li><button className="hover:text-primary transition-colors duration-300">Care Services</button></li>
                <li><button className="hover:text-primary transition-colors duration-300">Insurance Claims</button></li>
                <li><button className="hover:text-primary transition-colors duration-300">Personal Stylist</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">VIP Benefits</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button className="hover:text-primary transition-colors duration-300">Exclusive Previews</button></li>
                <li><button className="hover:text-primary transition-colors duration-300">Private Events</button></li>
                <li><button className="hover:text-primary transition-colors duration-300">Concierge Service</button></li>
                <li><button className="hover:text-primary transition-colors duration-300">Custom Designs</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} LuxeJewels. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Privacy Policy</button>
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Terms of Service</button>
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Security</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PersonalAccountVipMemberSanctuary;