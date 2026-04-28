import React from "react";
import { Play, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface StoryReelCardProps {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  author: string;
  duration: string;
  category: string;
  views?: number;
}

export function StoryReelCard({
  id,
  title,
  thumbnail,
  videoUrl,
  author,
  duration,
  category,
  views
}: StoryReelCardProps) {
  const handlePlay = () => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="flex-shrink-0 w-[200px] bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
      {/* Video Thumbnail */}
      <div className="relative aspect-[9/16] overflow-hidden cursor-pointer" onClick={handlePlay}>
        <ImageWithFallback
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
            <Play size={20} className="text-gray-800 ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded-lg text-xs flex items-center gap-1">
          <Clock size={12} />
          {duration}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs">
          {category}
        </div>

        {/* Views (if provided) */}
        {views && (
          <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-lg text-xs">
            {views > 1000 ? `${(views / 1000).toFixed(1)}k` : views} views
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        
        <p className="text-xs text-orange-600 font-medium mb-3">
          {author}
        </p>

        <button
          onClick={handlePlay}
          className="w-full bg-orange-500 text-white py-2 rounded-xl text-sm flex items-center justify-center gap-2"
        >
          <Play size={14} fill="currentColor" />
          Watch Story
        </button>
      </div>
    </div>
  );
}