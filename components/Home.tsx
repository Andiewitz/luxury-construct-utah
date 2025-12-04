import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Services } from './Services';
import { Process } from './Process';
import { WhyChooseUs } from './WhyChooseUs';
import { Testimonials } from './Testimonials';
import { Contact } from './Contact';
import { FloatingBackground } from './FloatingBackground';

export const Home: React.FC = () => {
  // Breadcrumb Schema for SEO Structure
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://tecontractorsinutah.com"
    }]
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-background-light dark:bg-background-dark font-sans text-text-light dark:text-text-dark">
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Navbar sits on top of everything */}
      <Navbar />

      {/* Hero Section Container - Full Height */}
      <section id="main-content" className="relative h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Parallax Background Layer */}
        <FloatingBackground />

        {/* Hero Content */}
        <Hero />
      </section>

      {/* Services Section - Content Below Fold */}
      <Services />

      {/* Process Section - How we work */}
      <Process />

      {/* Why Choose Us Section - The Closer */}
      <WhyChooseUs />

      {/* Testimonials Section - Social Proof */}
      <Testimonials />

      {/* Contact & Footer Section */}
      <Contact />
    </div>
  );
};