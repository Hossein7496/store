'use client';

import { useState, useEffect } from 'react';
import Cart from './Cart';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // دریافت تعداد آیتم‌های سبد خرید از localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartCount(cart.length);
      
      // گوش دادن به تغییرات localStorage
      const handleStorageChange = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartCount(cart.length);
      };
      
      window.addEventListener('storage', handleStorageChange);
      return () => window.removeEventListener('storage', handleStorageChange);
    }
  }, []);

  return (
    <>
      <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* لوگو و نام فروشگاه */}
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="text-xl sm:text-2xl font-bold">🛒</div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">فروشگاه تکنولوژی</h1>
            </div>

            {/* منوی ناوبری دسکتاپ */}
            <nav className="hidden lg:flex items-center space-x-6 space-x-reverse">
              <a href="/" className="hover:text-blue-200 transition-colors text-sm md:text-base">
                صفحه اصلی
              </a>
              <a href="/products" className="hover:text-blue-200 transition-colors text-sm md:text-base">
                محصولات
              </a>
              <a href="/categories" className="hover:text-blue-200 transition-colors text-sm md:text-base">
                دسته‌بندی‌ها
              </a>
              <a href="/about" className="hover:text-blue-200 transition-colors text-sm md:text-base">
                درباره ما
              </a>
            </nav>

            {/* سبد خرید و منوی موبایل */}
            <div className="flex items-center space-x-3 space-x-reverse">
              {/* سبد خرید */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative bg-blue-700 hover:bg-blue-800 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-colors"
              >
                <span className="text-base sm:text-lg">🛍️</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* دکمه منوی موبایل */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white hover:text-blue-200 transition-colors p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* منوی موبایل */}
          <div className={`lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <nav className="flex flex-col space-y-2 pt-4 border-t border-blue-500">
              <a 
                href="/" 
                className="hover:text-blue-200 transition-colors py-2 px-2 rounded hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                صفحه اصلی
              </a>
              <a 
                href="/products" 
                className="hover:text-blue-200 transition-colors py-2 px-2 rounded hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                محصولات
              </a>
              <a 
                href="/categories" 
                className="hover:text-blue-200 transition-colors py-2 px-2 rounded hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                دسته‌بندی‌ها
              </a>
              <a 
                href="/about" 
                className="hover:text-blue-200 transition-colors py-2 px-2 rounded hover:bg-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                درباره ما
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* کامپوننت سبد خرید */}
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
    </>
  );
}
