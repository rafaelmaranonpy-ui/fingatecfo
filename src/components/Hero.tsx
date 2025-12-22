
import React from 'react';
import { ArrowRight, TrendingUp, BarChart, PieChart } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -right-40 top-40 w-80 h-80 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -left-20 top-80 w-60 h-60 rounded-full bg-blue-400/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
              <span>Fractional & Interim CFO Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Fingate</span> <br />
              Unlock Financial Growth
            </h1>
            
            <p className="text-lg text-foreground/80 mb-8 max-w-lg">
              Strategic CFO services for PE and VC portfolio companies. 
              Drive value creation, optimize financial performance, and accelerate growth initiatives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-primary-foreground shadow hover-lift"
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#services" 
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 text-base font-medium text-foreground shadow-sm hover-lift"
              >
                View Services
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="relative z-0 ml-6">
              {/* Abstract Financial Elements */}
              <div className="glass-panel p-8 rounded-xl max-w-md shadow-medium animate-float">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold">Financial Growth</h3>
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div className="h-40 bg-gradient-to-r from-primary/10 to-blue-400/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="h-20 w-20 text-primary/60" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted p-3 rounded-md">
                    <p className="text-xs text-muted-foreground mb-1">Revenue</p>
                    <p className="font-medium">+23.5%</p>
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <p className="text-xs text-muted-foreground mb-1">Burn Rate</p>
                    <p className="font-medium">-17.8%</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-panel p-6 rounded-xl max-w-xs absolute -bottom-10 -left-20 shadow-medium animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <PieChart className="h-4 w-4 text-primary" />
                  </div>
                  <h4 className="font-medium text-sm">Financial Strategy</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Funding Readiness</span>
                    <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Cash Optimization</span>
                    <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{width: '72%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
