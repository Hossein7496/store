import { products } from '@/data/products';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetail({ params }) {
  const product = products.find(p => p.id === parseInt(params.id));

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

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
  };

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 md:py-8">
      <div className="container mx-auto px-4">
        {/* مسیر ناوبری (Breadcrumb) / Navigation breadcrumb */}
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
          {/* بخش تصاویر محصول / Product images section */}
          <div className="space-y-3 sm:space-y-4">
            {/* تصویر اصلی محصول / Main product image */}
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* بخش اطلاعات محصول / Product information section */}
          <div className="space-y-4 sm:space-y-6">
            {/* نام و برند محصول / Product name and brand */}
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

            {/* بخش قیمت و خرید / Price and purchase section */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              {/* نمایش قیمت / Price display */}
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

              {/* وضعیت موجودی / Stock status */}
              <div className="flex items-center mb-3 sm:mb-4">
                <span className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-2 ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className={`text-xs sm:text-sm ${product.inStock ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}`}>
                  {product.inStock ? 'موجود در انبار' : 'ناموجود'}
                </span>
              </div>

              {/* دکمه افزودن به سبد خرید / Add to cart button */}
              <button
                disabled={!product.inStock}
                className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium text-sm sm:text-base lg:text-lg transition-colors duration-200 ${
                  product.inStock
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {product.inStock ? '🛒 افزودن به سبد خرید' : 'ناموجود'}
              </button>
            </div>

            {/* توضیحات محصول / Product description */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">توضیحات محصول</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{product.description}</p>
            </div>

            {/* ویژگی‌های کلیدی / Key features */}
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

        {/* بخش محصولات مشابه / Similar products section */}
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
