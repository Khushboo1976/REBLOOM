import { useState, useMemo } from "react";
import { Palette, Heart } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { ReelsCard } from "./ReelsCard";
import { RestorationCard } from "./RestorationCard";
import { StoryReelCard } from "./StoryReelCard";
import { Header } from "./Header";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import exampleImage1 from 'figma:asset/8662a6c13c5cd5c6e12f64d9044de0f03c1cd2a3.png';
import exampleImage2 from 'figma:asset/3200ebd25de759861e863159a3cad43e2af154b1.png';
import restorationExample from 'figma:asset/a74ac982ddb6116cd56c411252775837e3ec79fd.png';

interface HomeScreenProps {
  onNavigateToReels: () => void;
  onNavigateToFurnitureRestoration?: () => void;
}

export function HomeScreen({ onNavigateToReels, onNavigateToFurnitureRestoration }: HomeScreenProps) {
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());
  const [likedReels, setLikedReels] = useState<Set<string>>(new Set());
  const [savedReels, setSavedReels] = useState<Set<string>>(new Set());
  const [likedRestorations, setLikedRestorations] = useState<Set<string>>(new Set());

  const handleNavigationClick = (section: string) => {
    console.log(`Navigate to ${section}`);
    // You can implement navigation logic here
    switch (section) {
      case 'home':
        // Already on home
        break;
      case 'about':
        // Navigate to about page
        break;
      case 'works':
        onNavigateToFurnitureRestoration?.();
        break;
      case 'events':
        // Navigate to events
        break;
      case 'join':
        // Navigate to join us
        break;
    }
  };

  const categories = [
    { id: "madhubani", name: "Madhubani", icon: "🎨", color: "bg-red-100 text-red-700" },
    { id: "pottery", name: "Pottery", icon: "🏺", color: "bg-amber-100 text-amber-700" },
    { id: "textiles", name: "Textiles", icon: "🧵", color: "bg-green-100 text-green-700" },
    { id: "restoration", name: "Restore", icon: "✨", color: "bg-purple-100 text-purple-700" },
    { id: "furniture", name: "Furniture", icon: "🪑", color: "bg-blue-100 text-blue-700" },
    { id: "paintings", name: "Paintings", icon: "🖼️", color: "bg-orange-100 text-orange-700" },
  ];

  const featuredProducts = [
    {
      id: "1",
      title: "Madhubani Fish Wall Art",
      price: 2499,
      originalPrice: 3499,
      image: "https://images.unsplash.com/photo-1575550828602-aff2b22342a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb2xrJTIwYXJ0JTIwbWFkaHViYW5pJTIwcGFpbnRpbmd8ZW58MXx8fHwxNzU4NjQwOTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "Priya Kumari",
      artStyle: "Madhubani",
      rating: 4.8,
      isLiked: false,
      story: "This painting represents abundance and prosperity in traditional Mithila art, passed down through generations of women artists."
    },
    {
      id: "2",
      title: "Restored Vintage Suitcase",
      price: 8999,
      originalPrice: 12000,
      image: exampleImage1,
      beforeImage: "https://images.unsplash.com/photo-1600297002817-d51deea442db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwdHJ1bmslMjByZXN0b3JhdGlvbnxlbnwxfHx8fDE3NTg2NDA4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "Heritage Restorers",
      artStyle: "Folk Restoration",
      rating: 4.9,
      isLiked: false,
      isRestored: true,
      story: "A 1960s suitcase transformed with vibrant folk motifs, now serving as a beautiful storage piece with cultural significance."
    },
    {
      id: "3",
      title: "Madhubani Cabinet Doors",
      price: 15999,
      originalPrice: 22000,
      image: exampleImage2,
      beforeImage: "https://images.unsplash.com/photo-1560697591-661af0225964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwd29vZGVuJTIwY2FiaW5ldCUyMG1ha2VvdmVyfGVufDF8fHx8MTc1ODY0MDc5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "Artisan Collective",
      artStyle: "Madhubani",
      rating: 4.8,
      isLiked: false,
      isRestored: true,
      story: "Old cabinet doors brought to life with intricate Madhubani paintings featuring traditional birds and nature motifs."
    },
    {
      id: "4",
      title: "Block Print Textile Art",
      price: 1899,
      image: "https://images.unsplash.com/photo-1693987646600-c911a3f571b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBibG9jayUyMHByaW50JTIwdGV4dGlsZXxlbnwxfHx8fDE3NTg2NDA5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "Rajasthani Artisans",
      artStyle: "Block Print",
      rating: 4.7,
      isLiked: false,
      story: "Traditional Rajasthani block printing on organic cotton, each piece tells a story of desert landscapes and royal heritage."
    }
  ];

  // Restoration Stories with reliable working images
  const restorationStories = [
    {
      id: "rest1",
      title: "Vintage Trunk Revival",
      beforeImage: "https://images.unsplash.com/photo-1600297002817-d51deea442db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwdHJ1bmslMjByZXN0b3JhdGlvbnxlbnwxfHx8fDE3NTg2NDA4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      afterImage: restorationExample,
      artist: "Heritage Artisans",
      description: "A century-old trunk transformed into a beautiful storage piece with traditional Indian motifs and modern functionality.",
      likes: 342,
      views: 1250,
      isLiked: false
    },
    {
      id: "rest2", 
      title: "Antique Chair Restoration",
      beforeImage: "https://images.unsplash.com/photo-1738229740116-657bccb0de32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbnRpcXVlJTIwd29vZGVuJTIwY2hhaXIlMjByZXN0b3JhdGlvbnxlbnwxfHx8fDE3NTg2NDA3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      afterImage: "https://images.unsplash.com/photo-1572540687997-faa6c247ba53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZnVybml0dXJlJTIwcmVzdG9yYXRpb24lMjBiZWZvcmUlMjBhZnRlcnxlbnwxfHx8fDE3NTg2NDA3OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      artist: "Priya Sharma",
      description: "Classic wooden chair brought back to life with expert craftsmanship and traditional finishing techniques.",
      likes: 289,
      views: 987,
      isLiked: false
    },
    {
      id: "rest3",
      title: "Victorian Dresser Makeover", 
      beforeImage: "https://images.unsplash.com/photo-1560697591-661af0225964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwd29vZGVuJTIwY2FiaW5ldCUyMG1ha2VvdmVyfGVufDF8fHx8MTc1ODY0MDc5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      afterImage: exampleImage2,
      artist: "Restoration Masters",
      description: "Elegant Victorian dresser restored with authentic period details and modern storage solutions.",
      likes: 456,
      views: 1876,
      isLiked: false
    },
    {
      id: "rest4",
      title: "Vintage Cabinet Transformation",
      beforeImage: "https://images.unsplash.com/photo-1560697591-661af0225964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwd29vZGVuJTIwY2FiaW5ldCUyMG1ha2VvdmVyfGVufDF8fHx8MTc1ODY0MDc5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      afterImage: exampleImage1,
      artist: "Folk Artists Collective",
      description: "Old cabinet transformed with intricate folk art patterns and vibrant colors celebrating Indian heritage.",
      likes: 523,
      views: 2143,
      isLiked: false
    }
  ];

  // Watch Stories with YouTube Shorts
  const watchStories = [
    {
      id: "story1",
      title: "Artist Journey: From Tradition to Innovation",
      thumbnail: "https://img.youtube.com/vi/FeYIZyJrCXk/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/shorts/FeYIZyJrCXk?feature=share",
      author: "Priya Kumari",
      duration: "3:25",
      category: "Artist Story",
      views: 15400
    },
    {
      id: "story2",
      title: "Restoration Success: Before & After Magic",
      thumbnail: "https://img.youtube.com/vi/PxeJUdGcRuM/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/shorts/PxeJUdGcRuM?feature=share",
      author: "Heritage Restorers",
      duration: "2:45",
      category: "Success Story",
      views: 23100
    },
    {
      id: "story3",
      title: "Traditional Madhubani Art Process",
      thumbnail: "https://img.youtube.com/vi/iahd67Kv0Fs/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/shorts/iahd67Kv0Fs?feature=share",
      author: "Folk Artists",
      duration: "4:12",
      category: "Art Tutorial",
      views: 18700
    },
    {
      id: "story4", 
      title: "Furniture Restoration Techniques",
      thumbnail: "https://img.youtube.com/vi/8YHq7y9Dnpw/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/shorts/8YHq7y9Dnpw?feature=share",
      author: "Master Craftsman",
      duration: "3:30",
      category: "Tutorial",
      views: 31200
    },
    {
      id: "story5",
      title: "Creative Upcycling Ideas",
      thumbnail: "https://img.youtube.com/vi/TT-9Hww0feY/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/shorts/TT-9Hww0feY?feature=share",
      author: "Eco Artists",
      duration: "2:55",
      category: "Upcycling",
      views: 12900
    },
    {
      id: "story6",
      title: "Traditional Pottery Making",
      thumbnail: "https://img.youtube.com/vi/1muyDD3GCZw/maxresdefault.jpg", 
      videoUrl: "https://www.youtube.com/shorts/1muyDD3GCZw?feature=share",
      author: "Clay Artists",
      duration: "5:20",
      category: "Pottery",
      views: 27800
    },
    {
      id: "story7",
      title: "Block Printing Mastery",
      thumbnail: "https://img.youtube.com/vi/Lq_FsbtBfl0/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/shorts/Lq_FsbtBfl0?feature=share", 
      author: "Textile Artists",
      duration: "3:15",
      category: "Textile Art",
      views: 19500
    }
  ];

  const featuredReels = useMemo(() => 
    watchStories.slice(0, 2).map(story => ({
      id: story.id,
      title: story.title,
      thumbnail: story.thumbnail,
      videoUrl: story.videoUrl,
      author: story.author,
      authorAvatar: "https://images.unsplash.com/photo-1588713606197-023aea556d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg0NjYxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: Math.floor(story.views! / 50),
      comments: Math.floor(story.views! / 200),
      isLiked: false,
      isSaved: false,
      duration: story.duration,
      category: "art" as const
    })), [watchStories]
  );

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

  const handleLikeReel = (id: string) => {
    setLikedReels(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(id)) {
        newLiked.delete(id);
      } else {
        newLiked.add(id);
      }
      return newLiked;
    });
  };

  const handleSaveReel = (id: string) => {
    setSavedReels(prev => {
      const newSaved = new Set(prev);
      if (newSaved.has(id)) {
        newSaved.delete(id);
      } else {
        newSaved.add(id);
      }
      return newSaved;
    });
  };

  const handleLikeRestoration = (id: string) => {
    setLikedRestorations(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(id)) {
        newLiked.delete(id);
      } else {
        newLiked.add(id);
      }
      return newLiked;
    });
  };

  const productsWithLikes = useMemo(() => 
    featuredProducts.map(product => ({
      ...product,
      isLiked: likedProducts.has(product.id)
    })), [featuredProducts, likedProducts]
  );

  const reelsWithInteractions = useMemo(() => 
    featuredReels.map(reel => ({
      ...reel,
      isLiked: likedReels.has(reel.id),
      isSaved: savedReels.has(reel.id),
      likes: reel.likes + (likedReels.has(reel.id) ? 1 : 0)
    })), [featuredReels, likedReels, savedReels]
  );

  const restorationsWithLikes = useMemo(() => 
    restorationStories.map(restoration => ({
      ...restoration,
      isLiked: likedRestorations.has(restoration.id),
      likes: restoration.likes + (likedRestorations.has(restoration.id) ? 1 : 0)
    })), [restorationStories, likedRestorations]
  );

  return (
    <div className="pb-20">
      {/* Header */}
      <Header 
        title="Welcome to ReBlooms"
        subtitle="Discover, restore & celebrate Indian art"
        onNavigationClick={handleNavigationClick}
      />

      {/* Categories */}
      <div className="px-4 py-6 bg-white">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Browse Categories</h2>
        <div className="grid grid-cols-3 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                if (category.id === "restoration" && onNavigateToFurnitureRestoration) {
                  onNavigateToFurnitureRestoration();
                }
              }}
              className={`${category.color} p-4 rounded-2xl text-center hover:shadow-lg transition-all duration-200 hover:scale-105`}
            >
              <div className="text-2xl mb-2">{category.icon}</div>
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="px-4 py-6 bg-gray-50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Featured Items</h2>
          <button className="text-orange-600 text-sm font-medium">View All</button>
        </div>
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
      </div>

      {/* Restoration Stories */}
      <div className="px-4 py-6 bg-gray-50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Restoration Stories</h2>
          <button 
            onClick={() => onNavigateToFurnitureRestoration?.()}
            className="text-orange-600 text-sm font-medium"
          >
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {restorationsWithLikes.slice(0, 2).map((story) => (
            <RestorationCard
              key={story.id}
              {...story}
              onLike={handleLikeRestoration}
              onShare={(id) => console.log("Share restoration", id)}
              onView={(id) => console.log("View restoration details", id)}
            />
          ))}
        </div>
      </div>

      {/* Watch Stories */}
      <div className="px-4 py-6 bg-white">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Watch Stories</h2>
          <button 
            onClick={onNavigateToReels}
            className="text-orange-600 text-sm font-medium"
          >
            View All
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {watchStories.map((story) => (
            <StoryReelCard key={story.id} {...story} />
          ))}
        </div>
      </div>

      {/* Featured Artists */}
      <div className="px-4 py-6 bg-gray-50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Featured Artists</h2>
          <button className="text-orange-600 text-sm font-medium">View All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {[
            { name: "Priya Kumari", specialty: "Madhubani", followers: "2.3K", image: "https://images.unsplash.com/photo-1588713606197-023aea556d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg0NjYxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
            { name: "Ramesh Pottery", specialty: "Folk Pottery", followers: "1.8K", image: "https://images.unsplash.com/photo-1588713606197-023aea556d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg0NjYxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
            { name: "Heritage Restorers", specialty: "Restoration", followers: "3.1K", image: "https://images.unsplash.com/photo-1588713606197-023aea556d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg0NjYxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" }
          ].map((artist, index) => (
            <div key={index} className="flex-shrink-0 bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-2xl border border-orange-200 min-w-[160px]">
              <ImageWithFallback
                src={artist.image}
                alt={artist.name}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-3 border-orange-300"
              />
              <h3 className="text-sm font-medium text-gray-900 text-center mb-1">{artist.name}</h3>
              <p className="text-xs text-orange-600 text-center mb-2">{artist.specialty}</p>
              <p className="text-xs text-gray-600 text-center mb-3">{artist.followers} followers</p>
              <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-2 rounded-full text-xs font-medium hover:shadow-lg transition-all duration-200">
                <Heart size={12} className="inline mr-1" />
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Reels */}
      <div className="px-4 py-6 bg-gray-50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">Creative Reels</h2>
          <button 
            onClick={onNavigateToReels}
            className="text-orange-600 text-sm font-medium"
          >
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {reelsWithInteractions.map((reel) => (
            <ReelsCard
              key={reel.id}
              reel={reel}
              onLike={handleLikeReel}
              onSave={handleSaveReel}
              onShare={(id) => console.log("Share reel", id)}
              onComment={(id) => console.log("Comment on reel", id)}
              onPlay={(id) => console.log("Play reel", id)}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mx-4 my-6 bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-2xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold mb-2">Start Your Art Journey</h3>
            <p className="text-white/80 text-sm mb-4">Sell your creations or restore treasured items</p>
            <button className="bg-white text-red-600 px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200">
              Get Started
            </button>
          </div>
          <Palette className="text-white/80" size={48} />
        </div>
      </div>
    </div>
  );
}