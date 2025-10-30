import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/sarvhit-logo.webp";

const Footer = () => {
  return (
    <footer 
      className="relative py-20 border-t border-border overflow-hidden scroll-blend"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(15, 15, 15, 0.95) 0%, rgba(10, 10, 10, 0.98) 50%, rgba(5, 5, 5, 0.99) 100%), url('/src/assets/texture.png')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    >
      {/* Enhanced decorative gradient elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -right-48 top-1/2 w-96 h-96 bg-gradient-to-l from-accent/3 to-transparent rounded-full blur-3xl transform -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6 group">
            <div className="h-14 mb-4 hover:opacity-90 transition-opacity duration-300">
              <img 
                src={logo} 
                alt="Sarvhit Buildwell" 
                className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-sm text-muted-foreground/90 leading-relaxed hover:text-muted-foreground transition-colors duration-300">
              Leading real estate and construction company in Delhi NCR, committed to delivering exceptional quality and customer satisfaction in every project.
            </p>
            
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.facebook.com/sarvhit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-card/40 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:border-primary hover:bg-primary/20 hover:shadow-lg transition-all duration-300 group/social"
              >
                <Facebook className="w-4 h-4 text-muted-foreground group-hover/social:text-primary transition-colors duration-300" />
              </a>
              
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="relative group/section">
            <h4 className="text-sm font-medium tracking-widest text-foreground mb-6 relative inline-block">
              QUICK LINKS
              <span className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-primary to-primary/50 group-hover/section:w-full transition-all duration-300" />
            </h4>
            <ul className="space-y-3 text-sm mt-6">
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#cta" 
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="relative group/section">
            <h4 className="text-sm font-medium tracking-widest text-foreground mb-6 relative inline-block">
              SERVICES
              <span className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-primary to-primary/50 group-hover/section:w-full transition-all duration-300" />
            </h4>
            <ul className="space-y-3 text-sm mt-6">
              <li>
                <a 
                  href="#services" 
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Real Estate Development
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Interior Design
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Construction Management
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Architectural Planning
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block"
                >
                  Renovation Services
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="relative group/section">
            <h4 className="text-sm font-medium tracking-widest text-foreground mb-6 relative inline-block">
              CONTACT INFO
              <span className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-primary to-primary/50 group-hover/section:w-full transition-all duration-300" />
            </h4>
            <ul className="space-y-3 text-sm mt-6">
              <li className="text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer flex items-start gap-2 group/contact">
                <span className="mt-1 inline-block w-1 h-1 bg-primary rounded-full opacity-0 group-hover/contact:opacity-100 transition-opacity duration-300" />
                <span className="group-hover/contact:translate-x-1 transition-transform duration-300">A-29, Shakarpur, Delhi - 110092</span>
              </li>
              <li>
                <a 
                  href="tel:+919810912963" 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group/contact"
                >
                  <span className="inline-block w-1 h-1 bg-primary rounded-full opacity-0 group-hover/contact:opacity-100 transition-opacity duration-300" />
                  <span className="group-hover/contact:translate-x-1 transition-transform duration-300">+91 9810912963</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:sarvhitb@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group/contact"
                >
                  <span className="inline-block w-1 h-1 bg-primary rounded-full opacity-0 group-hover/contact:opacity-100 transition-opacity duration-300" />
                  <span className="group-hover/contact:translate-x-1 transition-transform duration-300">sarvhitb@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider with gradient */}
        <div className="py-8 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground/70 hover:text-muted-foreground transition-colors duration-300">
            © 2025 Sarvhit Buildwell Pvt. Ltd. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-4 text-xs text-muted-foreground/60">
            <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;