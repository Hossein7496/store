export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* اطلاعات فروشگاه */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">فروشگاه تکنولوژی</h3>
            <p className="text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
              بهترین فروشگاه آنلاین برای خرید موبایل، کامپیوتر، لپ‌تاپ و لوازم جانبی
            </p>
            <div className="flex space-x-3 sm:space-x-4 space-x-reverse">
              <span className="text-xl sm:text-2xl">📱</span>
              <span className="text-xl sm:text-2xl">💻</span>
              <span className="text-xl sm:text-2xl">⌚</span>
            </div>
          </div>

          {/* دسته‌بندی‌ها */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">دسته‌بندی‌ها</h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-300">
              <li><a href="/category/mobile" className="hover:text-white transition-colors text-sm sm:text-base">موبایل</a></li>
              <li><a href="/category/laptop" className="hover:text-white transition-colors text-sm sm:text-base">لپ‌تاپ</a></li>
              <li><a href="/category/desktop" className="hover:text-white transition-colors text-sm sm:text-base">کامپیوتر</a></li>
              <li><a href="/category/tablet" className="hover:text-white transition-colors text-sm sm:text-base">تبلت</a></li>
              <li><a href="/category/accessories" className="hover:text-white transition-colors text-sm sm:text-base">لوازم جانبی</a></li>
            </ul>
          </div>

          {/* خدمات */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">خدمات</h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-300">
              <li><a href="/shipping" className="hover:text-white transition-colors text-sm sm:text-base">ارسال رایگان</a></li>
              <li><a href="/warranty" className="hover:text-white transition-colors text-sm sm:text-base">گارانتی</a></li>
              <li><a href="/support" className="hover:text-white transition-colors text-sm sm:text-base">پشتیبانی</a></li>
              <li><a href="/return" className="hover:text-white transition-colors text-sm sm:text-base">مرجوعی</a></li>
            </ul>
          </div>

          {/* تماس با ما */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">تماس با ما</h3>
            <div className="space-y-1 sm:space-y-2 text-gray-300">
              <p className="text-sm sm:text-base">📞 021-12345678</p>
              <p className="text-sm sm:text-base">📧 info@techstore.com</p>
              <p className="text-sm sm:text-base">📍 تهران، خیابان ولیعصر</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-300">
          <p className="text-xs sm:text-sm">&copy; ۱۴۰۳ فروشگاه تکنولوژی. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
