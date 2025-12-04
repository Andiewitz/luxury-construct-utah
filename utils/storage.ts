
import { BlogPost } from '../types';

const STORAGE_KEY = 'luxury_construct_blog_posts';

// Initial dummy data to populate if empty
const INITIAL_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Why Heated Driveways are Essential for Utah Winters',
    slug: 'why-heated-driveways-are-essential',
    excerpt: 'Stop shoveling snow this winter. Discover the technology behind radiant heating systems and why they increase property value in Salt Lake City.',
    content: "Living in Salt Lake City means dealing with heavy snowfall. But what if you never had to shovel again?\n\nHeated driveways use radiant heating technology to melt snow as it lands, preventing ice buildup and eliminating the need for manual removal or harsh chemicals.\n\n### How It Works\nA mixture of water and anti-freeze is pumped through tubing installed within the concrete slab. Sensors detect moisture and freezing temperatures, automatically activating the system.\n\n### Benefits\n1. **Safety**: No slip hazards.\n2. **Convenience**: Wake up to a clear driveway.\n3. **Longevity**: Prevents concrete damage from freeze-thaw cycles and salt.\n\nContact Luxury Construction today for a quote on retrofitting or new installation.",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUMJ-3aBtXJIaKM40xnHm2C5sZBYRPnYRDNezyvT2tC9nM9OpM4pajoPZVwiT6AI-Nlp7gls7gnsE6fWoJRdvB2HqsJ0Blz4xEePqr5Otq6ZgMyT3F6SG6xct7EEr7sJqZ2CVMQG6Ik7elTSMUtsSunwJ3IWl-5lMn9mTKBwqeILTbGiwxQpuVdbaTyi9rX-yQAuHgtsRQV3slPVCFWPFe61u3J819zOOcSffWvlVD8BC8jWTT1yHnGSkSR5NndpPe-xIIEAd-ITe0",
    category: "Driveways",
    author: "Admin",
    date: "Oct 12, 2024",
    template: 'modern',
    seo: {
      metaTitle: "Heated Driveways Salt Lake City | Luxury Construction",
      metaDescription: "Learn why radiant heated driveways are the ultimate upgrade for Utah homes. Stop shoveling snow and protect your concrete.",
      keywords: "heated driveways utah, radiant heat, snow melting system"
    },
    status: 'published'
  }
];

export const getPosts = (): BlogPost[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    // Initialize with dummy data
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
