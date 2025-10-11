'use client';

import { useState, useEffect } from 'react';
import { products } from '@/data/products';

export default function ProductDetail({ params }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(params.id));
    setProduct(foundProduct);
  }, [params.id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-600 mb-2">محصول یافت نشد</h2>
          <p className="text-gray-500">محصول مورد نظر وجود ندارد</p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    setIsAddedToCart(true);
    
    setTimeout(() => {
      setIsAddedToCart(false);
    }, 2000);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
  };

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  // تصاویر اضافی برای نمایش (در واقعیت از API دریافت می‌شود)
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 md:py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-4 sm:mb-6 md:mb-8">
          <ol className="flex items-center space-x-1 sm:space-x-2 space-x-reverse text-xs sm:text-sm text-gray-600">
            <li><a href="/" className="hover:text-blue-600">صفحه اصلی</a></li>
            <li className="text-gray-400">/</li>
            <li><a href="/products" className="hover:text-blue-600">محصولات</a></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium truncate">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* تصاویر محصول */}
          <div className="space-y-3 sm:space-y-4">
            {/* تصویر اصلی */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={productImages[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* تصاویر کوچک */}
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* اطلاعات محصول */}
          <div className="space-y-4 sm:space-y-6">
            {/* نام و برند */}
            <div>
              <div className="flex items-center justify-between mb-1 sm:mb-2">
                <span className="text-xs sm:text-sm text-gray-500">{product.brand}</span>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-sm sm:text-base">⭐</span>
                  <span className="text-xs sm:text-sm text-gray-600 mr-1">{product.rating}</span>
                  <span className="text-xs sm:text-sm text-gray-500">({product.reviews} نظر)</span>
                </div>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{product.name}</h1>
            </div>

            {/* قیمت */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2 sm:space-x-4 space-x-reverse mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-green-600">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-base sm:text-lg text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                      {discountPercentage}% تخفیف
                    </span>
                  </>
                )}
              </div>

              {/* وضعیت موجودی */}
              <div className="flex items-center mb-3 sm:mb-4">
                <span className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-2 ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className={`text-xs sm:text-sm ${product.inStock ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}`}>
                  {product.inStock ? 'موجود در انبار' : 'ناموجود'}
                </span>
              </div>

              {/* انتخاب تعداد */}
              <div className="flex items-center space-x-3 sm:space-x-4 space-x-reverse mb-4 sm:mb-6">
                <label className="text-gray-700 font-medium text-sm sm:text-base">تعداد:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2 sm:px-3 py-1 sm:py-2 hover:bg-gray-100 transition-colors text-sm sm:text-base"
                  >
                    -
                  </button>
                  <span className="px-3 sm:px-4 py-1 sm:py-2 border-x border-gray-300 text-sm sm:text-base">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2 sm:px-3 py-1 sm:py-2 hover:bg-gray-100 transition-colors text-sm sm:text-base"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* دکمه افزودن به سبد خرید */}
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium text-sm sm:text-base lg:text-lg transition-colors duration-200 ${
                  isAddedToCart
                    ? 'bg-green-500 text-white'
                    : product.inStock
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isAddedToCart ? '✅ افزوده شد به سبد خرید' : product.inStock ? '🛒 افزودن به سبد خرید' : 'ناموجود'}
              </button>
            </div>

            {/* توضیحات */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">توضیحات محصول</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{product.description}</p>
            </div>

            {/* ویژگی‌ها */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">ویژگی‌های کلیدی</h3>
              <ul className="space-y-1 sm:space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2 text-sm sm:text-base">✓</span>
                    <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* محصولات مشابه */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8">محصولات مشابه</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(similarProduct => (
                <div key={similarProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={similarProduct.image} 
                    alt={similarProduct.name}
                    className="w-full h-32 sm:h-40 md:h-48 object-cover"
                  />
                  <div className="p-3 sm:p-4">
                    <h3 className="font-semibold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">{similarProduct.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-bold text-xs sm:text-sm">{formatPrice(similarProduct.price)}</span>
                      <a 
                        href={`/product/${similarProduct.id}`}
                        className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm"
                      >
                        مشاهده →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
