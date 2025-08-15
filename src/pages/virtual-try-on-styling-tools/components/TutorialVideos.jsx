import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TutorialVideos = () => {
  const [selectedCategory, setSelectedCategory] = useState('try-on');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  const categories = [
    { id: 'try-on', name: 'Virtual Try-On', icon: 'Camera', count: 8 },
    { id: 'styling', name: 'Styling Tips', icon: 'Sparkles', count: 12 },
    { id: 'sizing', name: 'Size Guide', icon: 'Ruler', count: 6 },
    { id: 'care', name: 'Jewelry Care', icon: 'Shield', count: 10 },
    { id: 'mixing', name: 'Mix & Match', icon: 'Layers', count: 7 }
  ];

  const tutorials = {
    'try-on': [
      {
        id: 1,
        title: "Getting Started with Virtual Try-On",
        description: "Learn how to use our AR technology to try on jewelry virtually",
        duration: "3:45",
        difficulty: "Beginner",
        views: "12.5K",
        thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
        videoUrl: "https://example.com/video1",
        topics: ["Camera setup", "Lighting adjustment", "Basic navigation"]
      },
      {
        id: 2,
        title: "Advanced AR Features",
        description: "Explore advanced features like skin tone calibration and size comparison",
        duration: "5:20",
        difficulty: "Intermediate",
        views: "8.2K",
        thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=225&fit=crop",
        videoUrl: "https://example.com/video2",
        topics: ["Skin tone matching", "Size comparison", "Multiple angles"]
      },
      {
        id: 3,
        title: "Mobile Try-On Tips",
        description: "Best practices for using virtual try-on on mobile devices",
        duration: "4:15",
        difficulty: "Beginner",
        views: "15.7K",
        thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=225&fit=crop",
        videoUrl: "https://example.com/video3",
        topics: ["Mobile optimization", "Gesture controls", "Photo capture"]
      }
    ],
    'styling': [
      {
        id: 4,
        title: "Layering Necklaces Like a Pro",
        description: "Master the art of layering different necklace lengths and styles",
        duration: "6:30",
        difficulty: "Intermediate",
        views: "22.1K",
        thumbnail: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=225&fit=crop",
        videoUrl: "https://example.com/video4",
        topics: ["Length combinations", "Metal mixing", "Pendant pairing"]
      },
      {
        id: 5,
        title: "Ring Stacking Techniques",
        description: "Create stunning ring combinations with our stacking guide",
        duration: "4:45",
        difficulty: "Beginner",
        views: "18.9K",
        thumbnail: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=225&fit=crop",
        videoUrl: "https://example.com/video5",
        topics: ["Ring placement", "Size balancing", "Style coordination"]
      },
      {
        id: 6,
        title: "Earring and Face Shape Guide",
        description: "Choose the perfect earrings for your face shape",
        duration: "5:55",
        difficulty: "Beginner",
        views: "14.3K",
        thumbnail: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=225&fit=crop",
        videoUrl: "https://example.com/video6",
        topics: ["Face shape analysis", "Earring styles", "Proportion tips"]
      }
    ],
    'sizing': [
      {
        id: 7,
        title: "How to Measure Ring Size at Home",
        description: "Accurate methods for measuring your ring size without tools",
        duration: "3:20",
        difficulty: "Beginner",
        views: "31.2K",
        thumbnail: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=225&fit=crop",
        videoUrl: "https://example.com/video7",
        topics: ["String method", "Paper strip", "Existing ring measurement"]
      },
      {
        id: 8,
        title: "Bracelet Sizing Guide",
        description: "Find your perfect bracelet fit for comfort and style",
        duration: "2:45",
        difficulty: "Beginner",
        views: "9.8K",
        thumbnail: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=225&fit=crop",
        videoUrl: "https://example.com/video8",
        topics: ["Wrist measurement", "Fit preferences", "Style considerations"]
      }
    ],
    'care': [
      {
        id: 9,
        title: "Daily Jewelry Care Routine",
        description: "Keep your jewelry looking beautiful with proper daily care",
        duration: "4:10",
        difficulty: "Beginner",
        views: "26.7K",
        thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=225&fit=crop",
        videoUrl: "https://example.com/video9",
        topics: ["Cleaning techniques", "Storage tips", "Maintenance schedule"]
      },
      {
        id: 10,
        title: "Professional Cleaning vs. At-Home Care",
        description: "When to clean at home and when to seek professional help",
        duration: "5:35",
        difficulty: "Intermediate",
        views: "11.4K",
        thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=225&fit=crop",
        videoUrl: "https://example.com/video10",
        topics: ["Professional services", "DIY cleaning", "Warning signs"]
      }
    ],
    'mixing': [
      {
        id: 11,
        title: "Mixing Metals: Do\'s and Don\'ts",
        description: "Learn how to successfully combine different metal types",
        duration: "4:25",
        difficulty: "Intermediate",
        views: "19.6K",
        thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
        videoUrl: "https://example.com/video11",
        topics: ["Metal combinations", "Color theory", "Balance techniques"]
      },
      {
        id: 12,
        title: "Creating Cohesive Jewelry Sets",
        description: "Build coordinated looks from individual pieces",
        duration: "6:15",
        difficulty: "Advanced",
        views: "7.9K",
        thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=225&fit=crop",
        videoUrl: "https://example.com/video12",
        topics: ["Set coordination", "Theme development", "Occasion matching"]
      }
    ]
  };

  const currentTutorials = tutorials?.[selectedCategory] || [];

  const handleVideoPlay = (videoId) => {
    setPlayingVideo(videoId);
    setSelectedVideo(currentTutorials?.find(video => video?.id === videoId));
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-card rounded-2xl luxury-shadow overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-playfair font-bold text-foreground">Tutorial Videos</h3>
            <p className="text-sm text-muted-foreground mt-1">Learn how to make the most of our digital tools</p>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Play" size={24} className="text-primary" />
          </div>
        </div>
      </div>
      <div className="p-6">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories?.map((category) => (
            <Button
              key={category?.id}
              variant={selectedCategory === category?.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category?.id)}
              iconName={category?.icon}
              iconPosition="left"
            >
              {category?.name} ({category?.count})
            </Button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTutorials?.map((video) => (
            <div key={video?.id} className="bg-secondary rounded-xl overflow-hidden hover:luxury-shadow-hover transition-all duration-300">
              {/* Video Thumbnail */}
              <div className="relative">
                <img
                  src={video?.thumbnail}
                  alt={video?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <Button
                    variant="default"
                    size="lg"
                    onClick={() => handleVideoPlay(video?.id)}
                    iconName="Play"
                    className="bg-primary/90 hover:bg-primary"
                  >
                    Play Video
                  </Button>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video?.duration}
                </div>
                
                {/* Difficulty Badge */}
                <div className={`absolute top-2 left-2 text-xs px-2 py-1 rounded ${getDifficultyColor(video?.difficulty)}`}>
                  {video?.difficulty}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h5 className="font-semibold text-foreground mb-2 line-clamp-2">{video?.title}</h5>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{video?.description}</p>
                
                {/* Topics */}
                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {video?.topics?.slice(0, 2)?.map((topic, index) => (
                      <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                    {video?.topics?.length > 2 && (
                      <span className="text-xs text-muted-foreground">
                        +{video?.topics?.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="Eye" size={14} />
                    <span>{video?.views} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={14} />
                    <span>{video?.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">{selectedVideo?.title}</h4>
                  <p className="text-sm text-muted-foreground">{selectedVideo?.description}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedVideo(null);
                    setPlayingVideo(null);
                  }}
                  iconName="X"
                />
              </div>

              {/* Video Player */}
              <div className="p-6">
                <div className="bg-black rounded-lg aspect-video flex items-center justify-center mb-6">
                  <div className="text-center text-white">
                    <Icon name="Play" size={48} className="mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Video Player</p>
                    <p className="text-sm opacity-75">Duration: {selectedVideo?.duration}</p>
                  </div>
                </div>

                {/* Video Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">What You'll Learn:</h5>
                    <ul className="space-y-2">
                      {selectedVideo?.topics?.map((topic, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          <span className="text-sm text-muted-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-foreground mb-3">Video Details:</h5>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>{selectedVideo?.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Difficulty:</span>
                        <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(selectedVideo?.difficulty)}`}>
                          {selectedVideo?.difficulty}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Views:</span>
                        <span>{selectedVideo?.views}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 mt-6">
                  <Button variant="default" iconName="Heart">
                    Save Tutorial
                  </Button>
                  <Button variant="outline" iconName="Share">
                    Share Video
                  </Button>
                  <Button variant="outline" iconName="Download">
                    Download Guide
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Tips */}
        <div className="mt-8 bg-primary/5 rounded-xl p-6 border border-primary/20">
          <div className="flex items-start space-x-3">
            <Icon name="Lightbulb" size={24} className="text-primary mt-1" />
            <div>
              <h5 className="font-semibold text-foreground mb-2">Pro Tips for Better Results</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Ensure good lighting when using virtual try-on</li>
                  <li>• Hold your device steady for accurate AR tracking</li>
                  <li>• Take your time to explore different angles</li>
                  <li>• Use the size comparison tools for accuracy</li>
                </ul>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Watch tutorials in full screen for better detail</li>
                  <li>• Practice techniques shown in the videos</li>
                  <li>• Save your favorite tutorials for quick reference</li>
                  <li>• Share helpful videos with friends and family</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <h5 className="font-semibold text-foreground mb-2">Need More Help?</h5>
          <p className="text-sm text-muted-foreground mb-4">
            Can't find what you're looking for? Our customer service team is here to help.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" iconName="MessageCircle">
              Live Chat
            </Button>
            <Button variant="outline" iconName="Mail">
              Email Support
            </Button>
            <Button variant="outline" iconName="Phone">
              Call Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialVideos;