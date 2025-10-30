import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/sarvhit-logo.webp";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // toggle when user has scrolled a bit; tweak threshold as needed
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const navClasses = scrolled
    ? "fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    : "absolute top-6 left-0 right-0 z-50";

  const linkColor = scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white";

  return (
    // switch between absolute (overlay) and fixed (on scroll)
    <nav className={navClasses}>
      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between h-16">
          <a href="#"><img src={logo} alt="Sarvhit Buildwell" className="h-12" /> </a>
          

          {/* Right-side: pill button and hamburger */}
          <div className="flex items-center gap-4">
            <a href="#cta" className="hidden sm:block">
              <Button
                variant="ghost"
                className={`inline-flex items-center rounded-full border ${scrolled ? 'border-border bg-background/5' : 'border-white/20 bg-white/5'} text-sm px-4 py-2 ${scrolled ? 'text-muted-foreground' : 'text-white/90'} hover:bg-white/10`}
              >
                LET'S DISCUSS
              </Button>
            </a>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden menu-button p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${scrolled ? 'text-foreground' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? 'text-foreground' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden mobile-menu ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className={`absolute left-0 right-0 top-16 p-4 ${scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-background/90 backdrop-blur-sm'} shadow-lg`}>
            <div className="flex flex-col space-y-4 container mx-auto px-6">
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm tracking-wider py-2 px-4 rounded-lg hover:bg-white/10 transition-colors text-foreground"
              >
                ABOUT
              </a>
              <a
                href="#works"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm tracking-wider py-2 px-4 rounded-lg hover:bg-white/10 transition-colors text-foreground"
              >
                WORKS
              </a>
              <a
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm tracking-wider py-2 px-4 rounded-lg hover:bg-white/10 transition-colors text-foreground"
              >
                PROJECTS
              </a>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm tracking-wider py-2 px-4 rounded-lg hover:bg-white/10 transition-colors text-foreground"
              >
                SERVICES
              </a>
              <a
                href="#cta"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm tracking-wider py-2 px-4 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary text-center"
              >
                LET'S DISCUSS
              </a>
            </div>
          </div>
        </div>

        {/* Desktop nav links: absolute centered inside the container */}
        <div className="pointer-events-none">
          <div className={`absolute left-1/2 ${scrolled ? 'top-1/2 -translate-y-1/2' : 'top-1/2 -translate-y-1/2'} -translate-x-1/2`}>
            <div className="hidden md:flex items-center gap-8 pointer-events-auto">
              <a href="#about" className={`text-sm tracking-wider transition-colors ${linkColor}`}>
                ABOUT
              </a>
              <a href="#works" className={`text-sm tracking-wider transition-colors ${linkColor}`}>
                WORKS
              </a>
              <a href="#projects" className={`text-sm tracking-wider transition-colors ${linkColor}`}>
                PROJECTS
              </a>
              <a href="#services" className={`text-sm tracking-wider transition-colors ${linkColor}`}>
                SERVICES
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
