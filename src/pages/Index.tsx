import { Hero } from "@/components/Hero";
import { ContentGenerator } from "@/components/ContentGenerator";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ContentGenerator />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
