// src/pages/HomePage.jsx
// Home page — composes all sections in the order matching the new design.
// Router-ready: swap contents for <Outlet /> when React Router is added.

import React from 'react';
import {
  HeroSection,
  CollectionsSection,
  ProcessSection,
  TestimonialSection,
  FAQSection,
  FeaturesSection,
  CTASection,
  BestProductSection,
} from '../sections';

const HomePage = () => (
  <main id="main-content" tabIndex={-1}>
    <HeroSection />
    <CollectionsSection />
    <ProcessSection />
    <BestProductSection />
    <TestimonialSection />
    <FAQSection />
    <FeaturesSection />
    <CTASection />
  </main>
);

export default HomePage;
