// src/pages/AboutPage.jsx
// Pixel-matched to the provided design mockup, modularized version
import React from 'react';
import SEO from '../components/SEO';

import {
  AboutHeroSection,
  OurStorySection,
  CraftsmanshipSection,
  AboutFeaturesSection,
  FounderMessageSection,
  GalleryStripSection,
  AboutTestimonialSection,
  AboutCTASection
} from '../sections/about';

const AboutPage = () => {
  return (
    <main id="main-content" tabIndex={-1}>
      <SEO pageKey="about" />
      <AboutHeroSection />
      <OurStorySection />
      <CraftsmanshipSection />
      <AboutFeaturesSection />
      <FounderMessageSection />
      <GalleryStripSection />
      <AboutTestimonialSection />
      <AboutCTASection />
    </main>
  );
};

export default AboutPage;
