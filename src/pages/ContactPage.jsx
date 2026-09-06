import React, { useEffect } from 'react';
import { Button } from '../components/ui';
import { COUNTRY_CODES } from '../constants/countries';
import SEO from '../components/SEO';

const ContactPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const countryCode = formData.get('countryCode');
    const mobile = formData.get('mobile');

    try {
      const response = await fetch('https://qmfsodjevoooohalsorw.supabase.co/functions/v1/contact-info', {
        method: 'POST',
        headers: {
          'apikey': 'sb_publishable_Z5tGv2QtmwQRn4VqDCTesA_xQ9Im99L',
          'Authorization': 'Bearer sb_publishable_Z5tGv2QtmwQRn4VqDCTesA_xQ9Im99L',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          full_name: formData.get('name'),
          email: formData.get('email'),
          mobile_number: `${countryCode}${mobile}`,
          subject: formData.get('subject'),
          message: formData.get('message')
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      alert('Thank you for getting in touch. Our team will contact you shortly.');
      e.target.reset();
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-[var(--color-brand-light)]">
      <SEO pageKey="contact" />

      {/* Hero Section */}
      <section className="bg-[var(--color-brand-light)] py-16 md:py-24 text-center border-b border-[var(--color-border)]">
        <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] mb-6 text-[var(--color-brand-dark)]">
          Get in Touch
        </h1>
        <p className="text-sm font-light text-[var(--color-text-body)] max-w-xl mx-auto leading-relaxed">
          Whether you have a question about our collections, need assistance with an order, or wish to commission a bespoke piece, our concierge team is here to assist you.
        </p>
      </section>

      {/* Contact Content */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left Column: Contact Info */}
          <div className="flex-1">
            <h2 className="font-serif text-[1.75rem] text-[var(--color-brand-dark)] mb-8">Contact Information</h2>

            <div className="space-y-10">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-brand-dark)] mb-3">Customer Service</h3>
                <p className="text-sm font-light text-[var(--color-text-body)] mb-1">
                  <a href="mailto:concierge@omriy.com" className="hover:text-[var(--color-gold)] transition-colors">
                    concierge@omriy.com
                  </a>
                </p>
                <p className="text-sm font-light text-[var(--color-text-body)]">
                  <a href="tel:+15102039490" className="hover:text-[var(--color-gold)] transition-colors">
                    +1 (510) 203-9490
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-brand-dark)] mb-3">Studio & Showroom</h3>
                <p className="text-sm font-light text-[var(--color-text-body)] leading-relaxed">
                  804 N Weston Ln<br />
                  Austin, TX 78733<br />
                  United States
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-brand-dark)] mb-3">Business Hours</h3>
                <p className="text-sm font-light text-[var(--color-text-body)] leading-relaxed">
                  Monday – Friday<br />
                  9:00 AM – 6:00 PM (EST)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex-1 bg-[#FDFCFB] p-8 md:p-14 border border-[var(--color-border)]">
            <h2 className="font-serif text-[1.75rem] text-[var(--color-brand-dark)] mb-8 text-center md:text-left">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-brand-dark)] mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-brand-dark)] focus:outline-none focus:border-[var(--color-brand-dark)] focus:ring-1 focus:ring-[var(--color-brand-dark)] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-brand-dark)] mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-brand-dark)] focus:outline-none focus:border-[var(--color-brand-dark)] focus:ring-1 focus:ring-[var(--color-brand-dark)] transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-brand-dark)] mb-3">
                  Mobile Number
                </label>
                <div className="flex border border-[var(--color-border)] bg-white focus-within:border-[var(--color-brand-dark)] focus-within:ring-1 focus-within:ring-[var(--color-brand-dark)] transition-all">
                  <select
                    name="countryCode"
                    className="w-24 border-r border-[var(--color-border)] bg-transparent px-2 py-3 text-sm text-[var(--color-brand-dark)] focus:outline-none cursor-pointer"
                    defaultValue="+1"
                  >
                    {COUNTRY_CODES.map((item, idx) => (
                      <option key={idx} value={item.code}>
                        {item.country} ({item.code})
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="mobile"
                    required
                    className="flex-1 px-4 py-3 text-sm text-[var(--color-brand-dark)] bg-transparent focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-brand-dark)] mb-3">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-brand-dark)] focus:outline-none focus:border-[var(--color-brand-dark)] focus:ring-1 focus:ring-[var(--color-brand-dark)] transition-all rounded-none cursor-pointer"
                >
                  <option value="general_enquiry">General Inquiry</option>
                  <option value="add_product">Add Product</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-brand-dark)] mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-brand-dark)] focus:outline-none focus:border-[var(--color-brand-dark)] focus:ring-1 focus:ring-[var(--color-brand-dark)] transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full uppercase tracking-[0.2em] font-bold text-xs h-12 bg-[var(--color-brand-dark)] text-white hover:bg-[#382266] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>
    </main>
  );
};

export default ContactPage;
