import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const PersonalProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    phone: user?.phone,
    birthDate: user?.birthDate,
    anniversary: user?.anniversary,
    preferredStyle: user?.preferredStyle,
    metalPreference: user?.metalPreference,
    gemstonePreference: user?.gemstonePreference,
    budgetRange: user?.budgetRange,
    notifications: {
      newCollections: user?.notifications?.newCollections || true,
      priceAlerts: user?.notifications?.priceAlerts || true,
      personalOffers: user?.notifications?.personalOffers || true,
      careReminders: user?.notifications?.careReminders || true
    }
  });

  const styleOptions = [
    { value: 'classic', label: 'Classic & Timeless' },
    { value: 'modern', label: 'Modern & Contemporary' },
    { value: 'vintage', label: 'Vintage & Antique' },
    { value: 'bohemian', label: 'Bohemian & Artistic' },
    { value: 'minimalist', label: 'Minimalist & Clean' },
    { value: 'statement', label: 'Bold & Statement' }
  ];

  const metalOptions = [
    { value: 'gold', label: 'Gold (Yellow, White, Rose)' },
    { value: 'platinum', label: 'Platinum' },
    { value: 'silver', label: 'Sterling Silver' },
    { value: 'mixed', label: 'Mixed Metals' },
    { value: 'no_preference', label: 'No Preference' }
  ];

  const gemstoneOptions = [
    { value: 'diamonds', label: 'Diamonds' },
    { value: 'colored_gems', label: 'Colored Gemstones' },
    { value: 'pearls', label: 'Pearls' },
    { value: 'birthstones', label: 'Birthstones' },
    { value: 'no_stones', label: 'No Stones/Metal Only' },
    { value: 'no_preference', label: 'No Preference' }
  ];

  const budgetOptions = [
    { value: 'under_500', label: 'Under $500' },
    { value: '500_1000', label: '$500 - $1,000' },
    { value: '1000_2500', label: '$1,000 - $2,500' },
    { value: '2500_5000', label: '$2,500 - $5,000' },
    { value: '5000_10000', label: '$5,000 - $10,000' },
    { value: 'over_10000', label: 'Over $10,000' }
  ];

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNotificationChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      notifications: {
        ...prev?.notifications,
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    // Handle profile save
    console.log('Saving profile:', profileData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset to original data
    setProfileData({
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      phone: user?.phone,
      birthDate: user?.birthDate,
      anniversary: user?.anniversary,
      preferredStyle: user?.preferredStyle,
      metalPreference: user?.metalPreference,
      gemstonePreference: user?.gemstonePreference,
      budgetRange: user?.budgetRange,
      notifications: {
        newCollections: user?.notifications?.newCollections || true,
        priceAlerts: user?.notifications?.priceAlerts || true,
        personalOffers: user?.notifications?.personalOffers || true,
        careReminders: user?.notifications?.careReminders || true
      }
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-card rounded-2xl p-6 luxury-shadow">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-playfair font-semibold text-foreground">Personal Profile</h2>
        {!isEditing ? (
          <Button 
            variant="outline" 
            size="sm" 
            iconName="Edit" 
            iconPosition="left"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              iconName="Save" 
              iconPosition="left"
              onClick={handleSave}
            >
              Save Changes
            </Button>
          </div>
        )}
      </div>
      <div className="space-y-8">
        {/* Personal Information */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Icon name="User" size={20} className="text-primary" />
            Personal Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              type="text"
              value={profileData?.firstName}
              onChange={(e) => handleInputChange('firstName', e?.target?.value)}
              disabled={!isEditing}
              required
            />
            
            <Input
              label="Last Name"
              type="text"
              value={profileData?.lastName}
              onChange={(e) => handleInputChange('lastName', e?.target?.value)}
              disabled={!isEditing}
              required
            />
            
            <Input
              label="Email Address"
              type="email"
              value={profileData?.email}
              onChange={(e) => handleInputChange('email', e?.target?.value)}
              disabled={!isEditing}
              required
            />
            
            <Input
              label="Phone Number"
              type="tel"
              value={profileData?.phone}
              onChange={(e) => handleInputChange('phone', e?.target?.value)}
              disabled={!isEditing}
            />
            
            <Input
              label="Birth Date"
              type="date"
              value={profileData?.birthDate}
              onChange={(e) => handleInputChange('birthDate', e?.target?.value)}
              disabled={!isEditing}
              description="For birthday rewards and personalized offers"
            />
            
            <Input
              label="Anniversary Date"
              type="date"
              value={profileData?.anniversary}
              onChange={(e) => handleInputChange('anniversary', e?.target?.value)}
              disabled={!isEditing}
              description="Optional - for special occasion reminders"
            />
          </div>
        </div>

        {/* Style Preferences */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Icon name="Palette" size={20} className="text-primary" />
            Style Preferences
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Preferred Style"
              options={styleOptions}
              value={profileData?.preferredStyle}
              onChange={(value) => handleInputChange('preferredStyle', value)}
              disabled={!isEditing}
              description="Helps us recommend pieces you'll love"
            />
            
            <Select
              label="Metal Preference"
              options={metalOptions}
              value={profileData?.metalPreference}
              onChange={(value) => handleInputChange('metalPreference', value)}
              disabled={!isEditing}
            />
            
            <Select
              label="Gemstone Preference"
              options={gemstoneOptions}
              value={profileData?.gemstonePreference}
              onChange={(value) => handleInputChange('gemstonePreference', value)}
              disabled={!isEditing}
            />
            
            <Select
              label="Budget Range"
              options={budgetOptions}
              value={profileData?.budgetRange}
              onChange={(value) => handleInputChange('budgetRange', value)}
              disabled={!isEditing}
              description="For personalized recommendations"
            />
          </div>
        </div>

        {/* Notification Preferences */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Icon name="Bell" size={20} className="text-primary" />
            Notification Preferences
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
              <div>
                <h4 className="font-medium text-foreground">New Collections</h4>
                <p className="text-sm text-muted-foreground">Get notified about new jewelry collections and arrivals</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={profileData?.notifications?.newCollections}
                  onChange={(e) => handleNotificationChange('newCollections', e?.target?.checked)}
                  disabled={!isEditing}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
              <div>
                <h4 className="font-medium text-foreground">Price Alerts</h4>
                <p className="text-sm text-muted-foreground">Receive alerts when wishlist items go on sale</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={profileData?.notifications?.priceAlerts}
                  onChange={(e) => handleNotificationChange('priceAlerts', e?.target?.checked)}
                  disabled={!isEditing}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
              <div>
                <h4 className="font-medium text-foreground">Personal Offers</h4>
                <p className="text-sm text-muted-foreground">Exclusive offers and discounts based on your preferences</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={profileData?.notifications?.personalOffers}
                  onChange={(e) => handleNotificationChange('personalOffers', e?.target?.checked)}
                  disabled={!isEditing}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
              <div>
                <h4 className="font-medium text-foreground">Care Reminders</h4>
                <p className="text-sm text-muted-foreground">Maintenance reminders for your jewelry collection</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={profileData?.notifications?.careReminders}
                  onChange={(e) => handleNotificationChange('careReminders', e?.target?.checked)}
                  disabled={!isEditing}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Account Security */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Icon name="Shield" size={20} className="text-primary" />
            Account Security
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
              <div>
                <h4 className="font-medium text-foreground">Two-Factor Authentication</h4>
                <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
              </div>
              <Button variant="outline" size="sm" iconName="Settings" iconPosition="left">
                Configure
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
              <div>
                <h4 className="font-medium text-foreground">Change Password</h4>
                <p className="text-sm text-muted-foreground">Update your account password</p>
              </div>
              <Button variant="outline" size="sm" iconName="Key" iconPosition="left">
                Change
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
              <div>
                <h4 className="font-medium text-foreground">Login History</h4>
                <p className="text-sm text-muted-foreground">View recent account access</p>
              </div>
              <Button variant="outline" size="sm" iconName="History" iconPosition="left">
                View
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalProfile;