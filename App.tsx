import React, { useState, useEffect } from 'react';
import { CATEGORIES, PRODUCTS, RESTAURANT_CONFIG } from './data';
import { Product, CartItem } from './types';
import { Hero } from './components/Hero';
import { CategoryNav } from './components/CategoryNav';
import { ProductCard } from './components/ProductCard';
import { CartModal } from './components/CartModal';
import { ShoppingBag, Menu, Phone } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(0, item.quantity + delta) };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const clearCart = () => setCart([]);

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.categoryId === activeCategory);

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen pb-20 bg-gray-50 font-sans">
      
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <div className={`flex items-center gap-2 ${isScrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'} transition-opacity`}>
             <span className="font-bold text-xl text-brand-600 bg-white/90 px-2 py-1 rounded-md">{RESTAURANT_CONFIG.name}</span>
          </div>
          
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative bg-white text-gray-800 p-2.5 rounded-full shadow-lg hover:bg-gray-50 transition-transform active:scale-95"
          >
            <ShoppingBag size={24} className="text-brand-600" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-600 text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto md:px-4">
        <Hero />
        
        <CategoryNav 
          categories={CATEGORIES} 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />

        <div className="px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              {activeCategory === 'all' ? 'Nuestro Menú' : CATEGORIES.find(c => c.id === activeCategory)?.name}
            </h2>
            <span className="text-sm text-gray-500">{filteredProducts.length} productos</span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAdd={addToCart} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500">
              <p>No hay productos en esta categoría.</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 mt-10 pb-8 pt-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <img src={RESTAURANT_CONFIG.logoUrl} alt="Logo Footer" className="h-12 w-12 rounded-full mx-auto mb-3 object-cover opacity-80" />
           <p className="font-bold text-gray-700">{RESTAURANT_CONFIG.name}</p>
           <p className="text-sm text-gray-500 mt-1">¡El mejor sabor en cada bocado!</p>
           
           <div className="flex justify-center gap-4 mt-4">
             <a href={`https://wa.me/${RESTAURANT_CONFIG.phone}`} className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-100 transition-colors">
               <Phone size={16} /> Contactar Soporte
             </a>
           </div>

           <p className="text-xs text-gray-400 mt-8">© {new Date().getFullYear()} {RESTAURANT_CONFIG.name}. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Cart Modal */}
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onClearCart={clearCart}
      />
    </div>
  );
}