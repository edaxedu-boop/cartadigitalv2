import React, { useState } from 'react';
import { CartItem, OrderType, UserInfo } from '../types';
import { RESTAURANT_CONFIG } from '../data';
import { X, Minus, Plus, ShoppingBag, Send } from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearCart: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({ 
  isOpen, 
  onClose, 
  cart, 
  onUpdateQuantity,
  onClearCart
}) => {
  const [orderType, setOrderType] = useState<OrderType>('delivery');
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', address: '', reference: '' });

  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckout = () => {
    if (!userInfo.name.trim()) {
      alert('Por favor ingresa tu nombre');
      return;
    }
    if (orderType === 'delivery' && !userInfo.address.trim()) {
      alert('Por favor ingresa tu dirección de entrega');
      return;
    }

    let message = `*Hola ${RESTAURANT_CONFIG.name}, deseo realizar un pedido:*\n\n`;
    
    cart.forEach(item => {
      message += `▪️ ${item.quantity}x ${item.name} (${RESTAURANT_CONFIG.currency} ${(item.price * item.quantity).toFixed(2)})\n`;
    });

    message += `\n*Total: ${RESTAURANT_CONFIG.currency} ${total.toFixed(2)}*\n\n`;
    message += `*Datos del Cliente:*\n`;
    message += `👤 Nombre: ${userInfo.name}\n`;
    message += `🛵 Tipo: ${orderType === 'delivery' ? 'Delivery' : 'Para Llevar'}\n`;
    
    if (orderType === 'delivery') {
      message += `📍 Dirección: ${userInfo.address}\n`;
      if (userInfo.reference) message += `📝 Referencia: ${userInfo.reference}\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESTAURANT_CONFIG.phone}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm transition-opacity" onClick={onClose}>
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-brand-600" />
            <h2 className="text-xl font-bold text-gray-800">Tu Pedido</h2>
            <span className="bg-brand-100 text-brand-600 text-xs font-bold px-2 py-0.5 rounded-full">
              {itemCount}
            </span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
              <ShoppingBag size={64} className="opacity-20" />
              <p className="text-center font-medium">Tu carrito está vacío.</p>
              <button 
                onClick={onClose}
                className="text-brand-600 font-semibold hover:underline"
              >
                Ver menú
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                  <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded-lg object-cover bg-gray-100" />
                  <div className="ml-3 flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-sm text-gray-800 line-clamp-2">{item.name}</h4>
                      <span className="font-bold text-sm text-brand-600 ml-2">
                        {RESTAURANT_CONFIG.currency} {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-2 self-end">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center text-white hover:bg-brand-700"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Checkout Section */}
        {cart.length > 0 && (
          <div className="bg-white p-4 border-t border-gray-100 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <div className="mb-4 space-y-3">
               {/* Order Type Toggle */}
              <div className="flex bg-gray-100 p-1 rounded-lg">
                <button 
                  onClick={() => setOrderType('delivery')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    orderType === 'delivery' ? 'bg-white text-brand-600 shadow-sm' : 'text-gray-500'
                  }`}
                >
                  Delivery
                </button>
                <button 
                  onClick={() => setOrderType('pickup')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    orderType === 'pickup' ? 'bg-white text-brand-600 shadow-sm' : 'text-gray-500'
                  }`}
                >
                  Para Llevar
                </button>
              </div>

              {/* Form Fields */}
              <div className="space-y-3 animate-in fade-in duration-300">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu Nombre"
                  value={userInfo.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white text-sm"
                />
                
                {orderType === 'delivery' && (
                  <>
                    <input
                      type="text"
                      name="address"
                      placeholder="Dirección de entrega"
                      value={userInfo.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white text-sm"
                    />
                     <input
                      type="text"
                      name="reference"
                      placeholder="Referencia (Opcional)"
                      value={userInfo.reference}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white text-sm"
                    />
                  </>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center mb-4 pt-2 border-t border-dashed border-gray-200">
              <span className="text-gray-600 font-medium">Total a Pagar</span>
              <span className="text-2xl font-bold text-gray-900">{RESTAURANT_CONFIG.currency} {total.toFixed(2)}</span>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg shadow-green-200"
            >
              <Send size={20} />
              Enviar Pedido por WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
};