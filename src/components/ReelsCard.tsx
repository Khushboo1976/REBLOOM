import { Heart, MessageCircle, Share, Bookmark, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ReelsCardProps {
  reel: {
    id: string;
    title: string;
    thumbnail: string;
    videoUrl?: string;
    author: string;
    authorAvatar: string;
    likes: number;
    comments: number;
    isLiked: boolean;
    isSaved: boolean;
    duration: string;
    category: "restoration" | "upcycling" | "art" | "tutorial";
  };
  onLike: (id: string) => void;
  onSave: (id: string) => void;
  onShare: (id: string) => void;
  onComment: (id: string) => void;
  onPlay: (id: string) => void;
}

export function ReelsCard({ reel, onLike, onSave, onShare, onComment, onPlay }: ReelsCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "restoration": return "bg-green-500";
      case "upcycling": return "bg-blue-500";
      case "art": return "bg-purple-500";
      case "tutorial": return "bg-orange-500";
      default: return "bg-gray-500";
    }
  };

  const getCategoryText = (category: string) => {
    switch (category) {
      case "restoration": return "Restoration";
      case "upcycling": return "Upcycling";
      case "art": return "Art";
      case "tutorial": return "Tutorial";
      default: return category;
    }
  };

  return (
    <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-orange-100 hover:shadow-lg transition-all duration-300">
      {/* Video thumbnail with play overlay */}
      <div className="relative aspect-[9/16] overflow-hidden group cursor-pointer" onClick={() => {
        if (reel.videoUrl) {
          window.open(reel.videoUrl, '_blank');
        } else {
          onPlay(reel.id);
        }
      }}>
        <ImageWithFallback
          src={reel.thumbnail}
          alt={reel.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
            <Play size={24} className="text-gray-800 ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
          {reel.duration}
        </div>

        {/* Category badge */}
        <div className={`absolute top-3 left-3 ${getCategoryColor(reel.category)} text-white px-2 py-1 rounded-full text-xs`}>
          {getCategoryText(reel.category)}
        </div>

        {/* Madhubani-inspired corner decoration */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-yellow-400/30 to-transparent">
          <svg className="w-full h-full" viewBox="0 0 32 32" fill="none">
            <path
              d="M32 0H24C28 4 28 8 24 12C28 16 32 16 32 20V0Z"
              fill="currentColor"
              className="text-orange-500/40"
            />
            <circle cx="28" cy="4" r="1.5" fill="currentColor" className="text-red-400/60" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Author info */}
        <div className="flex items-center gap-3 mb-3">
          <ImageWithFallback
            src={reel.authorAvatar}
            alt={reel.author}
            className="w-10 h-10 rounded-full object-cover border-2 border-orange-200"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">{reel.author}</p>
            <p className="text-xs text-gray-600">Artist</p>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-sm font-medium text-gray-900 mb-3 line-clamp-2 leading-tight">
          {reel.title}
        </h3>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onLike(reel.id)}
              className={`flex items-center gap-1 transition-colors ${
                reel.isLiked ? "text-red-500" : "text-gray-600 hover:text-red-500"
              }`}
            >
              <Heart size={18} fill={reel.isLiked ? "currentColor" : "none"} />
              <span className="text-sm">{reel.likes}</span>
            </button>
            
            <button
              onClick={() => onComment(reel.id)}
              className="flex items-center gap-1 text-gray-600 hover:text-blue-500 transition-colors"
            >
              <MessageCircle size={18} />
              <span className="text-sm">{reel.comments}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onShare(reel.id)}
              className="p-2 text-gray-600 hover:text-green-500 hover:bg-green-50 rounded-full transition-colors"
            >
              <Share size={16} />
            </button>
            
            <button
              onClick={() => onSave(reel.id)}
              className={`p-2 rounded-full transition-colors ${
                reel.isSaved 
                  ? "text-orange-500 bg-orange-50" 
                  : "text-gray-600 hover:text-orange-500 hover:bg-orange-50"
              }`}
            >
              <Bookmark size={16} fill={reel.isSaved ? "currentColor" : "none"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}