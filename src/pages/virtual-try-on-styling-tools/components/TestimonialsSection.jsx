import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TestimonialsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedTestimonial, setExpandedTestimonial] = useState(null);

  const categories = [
    { id: 'all', name: 'All Reviews', count: 156 },
    { id: 'try-on', name: 'Virtual Try-On', count: 89 },
    { id: 'sizing', name: 'Size Guide', count: 34 },
    { id: 'styling', name: 'Style Advisor', count: 28 },
    { id: 'accuracy', name: 'Accuracy', count: 45 }
  ];

  const testimonials = [
    {
      id: 1,
      category: 'try-on',
      name: "Sarah Mitchell",
      location: "New York, NY",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      title: "Virtual Try-On Changed My Shopping Experience",
      content: `I was skeptical about buying jewelry online, but LuxeJewels' virtual try-on technology is incredible! I could see exactly how the earrings would look on me, and the AR was so accurate. The lighting adjustment feature helped me see how they'd look in different settings. When the earrings arrived, they looked exactly as I expected. This technology has completely changed how I shop for jewelry online.`,
      shortContent: "I was skeptical about buying jewelry online, but LuxeJewels' virtual try-on technology is incredible!",
      purchasedItem: "Diamond Drop Earrings",
      verifiedPurchase: true,
      helpful: 24,
      date: "2025-01-10",
      images: ["https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop"]
    },
    {
      id: 2,
      category: 'sizing',
      name: "Michael Chen",
      location: "San Francisco, CA",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      title: "Size Guide Saved Me From a Costly Mistake",
      content: `The interactive size guide is a game-changer! I was buying an engagement ring and was terrified of getting the wrong size. The step-by-step measurement guide was so detailed and easy to follow. The comparison with everyday objects really helped me understand the sizing. The ring fit perfectly when I proposed! The size guide gave me confidence in such an important purchase.`,
      shortContent: "The interactive size guide is a game-changer! I was buying an engagement ring and was terrified of getting the wrong size.",
      purchasedItem: "Solitaire Engagement Ring",
      verifiedPurchase: true,
      helpful: 31,
      date: "2025-01-08",
      images: ["https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop"]
    },
    {
      id: 3,
      category: 'styling',
      name: "Emma Rodriguez",
      location: "Miami, FL",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 4,
      title: "Style Advisor Helped Me Find My Perfect Look",
      content: `As someone who's not naturally good with jewelry styling, the Style Advisor was incredibly helpful. The questionnaire was thorough but not overwhelming, and the recommendations were spot-on for my face shape and style preferences. I ended up buying three pieces from the recommendations, and I get compliments every time I wear them. It's like having a personal stylist!`,
      shortContent: "As someone who's not naturally good with jewelry styling, the Style Advisor was incredibly helpful.",
      purchasedItem: "Pearl Stud Set",
      verifiedPurchase: true,
      helpful: 18,
      date: "2025-01-05",
      images: []
    },
    {
      id: 4,
      category: 'accuracy',
      name: "David Thompson",
      location: "Chicago, IL",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      rating: 5,
      title: "Incredibly Accurate Virtual Try-On",
      content: `I bought a watch for my wife using the virtual try-on feature. The accuracy was remarkable - the size, color, and even how the light reflected off the metal was exactly as shown in the AR preview. She was amazed when I told her I had "tried it on" virtually before buying. The technology is so advanced, it felt like magic!`,
      shortContent: "I bought a watch for my wife using the virtual try-on feature. The accuracy was remarkable.",
      purchasedItem: "Gold Tennis Bracelet",
      verifiedPurchase: true,
      helpful: 22,
      date: "2025-01-03",
      images: ["https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop"]
    },
    {
      id: 5,
      category: 'try-on',
      name: "Lisa Park",
      location: "Seattle, WA",
      avatar: "https://randomuser.me/api/portraits/women/41.jpg",
      rating: 5,
      title: "Perfect for Trying Different Styles",
      content: `The virtual try-on let me experiment with styles I never would have considered in person. I'm usually conservative with jewelry, but seeing how bold earrings looked on me through the AR gave me the confidence to try something new. The skin tone calibration feature was particularly impressive - it showed exactly how the gold would complement my complexion.`,
      shortContent: "The virtual try-on let me experiment with styles I never would have considered in person.",
      purchasedItem: "Statement Gold Hoops",
      verifiedPurchase: true,
      helpful: 15,
      date: "2025-01-01",
      images: []
    },
    {
      id: 6,
      category: 'styling',
      name: "Jennifer Adams",
      location: "Austin, TX",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
      rating: 4,
      title: "Mix & Match Feature is Brilliant",
      content: `The Mix & Match studio helped me create a complete jewelry wardrobe that works together. I could see how different pieces would layer and complement each other before buying. It saved me from making mismatched purchases and helped me build a cohesive collection. The styling tips were also incredibly valuable.`,
      shortContent: "The Mix & Match studio helped me create a complete jewelry wardrobe that works together.",
      purchasedItem: "Layered Necklace Set",
      verifiedPurchase: true,
      helpful: 19,
      date: "2024-12-28",
      images: ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop"]
    }
  ];

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials?.filter(testimonial => testimonial?.category === selectedCategory);

  const averageRating = testimonials?.reduce((sum, t) => sum + t?.rating, 0) / testimonials?.length;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  const toggleExpanded = (id) => {
    setExpandedTestimonial(expandedTestimonial === id ? null : id);
  };

  return (
    <div className="bg-card rounded-2xl luxury-shadow overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-playfair font-bold text-foreground">Customer Testimonials</h3>
            <p className="text-sm text-muted-foreground mt-1">Real experiences from our virtual tools users</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {renderStars(Math.round(averageRating))}
              </div>
              <span className="text-lg font-semibold text-foreground">{averageRating?.toFixed(1)}</span>
            </div>
            <p className="text-sm text-muted-foreground">{testimonials?.length} reviews</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories?.map((category) => (
            <Button
              key={category?.id}
              variant={selectedCategory === category?.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category?.id)}
            >
              {category?.name} ({category?.count})
            </Button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="space-y-6">
          {filteredTestimonials?.map((testimonial) => {
            const isExpanded = expandedTestimonial === testimonial?.id;
            return (
              <div key={testimonial?.id} className="bg-secondary rounded-xl p-6 hover:luxury-shadow-hover transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial?.avatar}
                      alt={testimonial?.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center space-x-2">
                        <h5 className="font-semibold text-foreground">{testimonial?.name}</h5>
                        {testimonial?.verifiedPurchase && (
                          <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                            <Icon name="CheckCircle" size={12} />
                            <span>Verified Purchase</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{testimonial?.location}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center space-x-1">
                          {renderStars(testimonial?.rating)}
                        </div>
                        <span className="text-sm text-muted-foreground">{testimonial?.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Purchased:</div>
                    <div className="text-sm font-medium text-foreground">{testimonial?.purchasedItem}</div>
                  </div>
                </div>
                {/* Content */}
                <div className="mb-4">
                  <h6 className="font-semibold text-foreground mb-2">{testimonial?.title}</h6>
                  <p className="text-muted-foreground">
                    {isExpanded ? testimonial?.content : testimonial?.shortContent}
                    {testimonial?.content?.length > testimonial?.shortContent?.length && (
                      <button
                        onClick={() => toggleExpanded(testimonial?.id)}
                        className="text-primary hover:text-primary/80 ml-2 font-medium"
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                      </button>
                    )}
                  </p>
                </div>
                {/* Images */}
                {testimonial?.images?.length > 0 && (
                  <div className="flex space-x-3 mb-4">
                    {testimonial?.images?.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${testimonial?.name}'s purchase`}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                    ))}
                  </div>
                )}
                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                      <Icon name="ThumbsUp" size={16} />
                      <span>Helpful ({testimonial?.helpful})</span>
                    </button>
                    <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                      <Icon name="MessageCircle" size={16} />
                      <span>Reply</span>
                    </button>
                    <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                      <Icon name="Share2" size={16} />
                      <span>Share</span>
                    </button>
                  </div>
                  
                  <div className={`text-xs px-2 py-1 rounded ${
                    testimonial?.category === 'try-on' ? 'bg-blue-100 text-blue-800' :
                    testimonial?.category === 'sizing' ? 'bg-green-100 text-green-800' :
                    testimonial?.category === 'styling'? 'bg-purple-100 text-purple-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {categories?.find(c => c?.id === testimonial?.category)?.name?.replace(' Reviews', '')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 bg-primary/5 rounded-xl p-6 border border-primary/20">
          <h5 className="font-semibold text-foreground mb-4">What Our Customers Love Most</h5>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Camera" size={24} className="text-primary" />
              </div>
              <h6 className="font-semibold text-foreground mb-1">Virtual Try-On Accuracy</h6>
              <p className="text-sm text-muted-foreground">96% of customers say our AR is "extremely accurate"</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Ruler" size={24} className="text-primary" />
              </div>
              <h6 className="font-semibold text-foreground mb-1">Size Guide Reliability</h6>
              <p className="text-sm text-muted-foreground">98% perfect fit rate using our measurement tools</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Sparkles" size={24} className="text-primary" />
              </div>
              <h6 className="font-semibold text-foreground mb-1">Style Satisfaction</h6>
              <p className="text-sm text-muted-foreground">94% love their Style Advisor recommendations</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <h5 className="font-semibold text-foreground mb-2">Ready to Experience Our Virtual Tools?</h5>
          <p className="text-sm text-muted-foreground mb-4">
            Join thousands of satisfied customers who've transformed their jewelry shopping experience
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="default" iconName="Camera">
              Try Virtual Try-On
            </Button>
            <Button variant="outline" iconName="Sparkles">
              Get Style Advice
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;