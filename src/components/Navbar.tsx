import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">Alen Koikkara</span>
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link to="/" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/blog" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/blog')}`}>
              Blog
            </Link>
            <Link to="/photography" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/photography')}`}>
              Photography
            </Link>
            <Link to="/about" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/about')}`}>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 