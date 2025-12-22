
import React from 'react';
import { RefreshCw, Landmark, Globe, Users } from 'lucide-react';

export const Services = () => {
  const serviceBlocks = [
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: 'Finance Transformation & Value Creation',
      isPrimary: true,
      items: [
        'Finance diagnostics and transformation roadmaps',
        'KPI frameworks and performance management',
        'FP&A build-out and scenario modeling',
        'Systems, processes, and team professionalization',
      ],
    },
    {
      icon: <Landmark className="h-6 w-6" />,
      title: 'Fundraising & Transaction Support',
      isPrimary: false,
      items: [
        'Fundraising preparation and financial storytelling',
        'Financial modeling and investor materials',
        'Data room and due diligence support',
        'Support for acquisitions, exits, or refinancing',
      ],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Growth & International Expansion',
      isPrimary: false,
      items: [
        'Financial planning for multi-country expansion',
        'Structuring finance operations across geographies',
        'Cash, reporting, and governance for growth',
      ],
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Interim CFO & Executive Finance Leadership',
      isPrimary: false,
      items: [
        'Interim CFO support for PE portfolio companies and scaleups',
        'Board-level reporting and investor communication',
        'Hands-on leadership during growth or transition periods',
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How I Can Help</h2>
          <p className="text-muted-foreground text-lg">
            Structured service offerings designed for PE-backed companies, startups, and scaleups at different stages of growth and transition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {serviceBlocks.map((block, index) => (
            <div 
              key={index}
              className={`rounded-xl p-8 border animate-in-on-scroll ${
                block.isPrimary 
                  ? 'bg-primary/5 border-primary/20 md:col-span-2' 
                  : 'bg-background border-border/50'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  block.isPrimary ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                }`}>
                  {block.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{block.title}</h3>
                  {block.isPrimary && (
                    <span className="text-xs text-primary font-medium">Primary Focus</span>
                  )}
                </div>
              </div>
              <ul className={`space-y-3 ${block.isPrimary ? 'md:grid md:grid-cols-2 md:gap-x-8 md:space-y-0' : ''}`}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
