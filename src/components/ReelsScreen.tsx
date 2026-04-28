import { useState } from "react";
import { ArrowLeft, Plus, Filter, Search } from "lucide-react";
import { ReelsCard } from "./ReelsCard";
import { Header } from "./Header";

interface ReelsScreenProps {
  onBack: () => void;
}

export function ReelsScreen({ onBack }: ReelsScreenProps) {
  const [likedReels, setLikedReels] = useState<Set<string>>(new Set());
  const [savedReels, setSavedReels] = useState<Set<string>>(new Set());
  const [activeFilter, setActiveFilter] = useState("all");

  const handleNavigationClick = (section: string) => {
    console.log(`Navigate to ${section}`);
    if (section === 'home') {
      onBack();
    }
    // You can implement other navigation logic here
  };

  const filters = [
    { id: "all", name: "All", count: 124 },
    { id: "restoration", name: "Restoration", count: 45 },
    { id: "art", name: "Art", count: 38 },
    { id: "upcycling", name: "Upcycling", count: 28 },
    { id: "tutorial", name: "Tutorial", count: 13 }
  ];

  const reels = [
    {
      id: "r1",
      title: "Madhubani Art Process: Traditional Fish Motif",
      thumbnail: "https://img.youtube.com/vi/iahd67Kv0Fs/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/shorts/iahd67Kv0Fs?feature=share",
      author: "Priya Kumari",
      authorAvatar: "https://images.unsplash.com/photo-1588713606197-023aea556d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg0NjYxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 245,
      comments: 18,
      isLiked: false,
      isSaved: false,
      duration: "2:45",
      category: "art" as const
    },
    {
      id: "r2",
      title: "Furniture Restoration: From Damaged to Beautiful",
      thumbnail: "https://img.youtube.com/vi/8YHq7y9Dnpw/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/shorts/8YHq7y9Dnpw?feature=share",
      author: "Heritage Restorers",
      authorAvatar: "https://images.unsplash.com/photo-1588713606197-023aea556d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg0NjYxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 189,
      comments: 12,
      isLiked: false,
      isSaved: false,
      duration: "3:20",
      category: "restoration" as const
    },
    {
      id: "r3",
      title: "Creative Upcycling: Vintage Cabinet Makeover",
      thumbnail: "https://img.youtube.com/vi/TT-9Hww0feY/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/shorts/TT-9Hww0feY?feature=share",
      author: "Eco Artisan",
      authorAvatar: "https://images.unsplash.com/photo-1588713606197-023aea556d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg0NjYxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 156,
      comments: 24,
      isLiked: false,
      isSaved: false,
      duration: "1:55",
      category: "upcycling" as const
    },
    {
      id: "r4",
      title: "Traditional Pottery: Handcrafting Techniques",
      thumbnail: "https://img.youtube.com/vi/1muyDD3GCZw/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/shorts/1muyDD3GCZw?feature=share",
      author: "Clay Master",
      authorAvatar: "https://images.unsplash.com/photo-1588713606197-023aea556d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg0NjYxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 98,
      comments: 7,
      isLiked: false,
      isSaved: false,
      duration: "4:12",
      category: "tutorial" as const
    },
    {
      id: "r5",
      title: "Block Printing: Ancient Art Meets Modern Design",
      thumbnail: "https://img.youtube.com/vi/Lq_FsbtBfl0/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/shorts/Lq_FsbtBfl0?feature=share",
      author: "Rajasthani Artisans",
      authorAvatar: "https://images.unsplash.com/photo-1588713606197-023aea556d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg0NjYxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 134,
      comments: 15,
      isLiked: false,
      isSaved: false,
      duration: "2:30",
      category: "art" as const
    }
  ];

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

  const filteredReels = activeFilter === "all" 
    ? reels 
    : reels.filter(reel => reel.category === activeFilter);

  const reelsWithInteractions = filteredReels.map(reel => ({
    ...reel,
    isLiked: likedReels.has(reel.id),
    isSaved: savedReels.has(reel.id),
    likes: reel.likes + (likedReels.has(reel.id) ? 1 : 0)
  }));

  return (
    <div className="pb-20">
      {/* Header */}
      <Header 
        title="Creative Reels"
        subtitle="Art & restoration stories"
        onNavigationClick={handleNavigationClick}
      />
      
      {/* Back Button and Create Button */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onBack} className="text-white flex items-center gap-2">
            <ArrowLeft size={20} />
            <span className="text-sm">Back</span>
          </button>
          <button className="bg-white/20 p-2 rounded-full text-white hover:bg-white/30 transition-colors">
            <Plus size={20} />
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? "bg-white text-purple-600 shadow-lg"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {filter.name} ({filter.count})
            </button>
          ))}
        </div>
      </div>

      {/* Reels Grid */}
      <div className="px-4 py-6 bg-gray-50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">
            {activeFilter === "all" ? "All Reels" : `${filters.find(f => f.id === activeFilter)?.name} Reels`}
          </h2>
          <button className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors">
            <Filter size={16} />
            <span className="text-sm">Sort</span>
          </button>
        </div>

        {reelsWithInteractions.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus size={24} className="text-gray-400" />
            </div>
            <h3 className="text-gray-900 font-medium mb-2">No reels found</h3>
            <p className="text-gray-500 text-sm mb-4">Be the first to share your creative process!</p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200">
              Create Reel
            </button>
          </div>
        ) : (
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
        )}
      </div>

      {/* Create Reel CTA */}
      <div className="mx-4 my-6 bg-gradient-to-r from-orange-500 to-pink-500 p-6 rounded-2xl text-white">
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2">Share Your Art Journey</h3>
          <p className="text-white/80 text-sm mb-4">
            Create reels to showcase your artistic process, restoration projects, or tutorials
          </p>
          <button className="bg-white text-orange-600 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200 flex items-center gap-2 mx-auto">
            <Plus size={18} />
            Create Reel
          </button>
        </div>
      </div>
    </div>
  );
}