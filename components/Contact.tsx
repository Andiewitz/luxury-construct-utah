import React from 'react';

export const Contact: React.FC = () => {
  // Schema.org data for LocalBusiness
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Luxury Concrete And Landscaping LLC dba Luxury Construction",
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
    }
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

          {/* Form Side */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 relative shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600"></div>
            <h3 className="text-2xl font-display font-bold mb-6">Request a Quote</h3>
            
            {/* 
                GHL FORM EMBED CODE GOES HERE 
                For the prototype, we simulate the look of the form.
            */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-300">First Name</label>
                  <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                </div>
                <div className="space-y-1">
                   <label className="text-sm font-medium text-gray-300">Last Name</label>
                  <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-300">Phone</label>
                <input type="tel" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors" placeholder="(555) 123-4567" />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-300">Project Details</label>
                <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors" placeholder="I'm interested in a stamped concrete patio..."></textarea>
              </div>

              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-primary/20 transition-all duration-300 mt-2">
                Get Your Free Quote
              </button>

              <p className="text-xs text-center text-gray-500 mt-4">
                By submitting this form, you agree to receive SMS text messages from Luxury Construct. Carrier rates may apply.
              </p>
            </form>
          </div>

        </div>

        {/* Bottom Section: Business Info & Map */}
        <div className="border-t border-white/10 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Contact Information */}
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

            {/* Google Map Embed */}
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
          </div>
        </div>

        {/* Copyright Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Luxury Concrete And Landscaping LLC dba Luxury Construction. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};