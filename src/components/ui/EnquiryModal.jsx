import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronDown, Search } from 'lucide-react';
import { countryCodes } from '../../constants/countryCodes';

export const CountryCodePicker = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef(null);

  const selected = countryCodes.find(c => c.code === value) || countryCodes[0];

  const filtered = countryCodes.filter(c =>
    c.country.toLowerCase().includes(search.toLowerCase()) ||
    c.code.includes(search)
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => { setOpen(o => !o); setSearch(''); }}
        className="flex items-center gap-1 h-full px-3 border-r border-[var(--color-border)] text-sm bg-transparent focus:outline-none whitespace-nowrap"
      >
        <span className="font-medium text-[var(--color-brand-dark)]">{selected.code}</span>
        <ChevronDown size={12} className={`text-[var(--color-text-muted)] transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-1 z-[200] bg-white border border-[var(--color-border)] shadow-xl w-64">
          {/* Search */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-[var(--color-border)]">
            <Search size={13} className="text-[var(--color-text-muted)] shrink-0" />
            <input
              type="text"
              autoFocus
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search country..."
              className="flex-1 text-sm focus:outline-none bg-transparent"
            />
          </div>
          {/* List */}
          <ul className="max-h-48 overflow-y-auto">
            {filtered.length === 0 && (
              <li className="px-3 py-2 text-sm text-[var(--color-text-muted)]">No results</li>
            )}
            {filtered.map((c, i) => (
              <li
                key={i}
                onClick={() => { onChange(c.code); setOpen(false); setSearch(''); }}
                className={`flex items-center gap-2 px-3 py-2 text-sm cursor-pointer hover:bg-[var(--color-brand-light)] ${c.code === value ? 'bg-[#F0EBF8] font-semibold text-[var(--color-brand-dark)]' : 'text-[var(--color-text-body)]'}`}
              >
                <span className="font-mono text-[var(--color-brand-dark)] w-12 shrink-0">{c.code}</span>
                <span className="truncate">{c.country}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const EnquiryModal = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    mobile: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !product) return null;

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
          product_id: product.id || null,
          name: formData.name,
          email: formData.email,
          phone: `${formData.countryCode}${formData.mobile}`,
          city: "",
          state: "",
          country: "",
          preferred_contact_method: "email",
          message: `Enquiry for ${product.name} (SKU: ${product.sku || 'N/A'})`
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit enquiry');
      }

      alert('Thank you for your enquiry. We will get back to you shortly.');
      onClose();
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('There was an error submitting your enquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const collectionName = product.collection_products?.[0]?.collections?.name || 'Omriy Collection';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white max-w-md w-full relative border border-[var(--color-border)] shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--color-text-body)] hover:text-[var(--color-brand-dark)] transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="p-8">
          <h2 className="font-serif text-2xl text-[var(--color-brand-dark)] mb-2">Enquire Now</h2>
          <p className="text-sm font-light text-[var(--color-text-body)] mb-6">
            Please provide your details to learn more about this exclusive piece.
          </p>

          <div className="bg-[var(--color-brand-light)] p-4 mb-6 border border-[var(--color-border)]">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-dark)] mb-1">{product.name}</h3>
            <div className="flex gap-4 text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
              <span>SKU: {product.sku || 'N/A'}</span>
              <span>•</span>
              <span>{collectionName}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-dark)] mb-2">
                Full Name *
              </label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-[var(--color-border)] p-3 text-sm bg-white focus:outline-none focus:border-[var(--color-brand-dark)]"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-dark)] mb-2">
                Email Address *
              </label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-[var(--color-border)] p-3 text-sm bg-white focus:outline-none focus:border-[var(--color-brand-dark)]"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[var(--color-brand-dark)] mb-2">
                Mobile Number *
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
                  className="flex-1 p-3 text-sm bg-transparent focus:outline-none min-w-0"
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full bg-[var(--color-brand-dark)] text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#3d256e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
