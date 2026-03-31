import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  canonical, 
  ogImage, 
  type = 'website', 
  keywords, 
  robots = 'index, follow',
  geo,
  article,
  schemaData 
}) => {
  const siteName = 'Luna Graphics';
  const fullTitle = title ? (title.includes(siteName) ? title : `${title} | ${siteName}`) : siteName;
  const defaultDescription = "Nairobi's premier print shop offering large format printing, UV printing, CNC cutting, corporate branding, and custom merchandise.";
  const defaultOgImage = 'https://lunagraphics.co.ke/social-sharing-image.jpg';
  const siteUrl = 'https://lunagraphics.co.ke';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      
      {/* Canonical URL */}
      {canonical && (
        <link rel="canonical" href={canonical.startsWith('http') ? canonical : `${siteUrl}${canonical.startsWith('/') ? '' : '/'}${canonical}`} />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={canonical ? (canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`) : siteUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />

      {/* Article Specific Tags */}
      {type === 'article' && article && (
        <>
          {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags && article.tags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Local SEO / Geo Tags */}
      {geo && (
        <>
          <meta name="geo.region" content={geo.region || 'KE-30'} />
          <meta name="geo.placename" content={geo.placename || 'Nairobi'} />
          <meta name="geo.position" content={geo.position || '-1.2921;36.8219'} />
          <meta name="ICBM" content={geo.position || '-1.2921;36.8219'} />
        </>
      )}

      {/* Structured Data (JSON-LD) */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
