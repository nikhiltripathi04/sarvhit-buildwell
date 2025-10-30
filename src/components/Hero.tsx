import heroImage from "@/assets/hero-bedroom.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent" />
      </div>
      
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <p className="text-sm tracking-[0.3em] text-primary mb-4">
            BUILDING EXCELLENCE
          </p>
          <h1 className="text-7xl md:text-8xl font-extralight tracking-tight text-foreground mb-6 leading-none">
            CRAFTING<br />DREAM SPACES
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Creating beautiful spaces and finding perfect homes with expert advice, bespoke service, and unmatched dedication to quality and customer satisfaction.
          </p>
          <div className="flex gap-4 items-center max-[438px]:flex-col">
            <a href="#projects" className="w-auto max-[438px]:w-full">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 w-full max-w-[420px] mx-auto max-[438px]:px-4">
                EXPLORE PROJECTS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#cta" className="w-auto max-[438px]:w-full">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 w-full max-w-[420px] mx-auto max-[438px]:px-4">
                GET IN TOUCH
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
