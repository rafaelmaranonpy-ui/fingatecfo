
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { AboutUs } from '@/components/AboutUs';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <AboutUs />
    </Layout>
  );
};

export default Index;
