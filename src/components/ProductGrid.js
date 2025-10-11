import ProductCard from './ProductCard';

export default function ProductGrid({ products, isLoading = false }) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
            <div className="w-full h-40 sm:h-48 bg-gray-300"></div>
            <div className="p-3 sm:p-4">
              <div className="h-3 sm:h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-3 sm:h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
              <div className="h-3 sm:h-4 bg-gray-300 rounded mb-3 sm:mb-4 w-1/2"></div>
              <div className="h-6 sm:h-8 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12">
        <div className="text-4xl sm:text-6xl mb-4">🔍</div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">محصولی یافت نشد</h3>
        <p className="text-sm sm:text-base text-gray-500">لطفاً فیلترهای جستجو را تغییر دهید</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
