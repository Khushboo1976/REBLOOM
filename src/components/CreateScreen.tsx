import { useState } from "react";
import { Camera, Upload, Palette, Wrench, Package, ChevronRight, Image as ImageIcon, Video, FileText } from "lucide-react";

export function CreateScreen() {
  const [activeTab, setActiveTab] = useState("sell");

  const sellCategories = [
    {
      id: "art",
      name: "Sell Artwork",
      description: "Share your original art pieces",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      items: ["Paintings", "Madhubani Art", "Folk Art", "Modern Art"]
    },
    {
      id: "crafts",
      name: "Sell Crafts",
      description: "Handmade items & pottery",
      icon: Package,
      color: "from-orange-500 to-red-500",
      items: ["Pottery", "Textiles", "Jewelry", "Home Decor"]
    }
  ];

  const restoreOptions = [
    {
      id: "furniture",
      name: "Furniture Restoration",
      description: "Restore vintage & antique furniture",
      icon: Wrench,
      color: "from-green-500 to-teal-500",
      popular: true
    },
    {
      id: "art",
      name: "Art Restoration",
      description: "Repair & restore paintings",
      icon: Palette,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: "pottery",
      name: "Pottery & Ceramics",
      description: "Fix broken pottery items",
      icon: Package,
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-4 pt-12 pb-6">
        <div className="text-center mb-6">
          <h1 className="text-white text-2xl font-bold mb-2">Create & Restore</h1>
          <p className="text-white/80 text-sm">Share your art or restore treasured items</p>
        </div>

        {/* Tab Selector */}
        <div className="bg-white/20 p-1 rounded-2xl flex">
          <button
            onClick={() => setActiveTab("sell")}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeTab === "sell"
                ? "bg-white text-orange-600 shadow-lg"
                : "text-white hover:bg-white/20"
            }`}
          >
            Sell Items
          </button>
          <button
            onClick={() => setActiveTab("restore")}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
              activeTab === "restore"
                ? "bg-white text-orange-600 shadow-lg"
                : "text-white hover:bg-white/20"
            }`}
          >
            Restore Items
          </button>
        </div>
      </div>

      {activeTab === "sell" ? (
        <div className="px-4 py-6">
          {/* Sell Categories */}
          <div className="space-y-4 mb-8">
            {sellCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className={`bg-gradient-to-r ${category.color} p-6 rounded-2xl text-white hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{category.name}</h3>
                        <p className="text-white/80 text-sm">{category.description}</p>
                      </div>
                    </div>
                    <ChevronRight size={20} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/20 rounded-full text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Upload Options */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Upload</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-3 p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors">
                <Camera className="text-blue-600" size={24} />
                <span className="text-sm font-medium text-blue-800">Take Photo</span>
              </button>
              <button className="flex flex-col items-center gap-3 p-4 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors">
                <ImageIcon className="text-green-600" size={24} />
                <span className="text-sm font-medium text-green-800">Upload Image</span>
              </button>
              <button className="flex flex-col items-center gap-3 p-4 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-colors">
                <Video className="text-purple-600" size={24} />
                <span className="text-sm font-medium text-purple-800">Record Video</span>
              </button>
            </div>
          </div>

          {/* Selling Tips */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border border-orange-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Selling Tips</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Include the story behind your artwork to connect with buyers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Take high-quality photos in good lighting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Mention the materials and techniques used</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">•</span>
                <span>Set competitive prices based on similar items</span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="px-4 py-6">
          {/* Restore Options */}
          <div className="space-y-4 mb-8">
            {restoreOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.id}
                  className={`relative bg-gradient-to-r ${option.color} p-6 rounded-2xl text-white hover:shadow-lg transition-all duration-200 hover:scale-[1.02] cursor-pointer`}
                >
                  {option.popular && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Popular
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{option.name}</h3>
                        <p className="text-white/80 text-sm">{option.description}</p>
                      </div>
                    </div>
                    <ChevronRight size={20} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Upload Item for Restoration */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Upload Item for Restoration</h3>
            
            {/* Upload Area */}
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center mb-6 hover:border-orange-400 transition-colors cursor-pointer">
              <Upload className="text-gray-400 mx-auto mb-4" size={32} />
              <h4 className="text-gray-900 font-medium mb-2">Upload Photos of Your Item</h4>
              <p className="text-gray-500 text-sm mb-4">
                Take multiple angles to help artists understand the restoration needed
              </p>
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors">
                Choose Photos
              </button>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Item Description
                </label>
                <textarea
                  placeholder="Describe your item and what restoration it needs..."
                  className="w-full p-3 border border-gray-300 rounded-xl resize-none h-24 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Item Category
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Select category</option>
                    <option>Furniture</option>
                    <option>Artwork</option>
                    <option>Pottery</option>
                    <option>Textiles</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Age
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>Select age</option>
                    <option>Less than 10 years</option>
                    <option>10-25 years</option>
                    <option>25-50 years</option>
                    <option>50+ years (Vintage)</option>
                    <option>100+ years (Antique)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Restoration Process */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3">🔧 How Restoration Works</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <span className="text-sm text-gray-700">Upload photos and describe your item</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <span className="text-sm text-gray-700">Artists review and provide quotes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <span className="text-sm text-gray-700">Choose your preferred artist</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                <span className="text-sm text-gray-700">Track progress and receive your restored item</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className="px-4 pb-6">
        <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
          {activeTab === "sell" ? "List Item for Sale" : "Submit for Restoration"}
        </button>
      </div>
    </div>
  );
}