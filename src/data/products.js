// داده‌های نمونه محصولات
export const products = [
  // موبایل‌ها
  {
    id: 1,
    name: "آیفون 15 پرو مکس",
    category: "mobile",
    price: 45000000,
    originalPrice: 50000000,
    image: "/images/products/iphone-15-pro-max.jpg",
    description: "آیفون 15 پرو مکس با دوربین 48 مگاپیکسلی و پردازنده A17 Pro",
    brand: "Apple",
    rating: 4.8,
    reviews: 1250,
    inStock: true,
    features: ["دوربین 48MP", "پردازنده A17 Pro", "باتری 24 ساعت", "مقاوم در برابر آب"]
  },
  {
    id: 2,
    name: "سامسونگ گلکسی S24 اولترا",
    category: "mobile",
    price: 38000000,
    originalPrice: 42000000,
    image: "/images/products/samsung-galaxy-s24-ultra.jpg",
    description: "سامسونگ گلکسی S24 اولترا با دوربین 200 مگاپیکسلی و قلم S Pen",
    brand: "Samsung",
    rating: 4.7,
    reviews: 980,
    inStock: true,
    features: ["دوربین 200MP", "قلم S Pen", "باتری 5000mAh", "شارژ سریع 45W"]
  },
  {
    id: 3,
    name: "شیائومی 14 پرو",
    category: "mobile",
    price: 18000000,
    originalPrice: 20000000,
    image: "/images/products/xiaomi-14-pro.jpg",
    description: "شیائومی 14 پرو با دوربین لایکا و پردازنده اسنپدراگون 8 Gen 3",
    brand: "Xiaomi",
    rating: 4.5,
    reviews: 750,
    inStock: true,
    features: ["دوربین لایکا", "پردازنده Snapdragon 8 Gen 3", "شارژ 120W", "نمایشگر 6.73 اینچ"]
  },

  // لپ‌تاپ‌ها
  {
    id: 4,
    name: "مک‌بوک پرو 16 اینچ M3",
    category: "laptop",
    price: 65000000,
    originalPrice: 70000000,
    image: "/images/products/macbook-pro-16.jpg",
    description: "مک‌بوک پرو 16 اینچ با پردازنده M3 و نمایشگر Liquid Retina XDR",
    brand: "Apple",
    rating: 4.9,
    reviews: 890,
    inStock: true,
    features: ["پردازنده M3", "نمایشگر 16 اینچ", "باتری 22 ساعت", "32GB RAM"]
  },
  {
    id: 5,
    name: "دل XPS 15",
    category: "laptop",
    price: 35000000,
    originalPrice: 38000000,
    image: "/images/products/dell-xps-15.jpg",
    description: "دل XPS 15 با پردازنده Intel Core i7 و نمایشگر 4K OLED",
    brand: "Dell",
    rating: 4.6,
    reviews: 650,
    inStock: true,
    features: ["Intel Core i7", "نمایشگر 4K OLED", "16GB RAM", "SSD 1TB"]
  },
  {
    id: 6,
    name: "لنوو ThinkPad X1 Carbon",
    category: "laptop",
    price: 28000000,
    originalPrice: 32000000,
    image: "/images/products/lenovo-thinkpad-x1.jpg",
    description: "لنوو ThinkPad X1 Carbon با طراحی نازک و سبک برای کسب‌وکار",
    brand: "Lenovo",
    rating: 4.7,
    reviews: 420,
    inStock: true,
    features: ["طراحی نازک", "کیبورد مکانیکی", "باتری 15 ساعت", "مقاوم در برابر ضربه"]
  },

  // کامپیوترهای دسکتاپ
  {
    id: 7,
    name: "کامپیوتر گیمینگ RTX 4080",
    category: "desktop",
    price: 45000000,
    originalPrice: 50000000,
    image: "/images/products/gaming-pc-rtx4080.jpg",
    description: "کامپیوتر گیمینگ با کارت گرافیک RTX 4080 و پردازنده Intel Core i7",
    brand: "Custom Build",
    rating: 4.8,
    reviews: 320,
    inStock: true,
    features: ["RTX 4080", "Intel Core i7", "32GB RAM", "SSD 2TB"]
  },
  {
    id: 8,
    name: "آی‌مک 24 اینچ M3",
    category: "desktop",
    price: 42000000,
    originalPrice: 45000000,
    image: "/images/products/imac-24-m3.jpg",
    description: "آی‌مک 24 اینچ با پردازنده M3 و نمایشگر Retina 4.5K",
    brand: "Apple",
    rating: 4.7,
    reviews: 280,
    inStock: true,
    features: ["پردازنده M3", "نمایشگر 24 اینچ", "8GB RAM", "SSD 512GB"]
  },

  // تبلت‌ها
  {
    id: 9,
    name: "آیپد پرو 12.9 اینچ M2",
    category: "tablet",
    price: 25000000,
    originalPrice: 28000000,
    image: "/images/products/ipad-pro-12-9.jpg",
    description: "آیپد پرو 12.9 اینچ با پردازنده M2 و نمایشگر Liquid Retina XDR",
    brand: "Apple",
    rating: 4.8,
    reviews: 450,
    inStock: true,
    features: ["پردازنده M2", "نمایشگر 12.9 اینچ", "Apple Pencil", "باتری 10 ساعت"]
  },
  {
    id: 10,
    name: "سامسونگ گلکسی تب S9 اولترا",
    category: "tablet",
    price: 18000000,
    originalPrice: 20000000,
    image: "/images/products/samsung-galaxy-tab-s9.jpg",
    description: "سامسونگ گلکسی تب S9 اولترا با نمایشگر 14.6 اینچ و قلم S Pen",
    brand: "Samsung",
    rating: 4.6,
    reviews: 380,
    inStock: true,
    features: ["نمایشگر 14.6 اینچ", "قلم S Pen", "باتری 11200mAh", "شارژ سریع"]
  },

  // لوازم جانبی
  {
    id: 11,
    name: "ایرپادز پرو 2",
    category: "accessories",
    price: 8500000,
    originalPrice: 9500000,
    image: "/images/products/airpods-pro-2.jpg",
    description: "ایرپادز پرو 2 با حذف نویز فعال و کیفیت صدای استودیویی",
    brand: "Apple",
    rating: 4.7,
    reviews: 1200,
    inStock: true,
    features: ["حذف نویز فعال", "کیفیت صدای استودیویی", "باتری 6 ساعت", "شارژ سریع"]
  },
  {
    id: 12,
    name: "کیبورد مکانیکی RGB",
    category: "accessories",
    price: 2500000,
    originalPrice: 3000000,
    image: "/images/products/mechanical-keyboard-rgb.jpg",
    description: "کیبورد مکانیکی RGB با سوئیچ‌های Cherry MX و نورپردازی RGB",
    brand: "Corsair",
    rating: 4.5,
    reviews: 680,
    inStock: true,
    features: ["سوئیچ‌های Cherry MX", "نورپردازی RGB", "کیبورد مکانیکی", "سازگار با تمام سیستم‌ها"]
  },
  {
    id: 13,
    name: "ماوس گیمینگ RGB",
    category: "accessories",
    price: 1800000,
    originalPrice: 2200000,
    image: "/images/products/gaming-mouse-rgb.jpg",
    description: "ماوس گیمینگ RGB با سنسور 16000 DPI و نورپردازی RGB",
    brand: "Logitech",
    rating: 4.6,
    reviews: 520,
    inStock: true,
    features: ["سنسور 16000 DPI", "نورپردازی RGB", "دکمه‌های قابل برنامه‌ریزی", "سیم‌کشی"]
  },
  {
    id: 14,
    name: "مانیتور 4K 27 اینچ",
    category: "accessories",
    price: 12000000,
    originalPrice: 15000000,
    image: "/images/products/monitor-4k-27.jpg",
    description: "مانیتور 4K 27 اینچ با نرخ تازه‌سازی 144Hz و پشتیبانی از HDR",
    brand: "LG",
    rating: 4.7,
    reviews: 340,
    inStock: true,
    features: ["رزولوشن 4K", "نرخ تازه‌سازی 144Hz", "پشتیبانی از HDR", "پورت‌های متعدد"]
  },
  {
    id: 15,
    name: "اسپیکر بلوتوثی",
    category: "accessories",
    price: 3500000,
    originalPrice: 4000000,
    image: "/images/products/bluetooth-speaker.jpg",
    description: "اسپیکر بلوتوثی با کیفیت صدای استریو و باتری 20 ساعته",
    brand: "JBL",
    rating: 4.4,
    reviews: 890,
    inStock: true,
    features: ["کیفیت صدای استریو", "باتری 20 ساعته", "مقاوم در برابر آب", "بلوتوث 5.0"]
  }
];

// دسته‌بندی‌ها
export const categories = [
  { id: "mobile", name: "موبایل", icon: "📱" },
  { id: "laptop", name: "لپ‌تاپ", icon: "💻" },
  { id: "desktop", name: "کامپیوتر", icon: "🖥️" },
  { id: "tablet", name: "تبلت", icon: "📱" },
  { id: "accessories", name: "لوازم جانبی", icon: "🎧" }
];

// برندها
export const brands = [
  "Apple", "Samsung", "Xiaomi", "Dell", "Lenovo", "LG", "Corsair", "Logitech", "JBL"
];

// فیلتر کردن محصولات بر اساس دسته‌بندی
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

// جستجو در محصولات
export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery)
  );
};

// مرتب‌سازی محصولات
export const sortProducts = (products, sortBy) => {
  const sortedProducts = [...products];
  
  switch (sortBy) {
    case 'price-low':
      return sortedProducts.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sortedProducts.sort((a, b) => b.price - a.price);
    case 'rating':
      return sortedProducts.sort((a, b) => b.rating - a.rating);
    case 'newest':
      return sortedProducts.sort((a, b) => b.id - a.id);
    default:
      return sortedProducts;
  }
};
