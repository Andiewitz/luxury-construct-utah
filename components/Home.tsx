import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Services } from './Services';
import { Process } from './Process';
import { WhyChooseUs } from './WhyChooseUs';
import { Testimonials } from './Testimonials';
import { Contact } from './Contact';
import { FloatingBackground } from './FloatingBackground';
import { SEO } from './SEO';

export const Home: React.FC = () => {
  const location = useLocation();

  // Handle scroll request from other pages
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const targetId = location.state.scrollTo;
      const element = document.getElementById(targetId);
      if (element) {
        // Slight delay to ensure DOM is ready and transition is smooth
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

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
      <SEO 
        title="Luxury Construction - Heated Driveways, Stamped Concrete & Foundations Salt Lake City"
        description="Premier Concrete Contractors in Salt Lake City. Specializing in Heated Driveway Systems, Stamped Concrete, Walkout Basements, and Luxury Landscaping. Call (385) 227-4522."
        keywords="concrete contractors Salt Lake City, concrete driveway installation Utah, heated driveway systems Salt Lake City, concrete foundation contractors Utah, stamped concrete Salt Lake City"
        canonical="https://tecontractorsinutah.com/"
      />
      
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
