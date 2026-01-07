'use client';

import { ShoppingCart } from 'lucide-react';

export default function ProductCards() {
  // Product Data
  const products = [
  {
      id: 10,
      name: 'Sweet Bangla – রসগোল্লা',
      image: '/images/product/21.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 11,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/23.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 12,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/23.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 13,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/24.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/25.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
     
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/26.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
     
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/27.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
     
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/28.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/29.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
     
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/30.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/41.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/42.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/43.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/44.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },

    {
      id: 1,
      name: 'Sweet Bangla – new goooss',
    
      image: '/images/product/imageye___-_imgi_22_c17d46c8-421c-4707-a555-0e96f81bd20a-300x300.jpg',
      price: 700,
      originalPrice: 850,
      discount: '-18% OFF'
    },
    {
      id: 2,
      name: 'Sweet Bangla | new gooos',
      image: '/images/product/2.jpg',
      price: 1100,
      originalPrice: 1250,
      discount: '-12% OFF'
    },
    {
      id: 3,
      name: 'Sweet Bangla – নকশী পিঠা',
      image: '/images/product/4.jpeg',
      price: 700,
      originalPrice: 850,
      discount: '-18% OFF'
    },
    {
      id: 4,
      name: 'Sweet Bangla – ভাপের লাড্ডু',
      image: '/images/product/5.jpeg',
      price: 900,
      originalPrice: 1200,
      discount: '-25% OFF'
    },
    {
      id: 5,
      name: 'Sweet Bangla – নারিকেলের লাড্ডু',
      image: '/images/product/6.jpeg',
      price: 1000,
      originalPrice: 1100,
      discount: '-9% OFF'
    },
    {
      id: 6,
      name: 'Sweet Bangla – রসগোল্লা',
      image: '/images/product/7.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 7,
      name: 'Sweet Bangla – রসগোল্লা',
      image: '/images/product/8.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 8,
      name: 'Sweet Bangla – রসগোল্লা',
      image: '/images/product/13.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 9,
      name: 'Sweet Bangla – রসগোল্লা',
      image: '/images/product/15.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 10,
      name: 'Sweet Bangla – রসগোল্লা',
      image: '/images/product/21.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 11,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/23.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 12,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/23.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 13,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/24.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/25.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
     
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/26.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
     
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/27.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
     
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/28.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/29.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
     
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/30.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/41.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/42.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/43.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
    {
      id: 14,
      name: 'Sweet Bangla – allsin tolaga',
      image: '/images/product/44.jpg',
      price: 800,
      originalPrice: 950,
      discount: '-16% OFF'
    },
     
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Section Title */}
      {/* <div className="mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
          আমাদের পণ্য সমূহ
        </h2>
        <p className="text-gray-600">বিশেষ ছাড় সহ আমাদের সেরা পণ্য</p>
      </div> */}

      {/* Product Grid - Desktop gap set to 10px */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-[10px]">
        {products.map((product) => (
          <div 
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group relative border border-gray-100 flex flex-col"
          >
            {/* Discount Badge */}
            <div className="absolute top-2 left-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 rounded-lg text-xs sm:text-sm font-bold z-10 shadow-lg">
              {product.discount}
            </div>

            {/* Product Image */}
            <div className="relative overflow-hidden aspect-square">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Product Info */}
            <div className="p-3 sm:p-4 flex flex-col items-center text-center flex-grow">
              {/* Product Name */}
              <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[40px]">
                {product.name}
              </h3>

              {/* Price Section */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-lg sm:text-xl font-bold text-pink-600">
                  ৳{product.price}
                </span>
                <span className="text-xs sm:text-sm text-gray-400 line-through">
                  ৳{product.originalPrice}
                </span>
              </div>

              {/* Buttons Wrapper */}
              <div className="space-y-2 w-full mt-auto">
                {/* Buy Now Button */}
                <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Buy Now</span>
                </button>

                {/* Add to Cart Button */}
                <button className="w-full bg-white border-2 border-pink-500 text-pink-600 hover:bg-pink-50 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          View More Products
        </button>
      </div>
    </div>
  );
}