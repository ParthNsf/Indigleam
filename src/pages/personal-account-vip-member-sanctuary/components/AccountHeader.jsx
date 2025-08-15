import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AccountHeader = ({ user }) => {
  return (
    <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 mb-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden luxury-shadow">
              <Image 
                src={user?.avatar} 
                alt={user?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Crown" size={16} color="white" />
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl font-playfair font-bold text-foreground mb-2">
              Welcome back, {user?.firstName}
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Star" size={16} className="text-primary fill-current" />
                <span className="font-medium">{user?.vipTier} Member</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Calendar" size={16} />
                <span>Member since {user?.memberSince}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="text-center p-4 bg-background rounded-xl luxury-shadow">
            <div className="text-2xl font-bold text-primary mb-1">{user?.rewardPoints}</div>
            <div className="text-sm text-muted-foreground">Reward Points</div>
          </div>
          <div className="text-center p-4 bg-background rounded-xl luxury-shadow">
            <div className="text-2xl font-bold text-primary mb-1">${user?.lifetimeSpent}</div>
            <div className="text-sm text-muted-foreground">Lifetime Spent</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountHeader;