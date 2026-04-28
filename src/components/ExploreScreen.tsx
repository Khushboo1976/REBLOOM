import { useState } from "react";
import { Search, Filter, SlidersHorizontal, MapPin, Star, Heart } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import exampleImage1 from 'figma:asset/8662a6c13c5cd5c6e12f64d9044de0f03c1cd2a3.png';
import exampleImage2 from 'figma:asset/3200ebd25de759861e863159a3cad43e2af154b1.png';

export function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: "all", name: "All" },
    { id: "madhubani", name: "Madhubani" },
    { id: "pottery", name: "Pottery" },
    { id: "textiles", name: "Textiles" },
    { id: "restoration", name: "Restored" },
    { id: "furniture", name: "Furniture" },
  ];

  const products = [
    {
      id: "1",
      title: "Madhubani Fish Wall Art",
      price: 2499,
      originalPrice: 3499,
      image: "https://images.unsplash.com/photo-1575550828602-aff2b22342a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRodWJhbmklMjBwYWludGluZyUyMGFydHxlbnwxfHx8fDE3NTg0NjYwOTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "Priya Kumari",
      artStyle: "Madhubani",
      rating: 4.8,
      isLiked: false,
      category: "madhubani",
      story: "This painting represents abundance and prosperity in traditional Mithila art, passed down through generations of women artists."
    },
    {
      id: "2", 
      title: "Restored Vintage Suitcase",
      price: 8999,
      originalPrice: 12000,
      image: exampleImage1,
      beforeImage: "https://images.unsplash.com/photo-1629470937866-f8b6b7e98889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZnVybml0dXJlJTIwcmVzdG9yYXRpb258ZW58MXx8fHwxNzU4NDY2MTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "Heritage Restorers",
      artStyle: "Folk Restoration",
      rating: 4.9,
      isLiked: false,
      isRestored: true,
      category: "restoration",
      story: "A 1960s suitcase transformed with vibrant folk motifs, now serving as a beautiful storage piece with cultural significance."
    },
    {
      id: "3",
      title: "Madhubani Cabinet Doors",
      price: 15999,
      originalPrice: 22000,
      image: exampleImage2,
      beforeImage: "https://images.unsplash.com/photo-1629470937866-f8b6b7e98889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZnVybml0dXJlJTIwcmVzdG9yYXRpb258ZW58MXx8fHwxNzU4NDY2MTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "Artisan Collective",
      artStyle: "Madhubani",
      rating: 4.8,
      isLiked: false,
      isRestored: true,
      category: "madhubani",
      story: "Old cabinet doors brought to life with intricate Madhubani paintings featuring traditional birds and nature motifs."
    },
    {
      id: "4",
      title: "Hand-painted Terracotta Pot",
      price: 899,
      image: "https://images.unsplash.com/photo-1717601858050-9716a178d88a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBoYW5kbWFkZSUyMHBvdHRlcnl8ZW58MXx8fHwxNzU4NDY2MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "Ramesh Pottery",
      artStyle: "Folk Pottery", 
      rating: 4.6,
      isLiked: false,
      category: "pottery",
      story: "Handcrafted using traditional techniques passed down through generations, each pot tells a story of earth and fire."
    },
    {
      id: "5",
      title: "Block Print Textile Art",
      price: 1899,
      image: "https://images.unsplash.com/photo-1703145219083-6037d97decb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZXh0aWxlJTIwYXJ0fGVufDF8fHx8MTc1ODQ2NjEwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "Rajasthani Artisans",
      artStyle: "Block Print",
      rating: 4.7,
      isLiked: false,
      category: "textiles",
      story: "Traditional Rajasthani block printing on organic cotton, each piece tells a story of desert landscapes and royal heritage."
    }
  ];

  const trendingSearches = [
    "Madhubani paintings",
    "Vintage furniture restoration", 
    "Handmade pottery",
    "Block print textiles",
    "Folk art",
    "Upcycled furniture"
  ];

  const featuredArtists = [
    {
      name: "Priya Kumari",
      specialty: "Madhubani Art",
      location: "Darbhanga, Bihar",
      rating: 4.9,
      followers: 2300,
      image: "https://images.unsplash.com/photo-1588713606197-023aea556d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg0NjYxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      verified: true
    },
    {
      name: "Heritage Restorers",
      specialty: "Furniture Restoration",
      location: "Mumbai, Maharashtra",
      rating: 4.8,
      followers: 3100,
      image: "https://images.unsplash.com/photo-1588713606197-023aea556d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg0NjYxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      verified: true
    }
  ];

  const handleLikeProduct = (id: string) => {
    setLikedProducts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(id)) {
        newLiked.delete(id);
      } else {
        newLiked.add(id);
      }
      return newLiked;
    });
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.artStyle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const productsWithLikes = filteredProducts.map(product => ({
    ...product,
    isLiked: likedProducts.has(product.id)
  }));

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-teal-500 px-4 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-white text-2xl font-bold">Explore Art</h1>
            <p className="text-white/80 text-sm">Discover unique pieces & artists</p>
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="bg-white/20 p-2 rounded-full text-white hover:bg-white/30 transition-colors"
          >
            <SlidersHorizontal size={20} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for art, artists, or styles..."
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white text-gray-800 placeholder-gray-500 shadow-lg"
          />
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-white text-green-600 shadow-lg"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Trending Searches */}
      {searchQuery === "" && (
        <div className="px-4 py-4 bg-white border-b border-gray-100">
          <h3 className="text-sm font-medium text-gray-900 mb-3">Trending Searches</h3>
          <div className="flex flex-wrap gap-2">
            {trendingSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(search)}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-orange-100 hover:text-orange-700 transition-colors"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Featured Artists */}
      {searchQuery === "" && activeCategory === "all" && (
        <div className="px-4 py-6 bg-gray-50">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Featured Artists</h2>
          <div className="space-y-4">
            {featuredArtists.map((artist, index) => (
              <div key={index} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-4">
                  <ImageWithFallback
                    src={artist.image}
                    alt={artist.name}
                    className="w-16 h-16 rounded-full object-cover border-3 border-green-200"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-gray-900">{artist.name}</h3>
                      {artist.verified && (
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-green-600 mb-1">{artist.specialty}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{artist.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={12} className="text-yellow-500 fill-current" />
                        <span>{artist.rating}</span>
                      </div>
                      <span>{artist.followers} followers</span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200">
                    <Heart size={14} className="inline mr-1" />
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      <div className="px-4 py-6 bg-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">
            {searchQuery ? `Results for "${searchQuery}"` : 
             activeCategory === "all" ? "All Items" : 
             categories.find(c => c.id === activeCategory)?.name}
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Filter size={16} />
            <span>{productsWithLikes.length} items</span>
          </div>
        </div>

        {productsWithLikes.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="text-gray-900 font-medium mb-2">No items found</h3>
            <p className="text-gray-500 text-sm mb-4">Try adjusting your search or browse different categories</p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="text-green-600 font-medium"
            >
              Browse All Items
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {productsWithLikes.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onLike={handleLikeProduct}
                onView={(id) => console.log("View product", id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Load More */}
      {productsWithLikes.length > 0 && (
        <div className="px-4 pb-6">
          <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-2xl font-medium hover:bg-gray-200 transition-colors">
            Load More Items
          </button>
        </div>
      )}
    </div>
  );
}