import * as React from 'react';
import { Link } from '@remix-run/react';
import ThemeSelector from './ThemeSelector';

const categories = [
  'Asian',
  'American',
  'Italian',
  'Mexican',
  'Mediterranean',
  'Indian'
];

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
            Recipe App
          </Link>
          <div className="flex items-center space-x-4">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {category}
              </Link>
            ))}
            <ThemeSelector />
          </div>
        </div>
      </nav>
    </header>
  );
} 
