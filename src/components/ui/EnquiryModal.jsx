import React, { useState } from 'react';
import { X } from 'lucide-react';

const EnquiryModal = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  if (!isOpen || !product) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming submission handles this correctly
    console.log('Enquiry Submitted:', {
      ...formData,
      productName: product.name,
      sku: product.sku || 'N/A', // from the API sample response
      collection: product.collection_products?.[0]?.collections?.name || 'N/A'
    });
    alert('Thank you for your enquiry. We will get back to you shortly.');
    onClose();
  };

  const collectionName = product.collection_products?.[0]?.collections?.name || 'Omriy Collection';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white max-w-md w-full relative border border-[var(--color-border)] shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#5A5058] hover:text-[#261744] transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="p-8">
          <h2 className="font-serif text-2xl text-[#261744] mb-2">Enquire Now</h2>
          <p className="text-[12px] font-light text-[#5A5058] mb-6">
            Please provide your details to learn more about this exclusive piece.
          </p>

          <div className="bg-[#FAF9F6] p-4 mb-6 border border-[var(--color-border)]">
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#261744] mb-1">{product.name}</h3>
            <div className="flex gap-4 text-[10px] text-[#A08C8A] uppercase tracking-wider">
              <span>SKU: {product.sku || 'N/A'}</span>
              <span>•</span>
              <span>{collectionName}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#261744] mb-2">
                Full Name *
              </label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-[var(--color-border)] p-3 text-[13px] bg-white focus:outline-none focus:border-[#261744]"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#261744] mb-2">
                Email Address *
              </label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-[var(--color-border)] p-3 text-[13px] bg-white focus:outline-none focus:border-[#261744]"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-[#261744] mb-2">
                Mobile Number *
              </label>
              <input 
                type="tel" 
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="w-full border border-[var(--color-border)] p-3 text-[13px] bg-white focus:outline-none focus:border-[#261744]"
                placeholder="Enter your mobile number"
              />
            </div>

            <button 
              type="submit"
              className="mt-4 w-full bg-[#261744] text-white py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#3d256e] transition-colors"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;
