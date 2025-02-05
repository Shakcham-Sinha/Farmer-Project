import React from 'react';
import { Menu, X, Tractor } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Tractor className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">FarmConnect</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-green-600">Dashboard</Link>
            <Link to="/marketplace" className="text-gray-700 hover:text-green-600">Marketplace</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
            <Link to="/login" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Login
            </Link>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Home</Link>
              <Link to="/dashboard" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Dashboard</Link>
              <Link to="/marketplace" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Marketplace</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">About</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Contact</Link>
              <Link to="/login" className="block px-3 py-2 text-green-600 hover:bg-gray-100">Login</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}