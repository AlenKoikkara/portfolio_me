import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center">
            <Link to="/" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/blogs" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
              Blogs
            </Link>
            <Link to="/photography" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
              Photography
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 