
import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <footer className="bg-accent py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Unlock Financial Growth
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/rafaelmpdy/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@fingatecfo.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-4">Clients</h4>
            <ul className="space-y-2">
              <li>
                {isHomePage ? (
                  <a href="#clients" className="text-muted-foreground hover:text-primary transition-colors">
                    Private Equity Funds
                  </a>
                ) : (
                  <Link to="/#clients" className="text-muted-foreground hover:text-primary transition-colors">
                    Private Equity Funds
                  </Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <a href="#clients" className="text-muted-foreground hover:text-primary transition-colors">
                    Startups & Scaleups
                  </a>
                ) : (
                  <Link to="/#clients" className="text-muted-foreground hover:text-primary transition-colors">
                    Startups & Scaleups
                  </Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <a href="#clients" className="text-muted-foreground hover:text-primary transition-colors">
                    Family Offices
                  </a>
                ) : (
                  <Link to="/#clients" className="text-muted-foreground hover:text-primary transition-colors">
                    Family Offices
                  </Link>
                )}
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                {isHomePage ? (
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                ) : (
                  <Link to="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    Our Services
                  </a>
                ) : (
                  <Link to="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                    Our Services
                  </Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                ) : (
                  <Link to="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                )}
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} Fingate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
