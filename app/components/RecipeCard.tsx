import * as React from 'react';
import { Link } from '@remix-run/react';
import type { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link 
      to={`/recipe/${recipe.id}`}
      className="block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
    >
      <div className="relative">
        <img 
          src={recipe.image} 
          alt={recipe.name}
          loading="lazy"
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 right-2 px-2 py-1 bg-indigo-600 dark:bg-indigo-500 text-white text-sm rounded-full">
          {recipe.cuisine}
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{recipe.name}</h2>
        <div className="flex items-center mb-4">
          <span className="text-yellow-400 mr-1">★</span>
          <span className="text-gray-600 dark:text-gray-300">{recipe.rating.toFixed(1)}</span>
          <span className="text-gray-400 dark:text-gray-500 mx-1">•</span>
          <span className="text-gray-600 dark:text-gray-300">{recipe.reviewCount} reviews</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {recipe.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
} 
