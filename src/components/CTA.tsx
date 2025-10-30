import ctaBg from "@/assets/cta-bg.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// Initialize EmailJS (do this once in your app, preferably in main.tsx or App.tsx)
emailjs.init("FK7JCYaUHr2Jshxfk");

const CTA = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "nikhiltr04",
        "template_3q4jiwq",
        formRef.current
      );
      
      setSubmitStatus("success");
      formRef.current.reset();
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Email error:", error);
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <section 
      id="cta" 
      className="relative py-32 overflow-hidden parallax-bg scroll-blend"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(7, 7, 7, 0.7) 0%, rgba(10, 10, 10, 0.85) 50%, rgba(7, 7, 7, 0.7) 100%), url('${ctaBg}')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extralight text-foreground mb-6">
            Have a Project<br />in Mind?
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's collaborate to create your dream space. Share your vision with us and 
            we'll bring it to life.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center animate-pulse">
              ✓ Thank you! We've received your project details. We'll get back to you soon!
            </div>
          )}
          
          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
              ✗ Something went wrong. Please try again.
            </div>
          )}

          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                name="from_name"
                placeholder="Your Name" 
                className="bg-card/40 backdrop-blur-sm border-border focus:border-primary"
                required
              />
              <Input 
                name="from_email"
                type="email"
                placeholder="Email Address" 
                className="bg-card/40 backdrop-blur-sm border-border focus:border-primary"
                required
              />
            </div>
            <Input 
              name="project_type"
              placeholder="Project Type" 
              className="bg-card/40 backdrop-blur-sm border-border focus:border-primary"
              required
            />
            <Textarea 
              name="message"
              placeholder="Tell us about your project..."
              rows={6}
              className="bg-card/40 backdrop-blur-sm border-border focus:border-primary resize-none"
              required
            />
            <div className="text-center">
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-base disabled:opacity-50"
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT PROJECT"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;