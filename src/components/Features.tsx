import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp, 
  Zap, 
  Users, 
  Brain, 
  Timer, 
  Target,
  Sparkles,
  Globe,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Real-Time Trends",
    description: "Integrated with live trending data from all major platforms. Get the latest viral songs, hashtags, and content formats.",
    color: "text-ai-gradient-start"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Intelligence",
    description: "Advanced AI analyzes millions of viral posts to understand what makes content successful on each platform.",
    color: "text-ai-gradient-end"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Platform-Specific Content",
    description: "No more generic advice. Get tailored content strategies for Instagram Reels, YouTube videos, and LinkedIn posts.",
    color: "text-ai-glow"
  },
  {
    icon: <Timer className="w-8 h-8" />,
    title: "Instant Generation",
    description: "Generate comprehensive content ideas in seconds, not hours. Complete with hooks, hashtags, and posting strategies.",
    color: "text-instagram-start"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collaboration",
    description: "Share ideas with your team, collaborate on content strategies, and maintain brand consistency across creators.",
    color: "text-youtube"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Performance Insights",
    description: "Track which generated ideas perform best and get personalized recommendations based on your success patterns.",
    color: "text-linkedin"
  }
];

export const Features = () => {
  return (
    <div className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-ai-gradient-start" />
            <span className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">
              Powerful Features
            </span>
            <Sparkles className="w-6 h-6 text-ai-gradient-end" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything You Need to Go Viral
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our AI-powered platform combines real-time trend analysis with advanced content generation 
            to help creators and brands consistently produce viral content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-glass border-glass-border backdrop-blur-md hover:bg-glass-bg/60 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`${feature.color} group-hover:animate-pulse`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-ai-gradient-start mb-2">10M+</div>
            <div className="text-muted-foreground">Content Ideas Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-ai-gradient-end mb-2">95%</div>
            <div className="text-muted-foreground">User Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-youtube mb-2">3x</div>
            <div className="text-muted-foreground">Faster Content Creation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-linkedin mb-2">24/7</div>
            <div className="text-muted-foreground">Real-time Trend Updates</div>
          </div>
        </div>
      </div>
    </div>
  );
};