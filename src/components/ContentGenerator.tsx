import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Instagram, 
  Youtube, 
  Linkedin, 
  Sparkles, 
  Copy, 
  Download, 
  Share,
  Loader2,
  TrendingUp,
  Music,
  Hash
} from "lucide-react";

interface Platform {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  gradient?: string;
}

const platforms: Platform[] = [
  {
    id: "instagram",
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    color: "instagram",
    gradient: "bg-instagram-gradient"
  },
  {
    id: "youtube", 
    name: "YouTube",
    icon: <Youtube className="w-5 h-5" />,
    color: "youtube",
    gradient: "bg-youtube"
  },
  {
    id: "linkedin",
    name: "LinkedIn", 
    icon: <Linkedin className="w-5 h-5" />,
    color: "linkedin",
    gradient: "bg-linkedin"
  }
];

interface ContentIdea {
  hook: string;
  description: string;
  hashtags: string[];
  trendingSong?: string;
  tips: string[];
  platform: string;
}

export const ContentGenerator = () => {
  const [topic, setTopic] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<ContentIdea | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!topic.trim() || !selectedPlatform) {
      toast({
        title: "Missing Information",
        description: "Please enter a topic and select a platform.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate API call - In real app, this would connect to backend
    setTimeout(() => {
      const mockContent: ContentIdea = {
        hook: selectedPlatform === "instagram" 
          ? `5 ${topic} secrets that will blow your mind 🤯`
          : selectedPlatform === "youtube"
          ? `The ${topic} method that changed everything (and why experts hate it)`
          : `Why ${topic} is the skill every professional needs in 2025`,
        description: selectedPlatform === "instagram"
          ? `Create a visually stunning carousel post showcasing the top 5 ${topic} secrets. Use bold text overlays, trending transitions, and include a strong call-to-action in your caption.`
          : selectedPlatform === "youtube"  
          ? `Film a 8-12 minute deep-dive video about ${topic}. Start with a compelling hook, include personal stories, and end with actionable steps viewers can take immediately.`
          : `Write a thought-leadership post about ${topic}. Share industry insights, include data points, and encourage meaningful discussion in the comments.`,
        hashtags: selectedPlatform === "instagram"
          ? [`#${topic.toLowerCase()}`, "#trending", "#viral", "#fyp", "#explore", "#reels"]
          : selectedPlatform === "youtube"
          ? [`${topic}`, "tutorial", "2025", "tips", "howto", "trending"]
          : [`#${topic}`, "#ProfessionalDevelopment", "#CareerGrowth", "#Innovation", "#Leadership"],
        trendingSong: selectedPlatform === "instagram" ? "Original Audio - Trending Now" : undefined,
        tips: [
          `Post at optimal times for ${selectedPlatform}`,
          "Engage with comments within the first hour",
          "Cross-promote on other platforms",
          "Use trending audio/hashtags appropriately"
        ],
        platform: selectedPlatform
      };
      
      setGeneratedContent(mockContent);
      setIsGenerating(false);
      
      toast({
        title: "Content Generated!",
        description: "Your viral content idea is ready.",
      });
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Content copied to clipboard.",
    });
  };

  const selectedPlatformData = platforms.find(p => p.id === selectedPlatform);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Generate Your Viral Content
        </h2>
        <p className="text-muted-foreground text-lg">
          Enter your topic and platform to get AI-powered content ideas with real-time trends
        </p>
      </div>

      {/* Input Form */}
      <Card className="mb-8 bg-glass border-glass-border backdrop-blur-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-ai-gradient-start" />
            Content Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="text-sm font-medium mb-2 block">Topic or Niche</label>
            <Input
              placeholder="e.g., AI in Education, Fitness Tips, Travel Hacks..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="bg-background/50 border-glass-border"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Select Platform</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {platforms.map((platform) => (
                <Button
                  key={platform.id}
                  variant={selectedPlatform === platform.id ? platform.color as any : "platform"}
                  className="h-16 flex-col"
                  onClick={() => setSelectedPlatform(platform.id)}
                >
                  {platform.icon}
                  <span className="mt-1">{platform.name}</span>
                </Button>
              ))}
            </div>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={isGenerating || !topic.trim() || !selectedPlatform}
            variant="hero"
            size="lg"
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Generating Viral Content...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Generate Viral Content
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Generated Content */}
      {generatedContent && (
        <Card className="animate-fade-in bg-glass border-glass-border backdrop-blur-md">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                {selectedPlatformData?.icon}
                {selectedPlatformData?.name} Content Idea
              </CardTitle>
              <Badge variant="secondary" className="bg-ai-gradient text-white">
                <TrendingUp className="w-3 h-3 mr-1" />
                Viral Potential: High
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Hook */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">Viral Hook</h4>
                <Button
                  variant="copy"
                  size="sm"
                  onClick={() => copyToClipboard(generatedContent.hook)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <p className="bg-background/50 p-4 rounded-lg border border-glass-border">
                {generatedContent.hook}
              </p>
            </div>

            {/* Description */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">Content Description</h4>
                <Button
                  variant="copy"
                  size="sm"
                  onClick={() => copyToClipboard(generatedContent.description)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <p className="bg-background/50 p-4 rounded-lg border border-glass-border">
                {generatedContent.description}
              </p>
            </div>

            {/* Trending Song (for Instagram) */}
            {generatedContent.trendingSong && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Music className="w-4 h-4 text-ai-gradient-start" />
                  <h4 className="font-semibold">Trending Audio</h4>
                </div>
                <p className="bg-background/50 p-4 rounded-lg border border-glass-border">
                  {generatedContent.trendingSong}
                </p>
              </div>
            )}

            {/* Hashtags */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Hash className="w-4 h-4 text-ai-gradient-end" />
                <h4 className="font-semibold">Trending Hashtags</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {generatedContent.hashtags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Pro Tips */}
            <div>
              <h4 className="font-semibold mb-2">Pro Tips for Maximum Reach</h4>
              <ul className="space-y-2">
                {generatedContent.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 bg-background/50 p-3 rounded-lg border border-glass-border">
                    <div className="w-1.5 h-1.5 rounded-full bg-ai-gradient-start mt-2 flex-shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-glass-border">
              <Button variant="platform" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export as PDF
              </Button>
              <Button variant="platform" size="sm">
                <Share className="w-4 h-4 mr-2" />
                Share with Team
              </Button>
              <Button variant="copy" size="sm" onClick={() => copyToClipboard(JSON.stringify(generatedContent, null, 2))}>
                <Copy className="w-4 h-4 mr-2" />
                Copy All
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};