
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const BlogPost: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect any specific post access to the main blog page (which shows Under Construction)
    navigate('/blog', { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
      <p>Redirecting...</p>
    </div>
  );
};
