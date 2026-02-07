import React from 'react';
import { Category } from '../types';

interface CategoryNavProps {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <div className="sticky top-[60px] z-30 bg-white border-b border-gray-100 py-3 shadow-sm">
      <div className="flex overflow-x-auto gap-3 px-4 no-scrollbar pb-1 items-center">
        <button
          onClick={() => onSelectCategory('all')}
          className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-bold transition-all border ${
            activeCategory === 'all' 
              ? 'bg-brand-600 text-white border-brand-600 shadow-md' 
              : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
          }`}
        >
          Todos
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`flex-shrink-0 flex items-center gap-2 pr-4 pl-1.5 py-1.5 rounded-full text-sm font-bold transition-all border ${
              activeCategory === cat.id 
                ? 'bg-brand-600 text-white border-brand-600 shadow-md' 
                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
            }`}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 border border-white/50">
              {cat.imageUrl && (
                <img 
                  src={cat.imageUrl} 
                  alt={cat.name} 
                  className="w-full h-full object-cover" 
                />
              )}
            </div>
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};