import React from 'react';
import { RESTAURANT_CONFIG } from '../data';
import { MapPin, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full bg-white shadow-md rounded-b-3xl mb-8">
      {/* Cover Image Container with border radius clipping */}
      <div className="h-48 md:h-64 w-full relative rounded-b-3xl overflow-hidden">
        <img 
          src={RESTAURANT_CONFIG.coverUrl} 
          alt="Portada" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      {/* Logo - Positioned relative to the container, overlapping the bottom of the cover */}
      <div className="absolute top-36 md:top-48 left-6 z-10">
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white overflow-hidden bg-white shadow-lg">
           <img 
            src={RESTAURANT_CONFIG.logoUrl} 
            alt="Logo" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="pt-14 pb-6 px-4 md:pl-44">
        {/* Mobile: Text below logo. Desktop: Text beside logo area */}
        <div className="mt-2 md:mt-0 ml-2 md:ml-0">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">{RESTAURANT_CONFIG.name}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-gray-600">
             <span className="flex items-center gap-1">
               <MapPin size={16} className="text-brand-600" /> 
               Lima, Perú
             </span>
             <span className="flex items-center gap-1">
               <Clock size={16} className="text-brand-600" /> 
               Abierto ahora
             </span>
          </div>
        </div>
      </div>
    </div>
  );
};