/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy loading below-the-fold components to reduce initial JS bundle
const Values = lazy(() => import('./components/Values'));
const About = lazy(() => import('./components/About'));
const Wholesale = lazy(() => import('./components/Wholesale'));
const Products = lazy(() => import('./components/Products'));
const Retail = lazy(() => import('./components/Retail'));
const Partners = lazy(() => import('./components/Partners'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const FloatingActions = lazy(() => import('./components/FloatingActions'));

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <Values />
        <About />
        <Wholesale />
        <Products />
        <Retail />
        <Partners />
        <Contact />
        <Footer />
        <FloatingActions />
      </Suspense>
    </div>
  );
}
