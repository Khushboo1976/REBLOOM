import { useState } from "react";
import { Heart, Star, ShoppingCart, Eye, Sparkles, RotateCcw } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  beforeImage?: string;
  artist: string;
  artStyle: string;
  rating: number;
  isLiked: boolean;
  isRestored?: boolean;
  story: string;
}

interface ProductCardProps {
  product: Product;
  onLike: (id: string) => void;
  onView: (id: string) => void;
}

export function ProductCard({ product, onLike, onView }: ProductCardProps) {
  const [showBefore, setShowBefore] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      {/* Image Container */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        {product.isRestored && product.beforeImage ? (
          // Before/After Slider for Restored Items
          <div className="relative h-full">
            <div className="absolute inset-0">
              <ImageWithFallback
                src={product.image}
                alt={`${product.title} - After`}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <ImageWithFallback
                src={product.beforeImage}
                alt={`${product.title} - Before`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Slider Control */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
              <div className="flex justify-between text-xs text-white font-medium mt-1">
                <span className="bg-black/50 px-2 py-1 rounded">Before</span>
                <span className="bg-black/50 px-2 py-1 rounded">After</span>
              </div>
            </div>

            {/* Restoration Badge */}
            <div className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <RotateCcw size={12} />
              Restored
            </div>
          </div>
        ) : (
          // Regular Image for Non-Restored Items
          <ImageWithFallback
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        )}

        {/* Heart Button */}
        <button
          onClick={() => onLike(product.id)}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            product.isLiked
              ? "bg-red-500 text-white shadow-lg scale-110"
              : "bg-white/80 text-gray-600 hover:bg-white hover:text-red-500"
          }`}
        >
          <Heart size={16} className={product.isLiked ? "fill-current" : ""} />
        </button>

        {/* Price Badge */}
        {product.originalPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
          </div>
        )}

        {/* 3D Preview Badge */}
        <div className="absolute bottom-3 right-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
          <Sparkles size={10} />
          3D View
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Artist */}
        <div className="mb-3">
          <h3 className="font-medium text-gray-900 line-clamp-1 mb-1">{product.title}</h3>
          <p className="text-sm text-gray-600">by {product.artist}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
              {product.artStyle}
            </span>
            <div className="flex items-center gap-1">
              <Star size={12} className="text-yellow-500 fill-current" />
              <span className="text-xs text-gray-600">{product.rating}</span>
            </div>
          </div>
        </div>

        {/* Story Preview */}
        <div className="mb-3 p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-100">
          <p className="text-xs text-gray-700 line-clamp-2 italic">
            "{product.story}"
          </p>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => onView(product.id)}
            className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-1"
          >
            <Eye size={14} />
            View
          </button>
          <button className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white py-2 px-3 rounded-xl text-sm font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-1">
            <ShoppingCart size={14} />
            Buy
          </button>
        </div>
      </div>

      {/* Cultural Pattern Accent */}
      <div className="h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <svg viewBox="0 0 100 4" className="w-full h-full">
            <defs>
              <pattern id={`card-pattern-${product.id}`} x="0" y="0" width="10" height="4" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="0.5" fill="white"/>
                <circle cx="8" cy="2" r="0.5" fill="white"/>
              </pattern>
            </defs>
            <rect width="100" height="4" fill={`url(#card-pattern-${product.id})`}/>
          </svg>
        </div>
      </div>
    </div>
  );
}