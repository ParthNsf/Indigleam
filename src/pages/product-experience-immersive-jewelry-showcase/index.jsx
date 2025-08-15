import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import all components
import ProductImageGallery from './components/ProductImageGallery';
import VirtualTryOn from './components/VirtualTryOn';
import ProductDetails from './components/ProductDetails';
import CompleteTheLook from './components/CompleteTheLook';
import CustomerReviews from './components/CustomerReviews';
import InvestmentValue from './components/InvestmentValue';
import PersonalizationOptions from './components/PersonalizationOptions';

const ProductExperienceImmersiveJewelryShowcase = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  // Mock product data
  const product = {
    id: 1,
    name: "Celestial Diamond Necklace",
    shortDescription: "A breathtaking constellation of diamonds that captures the magic of starlight",
    description: `Inspired by the celestial dance of stars across the night sky, this exquisite necklace features a carefully curated selection of brilliant-cut diamonds arranged in an elegant constellation pattern. Each diamond is hand-selected for its exceptional clarity and fire, creating a piece that sparkles with every movement.\n\nCrafted in our atelier by master jewelers with over three decades of experience, this necklace represents the perfect marriage of traditional craftsmanship and contemporary design. The delicate chain allows the pendant to rest gracefully at the perfect length, making it suitable for both intimate dinners and grand celebrations.`,
    price: 2850,
    originalPrice: 3200,
    rating: 4.8,
    reviewCount: 127,
    collection: "Stellar Collection",
    category: "Necklace",
    isNew: true,
    
    // Product specifications
    metal: "18K White Gold",
    purity: "750 Gold",
    weight: "12.5 grams",
    dimensions: "Pendant: 25mm x 15mm, Chain: 18 inches",
    stoneType: "Natural Diamonds",
    caratWeight: "1.25 total carats",
    clarity: "VS1-VS2",
    colorGrade: "F-G",
    certificate: "GIA-2025-001847",
    certifyingBody: "Gemological Institute of America",
    
    // Images
    mainImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=800&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=800&fit=crop"
    ],
    lifestyleImages: [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=800&fit=crop"
    ],
    
    // Product options
    sizes: [
      { value: "16", label: "16 inches" },
      { value: "18", label: "18 inches" },
      { value: "20", label: "20 inches" },
      { value: "22", label: "22 inches" }
    ],
    finishes: [
      { value: "white-gold", label: "18K White Gold" },
      { value: "yellow-gold", label: "18K Yellow Gold" },
      { value: "rose-gold", label: "18K Rose Gold" }
    ],
    
    // Features and details
    features: [
      "Hand-selected VS1-VS2 diamonds",
      "Secure lobster clasp closure",
      "Adjustable chain length",
      "Conflict-free certified diamonds",
      "Lifetime craftsmanship warranty",
      "Complimentary annual cleaning"
    ],
    occasions: ["Evening", "Wedding", "Anniversary", "Special Events"],
    
    // Craftsmanship
    craftsmanshipStory: `Each Celestial Diamond Necklace begins its journey in our master atelier, where skilled artisans with decades of experience carefully select and set each diamond by hand. The constellation pattern is meticulously planned to ensure perfect balance and maximum light reflection.\n\nOur craftsmen use traditional techniques passed down through generations, combined with modern precision tools to achieve the perfect setting for each stone. The 18K white gold is carefully shaped and polished to create the ideal backdrop for the diamonds, ensuring they capture and reflect light from every angle.\n\nThe entire creation process takes approximately 40 hours, with each step carefully inspected to meet our exacting standards. From the initial design sketch to the final quality check, every detail is considered to create a piece worthy of your most precious moments.`,
    craftingTime: 40,
    
    // Care instructions
    careInstructions: [
      "Clean gently with warm soapy water and a soft brush",
      "Store in the provided jewelry box to prevent scratching",
      "Remove before swimming, showering, or exercising",
      "Have professionally cleaned every 6 months",
      "Avoid contact with perfumes, lotions, and harsh chemicals",
      "Check clasp and settings regularly for security"
    ],
    
    // Financing
    financing: {
      available: true,
      monthlyPayment: 238,
      term: 12,
      apr: 0
    }
  };

  const sections = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'details', label: 'Details', icon: 'Info' },
    { id: 'try-on', label: 'Virtual Try-On', icon: 'Camera' },
    { id: 'styling', label: 'Complete the Look', icon: 'Palette' },
    { id: 'reviews', label: 'Reviews', icon: 'MessageCircle' },
    { id: 'investment', label: 'Investment & Care', icon: 'TrendingUp' },
    { id: 'personalize', label: 'Personalize', icon: 'Type' }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    // Navigate to checkout
    navigate('/secure-checkout-luxury-purchase-experience');
  };

  const handleBuyNow = () => {
    // Navigate to checkout with immediate purchase
    navigate('/secure-checkout-luxury-purchase-experience');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-muted-foreground">Loading product details...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <button 
                onClick={() => navigate('/homepage-luxury-jewelry-atelier')}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Home
              </button>
              <Icon name="ChevronRight" size={14} color="var(--color-muted-foreground)" />
              <button 
                onClick={() => navigate('/shop-collections-interactive-jewelry-gallery')}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Collections
              </button>
              <Icon name="ChevronRight" size={14} color="var(--color-muted-foreground)" />
              <span className="text-foreground font-medium">{product?.name}</span>
            </nav>
          </div>
        </div>

        {/* Product Overview Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-6">
                <ProductImageGallery product={product} />
              </div>

              {/* Product Information */}
              <div className="space-y-8">
                <ProductDetails product={product} />
                
                {/* Quick Actions */}
                <div className="sticky top-24 bg-card rounded-2xl p-6 luxury-shadow">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-foreground">
                        ${product?.price?.toLocaleString()}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" iconName="Heart">
                        </Button>
                        <Button variant="ghost" size="sm" iconName="Share2">
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button
                        variant="default"
                        size="lg"
                        fullWidth
                        onClick={handleBuyNow}
                        iconName="Zap"
                        iconPosition="left"
                      >
                        Buy Now
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="lg"
                        fullWidth
                        onClick={handleAddToCart}
                        iconName="ShoppingBag"
                        iconPosition="left"
                      >
                        Add to Cart
                      </Button>
                    </div>
                    
                    {product?.financing?.available && (
                      <div className="text-center text-sm text-muted-foreground">
                        Or ${product?.financing?.monthlyPayment}/month for {product?.financing?.term} months at {product?.financing?.apr}% APR
                      </div>
                    )}
                    
                    <div className="grid grid-cols-3 gap-3 text-xs text-center">
                      <div className="space-y-1">
                        <Icon name="Truck" size={16} className="mx-auto text-primary" />
                        <span className="text-muted-foreground">Free Shipping</span>
                      </div>
                      <div className="space-y-1">
                        <Icon name="RotateCcw" size={16} className="mx-auto text-primary" />
                        <span className="text-muted-foreground">30-Day Returns</span>
                      </div>
                      <div className="space-y-1">
                        <Icon name="Shield" size={16} className="mx-auto text-primary" />
                        <span className="text-muted-foreground">Lifetime Warranty</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Navigation */}
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex space-x-1 overflow-x-auto py-4">
              {sections?.map((section) => (
                <button
                  key={section?.id}
                  onClick={() => setActiveSection(section?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeSection === section?.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon name={section?.icon} size={16} />
                  <span>{section?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Content Sections */}
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-6 space-y-12">
            {activeSection === 'overview' && (
              <div className="space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-playfair font-bold text-foreground">
                    Product Overview
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Discover every detail of this exceptional piece through our immersive showcase experience
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <VirtualTryOn product={product} />
                  <InvestmentValue product={product} />
                </div>
              </div>
            )}

            {activeSection === 'details' && (
              <div className="max-w-4xl mx-auto">
                <ProductDetails product={product} />
              </div>
            )}

            {activeSection === 'try-on' && (
              <div className="max-w-2xl mx-auto">
                <VirtualTryOn product={product} />
              </div>
            )}

            {activeSection === 'styling' && (
              <CompleteTheLook currentProduct={product} />
            )}

            {activeSection === 'reviews' && (
              <CustomerReviews product={product} />
            )}

            {activeSection === 'investment' && (
              <div className="max-w-4xl mx-auto">
                <InvestmentValue product={product} />
              </div>
            )}

            {activeSection === 'personalize' && (
              <div className="max-w-4xl mx-auto">
                <PersonalizationOptions product={product} />
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-playfair font-bold text-foreground">
                You May Also Like
              </h2>
              <p className="text-muted-foreground">
                Discover more pieces from our curated collections
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4]?.map((item) => (
                <div key={item} className="bg-card rounded-2xl overflow-hidden luxury-shadow hover:luxury-shadow-hover transition-all duration-300">
                  <div className="aspect-square bg-champagne p-6">
                    <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                      <Icon name="Gem" size={48} color="var(--color-primary)" />
                    </div>
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold text-foreground">Related Product {item}</h3>
                    <p className="text-sm text-muted-foreground">Beautiful jewelry piece</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary">$1,850</span>
                      <Button variant="ghost" size="sm" iconName="Heart">
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Award" size={32} color="var(--color-primary)" />
                </div>
                <h3 className="font-semibold text-foreground">Certified Authentic</h3>
                <p className="text-sm text-muted-foreground">
                  All pieces come with certificates from recognized gemological institutes
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Truck" size={32} color="var(--color-primary)" />
                </div>
                <h3 className="font-semibold text-foreground">Secure Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Insured shipping with signature confirmation and tracking
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="RotateCcw" size={32} color="var(--color-primary)" />
                </div>
                <h3 className="font-semibold text-foreground">Easy Returns</h3>
                <p className="text-sm text-muted-foreground">
                  30-day return policy with full refund guarantee
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Users" size={32} color="var(--color-primary)" />
                </div>
                <h3 className="font-semibold text-foreground">Expert Support</h3>
                <p className="text-sm text-muted-foreground">
                  Personal jewelry consultants available 24/7
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center">
                <Icon name="Gem" size={24} color="white" />
              </div>
              <span className="text-2xl font-playfair font-bold">LuxeJewels</span>
            </div>
            <p className="text-background/80 max-w-md mx-auto">
              Creating timeless pieces that celebrate life's most precious moments
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <span>© {new Date()?.getFullYear()} LuxeJewels. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductExperienceImmersiveJewelryShowcase;