
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { WhoIWorkWith } from '@/components/WhoIWorkWith';
import { WhenToEngage } from '@/components/WhenToEngage';
import { WhatIDeliver } from '@/components/WhatIDeliver';
import { Services } from '@/components/Services';
import { HowIWork } from '@/components/HowIWork';
import { WhyWorkWithMe } from '@/components/WhyWorkWithMe';
import { AboutUs } from '@/components/AboutUs';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <WhoIWorkWith />
      <WhenToEngage />
      <WhatIDeliver />
      <Services />
      <HowIWork />
      <WhyWorkWithMe />
      <AboutUs />
      <Contact />
    </Layout>
  );
};

export default Index;
