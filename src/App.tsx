import { useState } from "react";
import { BottomNavigation } from "./components/BottomNavigation";
import { HomeScreen } from "./components/HomeScreen";
import { ExploreScreen } from "./components/ExploreScreen";
import { CreateScreen } from "./components/CreateScreen";
import { OrdersScreen } from "./components/OrdersScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { ReelsScreen } from "./components/ReelsScreen";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { AuthScreen } from "./components/AuthScreen";
import { FurnitureRestorationScreen } from "./components/FurnitureRestorationScreen";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<"welcome" | "auth" | "main">("welcome");
  const [activeTab, setActiveTab] = useState("home");
  const [showReels, setShowReels] = useState(false);
  const [showFurnitureRestoration, setShowFurnitureRestoration] = useState(false);

  const handleGetStarted = () => {
    setCurrentScreen("auth");
  };

  const handleAuthSuccess = () => {
    setCurrentScreen("main");
  };

  const handleBackToWelcome = () => {
    setCurrentScreen("welcome");
  };

  if (currentScreen === "welcome") {
    return <WelcomeScreen onGetStarted={handleGetStarted} />;
  }

  if (currentScreen === "auth") {
    return <AuthScreen onBack={handleBackToWelcome} onSuccess={handleAuthSuccess} />;
  }

  const renderScreen = () => {
    if (showReels) {
      return <ReelsScreen onBack={() => setShowReels(false)} />;
    }

    if (showFurnitureRestoration) {
      return <FurnitureRestorationScreen onBack={() => setShowFurnitureRestoration(false)} />;
    }

    switch (activeTab) {
      case "home":
        return <HomeScreen 
          onNavigateToReels={() => setShowReels(true)} 
          onNavigateToFurnitureRestoration={() => setShowFurnitureRestoration(true)}
        />;
      case "explore":
        return <ExploreScreen />;
      case "create":
        return <CreateScreen />;
      case "orders":
        return <OrdersScreen />;
      case "profile":
        return <ProfileScreen />;
      default:
        return <HomeScreen 
          onNavigateToReels={() => setShowReels(true)} 
          onNavigateToFurnitureRestoration={() => setShowFurnitureRestoration(true)}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderScreen()}
      {!showReels && !showFurnitureRestoration && (
        <BottomNavigation 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
      )}
    </div>
  );
}