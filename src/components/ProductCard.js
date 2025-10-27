'use client';

import { useState } from 'react';

export default function ProductCard({ product }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    // دریافت سبد خرید از localStorage
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    // بررسی وجود محصول در سبد خرید
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    
    // ذخیره در localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    setIsAddedToCart(true);
    
    // نمایش پیام موفقیت
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
  };

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* بخش تصویر محصول / Product image section */}
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-32 sm:h-40 md:h-48 object-cover"
        />
        {/* نمایش درصد تخفیف / Show discount percentage */}
        {product.originalPrice > product.price && (
          <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-red-500 text-white px-1 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
            {discountPercentage}% تخفیف
          </div>
        )}
        {/* نمایش وضعیت ناموجود / Show out of stock status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-sm sm:text-lg font-bold">ناموجود</span>
          </div>
        )}
      </div>

      {/* بخش اطلاعات محصول / Product information section */}
      <div className="p-3 sm:p-4">
        {/* برند و امتیاز محصول / Product brand and rating */}
        <div className="flex items-center justify-between mb-1 sm:mb-2">
          <span className="text-xs sm:text-sm text-gray-500">{product.brand}</span>
          <div className="flex items-center">
            <span className="text-yellow-400 text-sm sm:text-base">⭐</span>
            <span className="text-xs sm:text-sm text-gray-600 mr-1">{product.rating}</span>
            <span className="text-xs sm:text-sm text-gray-500">({product.reviews})</span>
          </div>
        </div>

        {/* نام محصول / Product name */}
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1 sm:mb-2 line-clamp-2">
          <a href={`/product/${product.id}`} className="hover:text-blue-600 transition-colors">
            {product.name}
          </a>
        </h3>

        {/* توضیحات محصول / Product description */}
        <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* بخش قیمت / Price section */}
        <div className="mb-3 sm:mb-4">
          <div className="flex items-center space-x-1 sm:space-x-2 space-x-reverse">
            <span className="text-sm sm:text-base md:text-lg font-bold text-green-600">
              {formatPrice(product.price)}
            </span>
            {/* نمایش قیمت اصلی در صورت تخفیف / Show original price if discounted */}
            {product.originalPrice > product.price && (
              <span className="text-xs sm:text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>

        {/* ویژگی‌های کلیدی محصول / Product key features */}
        <div className="mb-3 sm:mb-4">
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 2).map((feature, index) => (
              <span 
                key={index}
                className="bg-blue-100 text-blue-800 text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
            {/* نمایش تعداد ویژگی‌های بیشتر / Show count of additional features */}
            {product.features.length > 2 && (
              <span className="bg-gray-100 text-gray-600 text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full">
                +{product.features.length - 2} بیشتر
              </span>
            )}
          </div>
        </div>

        {/* دکمه افزودن به سبد خرید / Add to cart button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg font-medium text-xs sm:text-sm transition-colors duration-200 ${
            isAddedToCart
              ? 'bg-green-500 text-white'
              : product.inStock
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isAddedToCart ? '✅ افزوده شد' : product.inStock ? '🛒 افزودن به سبد خرید' : 'ناموجود'}
        </button>
      </div>
    </div>
  );
}
