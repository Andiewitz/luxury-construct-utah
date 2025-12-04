import React from 'react';
import { Navbar } from './Navbar';
import { Contact } from './Contact';
import { FloatingBackground } from './FloatingBackground';

// Placeholder data for the blog
const POSTS = [
  {
    id: 1,
    title: "Why Heated Driveways are Essential for Utah Winters",
    excerpt: "Stop shoveling snow this winter. Discover the technology behind radiant heating systems and why they increase property value in Salt Lake City.",
    category: "Driveways",
    date: "Oct 12, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUMJ-3aBtXJIaKM40xnHm2C5sZBYRPnYRDNezyvT2tC9nM9OpM4pajoPZVwiT6AI-Nlp7gls7gnsE6fWoJRdvB2HqsJ0Blz4xEePqr5Otq6ZgMyT3F6SG6xct7EEr7sJqZ2CVMQG6Ik7elTSMUtsSunwJ3IWl-5lMn9mTKBwqeILTbGiwxQpuVdbaTyi9rX-yQAuHgtsRQV3slPVCFWPFe61u3J819zOOcSffWvlVD8BC8jWTT1yHnGSkSR5NndpPe-xIIEAd-ITe0"
  },
  {
    id: 2,
    title: "Stamped Concrete vs. Pavers: What's Best for Your Patio?",
    excerpt: "Comparing durability, cost, and maintenance. Find out why stamped concrete is becoming the preferred choice for modern luxury landscaping.",
    category: "Design",
    date: "Sep 28, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNBQpWEM8SiO_N_x5RMaTI8H6VtdIy_c2o7VvgoEehQcDJyPkkXTcO8CSiMyOEJBftC0LVTXOHwiebYoOCTbU0bw5VpGQIKhvS2MZL0Mg1SyfLv-MvVjML1oLr64grrdl5W43qFU0Vn4zvgrbLAY1U_r1fYHdi7NmPgI8kYSHyY2S0PpizZlXkl6EkzxFrH97btnMEiLHuBUlsq4Umg61HjSKcBoj1z2icl1ybXjJ59pJEodHZYqfIfcqeuAy6Fwdo4VqlbUPZWlYa"
  },
  {
    id: 3,
    title: "5 Trends in Luxury Landscape Architecture for 2025",
    excerpt: "From xeriscaping to integrated concrete seating, explore the trends shaping high-end outdoor living spaces in the Mountain West.",
    category: "Landscaping",
    date: "Sep 15, 2024",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcIYMHmoLLfaaunG7DPPXJox0FQ-HnYa2VABWO_o0d6fRb-72smi82z1HC0jg_Kx-kYRivnjP3g5No8Uvb1NjM82cRSONNIXbtTMgtuw7D60KK2GXmj9y9iCzbYQ6xF4VyCWZ-Tzq6plGt2H6egx33Y7IvbK6NlY5tPXgGecHCFhrakboxdRoftcjbci6EArklrufhZITL02yvIGMSaRtxW59M9ISNzftw7KWsb1xupu3x-50dGER0XmdCszc2wOT_LEce5xRI00PU"
  }
];

export const BlogPublic: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark font-sans text-text-light dark:text-text-dark">
      <Navbar />

      {/* Hero Section for Blog */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-900 text-white">
        <FloatingBackground hideGradient={false} />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Latest News & <span className="text-primary">Insights</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Expert advice on concrete construction, landscaping trends, and property maintenance from Utah's premier contractors.
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {POSTS.map((post) => (
            <article key={post.id} className="flex flex-col bg-white dark:bg-card-dark rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a href="#" className="inline-flex items-center text-primary font-semibold text-sm hover:underline">
                    Read Article <span className="material-icons-outlined ml-1 text-base">arrow_forward</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Reusing existing footer/contact section */}
      <Contact />
    </div>
  );
};