import React, { useEffect, useState } from 'react';
import { Reveal } from './Reveal';

const REVIEWS = [
  {
    id: 1,
    name: "Mahealani Eddy",
    date: "1 year ago",
    avatar: "M",
    color: "bg-purple-600",
    rating: 5,
    text: "The team was FAST and efficient! What felt like a huge and hard project, they put together simply and quick. My worries were quickly dissolved after speaking to the team and coming up with a game plan. Will definitely use again, on more projects!"
  },
  {
    id: 2,
    name: "Chase Austin",
    date: "1 year ago",
    avatar: "C",
    color: "bg-blue-600",
    rating: 5,
    text: "Luxury Construction is fantastic. I really appreciate the team matching my other bids and starting on time for the project. The concrete looks great and we're excited for more parking now. They came back and also did my parking strip today! It looks great. I appreciate their fast and quality work. We will definitely be using them again."
  },
  {
    id: 3,
    name: "Nate Chandler",
    date: "1 year ago",
    avatar: "N",
    color: "bg-green-600",
    rating: 5,
    text: "Luxury did an awesome job. They kept everything clean for me and finished so fast I barely noticed when they came. Highly recommended."
  },
  {
    id: 4,
    name: "Alexis Williams",
    date: "2 years ago",
    avatar: "A",
    color: "bg-red-500",
    rating: 5,
    text: "We really liked this company! The team was super responsive and hard working. They did a great job with our backyard paths and we fully recommend them to anyone looking for landscaping, concrete, or pool work!"
  },
  {
    id: 5,
    name: "Breanna Asuncion",
    date: "2 years ago",
    avatar: "B",
    color: "bg-orange-500",
    rating: 5,
    text: "We have recently moved here to Utah and our new backyard was not very functional for our family since the entire yard was just dirt and it was un-level. We really wanted a patio for dining and a safe place for our kids to play and for the yard to be leveled and a retaining wall put in. After searching a while for a contractor we happened upon Luxury Construction since they were doing some work a few houses down from us. We were really impressed with their work there so we decided to use them as our contractor for our project, and we are so glad we did! The team was amazing to work with and really understood our vision. They kept communication open the entire project and were very detail oriented which I appreciated. The concrete work they did for us is absolutely beautiful, and the kids are having a blast playing on the turf and being able to run barefooted through the yard. Working with this company was so seamless and we highly recommend them to anyone who is in need of a yard upgrade!"
  },
  {
    id: 6,
    name: "Liam M.",
    date: "2 years ago",
    avatar: "L",
    color: "bg-indigo-600",
    rating: 5,
    text: "I recently used Luxury Construction for a new driveway installation and I couldn't be happier with the results. The team was professional, punctual and very easy to work with. They walked me through the process and gave me great suggestions on how to improve the design. The work was completed in a timely manner and the quality of the work is outstanding."
  },
  {
    id: 7,
    name: "Cory Johnson",
    date: "2 years ago",
    avatar: "C",
    color: "bg-teal-600",
    rating: 5,
    text: "Our new driveway is amazing and exactly what we wanted. The entire team worked efficiently to get the job done as fast as possible and very responsive to all my questions during the process. Definitely would use again and highly highly recommend."
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEWS.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [isPaused]);

  const toggleExpand = (id: number) => {
    setExpandedReviews(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
        // Pause auto-scroll when user is reading
        setIsPaused(true);
      }
      return newSet;
    });
  };

  return (
    <section id="testimonials" className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-light-primary dark:text-text-dark-primary mb-4">
              See What People are Saying
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </Reveal>
        </div>

        {/* Carousel Container */}
        <Reveal delay={300} fullWidth={true}>
          <div 
            className="relative overflow-hidden w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {REVIEWS.map((review) => {
                const isExpanded = expandedReviews.has(review.id);
                
                return (
                  <div 
                    key={review.id} 
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                  >
                    <div className={`bg-white dark:bg-card-dark p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 flex flex-col relative transition-all duration-300 ${isExpanded ? 'h-auto z-10 scale-[1.02] shadow-xl' : 'h-full'}`}>
                      
                      {/* Google G Logo */}
                      <div className="absolute top-6 right-6">
                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.49 12.275C23.49 11.485 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.25 17.21 15.81 18.11V21.09H19.66C21.93 19 23.49 15.89 23.49 12.275Z" fill="#4285F4"/>
                          <path d="M12 24C15.24 24 17.965 22.935 19.965 21.09L16.11 18.11C15.015 18.855 13.635 19.28 12 19.28C8.835 19.28 6.165 17.14 5.205 14.24H1.245V17.31C3.21 21.22 7.275 24 12 24Z" fill="#34A853"/>
                          <path d="M5.205 14.24C4.95 13.49 4.8 12.69 4.8 11.85C4.8 11.01 4.95 10.21 5.205 9.46V6.39H1.245C0.435 8.025 0 9.885 0 11.85C0 13.815 0.435 15.675 1.245 17.31L5.205 14.24Z" fill="#FBBC05"/>
                          <path d="M12 4.41C13.77 4.41 15.345 5.035 16.59 6.205L19.74 3.055C17.965 1.39 15.24 0 12 0C7.275 0 3.21 2.78 1.245 6.69L5.205 9.76C6.165 6.86 8.835 4.41 12 4.41Z" fill="#EA4335"/>
                        </svg>
                      </div>

                      {/* Profile Header */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold font-sans text-lg`}>
                          {review.avatar}
                        </div>
                        <div>
                          <div className="font-bold text-text-light-primary dark:text-white text-sm">
                            {review.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {review.date}
                          </div>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex text-amber-400 text-sm mb-3">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="material-icons-outlined text-base">star</span>
                        ))}
                        <span className="material-icons-outlined text-base text-blue-500 ml-1">verified</span>
                      </div>

                      {/* Text */}
                      <div className="flex-grow">
                        <p className={`text-text-light-secondary dark:text-gray-300 text-sm leading-relaxed ${isExpanded ? '' : 'line-clamp-4'}`}>
                          {review.text}
                        </p>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <button 
                          onClick={() => toggleExpand(review.id)}
                          className="text-xs font-medium text-gray-400 hover:text-primary transition-colors focus:outline-none"
                        >
                          {isExpanded ? 'Show less' : 'Read more'}
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Navigation Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-primary w-6' : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
