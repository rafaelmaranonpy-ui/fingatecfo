
import React from 'react';
import { ExternalLink, Building2, Globe, BarChart3 } from 'lucide-react';

export const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="animate-in-on-scroll">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <span>About</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience & Credibility</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">PE & VC-Backed Environments</h3>
                  <p className="text-muted-foreground text-sm">
                    Extensive work across private equity and venture-backed portfolio companies at various stages.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">High-Growth Contexts</h3>
                  <p className="text-muted-foreground text-sm">
                    Repeated engagements supporting companies through rapid expansion and geographic scale.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Investor-Management Bridge</h3>
                  <p className="text-muted-foreground text-sm">
                    Ability to operate effectively between founders, CEOs, boards, and investors.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-in-on-scroll" style={{animationDelay: '150ms'}}>
            <div className="glass-panel rounded-2xl p-8 md:p-10">
              <div className="flex flex-col items-center md:items-start md:flex-row gap-6 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/10 flex-shrink-0">
                  <img 
                    src="/lovable-uploads/88e3a3ee-fc2a-4c6e-be3e-3e11d63f288b.png" 
                    alt="Rafael Marañón" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold">Rafael Marañón</h3>
                  <p className="text-primary text-sm mb-2">CFA, CAIA</p>
                  <a 
                    href="https://www.linkedin.com/in/rafaelmpdy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    LinkedIn Profile
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">
                Extensive experience in financial leadership across PE-backed and venture-backed environments. 
                Track record spanning the full investment lifecycle — from early-stage growth acceleration 
                to operational value creation, M&A integration, and exit preparation.
              </p>
              
              <p className="text-muted-foreground">
                Combines strategic planning, financial modeling, and operational finance expertise with 
                a hands-on approach. Bridges investor expectations with operational realities to drive 
                sustainable value creation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
