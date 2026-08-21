import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for authentication logic
    alert(isLogin ? 'Signing in...' : 'Creating account...');
  };

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[var(--color-brand-light)] flex flex-col justify-center items-center py-16 md:py-24">
      <div className="w-full max-w-md bg-white p-8 md:p-12 border border-[var(--color-border)] shadow-sm">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-[2rem] text-[var(--color-brand-dark)] mb-3">
            {isLogin ? 'Welcome Back' : 'Create an Account'}
          </h1>
          <p className="text-[13px] font-light text-[var(--color-text-body)]">
            {isLogin 
              ? 'Sign in to access your orders and saved items.' 
              : 'Join us to enjoy a personalized shopping experience.'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--color-brand-dark)] mb-2">
                Full Name
              </label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full border border-[var(--color-border)] bg-[#FDFCFB] px-4 py-3 text-[13px] text-[var(--color-brand-dark)] focus:outline-none focus:border-[var(--color-brand-dark)] focus:ring-1 focus:ring-[var(--color-brand-dark)] transition-all"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--color-brand-dark)] mb-2">
              Email Address
            </label>
            <input 
              type="email" 
              id="email" 
              required
              className="w-full border border-[var(--color-border)] bg-[#FDFCFB] px-4 py-3 text-[13px] text-[var(--color-brand-dark)] focus:outline-none focus:border-[var(--color-brand-dark)] focus:ring-1 focus:ring-[var(--color-brand-dark)] transition-all"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="password" className="block text-[9px] font-bold uppercase tracking-[0.15em] text-[var(--color-brand-dark)]">
                Password
              </label>
              {isLogin && (
                <a href="#forgot" className="text-[9px] uppercase tracking-[0.1em] text-[var(--color-text-muted)] hover:text-[var(--color-brand-dark)] transition-colors">
                  Forgot Password?
                </a>
              )}
            </div>
            <input 
              type="password" 
              id="password" 
              required
              className="w-full border border-[var(--color-border)] bg-[#FDFCFB] px-4 py-3 text-[13px] text-[var(--color-brand-dark)] focus:outline-none focus:border-[var(--color-brand-dark)] focus:ring-1 focus:ring-[var(--color-brand-dark)] transition-all"
            />
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full uppercase tracking-[0.2em] font-bold text-[11px] h-12 bg-[var(--color-brand-dark)] text-white hover:bg-[#382266] transition-colors">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </div>
        </form>

        {/* Toggle Mode */}
        <div className="mt-8 text-center border-t border-[var(--color-border)] pt-8">
          <p className="text-[12px] text-[var(--color-text-body)]">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-[var(--color-brand-dark)] font-medium hover:text-[var(--color-gold)] transition-colors"
            >
              {isLogin ? 'Create one now' : 'Sign in instead'}
            </button>
          </p>
        </div>

      </div>
    </main>
  );
};

export default LoginPage;
