import React, { useState, useEffect } from 'react';

const SEO = ({ pageKey, customSeoData }) => {
  const [seoData, setSeoData] = useState(customSeoData || null);

  useEffect(() => {
    if (customSeoData) {
      setSeoData(customSeoData);
      return;
    }

    if (!pageKey) return;

    const fetchSEO = async () => {
      try {
        const response = await fetch(`https://qmfsodjevoooohalsorw.supabase.co/functions/v1/omriy-seo?page_key=${pageKey}`);
        const result = await response.json();
        
        if (result.success && result.data) {
          setSeoData(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch SEO data:", error);
      }
    };

    fetchSEO();
  }, [pageKey, customSeoData]);

  if (!seoData) return null;

  let schemaMarkup = seoData.seo_schema_markup;
  if (schemaMarkup && typeof schemaMarkup === 'object') {
    schemaMarkup = JSON.stringify(schemaMarkup);
  }

  return (
    <>
      {seoData.seo_title && <title>{seoData.seo_title}</title>}
      {seoData.seo_description && <meta name="description" content={seoData.seo_description} />}
      {schemaMarkup && (
        <script type="application/ld+json">
          {schemaMarkup}
        </script>
      )}
    </>
  );
};

export default SEO;
