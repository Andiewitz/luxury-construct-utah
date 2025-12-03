import React, { useEffect, useRef } from 'react';

// Helper to optimize Google Hosted images
// This drastically reduces payload size by requesting a resized version
const getOptimizedImageUrl = (url: string, width: number = 800) => {
  if (url.includes('googleusercontent.com')) {
    return `${url}=w${width}-rw-q75`; // Width + WebP + Quality 75
  }
  return url;
};

const SERVICES = [
  {
    id: 1,
    title: "Concrete Driveways",
    description: "Luxury Concrete and Landscaping, your go-to concrete contractor in Utah, specializes in residential and commercial concrete flatwork. We handle everything from driveways and patios to foundations and sidewalks, providing expert installation with a focus on durability and precision.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUMJ-3aBtXJIaKM40xnHm2C5sZBYRPnYRDNezyvT2tC9nM9OpM4pajoPZVwiT6AI-Nlp7gls7gnsE6fWoJRdvB2HqsJ0Blz4xEePqr5Otq6ZgMyT3F6SG6xct7EEr7sJqZ2CVMQG6Ik7elTSMUtsSunwJ3IWl-5lMn9mTKBwqeILTbGiwxQpuVdbaTyi9rX-yQAuHgtsRQV3slPVCFWPFe61u3J819zOOcSffWvlVD8BC8jWTT1yHnGSkSR5NndpPe-xIIEAd-ITe0",
    gridArea: "col-span-1 lg:col-span-2 lg:row-span-1",
    alt: "A modern house with a pristine concrete driveway and garage"
  },
  {
    id: 2,
    title: "Pickleball Courts",
    description: "As expert pickleball court builders in Utah, we specialize in custom design and construction, delivering high-quality residential and commercial courts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6Bj3mjFwjsfzonvVMIn2tMPmVjXw5cY4KCT3LGeF-YtuT6OxARGSlooJV8k1pHzgur1JyaGXSyIEM9uepm6Yx6z2UfXSlOT2P-6uFJjZWKATICDXDH7MY2ewskhsFbCjY24wl7WLv3bH5UUk5wCC3F0iXdZctq5_RsVrVamCyvEThI7IeSeMvY2nJcz9AasY1ctLiPQRsUCHKZ_gOPJwmeCss1ADl206c6ptFqGMRMESuhCjtQlwnLYZD-iHBiGdlKclDWTyFxKAW",
    gridArea: "col-span-1 lg:col-span-1 lg:row-span-2",
    alt: "An outdoor pickleball court with a green and orange surface"
  },
  {
    id: 3,
    title: "Concrete Foundations",
    description: "We specialize in designing and constructing durable, high-quality foundations for residential and commercial projects, ensuring strong, long-lasting results.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwPn7FsoHhMrs8cHZvP8dlNvQ6fXr-O9Q1qP6aheUCV50rC5MvnQwLPdNPFINRyDdTHohtKRWzNl8EO_JSFfm02EQ8mLco_ibrhhiwLFiX6MThljMcJh8cCgD2PbX4VudIW67xCIEySNoqqrgOnTQv5NLILxyhcY2mP9rDqFpML2MTfJRnfdsW7Jp9t7GRqBG-_JUH4hM9GlhCePlNKCuQTWHBzVEG6NPhZgoniGg8NtqCdZh3w_mqhzzUKH9sX06CIhXMvIFH8TMF",
    gridArea: "col-span-1 lg:col-span-1 lg:row-span-1",
    alt: "A concrete foundation under construction for a new building"
  },
  {
    id: 4,
    title: "Concrete Patios",
    description: "As expert concrete patio contractors in Utah, we specialize in designing and constructing durable, custom patios for both residential and commercial properties. Our team delivers high-quality installations tailored to your specific needs, using advanced techniques and premium materials to create beautiful, long-lasting outdoor spaces.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNBQpWEM8SiO_N_x5RMaTI8H6VtdIy_c2o7VvgoEehQcDJyPkkXTcO8CSiMyOEJBftC0LVTXOHwiebYoOCTbU0bw5VpGQIKhvS2MZL0Mg1SyfLv-MvVjML1oLr64grrdl5W43qFU0Vn4zvgrbLAY1U_r1fYHdi7NmPgI8kYSHyY2S0PpizZlXkl6EkzxFrH97btnMEiLHuBUlsq4Umg61HjSKcBoj1z2icl1ybXjJ59pJEodHZYqfIfcqeuAy6Fwdo4VqlbUPZWlYa",
    gridArea: "col-span-1 lg:col-span-1 lg:row-span-2",
    alt: "A beautifully crafted concrete patio with outdoor furniture and a grill"
  },
  {
    id: 5,
    title: "Concrete Sidewalks",
    description: "For top-quality concrete sidewalk installation in Utah, our team specializes in creating durable and visually appealing walkways for any property.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9-TRAXjoVKjkOF_UODv72AFJ7TteaKHJhVMzEalijBYHXBD1iKnZ__iKidGF4n_T59TG_oq2vBrUuQlpJoG-T-iANbmtK2wqXsj7fpvtukeVgFuOvzyhRedmTyKyGs7yGchMGPaLzU_sE5B79nYUb5hWJlQGyug0hIuQz0WMInMtgc_Kk8_rk2Ue29lvrlpf2hnHFOJxhhUNdNDsioQ7YBUtdPzRtNr68-yMblWFtcH0jQfy0rGKL2y8vD8J3divHPnat5t0dhf6f",
    gridArea: "col-span-1 lg:col-span-1 lg:row-span-1",
    alt: "A modern home with clean, sharp concrete sidewalks"
  },
  {
    id: 6,
    title: "Concrete Walkways",
    description: "Our expert team in Utah provides high-quality concrete walkway construction, ensuring durable, safe, and attractive paths for your home or business.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcIYMHmoLLfaaunG7DPPXJox0FQ-HnYa2VABWO_o0d6fRb-72smi82z1HC0jg_Kx-kYRivnjP3g5No8Uvb1NjM82cRSONNIXbtTMgtuw7D60KK2GXmj9y9iCzbYQ6xF4VyCWZ-Tzq6plGt2H6egx33Y7IvbK6NlY5tPXgGecHCFhrakboxdRoftcjbci6EArklrufhZITL02yvIGMSaRtxW59M9ISNzftw7KWsb1xupu3x-50dGER0XmdCszc2wOT_LEce5xRI00PU",
    gridArea: "col-span-1 lg:col-span-2 lg:row-span-1",
    alt: "A winding concrete walkway through a lush garden with a red maple tree"
  }
];

