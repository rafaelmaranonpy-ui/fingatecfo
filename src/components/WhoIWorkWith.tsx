
import React from 'react';
import { Building2, Briefcase, Rocket } from 'lucide-react';

export const WhoIWorkWith = () => {
  const clients = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Private Equity & Growth Equity Funds',
      description: 'Supporting portfolio value creation, financial transformation, and transaction readiness across the investment lifecycle.',
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Portfolio Company Leadership',
      description: 'Working alongside CEOs and management teams to build investor-grade finance functions and drive performance.',
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Founders & Scaleup Leaders',
      description: 'Preparing high-growth companies for fundraising, international expansion, and operational scale.',
    },
  ];

  return (
    <section id="who-i-work-with" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <span>Clients</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Who I Work With</h2>
          <p className="text-muted-foreground text-lg">
            Selective engagements with investors and operators who value financial precision and strategic clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-xl border border-border/50 bg-accent/30 hover:bg-accent/50 transition-colors animate-in-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                {client.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{client.title}</h3>
              <p className="text-muted-foreground">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
