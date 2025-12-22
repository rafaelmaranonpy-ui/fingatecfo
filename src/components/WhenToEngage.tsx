
import React from 'react';
import { RefreshCw, Target, TrendingUp, Settings, Users } from 'lucide-react';

export const WhenToEngage = () => {
  const scenarios = [
    {
      icon: <RefreshCw className="h-5 w-5" />,
      title: 'Post-Investment Transformation',
      description: 'Finance function redesign following acquisition, buyout, or significant investment.',
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: 'Transaction Preparation',
      description: 'Getting finance ready for fundraising, refinancing, or exit processes.',
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: 'Rapid Growth Phase',
      description: 'Scaling operations into new geographies or through significant expansion.',
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: 'Finance Professionalization',
      description: 'Building scalable reporting, governance, and financial infrastructure.',
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: 'Leadership Transition',
      description: 'Interim finance leadership during CFO search or organizational change.',
    },
  ];

  return (
    <section id="when-to-engage" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in-on-scroll">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <span>When to Engage</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Trigger Points for Engagement</h2>
            <p className="text-muted-foreground text-lg mb-8">
              I work with companies at critical inflection points where financial leadership can materially impact outcomes.
            </p>
          </div>

          <div className="space-y-4 animate-in-on-scroll" style={{animationDelay: '150ms'}}>
            {scenarios.map((scenario, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  {scenario.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{scenario.title}</h3>
                  <p className="text-muted-foreground text-sm">{scenario.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
