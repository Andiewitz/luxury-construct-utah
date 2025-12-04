
import { BlogPost } from '../types';

const STORAGE_KEY = 'luxury_construct_blog_posts';

// Start with an empty list so the admin can create their own content from scratch
const INITIAL_POSTS: BlogPost[] = [];

export const getPosts = (): BlogPost[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    // Initialize with empty data if nothing exists
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_POSTS));
    return INITIAL_POSTS;
  }
  return JSON.parse(data);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  const posts = getPosts();
  return posts.find(p => p.slug === slug);
};

export const savePost = (post: BlogPost): void => {
  const posts = getPosts();
  const index = posts.findIndex(p => p.id === post.id);
  
  if (index >= 0) {
    posts[index] = post;
  } else {
    posts.unshift(post); // Add to top
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
};

export const deletePost = (id: string): void => {
  const posts = getPosts();
  const filtered = posts.filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};
