import { useState } from "react";
import { User, Heart, Bookmark, Settings, HelpCircle, Star, Package, Palette, Edit3, ChevronRight, Bell, Shield, LogOut } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProfileScreen() {
  const [isArtist, setIsArtist] = useState(false);

  const userStats = [
    { label: "Orders", value: "12", icon: Package, color: "text-blue-600" },
    { label: "Favorites", value: "24", icon: Heart, color: "text-red-500" },
    { label: "Reviews", value: "4.9", icon: Star, color: "text-yellow-500" },
    { label: "Saved", value: "18", icon: Bookmark, color: "text-green-600" }
  ];

  const artistStats = [
    { label: "Items Sold", value: "45", icon: Package, color: "text-blue-600" },
    { label: "Rating", value: "4.8", icon: Star, color: "text-yellow-500" },
    { label: "Followers", value: "2.3K", icon: Heart, color: "text-red-500" },
    { label: "Artworks", value: "28", icon: Palette, color: "text-purple-600" }
  ];

  const menuSections = [
    {
      title: "Account",
      items: [
        { label: "Edit Profile", icon: Edit3, description: "Update your profile information" },
        { label: "Notifications", icon: Bell, description: "Manage your notification preferences" },
        { label: "Privacy & Security", icon: Shield, description: "Control your privacy settings" }
      ]
    },
    {
      title: "Activity",
      items: [
        { label: "My Orders", icon: Package, description: "View your purchase history" },
        { label: "Favorites", icon: Heart, description: "Items you've liked" },
        { label: "Saved Items", icon: Bookmark, description: "Items saved for later" }
      ]
    },
    {
      title: "Support",
      items: [
        { label: "Help Center", icon: HelpCircle, description: "Get help and support" },
        { label: "Settings", icon: Settings, description: "App preferences and settings" }
      ]
    }
  ];

  const artistMenuItems = [
    { label: "Artist Dashboard", icon: Palette, description: "Manage your artwork and orders" },
    { label: "Portfolio", icon: Package, description: "View and edit your portfolio" },
    { label: "Analytics", icon: Star, description: "Track your performance" }
  ];

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-4 pt-12 pb-8">
        <div className="text-center mb-6">
          {/* Profile Picture */}
          <div className="relative mx-auto mb-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1588713606197-023aea556d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTg0NjYxMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
            />
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Edit3 size={14} className="text-gray-600" />
            </button>
          </div>

          <h1 className="text-white text-xl font-bold mb-1">Priya Sharma</h1>
          <p className="text-white/80 text-sm mb-3">priya.sharma@email.com</p>
          
          {/* Artist Toggle */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className={`text-sm ${!isArtist ? "text-white font-medium" : "text-white/70"}`}>
              User
            </span>
            <button
              onClick={() => setIsArtist(!isArtist)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                isArtist ? "bg-orange-500" : "bg-white/30"
              }`}
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                isArtist ? "translate-x-7" : "translate-x-1"
              }`} />
            </button>
            <span className={`text-sm ${isArtist ? "text-white font-medium" : "text-white/70"}`}>
              Artist
            </span>
          </div>

          {isArtist && (
            <div className="bg-white/20 px-4 py-2 rounded-full">
              <span className="text-white text-sm font-medium">✨ Verified Artist</span>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4">
          {(isArtist ? artistStats : userStats).map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Icon size={20} className="text-white" />
                </div>
                <p className="text-white font-bold text-lg">{stat.value}</p>
                <p className="text-white/80 text-xs">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Artist Specific Menu */}
      {isArtist && (
        <div className="px-4 py-6 bg-gradient-to-br from-orange-50 to-amber-50 border-b border-orange-200">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Artist Tools</h2>
          <div className="space-y-3">
            {artistMenuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className="w-full flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-orange-200 hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                >
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Icon size={20} className="text-orange-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-medium text-gray-900">{item.label}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Menu Sections */}
      <div className="px-4 py-6">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">{section.title}</h2>
            <div className="space-y-3">
              {section.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    className="w-full flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                      <Icon size={20} className="text-gray-600" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-medium text-gray-900">{item.label}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <ChevronRight size={20} className="text-gray-400" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Version and Logout */}
      <div className="px-4 pb-6">
        <div className="mb-4 text-center">
          <p className="text-gray-500 text-sm">ReBlooms v1.0.0</p>
        </div>
        
        <button className="w-full flex items-center justify-center gap-3 p-4 bg-red-50 text-red-600 rounded-2xl border border-red-200 hover:bg-red-100 transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>

      {/* Become Artist CTA */}
      {!isArtist && (
        <div className="mx-4 mb-6 bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-2xl text-white">
          <div className="text-center">
            <Palette className="mx-auto mb-3" size={32} />
            <h3 className="text-lg font-bold mb-2">Become an Artist</h3>
            <p className="text-white/80 text-sm mb-4">
              Share your artwork with the community and start earning
            </p>
            <button 
              onClick={() => setIsArtist(true)}
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-200"
            >
              Switch to Artist Mode
            </button>
          </div>
        </div>
      )}
    </div>
  );
}