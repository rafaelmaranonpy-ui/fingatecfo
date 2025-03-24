
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { AboutUs } from '@/components/AboutUs';
import { Clients } from '@/components/Clients';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <AboutUs />
      <Clients />
      <Contact />
    </Layout>
  );
};

export default Index;
