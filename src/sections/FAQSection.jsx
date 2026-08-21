import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionLabel from '../components/ui/SectionLabel';

const FAQS = [
  {
    question: "What is OMRIY's signature style?",
    answer: "OMRIY blends ancient craftsmanship with modern design principles. Each piece is hand-carved to reveal the unique energy of natural gemstones, resulting in heirloom-quality sculptures."
  },
  {
    question: "How do I care for my gemstone sculpture?",
    answer: "Keep your sculpture away from direct, harsh sunlight and extreme temperature changes. Clean it gently with a soft, dry cloth. Avoid chemical cleaners or water."
  },
  {
    question: "Are the gemstones ethically sourced?",
    answer: "Yes, we work directly with ethical mining communities globally to ensure that our materials are sourced responsibly, honoring both the earth and the artisans."
  },
  {
    question: "Do you offer custom commissions?",
    answer: "We accept a limited number of bespoke commissions each year. Please contact our concierge team to discuss your vision."
  },
  {
    question: "How long does shipping take?",
    answer: "Our ready-to-ship pieces are dispatched within 2-3 business days and typically arrive within 5-7 business days for domestic orders. International shipping may take 2-4 weeks depending on the destination."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 14-day return window for all our pieces, provided they are returned in their original condition and packaging. Custom commissions and bespoke pieces are non-refundable."
  },
  {
    question: "Do the sculptures come with authenticity certificates?",
    answer: "Yes, every OMRIY sculpture is accompanied by a signed Certificate of Authenticity detailing the gemstone type, origin, and the artisan who carved it."
  },
  {
    question: "Do you ship internationally?",
    answer: "Absolutely. We ship our pieces worldwide. Please note that international orders may be subject to local customs duties and taxes, which are the responsibility of the recipient."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white border-t border-[var(--color-border)]">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-12">
          <SectionLabel text="F.A.Q." />
          <h2 className="font-serif text-[2.5rem] md:text-[3rem] text-[var(--color-brand-dark)] mt-4 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border border-[var(--color-border)] p-5 md:p-6 cursor-pointer transition-colors hover:bg-[var(--color-brand-light)]"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-serif text-lg md:text-xl text-[var(--color-brand-dark)] pr-8">
                    {faq.question}
                  </h3>
                  {isOpen ? (
                    <ChevronUp className="text-[var(--color-brand-dark)] flex-shrink-0" size={20} strokeWidth={1.5} />
                  ) : (
                    <ChevronDown className="text-[var(--color-brand-dark)] flex-shrink-0" size={20} strokeWidth={1.5} />
                  )}
                </div>
                <div 
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                  }`}
                >
                  <p className="min-h-0 text-[var(--color-text-body)] leading-relaxed font-light text-[0.95rem]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
