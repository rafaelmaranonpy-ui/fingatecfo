
import React from 'react';
import { Building, TrendingUp, Home } from 'lucide-react';

export const Clients = () => {
  const clientTypes = [
    {
      title: 'Private Equity Funds',
      icon: <Building className="h-10 w-10 text-primary" />,
      description: 'Financial diligence, portfolio company support, and value creation strategies for private equity firms.'
    },
    {
      title: 'Startups & Scaleups',
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      description: 'Strategic financial guidance, fundraising support, and growth planning for early and growth-stage companies.'
    },
    {
      title: 'Family Offices',
      icon: <Home className="h-10 w-10 text-primary" />,
      description: 'Investment analysis, wealth preservation strategies, and financial oversight for family offices.'
    }
  ];

  return (
    <section id="clients" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide tailored financial leadership to a diverse range of clients across different sectors and growth stages.
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
