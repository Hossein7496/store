'use client';

import { useState, useEffect } from 'react';

export default function Cart({ onClose }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartItems(cart);
    }
  }, []);

  const updateCart = (newCart) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const removeItem = (productId) => {
    const newCart = cartItems.filter(item => item.id !== productId);
    updateCart(newCart);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(productId);
      return;
    }
    
    const newCart = cartItems.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    updateCart(newCart);
  };

  const clearCart = () => {
    updateCart([]);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
  };

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
        {/* هدر سبد خرید */}
        <div className="bg-blue-600 text-white p-3 sm:p-4 flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold">سبد خرید ({totalItems} آیتم)</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 text-xl sm:text-2xl"
          >
            ×
          </button>
        </div>

        {/* محتوای سبد خرید */}
        <div className="p-3 sm:p-4 overflow-y-auto max-h-[60vh]">
          {cartItems.length === 0 ? (
            <div className="text-center py-6 sm:py-8">
              <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🛒</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">سبد خرید شما خالی است</h3>
              <p className="text-sm sm:text-base text-gray-500 mb-3 sm:mb-4">محصولی برای خرید انتخاب نکرده‌اید</p>
              <button
                onClick={onClose}
                className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                ادامه خرید
              </button>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3 sm:space-x-4 space-x-reverse bg-gray-50 p-3 sm:p-4 rounded-lg">
                  {/* تصویر محصول */}
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg"
                  />
                  
                  {/* اطلاعات محصول */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base truncate">{item.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">{item.brand}</p>
                    <p className="text-green-600 font-bold text-xs sm:text-sm">{formatPrice(item.price)}</p>
                  </div>

                  {/* کنترل تعداد */}
                  <div className="flex items-center space-x-1 sm:space-x-2 space-x-reverse">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-xs sm:text-sm"
                    >
                      -
                    </button>
                    <span className="w-6 sm:w-8 text-center font-medium text-xs sm:text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-xs sm:text-sm"
                    >
                      +
                    </button>
                  </div>

                  {/* دکمه حذف */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 p-1 sm:p-2 text-sm sm:text-base"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* فوتر سبد خرید */}
        {cartItems.length > 0 && (
          <div className="border-t p-3 sm:p-4 bg-gray-50">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-base sm:text-lg font-semibold">مجموع کل:</span>
              <span className="text-lg sm:text-xl font-bold text-green-600">{formatPrice(totalPrice)}</span>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 sm:space-x-reverse">
              <button
                onClick={clearCart}
                className="flex-1 bg-gray-500 text-white py-2 px-3 sm:px-4 rounded-lg hover:bg-gray-600 transition-colors text-sm sm:text-base"
              >
                پاک کردن سبد خرید
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-blue-600 text-white py-2 px-3 sm:px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
              >
                ادامه خرید
              </button>
              <button
                className="flex-1 bg-green-600 text-white py-2 px-3 sm:px-4 rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
              >
                تسویه حساب
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
