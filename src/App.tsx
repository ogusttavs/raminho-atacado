/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import About from './components/About';
import Wholesale from './components/Wholesale';

// Lazy loading below-the-fold components to reduce initial JS execution size
const Products = lazy(() => import('./components/Products'));
const Retail = lazy(() => import('./components/Retail'));
const Partners = lazy(() => import('./components/Partners'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const FloatingActions = lazy(() => import('./components/FloatingActions'));
import { HelmetProvider, Helmet } from 'react-helmet-async';

export default function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "name": "Raminho Importadora",
    "image": "https://raminhoimportadora.com.br/favicon.png",
    "description": "Distribuidora atacadista de frutas premium, nacionais e importadas. Abastecendo restaurantes, hotéis e empórios.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua da Cantareira, 306 - Rua J Box 16 e Rua O 46",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "01024-000",
      "addressCountry": "BR"
    },
    "telephone": "+5511940361803",
    "url": "https://raminhoimportadora.com.br",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
        <Helmet>
          <title>Raminho Importadora - Atacado de Frutas Premium</title>
          <meta name="description" content="Especialistas em frutas premium, nacionais e importadas. Abastecemos restaurantes, empórios, hotéis e feiras direto do Mercado Municipal de São Paulo." />
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>
        <Navbar />
        <Hero />
        <Values />
        <About />
        <Wholesale />
        <Suspense fallback={<div className="h-32 flex items-center justify-center text-secondary">Carregando...</div>}>
          <Products />
          <Retail />
          <Partners />
          <Contact />
          <Footer />
          <FloatingActions />
        </Suspense>
      </div>
    </HelmetProvider>
  );
}

