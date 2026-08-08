// src/App.jsx
// Root application shell with React Router
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TopBanner, Navbar, Footer } from './components/layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CollectionsPage from './pages/CollectionsPage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';

const App = () => (
  <BrowserRouter>
    <div className="antialiased text-[var(--color-text-dark)]">
      {/* Skip-to-content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] bg-white text-[var(--color-accent)] px-4 py-2 font-semibold"
      >
        Skip to main content
      </a>

      <TopBanner />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>

      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
