import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionLabel from '../components/ui/SectionLabel';



const FAQSection = ({ blogId, isHome }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const [faqs, setFaqs] = useState(FAQS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let url = '';
    if (blogId) {
      url = `https://qmfsodjevoooohalsorw.supabase.co/rest/v1/faqs?type=eq.blog&blog_id=eq.${blogId}&is_active=eq.true&order=sort_order.asc`;
    } else if (isHome) {
      url = `https://qmfsodjevoooohalsorw.supabase.co/rest/v1/faqs?type=eq.home&is_active=eq.true&order=sort_order.asc`;
    }

    if (url) {
      const fetchFaqs = async () => {
        setLoading(true);
        try {
          const res = await fetch(url, {
            headers: {
              'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtZnNvZGpldm9vb29oYWxzb3J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYyOTA4NzIsImV4cCI6MjEwMTg2Njg3Mn0.ZT32g9WVbevgQIVgISoiRGtz3IxXsCVtQ-qSpqavyK8',
              'Content-Type': 'application/json'
            }
          });

          if (!res.ok) throw new Error('Failed to fetch FAQs');
          const data = await res.json();

          if (data && data.length > 0) {
            setFaqs(data);
          } else {
            setFaqs(isHome ? FAQS : []);
          }
        } catch (error) {
          console.error('Error fetching FAQs:', error);
          setFaqs(isHome ? FAQS : []);
        } finally {
          setLoading(false);
        }
      };

      fetchFaqs();
    } else {
      setFaqs(FAQS);
    }
  }, [blogId, isHome]);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  if (loading) {
    return (
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white border-t border-[var(--color-border)]">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[var(--color-text-muted)] animate-pulse">Loading FAQs...</p>
        </div>
      </section>
    );
  }

  if (faqs.length === 0) {
    return null;
  }

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
          {faqs.map((faq, index) => {
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
                  className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                    }`}
                >
                  <p className="min-h-0 text-[var(--color-text-body)] leading-relaxed font-light text-[0.95rem]" dangerouslySetInnerHTML={{ __html: faq.answer }} />
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

