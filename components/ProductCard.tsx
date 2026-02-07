import React from 'react';
import { Product } from '../types';
import { RESTAURANT_CONFIG } from '../data';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAdd }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow relative group">
      {/* Image container set to aspect-square (1:1 ratio) */}
      <div className="w-full aspect-square relative overflow-hidden bg-gray-100">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Floating add button for visual appeal on the image corner */}
        <button 
            onClick={(e) => {
              e.stopPropagation();
              onAdd(product);
            }}
            className="absolute bottom-2 right-2 w-9 h-9 rounded-full bg-brand-600 text-white flex items-center justify-center hover:bg-brand-700 transition-colors shadow-lg active:scale-95 z-10"
            aria-label={`Agregar ${product.name}`}
          >
            <Plus size={20} strokeWidth={3} />
        </button>
      </div>
      
      <div className="p-3 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base leading-tight line-clamp-2">{product.name}</h3>
        </div>
        
        <div className="mt-2 pt-2 border-t border-gray-50 flex items-center justify-between">
          <span className="font-extrabold text-base md:text-lg text-brand-700">
            {RESTAURANT_CONFIG.currency} {product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};