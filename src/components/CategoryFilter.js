'use client';

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">دسته‌بندی‌ها</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
        <button
          onClick={() => onCategoryChange('all')}
          className={`p-2 sm:p-3 rounded-lg border-2 transition-colors duration-200 text-xs sm:text-sm ${
            selectedCategory === 'all'
              ? 'border-blue-500 bg-blue-50 text-blue-700'
              : 'border-gray-200 hover:border-gray-300 text-gray-700'
          }`}
        >
          <div className="text-lg sm:text-2xl mb-1">🛍️</div>
          <div className="font-medium">همه محصولات</div>
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`p-2 sm:p-3 rounded-lg border-2 transition-colors duration-200 text-xs sm:text-sm ${
              selectedCategory === category.id
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300 text-gray-700'
            }`}
          >
            <div className="text-lg sm:text-2xl mb-1">{category.icon}</div>
            <div className="font-medium">{category.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
