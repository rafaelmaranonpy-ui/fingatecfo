
import React from 'react';
import { ArrowRight, Target, TrendingUp, Globe } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -right-40 top-40 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute -left-20 top-60 w-72 h-72 rounded-full bg-primary/50 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <span>Finance Transformation & Value Creation</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            <span className="text-gradient">Finance Transformation</span>
            <br />
            <span className="text-foreground">&amp; Value Creation Partner</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Supporting PE-backed companies, startups, and scaleups through growth, transition, and transaction phases.
          </p>
          
          <p className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
            From finance transformation and value creation to fundraising and international expansion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow hover-lift"
            >
              Discuss Your Situation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="#services" 
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-background px-8 text-base font-medium text-foreground shadow-sm hover-lift"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
          <div className="glass-panel rounded-xl p-6 animate-in-on-scroll">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Target className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Value Creation Focus</h3>
            <p className="text-muted-foreground text-sm">
              Driving financial outcomes aligned with investor expectations and business objectives.
            </p>
          </div>
          
          <div className="glass-panel rounded-xl p-6 animate-in-on-scroll" style={{animationDelay: '100ms'}}>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Transaction Ready</h3>
            <p className="text-muted-foreground text-sm">
              Finance infrastructure prepared for fundraising, refinancing, or exit processes.
            </p>
          </div>
          
          <div className="glass-panel rounded-xl p-6 animate-in-on-scroll" style={{animationDelay: '200ms'}}>
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">International Scale</h3>
            <p className="text-muted-foreground text-sm">
              Financial operations that scale across geographies and growth stages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
