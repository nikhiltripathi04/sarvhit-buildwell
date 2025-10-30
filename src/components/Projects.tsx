import { ArrowRight, Star, Shield, Users, Award, Building2, Home, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";

const commercialProjects = [
  {
    id: 1,
    image: "/images/projects1.avif",
    title: "Modern Office Complex",
    category: "Commercial",
    description: "Contemporary commercial space design"
  },
  {
    id: 2,
    image: "/images/projects3.avif",
    title: "Corporate Headquarters",
    category: "Commercial",
    description: "Premium office building architecture"
  }
];

const residentialProjects = [
  {
    id: 3,
    image: "/images/projects2.avif",
    title: "Luxury Villa",
    category: "Residential",
    description: "Modern residential architecture"
  },
  {
    id: 4,
    image: "/images/projects4.avif",
    title: "Contemporary House",
    category: "Residential",
    description: "Elegant family home design"
  }
];

const interiorProjects = [
  {
    id: 5,
    image: "/images/projects5.webp",
    title: "Master Bedroom",
    category: "Interior",
    description: "Luxurious interior design"
  },
  {
    id: 6,
    image: "/images/projects6.avif",
    title: "Modern Kitchen",
    category: "Interior",
    description: "Functional and stylish design"
  }
];

const achievements = [
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Recognized for fair and committed deals in real estate"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Grown from 2 to 20+ skilled professionals"
  },
  {
    icon: Building2,
    title: "Market Leader",
    description: "Leading real estate company in NCR"
  }
];

const process = [
  {
    number: "01",
    title: "CONSULTATION & PLANNING",
    description: "Understanding your vision and requirements with detailed site analysis"
  },
  {
    number: "02",
    title: "DESIGN & APPROVAL",
    description: "Creating comprehensive designs and securing necessary permits"
  },
  {
    number: "03",
    title: "FOUNDATION & STRUCTURE",
    description: "Building strong foundations with premium materials"
  },
  {
    number: "04",
    title: "QUALITY CONSTRUCTION",
    description: "Precision construction with modern techniques"
  },
  {
    number: "05",
    title: "FINISHING & HANDOVER",
    description: "Beautiful finishing touches with quality interiors"
  }
];

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="py-32 parallax-bg scroll-blend relative"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(7, 7, 7, 0.7) 0%, rgba(10, 10, 10, 0.85) 50%, rgba(7, 7, 7, 0.7) 100%), url('/src/assets/texture.png')`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-primary/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Introduction */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-5xl md:text-6xl font-extralight text-foreground mb-8">
            Our Work Portfolio
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            At Sarvhit Buildwell Pvt. Ltd., we offer end-to-end real estate and architectural solutions, 
            combining years of industry experience with a commitment to quality and transparency. 
            Our services are designed to deliver real value, ensuring that each client receives 
            expert guidance and personalized support at every step.
          </p>
          <div className="h-1 w-24 bg-primary/30 mx-auto rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-card/40 backdrop-blur-sm rounded-xl p-8 border border-primary/10 group hover:border-primary/20 transition-all duration-300 hover:bg-card/60">
            <Building2 className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-light text-foreground mb-4">Real Estate Consultation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Buying, selling, and managing residential and commercial properties with integrity and market expertise.
            </p>
          </div>
          <div className="bg-card/40 backdrop-blur-sm rounded-xl p-8 border border-primary/10 group hover:border-primary/20 transition-all duration-300 hover:bg-card/60">
            <Home className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-light text-foreground mb-4">Construction & Development</h3>
            <p className="text-muted-foreground leading-relaxed">
              Building thoughtfully designed, high-quality spaces tailored to modern living and business needs.
            </p>
          </div>
          <div className="bg-card/40 backdrop-blur-sm rounded-xl p-8 border border-primary/10 group hover:border-primary/20 transition-all duration-300 hover:bg-card/60">
            <Paintbrush className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-light text-foreground mb-4">Interior Design</h3>
            <p className="text-muted-foreground leading-relaxed">
              Crafting functional, aesthetic spaces with custom design solutions to bring your vision to life.
            </p>
          </div>
        </div>

        {/* Commercial Projects */}
        <div className="mb-32">
          <h3 className="text-3xl font-light text-foreground mb-12 text-center">Commercial Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commercialProjects.map((project) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm text-primary tracking-wider mb-2">{project.category}</p>
                  <h4 className="text-2xl font-light text-foreground mb-2">{project.title}</h4>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Residential Projects */}
        <div className="mb-32">
          <h3 className="text-3xl font-light text-foreground mb-12 text-center">Top-class Residential</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {residentialProjects.map((project) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm text-primary tracking-wider mb-2">{project.category}</p>
                  <h4 className="text-2xl font-light text-foreground mb-2">{project.title}</h4>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interior Design */}
        <div className="mb-32">
          <h3 className="text-3xl font-light text-foreground mb-12 text-center">Interior Design Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interiorProjects.map((project) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm text-primary tracking-wider mb-2">{project.category}</p>
                  <h4 className="text-2xl font-light text-foreground mb-2">{project.title}</h4>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-32">
          <h3 className="text-3xl font-light text-foreground mb-16 text-center">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-sm group-hover:blur-md transition-all duration-300" />
                <div className="relative bg-card/40 backdrop-blur-sm rounded-xl p-6 border border-primary/10 group-hover:border-primary/20 group-hover:bg-card/60 transition-all duration-300">
                  <div className="text-4xl font-light text-primary mb-4">{step.number}</div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-card/40 backdrop-blur-sm rounded-xl p-8 border border-primary/10 text-center group hover:border-primary/20 transition-all duration-300 hover:bg-card/60">
              <achievement.icon className="w-12 h-12 text-primary mx-auto mb-6 group-hover:scale-110 group-hover:text-primary/80 transition-all duration-300" />
              <h4 className="text-xl font-light text-foreground mb-4">{achievement.title}</h4>
              <p className="text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 group">
            VIEW ALL PROJECTS
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;