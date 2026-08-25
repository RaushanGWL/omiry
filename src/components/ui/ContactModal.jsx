import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { CountryCodePicker } from './EnquiryModal';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    mobile: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://qmfsodjevoooohalsorw.supabase.co/functions/v1/enquiries', {
        method: 'POST',
        headers: {
          'apikey': 'sb_publishable_Z5tGv2QtmwQRn4VqDCTesA_xQ9Im99L',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          customer_id: null,
          product_id: null,
          name: formData.name,
          email: formData.email,
          phone: `${formData.countryCode}${formData.mobile}`,
          city: "",
          state: "",
          country: "",
          preferred_contact_method: "email",
          message: `[${formData.subject}] ${formData.message}`
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit message');
      }

      alert('Thank you for your message. We will get back to you shortly.');
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#f9f8f6] max-w-2xl w-full relative border border-[var(--color-border)] shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--color-text-body)] hover:text-[var(--color-brand-dark)] transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="p-10 md:p-14">
          <h2 className="font-serif text-[2.5rem] text-[var(--color-brand-dark)] mb-10 leading-tight">Send a Message</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-dark)] mb-2">
                  Full Name
                </label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-[var(--color-border)] p-3 text-base bg-white focus:outline-none focus:border-[var(--color-brand-dark)]"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-dark)] mb-2">
                  Email Address
                </label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-[var(--color-border)] p-3 text-base bg-white focus:outline-none focus:border-[var(--color-brand-dark)]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-dark)] mb-2">
                Mobile Number
              </label>
              <div className="flex border border-[var(--color-border)] bg-white focus-within:border-[var(--color-brand-dark)]">
                <CountryCodePicker
                  value={formData.countryCode}
                  onChange={(code) => setFormData(prev => ({ ...prev, countryCode: code }))}
                />
                <input 
                  type="tel" 
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="flex-1 p-3 text-base bg-transparent focus:outline-none min-w-0"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-dark)] mb-2">
                Subject
              </label>
              <div className="relative border border-[var(--color-border)] bg-white focus-within:border-[var(--color-brand-dark)]">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 text-base bg-transparent focus:outline-none appearance-none"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Bespoke Order">Bespoke Order</option>
                  <option value="Product Support">Product Support</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)] pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-dark)] mb-2">
                Message
              </label>
              <textarea 
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-[var(--color-border)] p-3 text-base bg-white focus:outline-none focus:border-[var(--color-brand-dark)] min-h-[160px] resize-y"
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full bg-[#3d256e] text-white py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[var(--color-brand-dark)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
