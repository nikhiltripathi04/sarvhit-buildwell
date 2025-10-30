import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

// const About = () => {
//   return (
//     <section id="about" className="py-32 bg-texture-dark relative">
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center backdrop-blur-sm bg-black/50 p-12 rounded-lg">
//           <div>
//             <p className="text-sm tracking-[0.3em] text-primary mb-4">WHO WE ARE</p>
//             <h2 className="text-5xl md:text-6xl font-extralight text-foreground mb-8 leading-tight">
//               Crafting Exceptional Spaces
//             </h2>
//             <p className="text-muted-foreground leading-relaxed mb-6">
//              Sarvhit Buildwell Pvt. Ltd. delivers integrated real estate, construction, and interior design services that transform client visions into reality. Established in 2004 by founding directors Anil Gupta and Sunil Gupta, we have evolved from a modest investment initiative to a comprehensive development enterprise.
//             </p>
//             <p className="text-muted-foreground leading-relaxed mb-8">
//               With over two decades of industry experience, we specialize in creating exceptional spaces through strategic property transactions, innovative construction methodologies, and sophisticated design solutions. Our expertise encompasses the complete real estate lifecycle, providing clients with streamlined project management and unified service delivery.
//             </p>
//             <p className="text-muted-foreground leading-relaxed mb-8">
//               Formally incorporated as Sarvhit Buildwell Pvt. Ltd. in 2009, we have established ourselves as a trusted name in East Delhi's real estate market, with particular expertise in the Shakarpur region. Our integrated approach eliminates the complexity of managing multiple vendors while ensuring superior quality and client satisfaction.
//             </p>
//             <div className="grid grid-cols-2 gap-8">
//               <div>
//                 <div className="text-4xl font-light text-primary mb-2">500+</div>
//                 <div className="text-sm text-muted-foreground tracking-wide">PROJECTS COMPLETED</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-light text-primary mb-2">20+</div>
//                 <div className="text-sm text-muted-foreground tracking-wide">EXPERT TEAMS</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-light text-primary mb-2">20+</div>
//                 <div className="text-sm text-muted-foreground tracking-wide">YEARS EXPERIENCE</div>
//               </div>
//               <div>
//                 <div className="text-4xl font-light text-primary mb-2">98%</div>
//                 <div className="text-sm text-muted-foreground tracking-wide">CLIENT SATISFACTION</div>
//               </div>
//             </div>
//           </div>
          
//           <div className="grid grid-cols-2 gap-4">
//             <img 
//               src={about1} 
//               alt="Modern office interior" 
//               className="w-full h-80 object-cover rounded"
//             />
//             <img 
//               src={about2} 
//               alt="Contemporary living room" 
//               className="w-full h-80 object-cover rounded mt-12"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

const About = () => {
  return (
    <section 
      id="about" 
      className="py-32 bg-texture-dark parallax-bg scroll-blend relative"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(7, 7, 7, 0.7) 0%, rgba(10, 10, 10, 0.85) 50%, rgba(7, 7, 7, 0.7) 100%), url('/src/assets/texture.png')`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] text-primary mb-4">WHO WE ARE</p>
            <h2 className="text-5xl md:text-6xl font-extralight text-foreground mb-8 leading-tight">
              Crafting Exceptional Spaces
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sarvhit Buildwell Pvt. Ltd. delivers integrated real estate, construction, and interior design services that transform client visions into reality. Established in 2004 by founding directors Anil Gupta and Sunil Gupta, we have evolved from a modest investment initiative to a comprehensive development enterprise.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With over two decades of industry experience, we specialize in creating exceptional spaces through strategic property transactions, innovative construction methodologies, and sophisticated design solutions. Our expertise encompasses the complete real estate lifecycle, providing clients with streamlined project management and unified service delivery.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Formally incorporated as Sarvhit Buildwell Pvt. Ltd. in 2009, we have established ourselves as a trusted name in East Delhi's real estate market, with particular expertise in the Shakarpur region. Our integrated approach eliminates the complexity of managing multiple vendors while ensuring superior quality and client satisfaction.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-light text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground tracking-wide">PROJECTS COMPLETED</div>
              </div>
              <div>
                <div className="text-4xl font-light text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground tracking-wide">EXPERT TEAMS</div>
              </div>
              <div>
                <div className="text-4xl font-light text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground tracking-wide">YEARS EXPERIENCE</div>
              </div>
              <div>
                <div className="text-4xl font-light text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground tracking-wide">CLIENT SATISFACTION</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={about1} 
              alt="Modern office interior" 
              className="w-full h-80 object-cover rounded shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <img 
              src={about2} 
              alt="Contemporary living room" 
              className="w-full h-80 object-cover rounded mt-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;