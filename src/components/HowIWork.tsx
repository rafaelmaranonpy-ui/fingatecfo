
import React from 'react';
import { Search, Wrench, CheckCircle2 } from 'lucide-react';

export const HowIWork = () => {
  const steps = [
    {
      icon: <Search className="h-6 w-6" />,
      title: 'Rapid Assessment',
      description: 'Quick diagnostic to understand the current state, identify priorities, and define the path forward.',
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: 'Hands-On Execution',
      description: 'Working alongside management to implement changes, build capabilities, and deliver results.',
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: 'Sustainable Handover',
      description: 'Leaving behind robust processes, trained teams, and documentation for long-term success.',
    },
  ];

  return (
    <section id="how-i-work" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <span>Approach</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How I Work</h2>
          <p className="text-muted-foreground text-lg">
            Speed, clarity, and accountability. Focused on delivering impact, not extending engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative text-center animate-in-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-border" />
              )}
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 relative z-10">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold z-20">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
