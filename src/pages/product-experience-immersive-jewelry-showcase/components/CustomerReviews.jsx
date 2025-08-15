import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CustomerReviews = ({ product }) => {
  const [sortBy, setSortBy] = useState('newest');
  const [filterRating, setFilterRating] = useState('all');
  const [showPhotosOnly, setShowPhotosOnly] = useState(false);

  const reviews = [
    {
      id: 1,
      customerName: "Sarah Mitchell",
      customerImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      date: "2025-08-10",
      verified: true,
      title: "Absolutely stunning piece!",
      content: `This necklace exceeded all my expectations. The craftsmanship is impeccable, and it catches the light beautifully. I've received so many compliments when wearing it. The packaging was also luxurious - perfect for a gift. The size is exactly as described, and it feels substantial without being heavy.`,
      helpful: 24,
      photos: [
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop"
      ],
      purchaseDetails: {
        size: "18 inches",
        finish: "Yellow Gold"
      }
    },
    {
      id: 2,
      customerName: "Emily Rodriguez",
      customerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      date: "2025-08-08",
      verified: true,
      title: "Perfect for special occasions",
      content: `Bought this for my anniversary dinner and it was perfect. The quality is outstanding and it photographs beautifully. My husband was impressed with the choice. The customer service was also excellent - they helped me choose the right size.`,
      helpful: 18,
      photos: [
        "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop"
      ],
      purchaseDetails: {
        size: "16 inches",
        finish: "Rose Gold"
      }
    },
    {
      id: 3,
      customerName: "Jessica Chen",
      customerImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      date: "2025-08-05",
      verified: true,
      title: "Beautiful but runs small",
      content: `The necklace is gorgeous and well-made. However, I found it runs a bit smaller than expected. I ordered 18 inches but it feels more like 16. The quality is definitely there though, and the stones are brilliant. Would recommend sizing up.`,
      helpful: 12,
      photos: [],
      purchaseDetails: {
        size: "18 inches",
        finish: "White Gold"
      }
    },
    {
      id: 4,
      customerName: "Amanda Thompson",
      customerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      date: "2025-08-03",
      verified: true,
      title: "Heirloom quality",
      content: `This is definitely an investment piece that I'll treasure forever. The attention to detail is remarkable, and you can tell it's made to last generations. The certificate of authenticity was a nice touch. Highly recommend for anyone looking for something truly special.`,
      helpful: 31,
      photos: [
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop"
      ],
      purchaseDetails: {
        size: "20 inches",
        finish: "Yellow Gold"
      }
    },
    {
      id: 5,
      customerName: "Lisa Wang",
      customerImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      date: "2025-07-28",
      verified: true,
      title: "Great everyday piece",
      content: `I wear this almost daily and it holds up beautifully. It's elegant enough for work but not too flashy. The clasp is secure and easy to use. Only minor complaint is that it tangles easily with other necklaces.`,
      helpful: 8,
      photos: [],
      purchaseDetails: {
        size: "16 inches",
        finish: "White Gold"
      }
    }
  ];

  const filteredReviews = reviews?.filter(review => {
    if (filterRating !== 'all' && review?.rating !== parseInt(filterRating)) return false;
    if (showPhotosOnly && review?.photos?.length === 0) return false;
    return true;
  });

  const sortedReviews = [...filteredReviews]?.sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date) - new Date(a.date);
      case 'oldest':
        return new Date(a.date) - new Date(b.date);
      case 'highest':
        return b?.rating - a?.rating;
      case 'lowest':
        return a?.rating - b?.rating;
      case 'helpful':
        return b?.helpful - a?.helpful;
      default:
        return 0;
    }
  });

  const ratingDistribution = [5, 4, 3, 2, 1]?.map(rating => ({
    rating,
    count: reviews?.filter(r => r?.rating === rating)?.length,
    percentage: (reviews?.filter(r => r?.rating === rating)?.length / reviews?.length) * 100
  }));

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-card rounded-2xl p-6 luxury-shadow">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-playfair font-semibold text-foreground">
              Customer Reviews
            </h3>
            <div className="flex items-center space-x-2 mt-1">
              <div className="flex items-center space-x-1">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    color={i < Math.floor(product?.rating) ? "var(--color-primary)" : "var(--color-muted-foreground)"}
                    className={i < Math.floor(product?.rating) ? "fill-current" : ""}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product?.rating} out of 5 ({product?.reviewCount} reviews)
              </span>
            </div>
          </div>
          
          <Button variant="outline" iconName="PenTool" iconPosition="left">
            Write Review
          </Button>
        </div>

        {/* Rating Distribution */}
        <div className="bg-muted/30 rounded-lg p-4">
          <h4 className="font-semibold text-foreground mb-3">Rating Breakdown</h4>
          <div className="space-y-2">
            {ratingDistribution?.map(({ rating, count, percentage }) => (
              <div key={rating} className="flex items-center space-x-3">
                <span className="text-sm text-muted-foreground w-8">{rating}★</span>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-muted-foreground w-8">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-foreground">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e?.target?.value)}
              className="text-sm border border-border rounded-lg px-3 py-1 bg-background text-foreground"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
              <option value="helpful">Most Helpful</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-foreground">Filter:</span>
            <select
              value={filterRating}
              onChange={(e) => setFilterRating(e?.target?.value)}
              className="text-sm border border-border rounded-lg px-3 py-1 bg-background text-foreground"
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
          </div>
          
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showPhotosOnly}
              onChange={(e) => setShowPhotosOnly(e?.target?.checked)}
              className="rounded border-border"
            />
            <span className="text-sm text-foreground">Photos only</span>
          </label>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {sortedReviews?.map((review) => (
            <div key={review?.id} className="border-b border-border pb-6 last:border-b-0">
              <div className="flex items-start space-x-4">
                <Image
                  src={review?.customerImage}
                  alt={review?.customerName}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                
                <div className="flex-1 space-y-3">
                  {/* Review Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h5 className="font-semibold text-foreground">{review?.customerName}</h5>
                        {review?.verified && (
                          <span className="flex items-center space-x-1 text-xs text-success">
                            <Icon name="CheckCircle" size={14} />
                            <span>Verified Purchase</span>
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)]?.map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={14}
                              color={i < review?.rating ? "var(--color-primary)" : "var(--color-muted-foreground)"}
                              className={i < review?.rating ? "fill-current" : ""}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {formatDate(review?.date)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Review Content */}
                  <div>
                    <h6 className="font-medium text-foreground mb-2">{review?.title}</h6>
                    <p className="text-muted-foreground leading-relaxed">{review?.content}</p>
                  </div>

                  {/* Purchase Details */}
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>Size: {review?.purchaseDetails?.size}</span>
                    <span>•</span>
                    <span>Finish: {review?.purchaseDetails?.finish}</span>
                  </div>

                  {/* Review Photos */}
                  {review?.photos?.length > 0 && (
                    <div className="flex space-x-2 overflow-x-auto">
                      {review?.photos?.map((photo, index) => (
                        <div key={index} className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                          <Image
                            src={photo}
                            alt={`Review photo ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Review Actions */}
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                      <Icon name="ThumbsUp" size={14} />
                      <span>Helpful ({review?.helpful})</span>
                    </button>
                    <button className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                      Reply
                    </button>
                    <button className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                      Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" iconName="ChevronDown" iconPosition="right">
            Load More Reviews
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;