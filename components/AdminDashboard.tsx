
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogPost, BlogTemplate } from '../types';
import { getPosts, savePost, deletePost } from '../utils/storage';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<'list' | 'editor'>('list');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin');
    }
    loadPosts();
  }, [navigate]);

  const loadPosts = () => {
    setPosts(getPosts());
  };

  const handleCreateNew = () => {
    const newPost: BlogPost = {
      id: Date.now().toString(),
      title: '',
      slug: '',
      content: '',
      excerpt: '',
      coverImage: '', // Empty by default
      category: 'General',
      author: 'Admin',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      template: 'classic',
      seo: {
        metaTitle: '',
        metaDescription: '',
        keywords: ''
      },
      status: 'draft'
    };
    setEditingPost(newPost);
    setView('editor');
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setView('editor');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(id);
      loadPosts();
    }
  };

  const handleSave = () => {
    if (editingPost) {
      // Auto-generate slug if empty
      const postToSave = {
        ...editingPost,
        slug: editingPost.slug || editingPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
      };
      
      savePost(postToSave);
      loadPosts();
      setView('list');
      alert('Post saved successfully!');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editingPost) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingPost({ ...editingPost, coverImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  if (view === 'list') {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
               <span className="material-icons-outlined text-sm">dashboard</span>
             </div>
             <h1 className="font-display text-xl font-bold">Content Manager</h1>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => { localStorage.removeItem('isAdmin'); navigate('/admin'); }}
              className="text-xs text-gray-400 hover:text-white"
            >
              Logout
            </button>
            <button 
              onClick={handleCreateNew}
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
            >
              <span className="material-icons-outlined text-sm">add</span> New Post
            </button>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <div key={post.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-lg group">
                <div className="h-40 bg-gray-700 relative overflow-hidden">
                  {post.coverImage ? (
                    <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-600">No Image</div>
                  )}
                  <div className="absolute top-2 right-2 flex gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${post.status === 'published' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                      {post.status}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 line-clamp-1">{post.title || 'Untitled Draft'}</h3>
                  <div className="text-xs text-gray-400 mb-4 flex items-center gap-2">
                    <span className="material-icons-outlined text-xs">calendar_today</span>
                    {post.date}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                    <button onClick={() => handleDelete(post.id)} className="text-red-400 hover:text-red-300 text-sm">Delete</button>
                    <button onClick={() => handleEdit(post)} className="text-primary hover:text-white text-sm font-semibold">Edit</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {posts.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <span className="material-icons-outlined text-6xl mb-4">article</span>
              <p>No posts found. Create your first blog post!</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // EDITOR VIEW
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Editor Header */}
      <div className="bg-gray-800 border-b border-gray-700 px-6 py-3 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button onClick={() => setView('list')} className="text-gray-400 hover:text-white flex items-center gap-1">
            <span className="material-icons-outlined">arrow_back</span> Back
          </button>
          <div className="h-6 w-px bg-gray-700"></div>
          <span className="text-sm font-mono text-gray-500">{editingPost?.status}</span>
        </div>
        <button 
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg shadow-green-900/20 transition-all"
        >
          Save Changes
        </button>
      </div>

      <div className="flex-grow flex flex-col lg:flex-row h-[calc(100vh-64px)] overflow-hidden">
        
        {/* Main Content Area */}
        <div className="flex-grow overflow-y-auto p-6 lg:p-12">
          <div className="max-w-3xl mx-auto space-y-8">
            
            {/* Title Input */}
            <input 
              type="text"
              value={editingPost?.title}
              onChange={(e) => setEditingPost({ ...editingPost!, title: e.target.value })}
              placeholder="Enter Post Title..."
              className="w-full bg-transparent text-4xl lg:text-5xl font-display font-bold text-white placeholder-gray-600 border-none focus:ring-0 px-0"
            />

            {/* Template Selector */}
            <div className="flex gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider py-1">Layout Style:</span>
              {(['classic', 'modern', 'immersive'] as BlogTemplate[]).map(temp => (
                <button
                  key={temp}
                  onClick={() => setEditingPost({ ...editingPost!, template: temp })}
                  className={`px-3 py-1 rounded text-sm capitalize transition-colors ${editingPost?.template === temp ? 'bg-primary text-white' : 'text-gray-400 hover:bg-gray-700'}`}
                >
                  {temp}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="relative">
              <textarea 
                value={editingPost?.content}
                onChange={(e) => setEditingPost({ ...editingPost!, content: e.target.value })}
                placeholder="Start writing your masterpiece... (Markdown supported)"
                className="w-full h-[60vh] bg-transparent text-lg text-gray-300 leading-relaxed border-none focus:ring-0 px-0 resize-none font-sans"
              />
            </div>
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="w-full lg:w-96 bg-gray-800 border-l border-gray-700 overflow-y-auto p-6 space-y-8">
          
          {/* Publish Settings */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm text-gray-400 uppercase tracking-wider">Publishing</h3>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-gray-500">Status</label>
              <select 
                value={editingPost?.status}
                onChange={(e) => setEditingPost({ ...editingPost!, status: e.target.value as any })}
                className="bg-gray-900 border border-gray-700 rounded p-2 text-sm text-white"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-gray-500">Category</label>
              <input 
                type="text" 
                value={editingPost?.category}
                onChange={(e) => setEditingPost({ ...editingPost!, category: e.target.value })}
                className="bg-gray-900 border border-gray-700 rounded p-2 text-sm text-white" 
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-gray-500">Excerpt (Short Summary)</label>
              <textarea 
                rows={3}
                value={editingPost?.excerpt}
                onChange={(e) => setEditingPost({ ...editingPost!, excerpt: e.target.value })}
                className="bg-gray-900 border border-gray-700 rounded p-2 text-sm text-white" 
              />
            </div>
          </div>

          {/* Featured Image */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm text-gray-400 uppercase tracking-wider">Featured Image</h3>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center hover:bg-gray-700/50 transition-colors relative">
              {editingPost?.coverImage ? (
                <div className="relative group">
                  <img src={editingPost.coverImage} alt="Cover" className="w-full h-40 object-cover rounded" />
                  <button 
                    onClick={() => setEditingPost({ ...editingPost!, coverImage: '' })}
                    className="absolute top-2 right-2 bg-red-600 p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="material-icons-outlined text-sm">close</span>
                  </button>
                </div>
              ) : (
                <div className="py-8">
                  <span className="material-icons-outlined text-3xl text-gray-500">add_photo_alternate</span>
                  <p className="text-xs text-gray-500 mt-2">Click to upload cover image</p>
                </div>
              )}
              <input 
                type="file" 
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>

          {/* SEO Yoast Style */}
          <div className="space-y-4 pt-4 border-t border-gray-700">
            <h3 className="font-bold text-sm text-gray-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> SEO Optimization
            </h3>
            
            {/* Google Snippet Preview */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-xs text-gray-500 mb-1">Google Preview (Mobile)</div>
              <div className="flex flex-col gap-1 font-sans">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-800">tecontractorsinutah.com</span>
                    <span className="text-[10px] text-gray-500">https://tecontractorsinutah.com › blog</span>
                  </div>
                </div>
                <div className="text-[#1a0dab] text-sm font-medium hover:underline cursor-pointer truncate">
                  {editingPost?.seo.metaTitle || editingPost?.title || 'Post Title'}
                </div>
                <div className="text-xs text-[#4d5156] line-clamp-2">
                  {editingPost?.seo.metaDescription || editingPost?.excerpt || 'Please enter a meta description to see a preview of how your page will appear in search results.'}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs text-gray-500">SEO Title</label>
                <input 
                  type="text" 
                  value={editingPost?.seo.metaTitle}
                  onChange={(e) => setEditingPost({ ...editingPost!, seo: { ...editingPost!.seo, metaTitle: e.target.value } })}
                  className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-sm text-white" 
                />
                <div className="w-full bg-gray-700 h-1 mt-1 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${editingPost?.seo.metaTitle.length! > 60 ? 'bg-red-500' : 'bg-green-500'}`} 
                    style={{ width: `${Math.min((editingPost?.seo.metaTitle.length || 0) / 0.6, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500">Meta Description</label>
                <textarea 
                  rows={3}
                  value={editingPost?.seo.metaDescription}
                  onChange={(e) => setEditingPost({ ...editingPost!, seo: { ...editingPost!.seo, metaDescription: e.target.value } })}
                  className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-sm text-white" 
                />
                 <div className="w-full bg-gray-700 h-1 mt-1 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${editingPost?.seo.metaDescription.length! > 160 ? 'bg-red-500' : 'bg-green-500'}`} 
                    style={{ width: `${Math.min((editingPost?.seo.metaDescription.length || 0) / 1.6, 100)}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500">Focus Keywords</label>
                <input 
                  type="text" 
                  value={editingPost?.seo.keywords}
                  onChange={(e) => setEditingPost({ ...editingPost!, seo: { ...editingPost!.seo, keywords: e.target.value } })}
                  placeholder="concrete, heated driveway, etc."
                  className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-sm text-white" 
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
