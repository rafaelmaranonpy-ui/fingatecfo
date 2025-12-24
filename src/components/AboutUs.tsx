
import React from 'react';
import { Building, Briefcase, Users, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <span>About Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
          <p className="text-foreground/70 text-lg">
            Fingate provides strategic financial leadership to help startups and scaling companies
            unlock their growth potential and navigate financial challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in-on-scroll">
            <div className="glass-panel rounded-2xl p-8 md:p-12 relative z-10">
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg mb-8">
                At Fingate, we're committed to providing strategic financial leadership that propels companies
                forward. We bridge the gap between where you are and where you want to be, translating financial
                complexity into clear, actionable strategies for growth.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Strategic Financial Leadership</h4>
                    <p className="text-foreground/70">
                      We provide CFO-level expertise with the flexibility you need, helping you make informed
                      financial decisions.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Growth Focused</h4>
                    <p className="text-foreground/70">
                      Our strategies are designed to unlock financial growth and help your business scale efficiently.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Trusted Partners</h4>
                    <p className="text-foreground/70">
                      We work as an extension of your team, aligning financial strategies with your business goals.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
          <div className="animate-in-on-scroll" style={{animationDelay: '0.2s'}}>
            <div className="glass-panel rounded-2xl p-8 md:p-12 relative z-10">
              <h3 className="text-2xl font-bold mb-6">Meet Our Founder</h3>
              
              <div className="flex flex-col items-center md:flex-row md:items-start gap-6 mb-8">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/10 flex-shrink-0">
                  <img 
                    src="/lovable-uploads/88e3a3ee-fc2a-4c6e-be3e-3e11d63f288b.png" 
                    alt="Rafael Marañón" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex flex-col text-center md:text-left md:pt-1">
                  <h4 className="text-xl font-semibold mb-2">Rafael Marañón, CFA, CAIA</h4>
                  
                  <a 
                    href="https://www.linkedin.com/in/rafaelmpdy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline justify-center md:justify-start"
                  >
                    Connect on LinkedIn
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              
              <div>
                <p className="text-lg mb-4">
                  Rafael brings extensive experience in financial leadership, guiding startups, scaleups, and portfolio companies backed by private equity and venture capital. His expertise spans the full investment lifecycle — from accelerating early-stage growth to driving operational value creation, leading buyouts and integrations, and preparing businesses for successful exits.
                </p>
                
                <p className="text-lg">
                  He combines strong capabilities in financial modeling, strategic planning, fundraising, and operational finance with a hands-on approach to execution. A seasoned co-founder and charterholder of both the CFA and CAIA, Rafael bridges investor expectations with operational realities, aligning financial strategy to create long-term value across portfolio companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
