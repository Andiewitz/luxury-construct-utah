
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Contact } from './Contact';
import { BlogPost as BlogPostType } from '../types';
import { loadPosts, loadPostContent } from '../utils/blogLoader';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (slug) {
        // 1. Find metadata from manifest
        const allPosts = await loadPosts();
        const foundPost = allPosts.find(p => p.slug === slug);
        
        if (foundPost) {
          // 2. Fetch the HTML content
          const content = await loadPostContent(slug);
          
          setPost({
            ...foundPost,
            content: content || '<p>Content not found.</p>'
          });
          
          // SEO Updates
          document.title = foundPost.seo.metaTitle || `${foundPost.title} | Luxury Construction`;
          let metaDesc = document.querySelector('meta[name="description"]');
          if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
          }
          metaDesc.setAttribute('content', foundPost.seo.metaDescription || foundPost.excerpt);

        } else {
          navigate('/404');
        }
      }
    };
    
    fetchData();
  }, [slug, navigate]);

  if (!post) return <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">Loading...</div>;

  // Safe render helper
  const renderHTML = (html: string) => {
    return { __html: html };
  };

  // --- TEMPLATE 1: CLASSIC ---
  if (post.template === 'classic') {
    return (
      <div className="min-h-screen bg-white dark:bg-background-dark text-text-light dark:text-text-dark font-sans">
        <Navbar />
        
        <article className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <header className="text-center mb-12">
              <div className="flex justify-center gap-2 mb-6">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                {post.title}
              </h1>
              <div className="text-gray-500 flex justify-center items-center gap-4 text-sm">
                <span>By {post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
            </header>

            {post.coverImage && (
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12">
                <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
              </div>
            )}

            <div 
              className="prose prose-lg dark:prose-invert mx-auto max-w-3xl"
              dangerouslySetInnerHTML={renderHTML(post.content)}
            />
            
            <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 flex justify-center">
              <Link to="/blog" className="text-primary font-semibold hover:underline flex items-center gap-2">
                <span className="material-icons-outlined">arrow_back</span> Back to Blog
              </Link>
            </div>
          </div>
        </article>
        
        <Contact />
      </div>
    );
  }

  // --- TEMPLATE 2: MODERN ---
  if (post.template === 'modern') {
    return (
      <div className="min-h-screen bg-white dark:bg-background-dark text-text-light dark:text-text-dark font-sans">
        <Navbar />
        
        <div className="flex flex-col lg:flex-row min-h-screen pt-20">
          <div className="lg:w-5/12 p-8 lg:p-16 lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] flex flex-col justify-center bg-gray-50 dark:bg-gray-900 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-800">
            <Link to="/blog" className="text-gray-400 hover:text-primary mb-8 flex items-center gap-2 text-sm font-bold uppercase tracking-wide">
              <span className="material-icons-outlined text-base">arrow_back</span> Blog
            </Link>
            
            <span className="text-primary font-bold uppercase tracking-wider mb-4 block">{post.category}</span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-8 text-gray-900 dark:text-white leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 mt-auto">
               <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                 {post.author.charAt(0)}
               </div>
               <div>
                 <div className="font-bold text-gray-900 dark:text-white">{post.author}</div>
                 <div className="text-sm text-gray-500">{post.date}</div>
               </div>
            </div>
          </div>

          <div className="lg:w-7/12 p-8 lg:p-20">
            {post.coverImage && (
              <img src={post.coverImage} alt={post.title} className="w-full h-80 object-cover rounded-xl shadow-lg mb-12" />
            )}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={renderHTML(post.content)}
            />
          </div>
        </div>
        
        <Contact />
      </div>
    );
  }

  // --- TEMPLATE 3: IMMERSIVE ---
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-sans">
      <Navbar />

      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {post.coverImage && (
          <div className="absolute inset-0 z-0">
             <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/50" />
          </div>
        )}
        
        <div className="relative z-10 text-center max-w-4xl px-4 animate-[fadeIn_1s_ease-out]">
          <span className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest border border-white/20 mb-8 inline-block">
            {post.category}
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            {post.title}
          </h1>
          <div className="flex justify-center items-center gap-6 text-white/80 font-medium">
             <span>{post.date}</span>
             <span className="w-1 h-1 bg-white rounded-full"></span>
             <span>{post.author}</span>
          </div>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-24 -mt-20 relative z-20">
        <div className="bg-white dark:bg-card-dark p-8 md:p-16 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800">
           <div 
             className="prose prose-lg dark:prose-invert max-w-none first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-5px]"
             dangerouslySetInnerHTML={renderHTML(post.content)}
           />
           
           <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="font-display font-bold text-2xl mb-4">Share this article</h3>
              <div className="flex gap-4">
                 <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-transform"><span className="material-icons-outlined text-sm">share</span></button>
                 <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:scale-110 transition-transform"><span className="material-icons-outlined text-sm">send</span></button>
              </div>
           </div>
        </div>
      </article>

      <Contact />
    </div>
  );
};
