import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Sparkles, Heart, Recycle, Users, Palette, ChevronDown, Play, Instagram, Facebook, Twitter, Youtube, Calendar, Award, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import exampleImage1 from 'figma:asset/8662a6c13c5cd5c6e12f64d9044de0f03c1cd2a3.png';
import exampleImage2 from 'figma:asset/3200ebd25de759861e863159a3cad43e2af154b1.png';

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export function WelcomeScreen({ onGetStarted }: WelcomeScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);

  const handleNavigationClick = useCallback((section: string) => {
    console.log(`Navigate to ${section}`);
    switch (section) {
      case 'home':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'works':
        worksRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'events':
        eventsRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'join':
        onGetStarted();
        break;
    }
  }, [onGetStarted]);

  const heroSlides = useMemo(() => [
    {
      title: "Restore. Revive. Celebrate.",
      subtitle: "Transform forgotten treasures into cultural masterpieces",
      image: exampleImage1,
      accent: "from-yellow-500 to-orange-500"
    },
    {
      title: "Art Meets Sustainability",
      subtitle: "Where Indian heritage breathes new life into old items",
      image: exampleImage2,
      accent: "from-green-500 to-teal-500"
    }
  ], []);

  const features = useMemo(() => [
    {
      icon: Palette,
      title: "Authentic Indian Art",
      description: "Discover Madhubani, folk art, and modern Indian designs",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Recycle,
      title: "Sustainable Restoration",
      description: "Give new life to vintage items with artistic restoration",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Empower Artists",
      description: "Support local artisans and traditional craftspeople",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Heart,
      title: "Stories & Memories",
      description: "Every piece carries a story, every restoration creates new memories",
      gradient: "from-purple-500 to-pink-500"
    }
  ], []);

  // Using reliable, working images from Unsplash
  const beforeAfterProjects = useMemo(() => [
    {
      title: "Vintage Furniture Revival",
      before: "https://images.unsplash.com/photo-1546552616-6c9bd78ec972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwd29vZGVuJTIwY2hhaXIlMjBvbGQlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzU4NjQyOTc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      after: exampleImage1,
      description: "1960s cabinet transformed with vibrant Madhubani art"
    },
    {
      title: "Heritage Door Restoration",
      before: "https://images.unsplash.com/photo-1622270257170-4c695b06cb8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjB3ZWF0aGVyZWQlMjBkb29yJTIwd29vZGVuJTIwYW50aXF1ZXxlbnwxfHx8fDE3NTg2NDI5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      after: exampleImage2,
      description: "Antique doors brought to life with traditional folk patterns"
    }
  ], []);

  const artFormsGallery = useMemo(() => [
    {
      title: "Madhubani Paintings",
      image: "https://images.unsplash.com/photo-1575550828602-aff2b22342a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRodWJhbmklMjBwYWludGluZyUyMGluZGlhbiUyMGFydCUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc1ODY0Mjk4MXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Traditional Mithila art forms passed down through generations"
    },
    {
      title: "Folk Art Restoration",
      image: "https://images.unsplash.com/photo-1716876995651-1ff85b65a6d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb2xrJTIwYXJ0JTIwcG90dGVyeSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc1ODY0Mjk4NXww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Handcrafted designs celebrating Indian cultural traditions"
    },
    {
      title: "Traditional Crafts",
      image: "https://images.unsplash.com/photo-1717917196987-ec7f77ce69b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBoYW5kaWNyYWZ0cyUyMHRyYWRpdGlvbmFsJTIwY3JhZnRzfGVufDF8fHx8MTc1ODY0Mjk4OHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Master craftspeople preserving traditional techniques"
    }
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Slower animation
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 overflow-y-auto">
      {/* Simplified Header with Navigation */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="px-4 pt-12 pb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-white text-lg font-bold">ReBlooms</h1>
                <p className="text-white/80 text-xs">Mumbai, India</p>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-white text-xl font-bold mb-1">ReBlooms</h2>
            <p className="text-white/80 text-sm">Where art meets sustainability</p>
          </div>

          <div className="hidden md:flex items-center gap-6 mb-4">
            {['Home', 'About Us', 'Our Works', 'Events', 'Join Us'].map((item, index) => (
              <button
                key={item}
                onClick={() => handleNavigationClick(['home', 'about', 'works', 'events', 'join'][index])}
                className="text-sm font-medium transition-colors text-white/80 hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="relative px-6 pt-8 pb-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
            <Sparkles className="text-white" size={28} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to ReBlooms</h1>
          <p className="text-gray-600">Transform forgotten treasures into cultural masterpieces</p>
        </div>

        {/* Simplified Hero Carousel */}
        <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl mb-6">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className={`relative h-full bg-gradient-to-br ${slide.accent} p-8 flex items-center`}>
                <div className="flex-1 text-white z-10">
                  <h2 className="text-2xl font-bold mb-3">{slide.title}</h2>
                  <p className="text-white/90 text-lg mb-6">{slide.subtitle}</p>
                  <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-all duration-200 flex items-center gap-2">
                    <Play size={16} />
                    Watch Story
                  </button>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-32 h-32 rounded-2xl overflow-hidden shadow-xl">
                  <ImageWithFallback
                    src={slide.image}
                    alt="ReBlooms restoration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
          
          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentSlide ? "bg-white w-6" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center">
          <ChevronDown className="text-gray-400 animate-bounce mx-auto" size={24} />
          <p className="text-gray-500 text-sm mt-2">Scroll to explore</p>
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} className="px-6 py-12 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About ReBlooms</h2>
          <p className="text-gray-600 leading-relaxed">
            ReBlooms is where forgotten treasures find new life through the magic of Indian artistry. 
            We connect you with skilled artisans who transform old, broken, or outdated items into 
            beautiful pieces that celebrate our rich cultural heritage.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-2xl border border-orange-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <Palette className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Preserve Cultural Heritage</h3>
                <p className="text-gray-700 text-sm">Keep traditional Indian art forms alive through restoration</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-2xl border border-green-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Recycle className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Environmental Impact</h3>
                <p className="text-gray-700 text-sm">Reduce waste by giving new life to old items</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl border border-purple-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <Users className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Empower Artisans</h3>
                <p className="text-gray-700 text-sm">Support local artists and traditional craftspeople</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Works - With Working Images */}
      <div ref={worksRef} className="px-6 py-12 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Works</h2>
          <p className="text-gray-600">Witness the transformation of forgotten treasures</p>
        </div>

        <div className="space-y-8">
          {beforeAfterProjects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{project.title}</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="relative h-48 rounded-xl overflow-hidden">
                    <ImageWithFallback
                      src={project.before}
                      alt="Before restoration"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Before
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="relative h-48 rounded-xl overflow-hidden">
                    <ImageWithFallback
                      src={project.after}
                      alt="After restoration"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      After
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm text-center italic">
                "{project.description}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Indian Art Forms Gallery - With Working Images */}
      <div className="px-6 py-12 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Celebrating Indian Art Forms</h2>
          <p className="text-gray-600">Discover the rich tapestry of traditional Indian craftsmanship</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {artFormsGallery.map((art, index) => (
            <div key={index} className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-lg font-bold mb-2">{art.title}</h3>
                <p className="text-white/90 text-sm">{art.description}</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full">
                <Award className="text-white" size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-12 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes Us Special</h2>
          <p className="text-gray-600">Discover the magic of restoration and cultural artistry</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={20} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{feature.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Events Section - With Working Image */}
      <div ref={eventsRef} className="px-6 py-12 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-gray-600">Join us in celebrating art and culture</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="text-green-600" size={16} />
                <span className="text-sm font-medium text-green-600">March 15-17, 2024</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cultural Heritage Festival</h3>
              <p className="text-gray-600 text-sm mb-4">Celebrating traditional Indian art forms with live demonstrations</p>
              <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                Learn More
                <ArrowRight size={14} />
              </button>
            </div>
            <div className="w-24 h-24 rounded-xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1603646315726-5aad1908e00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdWx0dXJhbCUyMGZlc3RpdmFsJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzU4NjMzNzM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cultural Heritage Festival"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="px-6 py-12 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How ReBlooms Works</h2>
          <p className="text-gray-600">Simple steps to transform your treasures</p>
        </div>

        <div className="space-y-8">
          {useMemo(() => [
            { step: 1, title: "Upload Your Item", desc: "Share photos and tell us about your item's story", color: "bg-blue-500" },
            { step: 2, title: "Choose an Artist", desc: "Browse artists and select your preferred restoration style", color: "bg-green-500" },
            { step: 3, title: "Track Progress", desc: "Watch your item transform through photos and videos", color: "bg-orange-500" },
            { step: 4, title: "Receive & Celebrate", desc: "Get your restored treasure and share the new story", color: "bg-purple-500" }
          ], []).map((item, index) => (
            <div key={index} className="flex items-center gap-6">
              <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
                {item.step}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-12 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-white/90 mb-8 leading-relaxed">
            Join thousands of users who are preserving memories and supporting artisans
          </p>
          
          <div className="space-y-4">
            <button
              onClick={onGetStarted}
              className="w-full bg-white text-orange-600 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Get Started
            </button>
            
            <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white py-4 rounded-2xl font-medium hover:bg-white/30 transition-all duration-200">
              Watch Demo Video
            </button>
          </div>
          
          <p className="text-white/70 text-sm mt-6">
            Already have an account? <button className="text-white font-medium underline">Sign In</button>
          </p>
        </div>
      </div>

      {/* Footer - Simplified */}
      <footer className="bg-gradient-to-br from-gray-900 via-orange-900 to-red-900 text-white">
        {/* Main Footer Content */}
        <div className="px-6 py-12">
          {/* Logo and Description */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
              <Sparkles className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3">ReBlooms</h3>
            <p className="text-white/80 leading-relaxed max-w-sm mx-auto">
              Transforming forgotten treasures through the artistry of Indian heritage. 
              Connecting communities, preserving culture, protecting our planet.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button 
              onClick={() => handleNavigationClick('home')}
              className="bg-gradient-to-r from-orange-600 to-amber-600 p-4 rounded-2xl text-left"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold mb-1">Home</h4>
                  <p className="text-white/80 text-sm">Explore our platform</p>
                </div>
                <ArrowRight className="text-white/60" size={20} />
              </div>
            </button>

            <button 
              onClick={() => handleNavigationClick('about')}
              className="bg-gradient-to-r from-green-600 to-teal-600 p-4 rounded-2xl text-left"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold mb-1">About Us</h4>
                  <p className="text-white/80 text-sm">Our mission & vision</p>
                </div>
                <ArrowRight className="text-white/60" size={20} />
              </div>
            </button>

            <button 
              onClick={() => handleNavigationClick('works')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-2xl text-left"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold mb-1">Our Works</h4>
                  <p className="text-white/80 text-sm">Restoration gallery</p>
                </div>
                <ArrowRight className="text-white/60" size={20} />
              </div>
            </button>

            <button 
              onClick={() => handleNavigationClick('events')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl text-left"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold mb-1">Events</h4>
                  <p className="text-white/80 text-sm">Cultural celebrations</p>
                </div>
                <ArrowRight className="text-white/60" size={20} />
              </div>
            </button>
          </div>

          {/* Join Us CTA */}
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6 rounded-2xl mb-8 text-center">
            <h4 className="text-xl font-bold mb-2">Join Our Community</h4>
            <p className="text-white/90 text-sm mb-4">Be part of the cultural preservation movement</p>
            <button 
              onClick={onGetStarted}
              className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold"
            >
              Join Us Today
            </button>
          </div>

          {/* Social Media */}
          <div className="text-center mb-8">
            <h4 className="font-bold mb-4">Follow Our Journey</h4>
            <div className="flex justify-center gap-4">
              <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Instagram size={20} />
              </button>
              <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Facebook size={20} />
              </button>
              <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Twitter size={20} />
              </button>
              <button className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Youtube size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 px-6 py-6">
          <div className="text-center text-white/60 text-sm space-y-2">
            <p>© 2024 ReBlooms. All rights reserved.</p>
            <div className="flex justify-center gap-6 text-xs">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
              <button className="hover:text-white transition-colors">Contact Us</button>
            </div>
          </div>
        </div>

        {/* Simple Decorative Bottom */}
        <div className="h-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"></div>
      </footer>
    </div>
  );
}