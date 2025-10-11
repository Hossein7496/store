'use client';

export default function SearchAndSort({ 
  searchQuery, 
  onSearchChange, 
  sortBy, 
  onSortChange,
  totalProducts 
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* جستجو */}
        <div className="flex-1">
          <div className="relative">
            <input
              type="text"
              placeholder="جستجو در محصولات..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pr-10 pl-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </div>
          </div>
        </div>

        {/* مرتب‌سازی و تعداد نتایج */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
          <div className="text-xs sm:text-sm text-gray-600 order-2 sm:order-1">
            {totalProducts} محصول یافت شد
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base order-1 sm:order-2"
          >
            <option value="newest">جدیدترین</option>
            <option value="price-low">ارزان‌ترین</option>
            <option value="price-high">گران‌ترین</option>
            <option value="rating">بهترین امتیاز</option>
          </select>
        </div>
      </div>
    </div>
  );
}
