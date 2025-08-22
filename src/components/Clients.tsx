
import React from 'react';
import { Building, TrendingUp, Home } from 'lucide-react';

export const Clients = () => {
  const clientTypes = [
    {
      title: 'PE Portfolio Companies',
      icon: <Building className="h-10 w-10 text-primary" />,
      description: 'Dedicated value creation support for portfolio companies across all stages - from initial investment through exit optimization.'
    },
    {
      title: 'Private Equity Funds',
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      description: 'Strategic financial leadership and operational excellence initiatives to maximize portfolio company performance and returns.'
    },
    {
      title: 'Growth-Stage Companies',
      icon: <Home className="h-10 w-10 text-primary" />,
      description: 'Scale-ready financial infrastructure and growth acceleration strategies for companies preparing for PE partnership.'
    }
  ];

  return (
    <section id="clients" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <span>Clients</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized in PE Portfolio Company Value Creation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We focus on delivering measurable value creation outcomes for private equity portfolio companies and funds across all investment stages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientTypes.map((client, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow animate-in-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-primary/10 rounded-full">
                  {client.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{client.title}</h3>
                <p className="text-muted-foreground">{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
