import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = ({ 
  title, 
  description, 
  canonicalUrl = 'https://www.dipaoldagehome.com',
  ogImage = 'https://www.dipaoldagehome.com/og-image.jpg',
  type = 'website'
}) => {
  const fullTitle = ` | Dipa Old Age Home & Welfare Society`;
  
  // JSON-LD Structured Data for LocalBusiness
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Dipa Old Age Home & Welfare Society",
    "image": ogImage,
    "@id": canonicalUrl,
    "url": canonicalUrl,
    "telephone": "+919831524258",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2088 Nayabad Main Road, Nabamalancha Dreamland - 1, Panchasayar",
      "addressLocality": "Kolkata",
      "postalCode": "700094",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.478256,
      "longitude": 88.4109247
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph / Facebook / WhatsApp */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Dipa Old Age Home & Welfare Society" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};
