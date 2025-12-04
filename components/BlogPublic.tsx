
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Contact } from './Contact';
import { FloatingBackground } from './FloatingBackground';
import { BlogPost } from '../types';
import { loadPosts } from '../utils/blogLoader';

export const BlogPublic: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true);
      const allPosts = await loadPosts();
      setPosts(allPosts.filter(p => p.status === 'published'));
      setIsLoading(false);
    };
    fetch();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark font-sans text-text-light dark:text-text-dark">
      <Navbar />

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

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {isLoading ? (
          <div className="text-center py-20">Loading articles...</div>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {posts.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.id} className="flex flex-col bg-white dark:bg-card-dark rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  {post.coverImage ? (
                    <img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <span className="material-icons-outlined text-4xl">image</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:underline">
                      Read Article <span className="material-icons-outlined ml-1 text-base">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-display text-gray-500">No articles found.</h3>
            <p className="text-gray-400">Check back soon for updates!</p>
          </div>
        )}
      </section>

      <Contact />
    </div>
  );
};
