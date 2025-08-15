import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedCollections = () => {
  const [activeCollection, setActiveCollection] = useState(0);

  const collections = [
    {
      id: 1,
      name: "Eternal Radiance",
      category: "Diamond Collection",
      description: "Timeless diamond pieces that capture light and hearts with equal brilliance. Each stone is carefully selected for its exceptional clarity and fire.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop&crop=center",
      pieces: 24,
      priceRange: "$2,500 - $15,000",
      badge: "Bestseller",
      story: "Inspired by the eternal dance of light through precious stones, this collection celebrates moments that last forever.",
      highlights: ["Ethically Sourced", "GIA Certified", "Lifetime Warranty"]
    },
    {
      id: 2,
      name: "Heritage Gold",
      category: "Classic Collection",
      description: "Sophisticated gold jewelry that honors traditional craftsmanship while embracing contemporary elegance for the modern connoisseur.",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop&crop=center",
      pieces: 18,
      priceRange: "$1,200 - $8,500",
      badge: "New Arrival",
      story: "A tribute to the golden age of jewelry making, where every curve tells a story of masterful artistry.",
      highlights: ["18K Gold", "Handcrafted", "Limited Edition"]
    },
    {
      id: 3,
      name: "Modern Minimalist",
      category: "Contemporary Collection",
      description: "Clean lines and geometric forms create striking pieces that complement the contemporary lifestyle with understated luxury.",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=600&fit=crop&crop=center",
      pieces: 16,
      priceRange: "$800 - $4,200",
      badge: "Trending",
      story: "Where less becomes more, and simplicity reveals the true essence of modern elegance.",
      highlights: ["Versatile Design", "Everyday Luxury", "Sustainable Materials"]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Sparkles" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Featured Collections</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            Curated for Your
            <span className="block text-primary">Precious Moments</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our signature collections, each telling a unique story through exceptional 
            craftsmanship and timeless design.
          </p>
        </div>

        {/* Collections Showcase */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {collections?.map((collection, index) => (
            <div
              key={collection?.id}
              className={`group cursor-pointer transition-all duration-500 ${
                index === activeCollection ? 'lg:col-span-2' : ''
              }`}
              onClick={() => setActiveCollection(index)}
            >
              <div className="relative overflow-hidden rounded-3xl luxury-shadow hover:luxury-shadow-hover transition-all duration-500">
                {/* Collection Image */}
                <div className="relative h-80 lg:h-96 overflow-hidden">
                  <Image
                    src={collection?.image}
                    alt={collection?.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {collection?.badge}
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {collection?.highlights?.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-background/90 leading-relaxed">
                          {collection?.story}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Collection Info */}
                <div className="p-6 bg-card">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-playfair font-bold text-foreground mb-1">
                        {collection?.name}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {collection?.category}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">
                        {collection?.pieces} pieces
                      </div>
                      <div className="text-sm font-medium text-foreground">
                        {collection?.priceRange}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {collection?.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <Link to="/shop-collections-interactive-jewelry-gallery">
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="ArrowRight"
                        iconPosition="right"
                        className="border-primary/30 hover:bg-primary/5"
                      >
                        Explore Collection
                      </Button>
                    </Link>

                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300">
                        <Icon name="Heart" size={18} />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300">
                        <Icon name="Share2" size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collection Navigation */}
        <div className="flex justify-center">
          <div className="flex items-center space-x-4 bg-card rounded-2xl p-2 luxury-shadow">
            {collections?.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCollection(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeCollection
                    ? 'bg-primary scale-125' :'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;