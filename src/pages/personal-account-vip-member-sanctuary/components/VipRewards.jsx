import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VipRewards = ({ user }) => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const rewardTiers = [
    { name: 'Silver', min: 0, color: 'bg-gray-100 text-gray-600', benefits: ['Free shipping', 'Birthday discount'] },
    { name: 'Gold', min: 5000, color: 'bg-yellow-100 text-yellow-600', benefits: ['Priority support', 'Exclusive previews', 'Free cleaning'] },
    { name: 'Platinum', min: 15000, color: 'bg-purple-100 text-purple-600', benefits: ['Personal stylist', 'VIP events', 'Custom designs'] },
    { name: 'Diamond', min: 30000, color: 'bg-blue-100 text-blue-600', benefits: ['Concierge service', 'Private showings', 'Lifetime warranty'] }
  ];

  const currentTier = rewardTiers?.find(tier => 
    user?.lifetimeSpent >= tier?.min && 
    (rewardTiers?.indexOf(tier) === rewardTiers?.length - 1 || user?.lifetimeSpent < rewardTiers?.[rewardTiers?.indexOf(tier) + 1]?.min)
  );

  const nextTier = rewardTiers?.[rewardTiers?.indexOf(currentTier) + 1];
  const progressToNext = nextTier ? ((user?.lifetimeSpent - currentTier?.min) / (nextTier?.min - currentTier?.min)) * 100 : 100;

  const availableRewards = [
    {
      id: 1,
      title: "Complimentary Jewelry Cleaning",
      description: "Professional cleaning service for any piece",
      points: 500,
      category: "service",
      icon: "Sparkles",
      available: user?.rewardPoints >= 500
    },
    {
      id: 2,
      title: "$50 Shopping Credit",
      description: "Apply to any purchase over $200",
      points: 1000,
      category: "credit",
      icon: "DollarSign",
      available: user?.rewardPoints >= 1000
    },
    {
      id: 3,
      title: "Personal Styling Session",
      description: "60-minute consultation with our expert stylist",
      points: 1500,
      category: "service",
      icon: "User",
      available: user?.rewardPoints >= 1500
    },
    {
      id: 4,
      title: "Exclusive Collection Preview",
      description: "Early access to new collection launches",
      points: 2000,
      category: "access",
      icon: "Eye",
      available: user?.rewardPoints >= 2000
    },
    {
      id: 5,
      title: "$200 Shopping Credit",
      description: "Apply to any purchase over $500",
      points: 3500,
      category: "credit",
      icon: "Gift",
      available: user?.rewardPoints >= 3500
    },
    {
      id: 6,
      title: "VIP Event Invitation",
      description: "Exclusive access to luxury jewelry events",
      points: 5000,
      category: "access",
      icon: "Calendar",
      available: user?.rewardPoints >= 5000
    }
  ];

  const recentActivity = [
    {
      date: "2024-08-10",
      action: "Purchase",
      description: "Celestial Diamond Necklace",
      points: 285,
      type: "earned"
    },
    {
      date: "2024-07-28",
      action: "Review",
      description: "Product review for Pearl Earrings",
      points: 50,
      type: "earned"
    },
    {
      date: "2024-07-15",
      action: "Redemption",
      description: "Complimentary Jewelry Cleaning",
      points: 500,
      type: "redeemed"
    },
    {
      date: "2024-06-22",
      action: "Purchase",
      description: "Vintage Gold Bracelet",
      points: 320,
      type: "earned"
    },
    {
      date: "2024-06-10",
      action: "Birthday Bonus",
      description: "Annual birthday reward",
      points: 200,
      type: "earned"
    }
  ];

  const redeemReward = (rewardId) => {
    console.log(`Redeeming reward ${rewardId}`);
  };

  const tabs = [
    { key: 'overview', label: 'Overview', icon: 'Star' },
    { key: 'rewards', label: 'Available Rewards', icon: 'Gift' },
    { key: 'activity', label: 'Points History', icon: 'Activity' }
  ];

  return (
    <div className="bg-card rounded-2xl p-6 luxury-shadow">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-playfair font-semibold text-foreground">VIP Rewards Program</h2>
        <div className={`px-4 py-2 rounded-full ${currentTier?.color} font-medium`}>
          {currentTier?.name} Member
        </div>
      </div>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-border">
        {tabs?.map((tab) => (
          <button
            key={tab?.key}
            onClick={() => setSelectedTab(tab?.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-medium transition-all duration-300 ${
              selectedTab === tab?.key
                ? 'bg-primary/10 text-primary border-b-2 border-primary' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            {tab?.label}
          </button>
        ))}
      </div>
      {/* Overview Tab */}
      {selectedTab === 'overview' && (
        <div className="space-y-6">
          {/* Current Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-primary/5 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">{user?.rewardPoints}</div>
              <div className="text-sm text-muted-foreground">Available Points</div>
            </div>
            <div className="text-center p-6 bg-accent/5 rounded-xl">
              <div className="text-3xl font-bold text-accent mb-2">${user?.lifetimeSpent?.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Lifetime Spent</div>
            </div>
            <div className="text-center p-6 bg-success/5 rounded-xl">
              <div className="text-3xl font-bold text-success mb-2">12</div>
              <div className="text-sm text-muted-foreground">Rewards Redeemed</div>
            </div>
          </div>

          {/* Tier Progress */}
          {nextTier && (
            <div className="p-6 bg-muted/20 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Progress to {nextTier?.name}</h3>
                <span className="text-sm text-muted-foreground">
                  ${(nextTier?.min - user?.lifetimeSpent)?.toLocaleString()} to go
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-3 mb-4">
                <div 
                  className="bg-primary h-3 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(progressToNext, 100)}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{currentTier?.name}</span>
                <span>{nextTier?.name}</span>
              </div>
            </div>
          )}

          {/* Current Benefits */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Your {currentTier?.name} Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentTier?.benefits?.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
                  <Icon name="CheckCircle" size={20} className="text-success" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Available Rewards Tab */}
      {selectedTab === 'rewards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {availableRewards?.map((reward) => (
            <div key={reward?.id} className={`p-6 rounded-xl border transition-all duration-300 ${
              reward?.available 
                ? 'border-primary/20 bg-primary/5 hover:luxury-shadow-hover' 
                : 'border-border bg-muted/20'
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  reward?.available ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon name={reward?.icon} size={24} />
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  reward?.available ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  {reward?.points} pts
                </div>
              </div>
              
              <h4 className="font-semibold text-foreground mb-2">{reward?.title}</h4>
              <p className="text-sm text-muted-foreground mb-4">{reward?.description}</p>
              
              <Button
                variant={reward?.available ? "default" : "outline"}
                size="sm"
                fullWidth
                disabled={!reward?.available}
                onClick={() => redeemReward(reward?.id)}
                iconName={reward?.available ? "Gift" : "Lock"}
                iconPosition="left"
              >
                {reward?.available ? "Redeem Now" : "Insufficient Points"}
              </Button>
            </div>
          ))}
        </div>
      )}
      {/* Activity Tab */}
      {selectedTab === 'activity' && (
        <div className="space-y-4">
          {recentActivity?.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activity?.type === 'earned' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'
                }`}>
                  <Icon name={activity?.type === 'earned' ? "Plus" : "Minus"} size={16} />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{activity?.action}</h4>
                  <p className="text-sm text-muted-foreground">{activity?.description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-semibold ${
                  activity?.type === 'earned' ? 'text-success' : 'text-warning'
                }`}>
                  {activity?.type === 'earned' ? '+' : '-'}{activity?.points} pts
                </div>
                <div className="text-sm text-muted-foreground">
                  {new Date(activity.date)?.toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VipRewards;