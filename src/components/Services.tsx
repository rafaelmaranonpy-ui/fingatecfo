
import React from 'react';
import { BarChart, Briefcase, TrendingUp, DollarSign, Landmark, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Strategic Financial Planning",
      description: "Long-term financial strategies aligned with your business goals and growth trajectory.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Financial Modeling & Analysis",
      description: "Robust financial models to forecast growth, manage cash flow, and inform strategic decisions.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cash Flow Optimization",
      description: "Strategies to maximize cash efficiency, manage burn rate, and extend runway.",
    },
    {
      icon: <Landmark className="h-6 w-6" />,
      title: "Fundraising Support",
      description: "Preparation of investor-ready financials, pitch decks, and data rooms for funding rounds.",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Operational Finance",
      description: "Day-to-day financial management including budgeting, reporting, and KPI tracking.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Board & Investor Relations",
      description: "Clear financial reporting and presentations for board meetings and investor updates.",
    }
  ];

  return (
    <section id="services" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <span>Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Financial Expertise When You Need It</h2>
          <p className="text-foreground/70 text-lg">
            Flexible CFO services tailored to the unique needs of startups and scaling companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-background rounded-xl p-6 border border-border/50 shadow-soft hover-lift animate-in-on-scroll",
                "group transition-all duration-300"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
