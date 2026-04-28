import { useState } from "react";
import { Menu, X, Bell, Search, User, Sparkles } from "lucide-react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showNavigation?: boolean;
  showSearch?: boolean;
  showNotifications?: boolean;
  onNavigationClick?: (section: string) => void;
}

export function Header({ 
  title = "ReBlooms",
  subtitle = "Discover, restore & celebrate Indian art",
  showNavigation = true,
  showSearch = true,
  showNotifications = true,
  onNavigationClick 
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "works", label: "Our Works" },
    { id: "events", label: "Events" },
    { id: "join", label: "Join Us" }
  ];

  const handleNavigationClick = (section: string) => {
    setIsMobileMenuOpen(false);
    onNavigationClick?.(section);
  };

  return (
    <div className="bg-gradient-to-r from-orange-500 to-amber-500">
      {/* Main Header */}
      <div className="px-4 pt-12 pb-6">
        {/* Top Row - Location and Icons */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-white text-lg font-bold">{title}</h1>
              <p className="text-white/80 text-xs">Mumbai, India</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {showNotifications && (
              <button className="relative p-2">
                <Bell size={20} className="text-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
              </button>
            )}
            
            <button className="p-2">
              <User size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Title and Subtitle */}
        <div className="mb-6">
          <h2 className="text-white text-xl font-bold mb-1">{title}</h2>
          <p className="text-white/80 text-sm">{subtitle}</p>
        </div>

        {/* Desktop Navigation */}
        {showNavigation && (
          <div className="hidden md:flex items-center gap-6 mb-4">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigationClick(item.id)}
                className="text-sm font-medium transition-colors text-white/80 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}

        {/* Mobile Menu Button */}
        {showNavigation && (
          <div className="md:hidden mb-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        )}

        {/* Search Bar */}
        {showSearch && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search art, artists, or restoration services..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white text-gray-800 placeholder-gray-500 shadow-lg"
            />
          </div>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {showNavigation && isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-white/20">
          <div className="p-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigationClick(item.id)}
                className="block w-full text-left p-3 rounded-xl transition-colors text-gray-700 hover:bg-gray-100"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}