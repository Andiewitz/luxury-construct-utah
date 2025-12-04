import React, { useEffect } from 'react';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  // Load GHL Form Script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Schema.org data for LocalBusiness
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Luxury Construction",
    "alternateName": "Luxury Construction",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBUMJ-3aBtXJIaKM40xnHm2C5sZBYRPnYRDNezyvT2tC9nM9OpM4pajoPZVwiT6AI-Nlp7gls7gnsE6fWoJRdvB2HqsJ0Blz4xEePqr5Otq6ZgMyT3F6SG6xct7EEr7sJqZ2CVMQG6Ik7elTSMUtsSunwJ3IWl-5lMn9mTKBwqeILTbGiwxQpuVdbaTyi9rX-yQAuHgtsRQV3slPVCFWPFe61u3J819zOOcSffWvlVD8BC8jWTT1yHnGSkSR5NndpPe-xIIEAd-ITe0",
    "telephone": "(385) 227-4522",
    "url": "https://tecontractorsinutah.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2861 S 2700 E",
      "addressLocality": "Salt Lake City",
      "addressRegion": "UT",
      "postalCode": "84109",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7077, 
      "longitude": -111.8155 
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Salt Lake City"
      },
      {
        "@type": "City",
        "name": "West Valley City"
      },
      {
        "@type": "City",
        "name": "South Salt Lake"
      },
      {
        "@type": "City",
        "name": "Sandy"
      },
      {
        "@type": "City",
        "name": "Draper"
      }
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Invoice"]
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white border-t border-white/10 relative">
      {/* Inject SEO Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Top Section: CTA Text & Form Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
          
          {/* CTA Text Side */}
          <Reveal direction="right">
            <div className="flex flex-col justify-center">
              <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
                Ready to Build Something <span className="text-primary">That Lasts?</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Fill out the form to get your free consultation and detailed quote. We'll discuss your project and provide expert recommendations tailored to your needs.
              </p>
              
              {/* Desktop Visual Indicator (optional, adds flow) */}
              <div className="hidden lg:block h-1 w-24 bg-primary rounded-full mt-4"></div>
            </div>
          </Reveal>

          {/* Form Side */}
          <Reveal direction="left" delay={200}>
            <div className="bg-white/5 backdrop-blur-sm p-4 md:p-8 rounded-2xl border border-white/10 relative shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600"></div>
              <h3 className="text-2xl font-display font-bold mb-6">Request a Quote</h3>
              
              <div className="w-full min-h-[600px] bg-transparent">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/xRroh1uBVNXkaD8qwEJD"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px', minHeight: '600px' }}
                  id="inline-xRroh1uBVNXkaD8qwEJD" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="House Tour Lead Form"
                  data-height="1158"
                  data-layout-iframe-id="inline-xRroh1uBVNXkaD8qwEJD"
                  data-form-id="xRroh1uBVNXkaD8qwEJD"
                  title="House Tour Lead Form"
                >
                </iframe>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Bottom Section: Business Info & Map */}
        <div className="border-t border-white/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Information */}
            <Reveal direction="up" delay={100}>
              <div className="space-y-10">
                <h3 className="font-display text-3xl font-bold text-white mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                  {/* Phone */}
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary border border-primary/20">
                      <span className="material-icons-outlined text-3xl">phone</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl mb-1">Phone</h4>
                      <a href="tel:3852274522" className="text-gray-300 hover:text-primary transition-colors text-lg block">
                        (385) 227-4522
                      </a>
                      <span className="text-sm text-gray-500 mt-1 block">Mon-Fri: 8am - 6pm</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary border border-primary/20">
                      <span className="material-icons-outlined text-3xl">location_on</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-xl mb-1">Location</h4>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        2861 S 2700 E,<br/>
                        Salt Lake City, UT 84109
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Google Map Embed */}
            <Reveal direction="up" delay={300} fullWidth={true}>
              <div className="w-full h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1678229972386!2d-111.8176886!3d40.7142857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875261d763261649%3A0x6644265050304383!2s2861%20S%202700%20E%2C%20Salt%20Lake%20City%2C%20UT%2084109!5e0!3m2!1sen!2sus!4v1715421234567!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Copyright Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Luxury Construction.</p>
            <p className="text-xs mt-1 text-gray-600">All rights reserved.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
