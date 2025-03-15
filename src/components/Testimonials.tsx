
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with this fractional CFO transformed our financial strategy. We gained clarity on our runway and secured our Series A with confidence.",
      name: "Sarah Johnson",
      title: "CEO, TechStartup Inc.",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
    {
      quote: "As a founder focused on product, I needed someone to own our financial strategy. Our fractional CFO delivered beyond expectations, optimizing our cash flow and preparing us for growth.",
      name: "Michael Chen",
      title: "Founder, GrowthScale",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      quote: "The strategic insight and financial rigor brought to our company was exactly what we needed. Our board is impressed with the quality of financial reporting and forecasting.",
      name: "Alex Rivera",
      title: "COO, LaunchPad",
      avatar: "https://i.pravatar.cc/150?img=20"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Clients Say</h2>
          <p className="text-foreground/70 text-lg">
            Hear from founders and executives who've transformed their financial operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative animate-in-on-scroll">
            <div className="absolute -top-10 left-0 text-primary/10">
              <Quote className="h-32 w-32" />
            </div>
            
            <div className="glass-panel rounded-2xl p-8 md:p-12 relative z-10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={cn(
                    "transition-opacity duration-500 absolute inset-0 p-8 md:p-12",
                    activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
                  )}
                >
                  <p className="text-xl md:text-2xl font-medium italic mb-8">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-muted-foreground text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Static version for initial render */}
              <div className="opacity-0 pointer-events-none">
                <p className="text-xl md:text-2xl font-medium italic mb-8">{testimonials[0].quote}</p>
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonials[0].avatar} 
                      alt={testimonials[0].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonials[0].name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonials[0].title}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-3">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-border bg-background/80 hover:bg-primary/10 text-foreground transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-300",
                      activeIndex === index ? "bg-primary w-6" : "bg-muted"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-border bg-background/80 hover:bg-primary/10 text-foreground transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
