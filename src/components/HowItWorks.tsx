import React from 'react';
import { Award, Users, Building2, Paintbrush } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section 
      id="works" 
      className="py-32 parallax-bg scroll-blend relative"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(7, 7, 7, 0.7) 0%, rgba(10, 10, 10, 0.85) 50%, rgba(7, 7, 7, 0.7) 100%), url('/src/assets/texture.png')`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extralight text-foreground mb-4">Our Work Architecture</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We have experts in every field to guide you from beginning to the end of your real estate journey with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-card/40 backdrop-blur-sm rounded-xl p-8 border border-primary/10 hover:border-primary/30 transition-colors duration-300">
            <Award className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Our Awards</h3>
            <p className="text-muted-foreground">Recognized for our fair and committed deals in the real estate industry.</p>
          </div>

          <div className="bg-card/40 backdrop-blur-sm rounded-xl p-8 border border-primary/10 hover:border-primary/30 transition-colors duration-300">
            <Users className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">A Skilled Team</h3>
            <p className="text-muted-foreground">Starting with a team of just 2, the company grew to over 20 employees, all bringing different skills and experience with them.</p>
          </div>

          <div className="bg-card/40 backdrop-blur-sm rounded-xl p-8 border border-primary/10 hover:border-primary/30 transition-colors duration-300">
            <Building2 className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">The Best Agency</h3>
            <p className="text-muted-foreground">Today Sarvhit BuildWell is one of the leading real estate companies in the NCR, with an office in East Delhi (Shakarpur).</p>
          </div>
        </div>

        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-light text-foreground mb-4">Modern Living Room Architecture</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our Design Philosophy: At Sarvhit Buildwell, we believe that thoughtful design transforms spaces and elevates everyday living. Sometimes, the simplest changes—like reupholstering a chair, updating window treatments, or refreshing the bedding—can create an extraordinary impact on the look and feel of your home.
            </p>

            <h4 className="text-lg font-semibold text-foreground mb-2">Comprehensive Interior Solutions</h4>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Whether you are building a new home, planning a major renovation, or looking to enhance specific areas, our end-to-end interior design services guide you through every stage of the process—from concept to completion.
            </p>

            <ul className="text-muted-foreground space-y-2 list-inside list-disc">
              <li>Custom Furniture Design</li>
              <li>Flooring Solutions</li>
              <li>Wallpaper & Fabric Selection</li>
              <li>Paint Consultation & Color Styling</li>
              <li>Tiles & Countertops</li>
              <li>Lighting Design & Fixtures</li>
              <li>Window Treatments & Soft Furnishings</li>
            </ul>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img src="/images/hiw.avif" alt="Modern Living Room" className="w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-light text-foreground mb-4">Personalized, Client-Centric Approach</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Every project at Sarvhit Buildwell is personally managed by one of our experienced designers to ensure your vision is realized with precision and care. We work closely with you to make the most of your space, creating interiors that are not only stylish but also functional and tailored to your lifestyle.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We continuously introduce new trends, innovative solutions, and bespoke designs to help you create a home or workspace that truly reflects your personality.
          </p>
        </div>
{/* client centric approach */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="relative rounded-xl overflow-hidden group">
        <img src="/images/hiw1.webp" alt="Modern Architecture" className="w-full h-[320px] md:h-[280px] object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 pb-8 text-center md:justify-center md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500">
          <h4 className="text-lg font-semibold text-white mb-1">Modern Architecture</h4>
          <p className="text-white/80 text-sm">Contemporary design solutions</p>
        </div>
      </div>
      <div className="relative rounded-xl overflow-hidden group">
        <img src="/images/hiw2.webp" alt="Elegant Interior Design" className="w-full h-[320px] md:h-[280px] object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 pb-8 text-center md:justify-center md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500">
          <h4 className="text-lg font-semibold text-white mb-1">Elegant Interior Design</h4>
          <p className="text-white/80 text-sm">Sophisticated living spaces</p>
        </div>
      </div>
      <div className="relative rounded-xl overflow-hidden group">
        <img src="/images/hiw3.avif" alt="Luxury Bedroom Design" className="w-full h-[320px] md:h-[280px] object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-end p-6 pb-8 text-center md:justify-center md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500">
          <h4 className="text-lg font-semibold text-white mb-1">Luxury Bedroom Design</h4>
          <p className="text-white/80 text-sm">Personalized comfort spaces</p>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default HowItWorks;