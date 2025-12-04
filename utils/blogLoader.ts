import { BlogPost } from '../types';

// Load the manifest (List of all posts)
export const loadPosts = async (): Promise<BlogPost[]> => {
  try {
    // Fetch the JSON manifest from the public folder
    const response = await fetch('/posts.json', { cache: 'no-cache' });
    if (!response.ok) {
      console.warn('Failed to fetch posts manifest');
      return [];
    }
    const posts = await response.json();
    
    // Sort by date descending
    return posts.sort((a: BlogPost, b: BlogPost) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (e) {
    console.error('Error loading posts:', e);
    return [];
  }
};

// Load a single post's HTML content
export const loadPostContent = async (slug: string): Promise<string | null> => {
  try {
    const response = await fetch(`/posts/${slug}.html`, { cache: 'no-cache' });
    if (!response.ok) return null;
    return await response.text();
  } catch (e) {
    console.error(`Error loading post content for ${slug}:`, e);
    return null;
  }
};