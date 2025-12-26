
import React from 'react';
import { TrendingUp, BarChart, Target, Briefcase, DollarSign, Users, Settings, Cpu, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Services = () => {
  const serviceCategories = [
    {
      title: "Value Creation Operator",
      subtitle: "Focused on growth, performance, and enterprise value.",
      services: [
        {
          icon: <TrendingUp className="h-6 w-6" />,
          title: "Strategic Financial Planning",
          description: "Long term financial strategies aligned with business goals, growth trajectory, and value creation priorities.",
        },
        {
          icon: <BarChart className="h-6 w-6" />,
          title: "Financial Modeling & Analysis",
          description: "Robust models to assess growth scenarios, unit economics, profitability, and strategic trade offs.",
        },
        {
          icon: <Target className="h-6 w-6" />,
          title: "Value Creation & Performance Management",
          description: "Identification of value drivers, KPI frameworks, and execution plans to accelerate growth and improve margins.",
        },
      ],
    },
    {
      title: "Interim & Fractional CFO",
      subtitle: "Senior financial leadership and execution.",
      services: [
        {
          icon: <Briefcase className="h-6 w-6" />,
          title: "Operational Finance",
          description: "Day to day financial leadership including budgeting, reporting, forecasting, and KPI tracking.",
        },
        {
          icon: <DollarSign className="h-6 w-6" />,
          title: "Cash Flow Optimization",
          description: "Active cash management to optimize liquidity, manage burn rate, and extend runway.",
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: "Board & Investor Relations",
          description: "Clear, decision oriented reporting and communication for boards, investors, and lenders.",
        },
      ],
    },
    {
      title: "Finance Transformation",
      subtitle: "Building scalable finance capabilities for growth.",
      services: [
        {
          icon: <Settings className="h-6 w-6" />,
          title: "Finance Operating Model & Processes",
          description: "Design of scalable finance structures, roles, and processes aligned with the company's growth stage.",
        },
        {
          icon: <Cpu className="h-6 w-6" />,
          title: "Systems, Tools & Automation",
          description: "Selection and implementation of finance systems, dashboards, and automation to improve speed and accuracy.",
        },
        {
          icon: <FileText className="h-6 w-6" />,
          title: "Fundraising & Transaction Readiness",
          description: "Investor ready financials, data rooms, and finance infrastructure to support fundraising, acquisitions, and exits.",
        },
      ],
    },
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
            Tailored finance solutions for scaling companies and PE portfolios
          </p>
        </div>

        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-in-on-scroll">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-lg">{category.subtitle}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {category.services.map((service, index) => (
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
                    <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
