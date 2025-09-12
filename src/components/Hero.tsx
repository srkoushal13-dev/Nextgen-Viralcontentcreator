import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="AI Content Creation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-ai-gradient-start/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-ai-gradient-end/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-ai-glow/30 rounded-full blur-lg animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-ai-gradient-start animate-pulse" />
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">
              AI-Powered Content Creation
            </span>
            <Sparkles className="w-8 h-8 text-ai-gradient-end animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight">
            ViralContent AI
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Generate platform-specific viral content ideas with real-time trending insights. 
            <span className="text-ai-gradient-start font-semibold"> Instagram, YouTube, LinkedIn</span> - 
            tailored content that actually goes viral.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Zap className="w-5 h-5 mr-2" />
              Start Creating Viral Content
            </Button>
            <Button variant="platform" size="lg" className="text-lg px-8 py-4">
              <TrendingUp className="w-5 h-5 mr-2" />
              See How It Works
            </Button>
          </div>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center gap-2 bg-glass border border-glass-border rounded-full px-4 py-2 backdrop-blur-md">
              <TrendingUp className="w-4 h-4 text-ai-gradient-start" />
              <span className="text-sm">Real-time Trends</span>
            </div>
            <div className="flex items-center gap-2 bg-glass border border-glass-border rounded-full px-4 py-2 backdrop-blur-md">
              <Users className="w-4 h-4 text-ai-gradient-end" />
              <span className="text-sm">Platform-Specific</span>
            </div>
            <div className="flex items-center gap-2 bg-glass border border-glass-border rounded-full px-4 py-2 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-ai-glow" />
              <span className="text-sm">AI-Powered</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};