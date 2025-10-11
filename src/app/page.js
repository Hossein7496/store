'use client';

import { useState, useEffect } from 'react';
import { products, categories, searchProducts, sortProducts } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';
import CategoryFilter from '@/components/CategoryFilter';
import SearchAndSort from '@/components/SearchAndSort';

export default function Home() {
  const [allProducts, setAllProducts] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [isLoading, setIsLoading] = useState(false);

  // فیلتر کردن محصولات بر اساس دسته‌بندی و جستجو
  useEffect(() => {
    setIsLoading(true);
    
    let filtered = allProducts;
    
    // فیلتر بر اساس دسته‌بندی
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // فیلتر بر اساس جستجو
    if (searchQuery.trim()) {
      filtered = searchProducts(searchQuery);
      if (selectedCategory !== 'all') {
        filtered = filtered.filter(product => product.category === selectedCategory);
      }
    }
    
    // مرتب‌سازی
    filtered = sortProducts(filtered, sortBy);
    
    setFilteredProducts(filtered);
    
    // شبیه‌سازی بارگذاری
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [selectedCategory, searchQuery, sortBy, allProducts]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            فروشگاه آنلاین تکنولوژی
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90">
            بهترین محصولات موبایل، کامپیوتر، لپ‌تاپ و لوازم جانبی
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-base lg:text-lg">
            <span className="bg-white bg-opacity-20 px-3 py-1 sm:px-4 sm:py-2 rounded-full">📱 موبایل</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 sm:px-4 sm:py-2 rounded-full">💻 لپ‌تاپ</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 sm:px-4 sm:py-2 rounded-full">🖥️ کامپیوتر</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 sm:px-4 sm:py-2 rounded-full">📱 تبلت</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 sm:px-4 sm:py-2 rounded-full">🎧 لوازم جانبی</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-4 sm:py-6 md:py-8">
        {/* فیلتر دسته‌بندی */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* جستجو و مرتب‌سازی */}
        <SearchAndSort
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalProducts={filteredProducts.length}
        />

        {/* نمایش محصولات */}
        <ProductGrid products={filteredProducts} isLoading={isLoading} />
      </div>

      {/* ویژگی‌های فروشگاه */}
      <div className="bg-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            چرا فروشگاه ما؟
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🚚</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">ارسال رایگان</h3>
              <p className="text-sm sm:text-base text-gray-600">ارسال رایگان برای تمام سفارشات بالای 500 هزار تومان</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🛡️</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">گارانتی معتبر</h3>
              <p className="text-sm sm:text-base text-gray-600">گارانتی رسمی و پشتیبانی کامل برای تمام محصولات</p>
            </div>
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">💳</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">پرداخت امن</h3>
              <p className="text-sm sm:text-base text-gray-600">پرداخت امن و مطمئن با تمام کارت‌های بانکی</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
