import { useState } from "react";
import { ArrowLeft, Star, Clock, Palette, Heart, Share2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Header } from "./Header";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import exampleImage from 'figma:asset/f72e030f775303d39254177821e99be190d194dc.png';
import restorationExample from 'figma:asset/a74ac982ddb6116cd56c411252775837e3ec79fd.png';

interface FurnitureRestorationScreenProps {
  onBack: () => void;
}

interface RestorationProject {
  id: string;
  title: string;
  artist: string;
  beforeAfterImage: string;
  category: string;
  difficulty: string;
  timeRequired: string;
  description: string;
  techniques: string[];
  rating: number;
  price: number;
  isBookmarked: boolean;
}

export function FurnitureRestorationScreen({ onBack }: FurnitureRestorationScreenProps) {
  const [sliderValues, setSliderValues] = useState<{ [key: string]: number }>({
    cabinet: 50,
    workshop: 50,
    cabinet2: 50,
    dresser: 50,
  });

  const [bookmarkedItems, setBookmarkedItems] = useState<{ [key: string]: boolean }>({});

  const handleNavigationClick = (section: string) => {
    console.log(`Navigate to ${section}`);
    if (section === 'home') {
      onBack();
    }
    // You can implement other navigation logic here
  };

  const restorationProjects: RestorationProject[] = [
    {
      id: "cabinet",
      title: "Vintage Trunk Revival",
      artist: "Heritage Artisans",
      beforeAfterImage: restorationExample,
      category: "Storage Furniture",
      difficulty: "Intermediate",
      timeRequired: "3-4 days",
      description: "A century-old trunk transformed into a beautiful storage piece with traditional Indian motifs and modern functionality.",
      techniques: ["Wood Restoration", "Traditional Painting", "Hardware Replacement", "Protective Coating"],
      rating: 4.8,
      price: 8500,
      isBookmarked: false,
    },
    {
      id: "workshop",
      title: "Antique Chair Restoration",
      artist: "Master Craftsmen",
      beforeAfterImage: "https://images.unsplash.com/photo-1701743808933-3467556d43c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZnVybml0dXJlJTIwd29ya3Nob3AlMjByZXN0b3JhdGlvbnxlbnwxfHx8fDE3NTg2NDA4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Seating Furniture",
      difficulty: "Advanced",
      timeRequired: "5-7 days",
      description: "Classic wooden chair brought back to life with expert craftsmanship and traditional finishing techniques.",
      techniques: ["Wood Repair", "Upholstery Work", "Traditional Polish", "Structural Reinforcement"],
      rating: 4.9,
      price: 12500,
      isBookmarked: false,
    },
    {
      id: "cabinet2",
      title: "Victorian Dresser Makeover",
      artist: "Restoration Masters",
      beforeAfterImage: "https://images.unsplash.com/photo-1669829296984-de54b928726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmUlMjByZXN0b3JhdGlvbiUyMHByb2plY3R8ZW58MXx8fHwxNzU4NjQwODY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Bedroom Furniture",
      difficulty: "Intermediate",
      timeRequired: "4-5 days",
      description: "Elegant Victorian dresser restored with authentic period details and modern storage solutions.",
      techniques: ["Surface Preparation", "Period-accurate Staining", "Hardware Restoration", "Protective Sealing"],
      rating: 4.7,
      price: 15500,
      isBookmarked: false,
    },
    {
      id: "dresser",
      title: "Vintage Cabinet Transformation",
      artist: "Folk Artists Collective",
      beforeAfterImage: exampleImage,
      category: "Kitchen Furniture",
      difficulty: "Beginner",
      timeRequired: "2-3 days",
      description: "Old cabinet transformed with intricate folk art patterns and vibrant colors celebrating Indian heritage.",
      techniques: ["Folk Art Painting", "Color Restoration", "Decorative Details", "Natural Finishing"],
      rating: 4.6,
      price: 9200,
      isBookmarked: false,
    },
  ];

  const handleSliderChange = (projectId: string, value: number) => {
    setSliderValues(prev => ({ ...prev, [projectId]: value }));
  };

  const toggleBookmark = (projectId: string) => {
    setBookmarkedItems(prev => ({ ...prev, [projectId]: !prev[projectId] }));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <Header 
        title="Furniture Restoration"
        subtitle="Transform & Revive Heritage Pieces"
        onNavigationClick={handleNavigationClick}
      />
      
      {/* Back Button */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-orange-200">
        <div className="flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-amber-700 hover:bg-amber-100"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
              <Palette className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="p-4 pb-6">
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-6 text-white">
          <h2 className="text-2xl mb-2">Breathe New Life Into Old Treasures</h2>
          <p className="text-amber-100 mb-4">Discover the art of furniture restoration with our expert artisans</p>
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-300" />
              <span>50+ Projects</span>
            </div>
            <div className="flex items-center gap-1">
              <Palette className="h-4 w-4 text-yellow-300" />
              <span>15+ Techniques</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-yellow-300" />
              <span>Expert Guidance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Restoration Projects */}
      <div className="px-4 pb-20">
        <h3 className="text-lg text-amber-900 mb-4">Featured Restorations</h3>
        
        <div className="space-y-6">
          {restorationProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-orange-200 shadow-lg">
              <CardContent className="p-0">
                {/* Before/After Image with Slider */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={project.beforeAfterImage}
                    alt={`${project.title} restoration`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay for slider */}
                  <div className="absolute inset-0 bg-black/10">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white text-sm mb-2">
                        <span className="bg-black/50 px-2 py-1 rounded">Before</span>
                        <span className="bg-black/50 px-2 py-1 rounded">After</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={sliderValues[project.id]}
                        onChange={(e) => handleSliderChange(project.id, parseInt(e.target.value))}
                        className="slider w-full h-2 rounded-lg cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Bookmark button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-red-500 hover:text-red-600"
                    onClick={() => toggleBookmark(project.id)}
                  >
                    <Heart 
                      className={`h-5 w-5 ${bookmarkedItems[project.id] ? 'fill-current' : ''}`} 
                    />
                  </Button>
                </div>

                {/* Project Details */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-amber-900">{project.title}</h4>
                      <p className="text-sm text-amber-600">by {project.artist}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-700">{project.rating}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">{project.description}</p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      {project.category}
                    </Badge>
                    <Badge className={getDifficultyColor(project.difficulty)}>
                      {project.difficulty}
                    </Badge>
                    <Badge variant="outline" className="text-amber-700 border-amber-300">
                      <Clock className="h-3 w-3 mr-1" />
                      {project.timeRequired}
                    </Badge>
                  </div>

                  {/* Techniques */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-700 mb-1">Techniques Used:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.techniques.map((technique, index) => (
                        <span
                          key={index}
                          className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full border border-amber-200"
                        >
                          {technique}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and Actions */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg text-green-600">₹{project.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-500 ml-1">restoration cost</span>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-amber-300 text-amber-700 hover:bg-amber-50"
                      >
                        <Share2 className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
          <div className="text-center">
            <Palette className="h-12 w-12 text-green-600 mx-auto mb-3" />
            <h3 className="text-lg text-green-900 mb-2">
              Have Your Own Restoration Project?
            </h3>
            <p className="text-green-700 mb-4">
              Connect with our skilled artisans to bring your vision to life
            </p>
            <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}