import { useState } from "react";
import { Eye, EyeOff, ArrowLeft, Sparkles, User, Palette } from "lucide-react";

interface AuthScreenProps {
  onBack: () => void;
  onSuccess: () => void;
}

export function AuthScreen({ onBack, onSuccess }: AuthScreenProps) {
  const [isSignUp, setIsSignUp] = useState(true);
  const [userType, setUserType] = useState<"user" | "artist">("user");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle authentication logic here
    onSuccess();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 overflow-y-auto">
      {/* Header */}
      <div className="relative px-6 pt-12 pb-8">
        <button onClick={onBack} className="absolute left-6 top-14 text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeft size={24} />
        </button>
        
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
            <Sparkles className="text-white" size={28} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {isSignUp ? "Join ReBlooms" : "Welcome Back"}
          </h1>
          <p className="text-gray-600">
            {isSignUp ? "Create your account to start your journey" : "Sign in to continue your journey"}
          </p>
        </div>
      </div>

      {/* User Type Toggle (Only for Sign Up) */}
      {isSignUp && (
        <div className="px-6 mb-8">
          <p className="text-center text-gray-700 mb-4 font-medium">I want to join as:</p>
          <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-200 flex">
            <button
              onClick={() => setUserType("user")}
              className={`flex-1 flex items-center justify-center gap-3 py-4 px-4 rounded-xl transition-all duration-200 ${
                userType === "user"
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <User size={20} />
              <div className="text-left">
                <p className="font-medium text-sm">User</p>
                <p className="text-xs opacity-80">Buy & restore items</p>
              </div>
            </button>
            
            <button
              onClick={() => setUserType("artist")}
              className={`flex-1 flex items-center justify-center gap-3 py-4 px-4 rounded-xl transition-all duration-200 ${
                userType === "artist"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Palette size={20} />
              <div className="text-left">
                <p className="font-medium text-sm">Artist</p>
                <p className="text-xs opacity-80">Sell art & restore</p>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Auth Form */}
      <div className="px-6">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your full name"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email"
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
              required
            />
          </div>

          {isSignUp && (
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Enter your phone number"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                required
              />
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                placeholder="Enter your password"
                className="w-full p-4 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {isSignUp && (
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                placeholder="Confirm your password"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                required
              />
            </div>
          )}

          {!isSignUp && (
            <div className="text-right mb-6">
              <button type="button" className="text-orange-600 text-sm font-medium hover:text-orange-700">
                Forgot Password?
              </button>
            </div>
          )}

          <button
            type="submit"
            className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] ${
              userType === "artist" 
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                : "bg-gradient-to-r from-orange-500 to-red-500 text-white"
            }`}
          >
            {isSignUp ? `Create ${userType === "artist" ? "Artist" : "User"} Account` : "Sign In"}
          </button>
        </form>

        {/* Social Login */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 p-4 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-gray-700 font-medium">Google</span>
            </button>
            
            <button className="flex items-center justify-center gap-3 p-4 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors shadow-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
              </svg>
              <span className="font-medium">Apple</span>
            </button>
          </div>
        </div>

        {/* Toggle Auth Mode */}
        <div className="text-center mt-8 pb-8">
          <p className="text-gray-600">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-orange-600 font-medium hover:text-orange-700"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>

      {/* Terms and Privacy (Sign Up only) */}
      {isSignUp && (
        <div className="px-6 pb-8">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            By creating an account, you agree to our{" "}
            <button className="text-orange-600 underline">Terms of Service</button>{" "}
            and{" "}
            <button className="text-orange-600 underline">Privacy Policy</button>
          </p>
        </div>
      )}

      {/* Cultural Decorative Pattern */}
      <div className="h-16 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <svg viewBox="0 0 100 20" className="w-full h-full">
            <defs>
              <pattern id="auth-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="white"/>
                <path d="M5,5 Q10,0 15,5 Q10,10 5,5" fill="white"/>
                <path d="M0,10 Q5,5 10,10 Q15,15 20,10" stroke="white" strokeWidth="1" fill="none"/>
              </pattern>
            </defs>
            <rect width="100" height="20" fill="url(#auth-pattern)"/>
          </svg>
        </div>
      </div>
    </div>
  );
}