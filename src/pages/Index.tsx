
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Clients } from '@/components/Clients';
import { AboutUs } from '@/components/AboutUs';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Clients />
      <AboutUs />
      <Contact />
    </Layout>
  );
};

export default Index;
