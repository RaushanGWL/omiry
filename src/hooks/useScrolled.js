// src/hooks/useScrolled.js
// Returns true when the page has scrolled past a threshold (default 60px)

import { useState, useEffect } from 'react';

const useScrolled = (threshold = 60) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
};

export default useScrolled;
