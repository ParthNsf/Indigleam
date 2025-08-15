import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const StyleAdvisor = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [preferences, setPreferences] = useState({
    faceShape: '',
    stylePreference: '',
    occasion: '',
    budget: '',
    metalPreference: '',
    gemstonePreference: ''
  });
  const [recommendations, setRecommendations] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const faceShapeOptions = [
    { value: 'oval', label: 'Oval', description: 'Balanced proportions, versatile for most styles' },
    { value: 'round', label: 'Round', description: 'Soft curves, angular jewelry creates contrast' },
    { value: 'square', label: 'Square', description: 'Strong jawline, curved jewelry softens features' },
    { value: 'heart', label: 'Heart', description: 'Wider forehead, bottom-heavy earrings balance' },
    { value: 'diamond', label: 'Diamond', description: 'Narrow forehead and chin, wide cheekbones' },
    { value: 'oblong', label: 'Oblong', description: 'Longer face, horizontal elements add width' }
  ];

  const styleOptions = [
    { value: 'classic', label: 'Classic Elegance', description: 'Timeless pieces, traditional designs' },
    { value: 'modern', label: 'Modern Minimalist', description: 'Clean lines, contemporary aesthetics' },
    { value: 'bohemian', label: 'Bohemian Chic', description: 'Artistic, free-spirited designs' },
    { value: 'glamorous', label: 'Glamorous Statement', description: 'Bold, eye-catching pieces' },
    { value: 'vintage', label: 'Vintage Inspired', description: 'Retro designs with historical charm' },
    { value: 'edgy', label: 'Edgy Contemporary', description: 'Unconventional, fashion-forward styles' }
  ];

  const occasionOptions = [
    { value: 'everyday', label: 'Everyday Wear', description: 'Comfortable, versatile pieces' },
    { value: 'professional', label: 'Professional', description: 'Office-appropriate, sophisticated' },
    { value: 'evening', label: 'Evening Events', description: 'Elegant, formal occasions' },
    { value: 'wedding', label: 'Wedding & Celebrations', description: 'Special milestone moments' },
    { value: 'casual', label: 'Casual Outings', description: 'Relaxed, comfortable styling' },
    { value: 'date', label: 'Date Night', description: 'Romantic, attention-getting pieces' }
  ];

  const budgetOptions = [
    { value: 'under-500', label: 'Under $500', description: 'Affordable luxury options' },
    { value: '500-1500', label: '$500 - $1,500', description: 'Mid-range investment pieces' },
    { value: '1500-3000', label: '$1,500 - $3,000', description: 'Premium quality selections' },
    { value: '3000-5000', label: '$3,000 - $5,000', description: 'High-end luxury items' },
    { value: 'over-5000', label: 'Over $5,000', description: 'Exclusive, heirloom quality' }
  ];

  const metalOptions = [
    { value: 'gold', label: 'Gold', description: 'Classic warmth, timeless appeal' },
    { value: 'white-gold', label: 'White Gold', description: 'Modern elegance, versatile' },
    { value: 'rose-gold', label: 'Rose Gold', description: 'Romantic, contemporary trend' },
    { value: 'platinum', label: 'Platinum', description: 'Ultimate luxury, hypoallergenic' },
    { value: 'silver', label: 'Sterling Silver', description: 'Affordable, classic choice' },
    { value: 'mixed', label: 'Mixed Metals', description: 'Versatile, modern approach' }
  ];

  const gemstoneOptions = [
    { value: 'diamond', label: 'Diamonds', description: 'Ultimate brilliance and fire' },
    { value: 'sapphire', label: 'Sapphires', description: 'Rich colors, exceptional durability' },
    { value: 'emerald', label: 'Emeralds', description: 'Vibrant green, classic luxury' },
    { value: 'ruby', label: 'Rubies', description: 'Passionate red, symbol of love' },
    { value: 'pearl', label: 'Pearls', description: 'Timeless elegance, natural beauty' },
    { value: 'colored', label: 'Colored Gemstones', description: 'Unique, personal expression' }
  ];

  const mockRecommendations = [
    {
      id: 1,
      name: "Classic Pearl Studs",
      category: "Earrings",
      price: 450,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop",
      match: 95,
      reason: "Perfect for your oval face shape and classic style preference. Ideal for professional settings."
    },
    {
      id: 2,
      name: "Delicate Gold Chain",
      category: "Necklace",
      price: 680,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop",
      match: 92,
      reason: "Complements your gold preference and works beautifully for everyday wear."
    },
    {
      id: 3,
      name: "Diamond Tennis Bracelet",
      category: "Bracelet",
      price: 1850,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop",
      match: 88,
      reason: "Elegant statement piece perfect for evening events within your budget range."
    },
    {
      id: 4,
      name: "Solitaire Engagement Ring",
      category: "Ring",
      price: 2400,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop",
      match: 90,
      reason: "Timeless design that matches your classic elegance preference perfectly."
    }
  ];

  const generateRecommendations = async () => {
    setIsGenerating(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setRecommendations(mockRecommendations);
    setIsGenerating(false);
    setCurrentStep(3);
  };

  const handlePreferenceChange = (field, value) => {
    setPreferences(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(1);
    setPreferences({
      faceShape: '',
      stylePreference: '',
      occasion: '',
      budget: '',
      metalPreference: '',
      gemstonePreference: ''
    });
    setRecommendations([]);
  };

  return (
    <div className="bg-card rounded-2xl luxury-shadow overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-playfair font-bold text-foreground">Personal Style Advisor</h3>
            <p className="text-sm text-muted-foreground mt-1">Get personalized jewelry recommendations</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[1, 2, 3]?.map((step) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                    step === currentStep
                      ? 'bg-primary text-primary-foreground'
                      : step < currentStep
                      ? 'bg-primary/20 text-primary' :'bg-secondary text-muted-foreground'
                  }`}
                >
                  {step < currentStep ? <Icon name="Check" size={16} /> : step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Step 1: Face Shape & Style */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-2">Tell us about your style</h4>
              <p className="text-muted-foreground">Help us understand your preferences for personalized recommendations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Face Shape"
                description="This helps us recommend flattering earring and necklace styles"
                options={faceShapeOptions}
                value={preferences?.faceShape}
                onChange={(value) => handlePreferenceChange('faceShape', value)}
                placeholder="Select your face shape"
              />

              <Select
                label="Style Preference"
                description="Your personal aesthetic and fashion approach"
                options={styleOptions}
                value={preferences?.stylePreference}
                onChange={(value) => handlePreferenceChange('stylePreference', value)}
                placeholder="Choose your style"
              />

              <Select
                label="Primary Occasion"
                description="When will you wear these pieces most often?"
                options={occasionOptions}
                value={preferences?.occasion}
                onChange={(value) => handlePreferenceChange('occasion', value)}
                placeholder="Select occasion"
              />

              <Select
                label="Budget Range"
                description="Your comfortable investment range"
                options={budgetOptions}
                value={preferences?.budget}
                onChange={(value) => handlePreferenceChange('budget', value)}
                placeholder="Choose budget"
              />
            </div>

            <div className="flex justify-end">
              <Button
                variant="default"
                onClick={nextStep}
                disabled={!preferences?.faceShape || !preferences?.stylePreference || !preferences?.occasion || !preferences?.budget}
                iconName="ArrowRight"
                iconPosition="right"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Metal & Gemstone Preferences */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-2">Material Preferences</h4>
              <p className="text-muted-foreground">Choose your preferred metals and gemstones</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Metal Preference"
                description="Your preferred metal type and color"
                options={metalOptions}
                value={preferences?.metalPreference}
                onChange={(value) => handlePreferenceChange('metalPreference', value)}
                placeholder="Select metal preference"
              />

              <Select
                label="Gemstone Preference"
                description="Your favorite gemstone types"
                options={gemstoneOptions}
                value={preferences?.gemstonePreference}
                onChange={(value) => handlePreferenceChange('gemstonePreference', value)}
                placeholder="Choose gemstones"
              />
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={prevStep}
                iconName="ArrowLeft"
                iconPosition="left"
              >
                Back
              </Button>
              <Button
                variant="default"
                onClick={generateRecommendations}
                disabled={!preferences?.metalPreference || !preferences?.gemstonePreference}
                loading={isGenerating}
                iconName="Sparkles"
                iconPosition="right"
              >
                Get Recommendations
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Recommendations */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-2">Your Personalized Recommendations</h4>
              <p className="text-muted-foreground">Based on your style profile, here are our top picks for you</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendations?.map((item) => (
                <div key={item?.id} className="bg-secondary rounded-xl p-6 hover:luxury-shadow-hover transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <img
                      src={item?.image}
                      alt={item?.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold text-foreground">{item?.name}</h5>
                        <div className="flex items-center space-x-1">
                          <Icon name="Heart" size={16} className="text-primary" />
                          <span className="text-sm font-medium text-primary">{item?.match}% match</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{item?.category}</p>
                      <p className="text-lg font-semibold text-primary mb-3">${item?.price?.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground mb-4">{item?.reason}</p>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" iconName="Eye">
                          View Details
                        </Button>
                        <Button variant="default" size="sm" iconName="Camera">
                          Try On
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                onClick={resetQuiz}
                iconName="RotateCcw"
                iconPosition="left"
              >
                Start Over
              </Button>
              <Button
                variant="default"
                iconName="ShoppingBag"
                iconPosition="left"
              >
                Shop All Recommendations
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StyleAdvisor;