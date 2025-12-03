import React from 'react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "Salt Lake City, UT",
    quote: "Luxury Concrete transformed our backyard into an oasis. The stamped concrete patio is absolutely stunning and the crew was professional from day one.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Thorne",
    location: "Park City, UT",
    quote: "We needed a heated driveway for the winter months and the system they installed works perfectly. No more shoveling snow at 6 AM!",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Sandy, UT",
    quote: "Their landscape design team has an incredible eye for detail. They integrated our new retaining wall seamlessly with the existing garden.",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-text-light-primary dark:text-text-dark-primary mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div 
              key={review.id} 
              className="bg-background-light dark:bg-card-dark p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-800 flex flex-col"
            >
              {/* Stars */}
              <div className="flex text-primary mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="material-icons-outlined text-xl">star</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-grow">
                <p className="text-text-light-secondary dark:text-gray-300 italic text-lg leading-relaxed mb-6">
                  "{review.quote}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="mt-auto flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold font-display">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-text-light-primary dark:text-white text-sm">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">
                    {review.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
