
import React from 'react';
import { BarChart, Briefcase, TrendingUp, DollarSign, Landmark, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Value Creation Strategy",
      description: "Develop and execute comprehensive value creation plans to maximize portfolio company returns and accelerate growth.",
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: "Operational Finance Excellence",
      description: "Optimize working capital, cash conversion cycles, and financial operations to enhance profitability and efficiency.",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Growth & Acquisition Support",
      description: "Financial modeling and diligence for organic growth initiatives, acquisitions, and portfolio company expansion.",
    },
    {
      icon: <Landmark className="h-6 w-6" />,
      title: "Exit Preparation & Optimization",
      description: "Prepare portfolio companies for successful exits through financial optimization, reporting standardization, and value driver enhancement.",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Performance Monitoring & KPIs",
      description: "Implement robust financial controls, KPI dashboards, and performance tracking systems to drive accountability and results.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Investor Relations & Reporting",
      description: "Streamlined reporting to fund managers with clear value creation metrics, progress tracking, and strategic insights.",
    }
  ];

  return (
    <section id="services" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <span>Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Value Creation Services for PE Portfolio Companies</h2>
          <p className="text-foreground/70 text-lg">
            Specialized CFO services designed to maximize value creation and drive superior returns across your portfolio companies.
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
