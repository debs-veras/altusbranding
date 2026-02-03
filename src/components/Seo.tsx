import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
}

export function Seo({ title, description }: SeoProps) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AltusBranding",
    url: "https://www.altusbranding.com.br",
    logo: "https://www.altusbranding.com.br/logo.png",
    description: description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-11-99999-9999",
      contactType: "customer service",
      areaServed: "BR",
    },
    sameAs: [
      "https://www.instagram.com/altusbranding",
      "https://www.linkedin.com/company/altusbranding",
    ],
  };
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href="https://www.altusbranding.com.br" />
      <meta name="description" content={description} />
      {/* SEO Essentials */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Altus Branding" />
      <meta
        name="keywords"
        content="branding, design, identidade visual, experiência digital, estratégia de marca, Altus Branding"
      />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="AltusBranding" />
      <meta property="og:url" content="https://www.altusbranding.com.br" />
      <meta
        property="og:image"
        content="https://www.altusbranding.com.br/logo.png"
      />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@altusbranding" />
      <meta
        name="twitter:image"
        content="https://www.altusbranding.com.br/logo.png"
      />
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationJsonLd)}
      </script>
    </Helmet>
  );
}
