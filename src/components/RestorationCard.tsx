import React from "react";
import { Heart, Share2, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface RestorationCardProps {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  artist: string;
  description: string;
  likes: number;
  views: number;
  isLiked?: boolean;
  onLike?: (id: string) => void;
  onShare?: (id: string) => void;
  onView?: (id: string) => void;
}

export function RestorationCard({
  id,
  title,
  beforeImage,
  afterImage,
  artist,
  description,
  likes,
  views,
  isLiked = false,
  onLike,
  onShare,
  onView
}: RestorationCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
      {/* Before/After Images */}
      <div className="grid grid-cols-2 gap-0 relative">
        {/* Before Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs z-10">
            Before
          </div>
          <ImageWithFallback
            src={beforeImage}
            alt={`${title} - Before`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* After Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs z-10">
            After
          </div>
          <ImageWithFallback
            src={afterImage}
            alt={`${title} - After`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Divider line */}
        <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/80 transform -translate-x-0.5"></div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {title}
        </h3>

        {/* Artist */}
        <p className="text-sm text-orange-600 font-medium mb-2">
          by {artist}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">
          {description}
        </p>

        {/* Stats and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onLike?.(id)}
              className={`flex items-center gap-1 ${
                isLiked ? "text-red-500" : "text-gray-600"
              }`}
            >
              <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
              <span className="text-sm">{likes}</span>
            </button>
            
            <div className="flex items-center gap-1 text-gray-600">
              <Eye size={16} />
              <span className="text-sm">{views}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onShare?.(id)}
              className="p-2 text-gray-600 hover:text-orange-500 rounded-full"
            >
              <Share2 size={16} />
            </button>
            
            <button
              onClick={() => onView?.(id)}
              className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}