import { Card, CardContent } from "@/components/ui/card";
import { Home, Building2, Palette, FileCheck, Check, Crown, Star, Shield, Clock } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "COMMERCIAL DEVELOPMENT",
    description: "Comprehensive commercial property development services including offices, retail spaces, and mixed-use developments with strategic planning and execution.",
    highlights: ["Premium Office Spaces", "Retail Complexes", "Mixed-use Development"]
  },
  {
    icon: Home,
    title: "RESIDENTIAL SOLUTIONS",
    description: "End-to-end residential property services from luxury housing projects to affordable housing developments with modern amenities and sustainable design.",
    highlights: ["Luxury Apartments", "Premium Villas", "Smart Homes"]
  },
  {
    icon: Palette,
    title: "INTERIOR ARCHITECTURE",
    description: "Professional interior design and space planning services that blend functionality with aesthetic excellence for residential and commercial spaces.",
    highlights: ["Bespoke Design", "Space Planning", "Luxury Finishes"]
  },
  {
    icon: Clock,
    title: "CONSTRUCTION MANAGEMENT",
    description: "Full-service construction management with quality assurance, timeline optimization, and cost-effective project delivery across all construction phases.",
    highlights: ["Quality Control", "Timeline Mastery", "Cost Optimization"]
  }
];

const coreValues = [
  { icon: Crown, text: "EXCELLENCE" },
  { icon: Star, text: "INNOVATION" },
  { icon: Shield, text: "INTEGRITY" }
];

const Services = () => {
  return (
    <section 
      id="services" 
      className="py-32 parallax-bg scroll-blend relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(7, 7, 7, 0.7) 0%, rgba(10, 10, 10, 0.85) 50%, rgba(7, 7, 7, 0.7) 100%), url('/src/assets/texture.png')`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-primary/20" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border border-primary/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-sm tracking-[0.3em] text-primary mb-4">PROFESSIONAL SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-extralight text-foreground mb-8">
            Comprehensive Real Estate Development
            <br />& Construction Excellence
          </h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full" />
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-primary/5 rounded-xl transform transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/10" />
              <div className="relative bg-card/40 backdrop-blur-sm rounded-xl p-8 border border-primary/10 hover:border-primary/20 transition-all duration-300 group-hover:bg-card/60">
                <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-primary mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-base mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-foreground/80 hover:text-foreground transition-colors">
                      <Check className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {coreValues.map((value, index) => (
            <div key={index} className="bg-card/40 backdrop-blur-sm rounded-xl p-8 border border-primary/10 text-center transform hover:scale-105 transition-all duration-300 group hover:border-primary/20 hover:bg-card/60">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground tracking-wider">{value.text}</h4>
            </div>
          ))}
        </div>

        {/* Strategic Partnership */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl" />
          <div className="relative bg-card/40 backdrop-blur-sm rounded-xl p-12 border border-primary/10 hover:border-primary/20 transition-all duration-300 group hover:bg-card/60">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-light text-foreground mb-6">Strategic Partnership Approach</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Sarvhit Buildwell, we believe that expert consultation and bespoke service delivery enables us to build enduring partnerships with our clients. Our commitment goes beyond transactions—we are passionate about delivering an exceptional customer experience at every touchpoint.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center hover:text-primary transition-colors duration-300">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span className="text-foreground">Expert Consultation</span>
                </div>
                <div className="flex items-center hover:text-primary transition-colors duration-300">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span className="text-foreground">Bespoke Solutions</span>
                </div>
                <div className="flex items-center hover:text-primary transition-colors duration-300">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span className="text-foreground">Enduring Partnerships</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Commitment Section */}
        <div className="mb-32 px-8 py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 rounded-2xl pointer-events-none" />
          <div className="relative text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-light text-foreground mb-6">Our Corporate Commitment</h3>
            <p className="text-xl text-primary/90 font-light mb-12">
              Excellence in Service Delivery & Sustainable Development
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card/40 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300 group hover:bg-card/60 hover:scale-105">
                <Shield className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-foreground/90">Quality Assurance</p>
              </div>
              <div className="bg-card/40 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300 group hover:bg-card/60 hover:scale-105">
                <Star className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-foreground/90">Service Excellence</p>
              </div>
              <div className="bg-card/40 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/20 transition-all duration-300 group hover:bg-card/60 hover:scale-105">
                <Crown className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-foreground/90">Premium Standards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interior Design Excellence Section */}
        <div className="relative rounded-2xl overflow-hidden mb-32 shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            <div className="p-12">
              <h3 className="text-2xl font-light text-foreground mb-8">
                Professional Interior Design Excellence
              </h3>
              <div className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed hover:text-foreground/90 transition-colors duration-300">
                  We believe that expert guidance and personalized solutions are the foundation of long-lasting and trusted partnerships with our clients. Our commitment goes beyond transactions—we are passionate about delivering an exceptional customer experience at every touchpoint.
                </p>
                <p className="leading-relaxed hover:text-foreground/90 transition-colors duration-300">
                  Whether you're buying, selling, constructing, or designing a property, our highly qualified and dedicated team is here to support you at every stage. At Sarvhit Buildwell, we tailor our services to meet your unique requirements, ensuring a seamless and rewarding real estate journey.
                </p>
                <p className="leading-relaxed hover:text-foreground/90 transition-colors duration-300">
                  As a distinguished leader in the real estate and interior design sector, Sarvhit BuildWell leverages its market position to create meaningful impact while delivering substantial value and exceptional service to our valued clients.
                </p>
              </div>
            </div>
            <div className="lg:h-[600px] relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent z-10" />
              <img 
                src="/images/services1.webp" 
                alt="Luxury Interior Design" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Premium Residential Design Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative group overflow-hidden rounded-xl col-span-full lg:col-span-2 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img 
              src="/images/services2.jpg" 
              alt="Premium Living Space"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="text-2xl font-light text-foreground mb-3">
                Premium Residential Interior Design
              </h3>
              <p className="text-lg text-primary/90">
                Contemporary Interior Design Solutions
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img 
              src="/images/services3.avif" 
              alt="Modern Living Space"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-lg text-primary/90">Living Space Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;