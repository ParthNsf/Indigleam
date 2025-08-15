import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const SocialSharing = () => {
  const [selectedLook, setSelectedLook] = useState(null);
  const [shareMessage, setShareMessage] = useState('');
  const [isSharing, setIsSharing] = useState(false);
  const [feedbackRequests, setFeedbackRequests] = useState([]);

  const savedLooks = [
    {
      id: 1,
      name: "Evening Glamour",
      items: ["Diamond Studs", "Pearl Necklace", "Tennis Bracelet"],
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
      price: 2850,
      createdAt: "2025-01-10",
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      name: "Professional Chic",
      items: ["Classic Studs", "Simple Chain", "Watch"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      price: 1200,
      createdAt: "2025-01-08",
      likes: 18,
      comments: 5
    },
    {
      id: 3,
      name: "Casual Weekend",
      items: ["Hoop Earrings", "Layered Chains", "Stackable Rings"],
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop",
      price: 680,
      createdAt: "2025-01-05",
      likes: 31,
      comments: 12
    }
  ];

  const socialPlatforms = [
    { id: 'instagram', name: 'Instagram', icon: 'Instagram', color: 'bg-pink-500', textColor: 'text-white' },
    { id: 'facebook', name: 'Facebook', icon: 'Facebook', color: 'bg-blue-600', textColor: 'text-white' },
    { id: 'twitter', name: 'Twitter', icon: 'Twitter', color: 'bg-blue-400', textColor: 'text-white' },
    { id: 'pinterest', name: 'Pinterest', icon: 'Image', color: 'bg-red-600', textColor: 'text-white' },
    { id: 'whatsapp', name: 'WhatsApp', icon: 'MessageCircle', color: 'bg-green-500', textColor: 'text-white' },
    { id: 'email', name: 'Email', icon: 'Mail', color: 'bg-gray-600', textColor: 'text-white' }
  ];

  const recentFeedback = [
    {
      id: 1,
      lookName: "Evening Glamour",
      friend: "Sarah M.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      comment: "Love this combination! The pearls add such elegance. Perfect for your anniversary dinner! 💕",
      timestamp: "2 hours ago",
      helpful: true
    },
    {
      id: 2,
      lookName: "Professional Chic",
      friend: "Emma K.",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      comment: "This is perfect for your presentation! The simple chain is sophisticated without being distracting.",
      timestamp: "5 hours ago",
      helpful: true
    },
    {
      id: 3,
      lookName: "Casual Weekend",
      friend: "Lisa R.",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      comment: "I\'m not sure about mixing all those chains together. Maybe try just two layers?",
      timestamp: "1 day ago",
      helpful: false
    }
  ];

  const handleShare = async (platform, look) => {
    setIsSharing(true);
    
    // Simulate sharing process
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Add to feedback requests
    const newRequest = {
      id: Date.now(),
      lookId: look?.id,
      lookName: look?.name,
      platform: platform?.name,
      message: shareMessage,
      sentAt: new Date()?.toISOString(),
      responses: 0
    };
    
    setFeedbackRequests(prev => [newRequest, ...prev]);
    setIsSharing(false);
    setShareMessage('');
    
    // Show success message (in real app, this would be a toast notification)
    alert(`Successfully shared "${look?.name}" on ${platform?.name}!`);
  };

  const generateShareMessage = (look) => {
    const messages = [
      `What do you think of this jewelry combination? 💎✨ #JewelryStyle #LuxeJewels`,
      `Trying to decide on this look for tonight! Thoughts? 💍👂 #JewelryLover`,
      `Found the perfect pieces! Should I go for it? 💫 #JewelryAddict`,
      `This combination caught my eye! What's your opinion? ✨ #StyleAdvice`
    ];
    return messages?.[Math.floor(Math.random() * messages?.length)];
  };

  return (
    <div className="bg-card rounded-2xl luxury-shadow overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-playfair font-bold text-foreground">Social Sharing & Feedback</h3>
            <p className="text-sm text-muted-foreground mt-1">Get opinions from friends and family on your jewelry choices</p>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Share2" size={24} className="text-primary" />
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Your Looks */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-foreground mb-4">Share Your Looks</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {savedLooks?.map((look) => (
              <div key={look?.id} className="bg-secondary rounded-xl overflow-hidden hover:luxury-shadow-hover transition-all duration-300">
                <img
                  src={look?.image}
                  alt={look?.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h5 className="font-semibold text-foreground mb-2">{look?.name}</h5>
                  <p className="text-sm text-muted-foreground mb-2">
                    {look?.items?.join(", ")}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-primary font-semibold">${look?.price?.toLocaleString()}</span>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Icon name="Heart" size={14} />
                        <span>{look?.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageCircle" size={14} />
                        <span>{look?.comments}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    onClick={() => setSelectedLook(look)}
                    iconName="Share2"
                  >
                    Share for Feedback
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share Modal */}
        {selectedLook && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h4 className="text-lg font-semibold text-foreground">Share "{selectedLook?.name}"</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedLook(null)}
                  iconName="X"
                />
              </div>

              <div className="p-6">
                {/* Look Preview */}
                <div className="flex items-center space-x-4 mb-6 p-4 bg-secondary rounded-lg">
                  <img
                    src={selectedLook?.image}
                    alt={selectedLook?.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h5 className="font-semibold text-foreground">{selectedLook?.name}</h5>
                    <p className="text-sm text-muted-foreground">{selectedLook?.items?.join(", ")}</p>
                    <p className="text-primary font-semibold">${selectedLook?.price?.toLocaleString()}</p>
                  </div>
                </div>

                {/* Share Message */}
                <div className="mb-6">
                  <Input
                    label="Your Message"
                    type="text"
                    placeholder="What would you like to ask your friends?"
                    value={shareMessage}
                    onChange={(e) => setShareMessage(e?.target?.value)}
                    description="Add a personal message to get better feedback"
                  />
                  <div className="mt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShareMessage(generateShareMessage(selectedLook))}
                      iconName="Wand2"
                    >
                      Generate Message
                    </Button>
                  </div>
                </div>

                {/* Social Platforms */}
                <div className="mb-6">
                  <h5 className="font-semibold text-foreground mb-3">Choose Platform</h5>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {socialPlatforms?.map((platform) => (
                      <Button
                        key={platform?.id}
                        variant="outline"
                        className={`${platform?.color} ${platform?.textColor} border-0 hover:opacity-90`}
                        onClick={() => handleShare(platform, selectedLook)}
                        disabled={isSharing}
                        loading={isSharing}
                        iconName={platform?.icon}
                        iconPosition="left"
                      >
                        {platform?.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex space-x-3">
                  <Button
                    variant="default"
                    className="flex-1"
                    onClick={() => {
                      // Share to multiple platforms
                      socialPlatforms?.slice(0, 3)?.forEach(platform => {
                        handleShare(platform, selectedLook);
                      });
                    }}
                    disabled={isSharing}
                    iconName="Zap"
                  >
                    Share to All
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedLook(null)}
                    disabled={isSharing}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recent Feedback */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-foreground mb-4">Recent Feedback</h4>
          <div className="space-y-4">
            {recentFeedback?.map((feedback) => (
              <div key={feedback?.id} className="bg-secondary rounded-xl p-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={feedback?.avatar}
                    alt={feedback?.friend}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-semibold text-foreground">{feedback?.friend}</span>
                        <span className="text-sm text-muted-foreground ml-2">on "{feedback?.lookName}"</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{feedback?.timestamp}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{feedback?.comment}</p>
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="Heart"
                        className="text-xs"
                      >
                        Thank
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        iconName="MessageCircle"
                        className="text-xs"
                      >
                        Reply
                      </Button>
                      <div className={`flex items-center space-x-1 text-xs ${
                        feedback?.helpful ? 'text-green-600' : 'text-yellow-600'
                      }`}>
                        <Icon name={feedback?.helpful ? "ThumbsUp" : "AlertCircle"} size={12} />
                        <span>{feedback?.helpful ? "Helpful" : "Mixed"}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback Requests */}
        {feedbackRequests?.length > 0 && (
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-foreground mb-4">Pending Feedback Requests</h4>
            <div className="space-y-3">
              {feedbackRequests?.map((request) => (
                <div key={request?.id} className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium text-foreground">"{request?.lookName}" shared on {request?.platform}</h5>
                      <p className="text-sm text-muted-foreground">{request?.message}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">{request?.responses} responses</div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(request.sentAt)?.toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tips */}
        <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
          <div className="flex items-start space-x-3">
            <Icon name="Lightbulb" size={24} className="text-accent mt-1" />
            <div>
              <h5 className="font-semibold text-foreground mb-2">Tips for Better Feedback</h5>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Ask specific questions about what you're unsure about</li>
                <li>• Share the occasion or context for wearing the jewelry</li>
                <li>• Include multiple angles or close-up shots when possible</li>
                <li>• Be open to constructive criticism and different perspectives</li>
                <li>• Thank friends for their time and honest opinions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSharing;