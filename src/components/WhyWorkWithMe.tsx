
import React from 'react';
import { Target, Zap, Compass, ArrowLeftRight } from 'lucide-react';

export const WhyWorkWithMe = () => {
  const differentiators = [
    {
      icon: <Target className="h-5 w-5" />,
      title: 'Investor Mindset',
      description: 'Understanding what investors look for, with hands-on execution capability.',
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: 'Value Creation Focus',
      description: 'Driving financial outcomes, not just maintaining financial hygiene.',
    },
    {
      icon: <Compass className="h-5 w-5" />,
      title: 'Comfortable in Ambiguity',
      description: 'Effective in fast-moving environments where clarity must be created.',
    },
    {
      icon: <ArrowLeftRight className="h-5 w-5" />,
      title: 'Strategy to Execution',
      description: 'Bridging high-level strategy with detailed operational implementation.',
    },
  ];

  return (
    <section id="why-work-with-me" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="animate-in-on-scroll">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <span>Differentiation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work With Me</h2>
            <p className="text-muted-foreground text-lg">
              Not a generic interim CFO profile. A finance partner who understands value creation in growth and transition contexts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in-on-scroll" style={{animationDelay: '150ms'}}>
            {differentiators.map((item, index) => (
              <div 
                key={index}
                className="p-5 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