export const Services: React.FC = () => {
  // Use Intersection Observer for entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-24');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const cards = document.querySelectorAll('.service-card-wrapper');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-16 sm:py-24 bg-background-light dark:bg-background-dark relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-light-primary dark:text-text-dark-primary">
            Our Concrete & Landscaping Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-light-secondary dark:text-text-dark-secondary">
            From foundational strength to aesthetic beauty, we deliver excellence in every project.
          </p>
        </div>
        
        {/* Collage Grid Layout - Auto Rows allow dynamic height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-max lg:grid-auto-rows-[20rem]">
          {SERVICES.map((service, index) => {
            // Determine if the card is wide (spans 2 columns) on desktop
            const isWide = service.gridArea.includes('lg:col-span-2');
            
            // Define responsive sizes attribute
            // If wide: On Desktop (1024px+), it takes up roughly 66% of the container (2/3 cols)
            // If narrow: On Desktop, it takes up 33% (1/3 cols)
            // On Mobile/Tablet: They usually span full width or half width
            const sizes = isWide
              ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 66vw"
              : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";

            return (
              <div 
                key={service.id} 
                className={`service-card-wrapper opacity-0 translate-y-24 transition-all duration-700 ease-out ${service.gridArea} min-h-[24rem] lg:min-h-0`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform-gpu bg-gray-900 h-full w-full">
                  
                  {/* Image Layer with srcset for responsive loading */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-gray-800 animate-pulse transition-opacity duration-500"
                    onLoad={(e) => (e.currentTarget.classList.remove('animate-pulse', 'bg-gray-800'))}
                  >
                    <img 
                      src={getOptimizedImageUrl(service.image, 800)} // Fallback to medium size
                      srcSet={`
                        ${getOptimizedImageUrl(service.image, 400)} 400w, 
                        ${getOptimizedImageUrl(service.image, 800)} 800w, 
                        ${getOptimizedImageUrl(service.image, 1200)} 1200w
                      `}
                      sizes={sizes}
                      alt={service.alt} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu will-change-transform opacity-0 transition-opacity duration-500"
                      onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
                    />
                  </div>
                  
                  {/* Static Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
                  
                  {/* Content Container */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transform-gpu transition-transform duration-500 ease-out translate-y-[calc(100%-5.5rem)] group-hover:translate-y-0 will-change-transform flex flex-col justify-end bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                    
                    <span className="font-display text-7xl font-bold opacity-10 absolute -top-12 left-6 select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                      {service.id}
                    </span>

                    <div className="relative z-10">
                      <div className="h-[3.5rem] flex items-end pb-1">
                        <h3 className="font-display text-2xl lg:text-3xl font-bold group-hover:text-primary transition-colors duration-300 leading-none">
                          {service.title}
                        </h3>
                      </div>
                      
                      <div className="overflow-hidden pt-4">
                        <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};