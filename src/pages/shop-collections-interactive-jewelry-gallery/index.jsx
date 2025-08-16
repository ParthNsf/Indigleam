import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/ui/Header';
import FilterSidebar from './components/FilterSidebar';
import CollectionHeader from './components/CollectionHeader';
import ProductGrid from './components/ProductGrid';
import QuickViewModal from './components/QuickViewModal';
import RecommendationsSection from './components/RecommendationsSection';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ShopCollectionsPage = () => {
  const [searchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({});
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [comparedItems, setComparedItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from Ecwid API using Axios
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          'https://app.ecwid.com/api/v3/113014007/products',
          {
            headers: {
              Authorization: `Bearer secret_FehZv6V757yR4CMRcSV1L8NyYXjHKai8`,
            },
          }
        );

        if (res.data?.items) {
          // Map Ecwid response to match UI structure
          const mappedProducts = res.data.items.map((item) => ({
            id: item.id,
            name: item.name,
            collection: item.categoryIds?.[0] || 'Default Collection',
            price: item.price,
            originalPrice: item.compareToPrice || null,
            discount: item.compareToPrice
              ? Math.round(
                  ((item.compareToPrice - item.price) / item.compareToPrice) * 100
                )
              : null,
            image: item.imageUrl,
            hoverImage: item.galleryImages?.[0]?.imageUrl || item.imageUrl,
            rating: 4.5, // Placeholder, Ecwid doesn’t provide ratings
            reviews: 0,  // Placeholder
            isNew: item.isShippingRequired, // Example flag
            isWishlisted: false,
            features: item.options?.map((opt) => opt.name) || [],
            description: item.description || 'No description available.',
            sizes: item.options?.find((o) => o.type === 'SIZE')?.choices || [],
            specifications: {
              SKU: item.sku,
              Weight: item.weight,
              UPC: item.upc,
            },
            additionalImages: item.galleryImages?.map((img) => img.imageUrl) || [],
          }));

          setProducts(mappedProducts);
        }
      } catch (error) {
        console.error('Error fetching Ecwid products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on current filters
  const filteredProducts = products?.filter((product) => {
    if (
      filters?.search &&
      !product?.name?.toLowerCase()?.includes(filters?.search?.toLowerCase())
    ) {
      return false;
    }

    if (filters?.category && filters?.category?.length > 0) {
      const productCategory = product?.name?.toLowerCase()?.includes('ring')
        ? 'rings'
        : product?.name?.toLowerCase()?.includes('necklace')
        ? 'necklaces'
        : product?.name?.toLowerCase()?.includes('earring')
        ? 'earrings'
        : product?.name?.toLowerCase()?.includes('bracelet')
        ? 'bracelets'
        : 'other';
      if (!filters?.category?.includes(productCategory)) {
        return false;
      }
    }

    if (filters?.priceRange) {
      const { min, max } = filters?.priceRange;
      if (min && product?.price < parseInt(min)) return false;
      if (max && product?.price > parseInt(max)) return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts]?.sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a?.price - b?.price;
      case 'price-high':
        return b?.price - a?.price;
      case 'newest':
        return (b?.isNew ? 1 : 0) - (a?.isNew ? 1 : 0);
      case 'rating':
        return (b?.rating || 0) - (a?.rating || 0);
      case 'popular':
        return (b?.reviews || 0) - (a?.reviews || 0);
      default:
        return 0;
    }
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleClearFilters = () => {
    setFilters({});
  };

  const handleWishlistToggle = (productId) => {
    setWishlistItems((prev) =>
      prev?.includes(productId)
        ? prev?.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleCompareToggle = (productId) => {
    setComparedItems((prev) => {
      if (prev?.includes(productId)) {
        return prev?.filter((id) => id !== productId);
      } else if (prev?.length < 3) {
        return [...prev, productId];
      } else {
        return [prev?.[1], prev?.[2], productId];
      }
    });
  };

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
  };

  const productsWithWishlist = sortedProducts?.map((product) => ({
    ...product,
    isWishlisted: wishlistItems?.includes(product?.id),
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="flex">
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            isOpen={isFilterOpen}
            onToggle={() => setIsFilterOpen(!isFilterOpen)}
          />

          <div className="flex-1">
            <CollectionHeader
              title="Luxury Jewelry Collections"
              description="Discover our curated selection of fine jewelry, each piece crafted with precision and passion to celebrate life's most precious moments."
              totalProducts={productsWithWishlist?.length}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onFilterToggle={() => setIsFilterOpen(!isFilterOpen)}
              comparedCount={comparedItems?.length}
              onClearComparison={() => setComparedItems([])}
            />

            <div className="px-6 lg:px-8 py-8">
              {loading ? (
                <p className="text-center text-gray-500">Loading products...</p>
              ) : (
                <ProductGrid
                  products={productsWithWishlist}
                  viewMode={viewMode}
                  onWishlistToggle={handleWishlistToggle}
                  onQuickView={handleQuickView}
                  onCompareToggle={handleCompareToggle}
                  comparedItems={comparedItems}
                />
              )}
            </div>

            <div className="px-6 lg:px-8 py-8 text-center border-t border-border">
              <Button
                variant="outline"
                size="lg"
                iconName="RefreshCw"
                iconPosition="left"
              >
                Load More Products
              </Button>
            </div>
          </div>
        </div>

        <QuickViewModal
          product={quickViewProduct}
          isOpen={!!quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onWishlistToggle={handleWishlistToggle}
          onAddToCart={handleAddToCart}
        />

        {comparedItems?.length > 0 && (
          <div className="fixed bottom-6 right-6 z-40">
            <Button
              variant="default"
              size="lg"
              onClick={() => console.log('Compare items:', comparedItems)}
              className="luxury-shadow-hover"
              iconName="GitCompare"
              iconPosition="left"
            >
              Compare ({comparedItems?.length})
            </Button>
          </div>
        )}

        <div className="fixed bottom-6 left-6 z-40">
          <Button
            variant="secondary"
            size="icon"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="luxury-shadow-hover"
          >
            <Icon name="ArrowUp" size={20} />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ShopCollectionsPage;



// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import Header from '../../components/ui/Header';
// import FilterSidebar from './components/FilterSidebar';
// import CollectionHeader from './components/CollectionHeader';
// import ProductGrid from './components/ProductGrid';
// import QuickViewModal from './components/QuickViewModal';
// import RecommendationsSection from './components/RecommendationsSection';
// import Icon from '../../components/AppIcon';
// import Button from '../../components/ui/Button';

// const ShopCollectionsPage = () => {
//   const [searchParams] = useSearchParams();
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [viewMode, setViewMode] = useState('grid');
//   const [sortBy, setSortBy] = useState('featured');
//   const [filters, setFilters] = useState({});
//   const [quickViewProduct, setQuickViewProduct] = useState(null);
//   const [comparedItems, setComparedItems] = useState([]);
//   const [wishlistItems, setWishlistItems] = useState([]);

//   // Mock data for products
//   const mockProducts = [
//     {
//       id: 1,
//       name: "Eternal Elegance Diamond Solitaire Ring",
//       collection: "Timeless Collection",
//       price: 2850,
//       originalPrice: 3200,
//       discount: 11,
//       image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
//       hoverImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
//       rating: 4.8,
//       reviews: 124,
//       isNew: true,
//       isWishlisted: false,
//       features: ["Ethically Sourced", "Custom Engraving"],
//       description: `Crafted with precision and passion, this stunning solitaire ring features a brilliant-cut diamond set in 18K white gold. The timeless design symbolizes eternal love and commitment.`,
//       sizes: ["5", "6", "7", "8", "9"],
//       specifications: {
//         "Metal": "18K White Gold",
//         "Diamond": "1.2ct Round Brilliant",
//         "Clarity": "VS1",
//         "Color": "F",
//         "Setting": "6-Prong Solitaire"
//       },
//       additionalImages: [
//         "https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop",
//         "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop"
//       ]
//     },
//     {
//       id: 2,
//       name: "Vintage Rose Gold Pearl Necklace",
//       collection: "Heritage Collection",
//       price: 1650,
//       image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
//       hoverImage: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
//       rating: 4.9,
//       reviews: 89,
//       isLimited: true,
//       isWishlisted: true,
//       features: ["Handcrafted", "Limited Edition"],
//       description: `An exquisite vintage-inspired necklace featuring lustrous pearls set in rose gold. Each pearl is carefully selected for its perfect shape and luminous quality.`,
//       specifications: {
//         "Metal": "18K Rose Gold",
//         "Pearls": "Akoya Cultured Pearls",
//         "Length": "18 inches",
//         "Pearl Size": "7-8mm",
//         "Clasp": "Secure Lobster Clasp"
//       }
//     },
//     {
//       id: 3,
//       name: "Modern Geometric Emerald Earrings",
//       collection: "Contemporary Collection",
//       price: 3200,
//       image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
//       hoverImage: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
//       rating: 4.7,
//       reviews: 156,
//       isWishlisted: false,
//       features: ["Certified Gemstones", "Custom Engraving"],
//       description: `Bold and contemporary, these emerald earrings feature geometric settings that highlight the natural beauty of the precious stones.`,
//       specifications: {
//         "Metal": "Platinum",
//         "Gemstone": "Colombian Emerald",
//         "Carat Weight": "2.4ct total",
//         "Setting": "Bezel Setting",
//         "Back": "Secure Push Back"
//       }
//     },
//     {
//       id: 4,
//       name: "Classic Tennis Bracelet",
//       collection: "Sport Elegance",
//       price: 4500,
//       originalPrice: 5000,
//       discount: 10,
//       image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
//       hoverImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
//       rating: 4.9,
//       reviews: 203,
//       isWishlisted: false,
//       features: ["Ethically Sourced", "Certified"],
//       description: `A timeless tennis bracelet featuring perfectly matched diamonds in a secure setting. Perfect for both casual and formal occasions.`,
//       specifications: {
//         "Metal": "18K Yellow Gold",
//         "Diamonds": "Round Brilliant Cut",
//         "Total Carat": "5.0ct",
//         "Length": "7 inches",
//         "Clasp": "Hidden Safety Clasp"
//       }
//     },
//     {
//       id: 5,
//       name: "Sapphire Halo Engagement Ring",
//       collection: "Royal Collection",
//       price: 5800,
//       image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
//       hoverImage: "https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop",
//       rating: 4.8,
//       reviews: 167,
//       isNew: true,
//       isWishlisted: true,
//       features: ["Royal Inspired", "Custom Engraving"],
//       description: `Inspired by royal jewelry, this sapphire ring features a stunning center stone surrounded by a halo of brilliant diamonds.`,
//       sizes: ["5", "6", "7", "8", "9"],
//       specifications: {
//         "Metal": "Platinum",
//         "Center Stone": "Ceylon Sapphire",
//         "Carat Weight": "2.5ct",
//         "Halo Diamonds": "0.75ct total",
//         "Setting": "Halo Setting"
//       }
//     },
//     {
//       id: 6,
//       name: "Art Deco Diamond Pendant",
//       collection: "Vintage Revival",
//       price: 2200,
//       image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop",
//       hoverImage: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
//       rating: 4.6,
//       reviews: 92,
//       isWishlisted: false,
//       features: ["Vintage Inspired", "Handcrafted"],
//       description: `An Art Deco-inspired pendant featuring geometric patterns and brilliant diamonds. A perfect blend of vintage charm and modern craftsmanship.`,
//       specifications: {
//         "Metal": "18K White Gold",
//         "Diamonds": "Round & Baguette Cut",
//         "Total Carat": "1.8ct",
//         "Chain Length": "16-18 inches",
//         "Style": "Art Deco"
//       }
//     }
//   ];

//   // Mock recommendations data
//   const mockRecommendations = [
//     {
//       id: 101,
//       name: "Delicate Gold Chain Necklace",
//       collection: "Everyday Essentials",
//       price: 850,
//       image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop",
//       rating: 4.7,
//       reviews: 234,
//       matchReason: "Based on your ring preferences",
//       isWishlisted: false
//     },
//     {
//       id: 102,
//       name: "Diamond Stud Earrings",
//       collection: "Classic Collection",
//       price: 1200,
//       originalPrice: 1400,
//       image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop",
//       rating: 4.9,
//       reviews: 189,
//       matchReason: "Complements your style",
//       isWishlisted: true
//     },
//     {
//       id: 103,
//       name: "Rose Gold Bangle Set",
//       collection: "Stackable Collection",
//       price: 650,
//       image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop",
//       rating: 4.5,
//       reviews: 156,
//       matchReason: "Perfect for layering",
//       isWishlisted: false
//     },
//     {
//       id: 104,
//       name: "Vintage Cocktail Ring",
//       collection: "Statement Collection",
//       price: 2800,
//       image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300&h=300&fit=crop",
//       rating: 4.8,
//       reviews: 98,
//       matchReason: "Matches your bold taste",
//       isWishlisted: false
//     }
//   ];

//   // Filter products based on current filters
//   const filteredProducts = mockProducts?.filter(product => {
//     // Apply search filter
//     if (filters?.search && !product?.name?.toLowerCase()?.includes(filters?.search?.toLowerCase())) {
//       return false;
//     }

//     // Apply category filter
//     if (filters?.category && filters?.category?.length > 0) {
//       const productCategory = product?.name?.toLowerCase()?.includes('ring') ? 'rings' :
//                              product?.name?.toLowerCase()?.includes('necklace') ? 'necklaces' :
//                              product?.name?.toLowerCase()?.includes('earring') ? 'earrings' :
//                              product?.name?.toLowerCase()?.includes('bracelet') ? 'bracelets' : 'other';
//       if (!filters?.category?.includes(productCategory)) {
//         return false;
//       }
//     }

//     // Apply price range filter
//     if (filters?.priceRange) {
//       const { min, max } = filters?.priceRange;
//       if (min && product?.price < parseInt(min)) return false;
//       if (max && product?.price > parseInt(max)) return false;
//     }

//     return true;
//   });

//   // Sort products
//   const sortedProducts = [...filteredProducts]?.sort((a, b) => {
//     switch (sortBy) {
//       case 'price-low':
//         return a?.price - b?.price;
//       case 'price-high':
//         return b?.price - a?.price;
//       case 'newest':
//         return b?.isNew - a?.isNew;
//       case 'rating':
//         return (b?.rating || 0) - (a?.rating || 0);
//       case 'popular':
//         return (b?.reviews || 0) - (a?.reviews || 0);
//       default:
//         return 0;
//     }
//   });

//   const handleFilterChange = (key, value) => {
//     setFilters(prev => ({
//       ...prev,
//       [key]: value
//     }));
//   };

//   const handleClearFilters = () => {
//     setFilters({});
//   };

//   const handleWishlistToggle = (productId) => {
//     setWishlistItems(prev => 
//       prev?.includes(productId)
//         ? prev?.filter(id => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const handleCompareToggle = (productId) => {
//     setComparedItems(prev => {
//       if (prev?.includes(productId)) {
//         return prev?.filter(id => id !== productId);
//       } else if (prev?.length < 3) {
//         return [...prev, productId];
//       } else {
//         // Replace first item if already at limit
//         return [prev?.[1], prev?.[2], productId];
//       }
//     });
//   };

//   const handleQuickView = (product) => {
//     setQuickViewProduct(product);
//   };

//   const handleAddToCart = (product) => {
//     // Mock add to cart functionality
//     console.log('Added to cart:', product);
//   };

//   // Update wishlist status in products
//   const productsWithWishlist = sortedProducts?.map(product => ({
//     ...product,
//     isWishlisted: wishlistItems?.includes(product?.id)
//   }));

//   const recommendationsWithWishlist = mockRecommendations?.map(product => ({
//     ...product,
//     isWishlisted: wishlistItems?.includes(product?.id)
//   }));

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main className="pt-16">
//         <div className="flex">
//           {/* Filter Sidebar */}
//           <FilterSidebar
//             filters={filters}
//             onFilterChange={handleFilterChange}
//             onClearFilters={handleClearFilters}
//             isOpen={isFilterOpen}
//             onToggle={() => setIsFilterOpen(!isFilterOpen)}
//           />

//           {/* Main Content */}
//           <div className="flex-1">
//             <CollectionHeader
//               title="Luxury Jewelry Collections"
//               description="Discover our curated selection of fine jewelry, each piece crafted with precision and passion to celebrate life's most precious moments."
//               totalProducts={productsWithWishlist?.length}
//               viewMode={viewMode}
//               onViewModeChange={setViewMode}
//               sortBy={sortBy}
//               onSortChange={setSortBy}
//               onFilterToggle={() => setIsFilterOpen(!isFilterOpen)}
//               comparedCount={comparedItems?.length}
//               onClearComparison={() => setComparedItems([])}
//             />

//             {/* Products */}
//             <div className="px-6 lg:px-8 py-8">
//               <ProductGrid
//                 products={productsWithWishlist}
//                 viewMode={viewMode}
//                 onWishlistToggle={handleWishlistToggle}
//                 onQuickView={handleQuickView}
//                 onCompareToggle={handleCompareToggle}
//                 comparedItems={comparedItems}
//               />
//             </div>

//             {/* Recommendations */}
//             <RecommendationsSection
//               recommendations={recommendationsWithWishlist}
//               onWishlistToggle={handleWishlistToggle}
//             />

//             {/* Load More */}
//             {productsWithWishlist?.length > 0 && (
//               <div className="px-6 lg:px-8 py-8 text-center border-t border-border">
//                 <Button
//                   variant="outline"
//                   size="lg"
//                   iconName="RefreshCw"
//                   iconPosition="left"
//                 >
//                   Load More Products
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Quick View Modal */}
//         <QuickViewModal
//           product={quickViewProduct}
//           isOpen={!!quickViewProduct}
//           onClose={() => setQuickViewProduct(null)}
//           onWishlistToggle={handleWishlistToggle}
//           onAddToCart={handleAddToCart}
//         />

//         {/* Comparison Floating Button */}
//         {comparedItems?.length > 0 && (
//           <div className="fixed bottom-6 right-6 z-40">
//             <Button
//               variant="default"
//               size="lg"
//               onClick={() => console.log('Compare items:', comparedItems)}
//               className="luxury-shadow-hover"
//               iconName="GitCompare"
//               iconPosition="left"
//             >
//               Compare ({comparedItems?.length})
//             </Button>
//           </div>
//         )}

//         {/* Back to Top */}
//         <div className="fixed bottom-6 left-6 z-40">
//           <Button
//             variant="secondary"
//             size="icon"
//             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//             className="luxury-shadow-hover"
//           >
//             <Icon name="ArrowUp" size={20} />
//           </Button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ShopCollectionsPage;
