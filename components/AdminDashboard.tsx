import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 border-b border-gray-700 px-6 py-4 flex justify-between items-center">
        <h1 className="font-display text-xl font-bold">LC Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">Welcome, Admin</span>
          <button 
            onClick={handleLogout}
            className="text-xs bg-red-600/20 hover:bg-red-600 text-red-200 hover:text-white px-3 py-2 rounded transition-colors"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6 lg:p-10">
        <div className="bg-gray-800 rounded-xl p-10 text-center border border-gray-700 shadow-xl">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-icons-outlined text-4xl text-primary">construction</span>
          </div>
          <h2 className="text-3xl font-display font-bold mb-4">Dashboard Under Construction</h2>
          <p className="text-gray-400 max-w-lg mx-auto mb-8">
            The Content Management System (CMS) is currently being set up. You will be able to manage blog posts and inquiries here soon.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 text-yellow-500 rounded-lg border border-yellow-500/20">
            <span className="material-icons-outlined mr-2 text-sm">warning</span>
            <span>Awaiting Development Specification</span>
          </div>
        </div>
      </div>
    </div>
  );
};