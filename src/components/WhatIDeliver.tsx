
import React from 'react';
import { Eye, Scale, TrendingDown, BarChart3, FileCheck } from 'lucide-react';

export const WhatIDeliver = () => {
  const outcomes = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: 'Investor-Grade Visibility',
      description: 'Financial reporting and dashboards that meet investor and board expectations.',
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: 'Scalable Finance Functions',
      description: 'Systems and processes that grow with your business and geographic footprint.',
    },
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: 'Cash Discipline',
      description: 'Forecasting and controls that optimize cash position and extend runway.',
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Performance Metrics',
      description: 'KPIs and analytics aligned with value drivers and strategic priorities.',
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: 'Transaction Readiness',
      description: 'Finance infrastructure prepared for investor scrutiny and due diligence.',
    },
  ];

  return (
    <section id="what-i-deliver" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in-on-scroll">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <span>Outcomes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What I Deliver</h2>
          <p className="text-muted-foreground text-lg">
            Focused on outcomes that matter to investors, boards, and management teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {outcomes.map((outcome, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl border border-border/50 bg-accent/20 hover:bg-accent/40 transition-all animate-in-on-scroll"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {outcome.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{outcome.title}</h3>
              <p className="text-muted-foreground text-sm">{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
