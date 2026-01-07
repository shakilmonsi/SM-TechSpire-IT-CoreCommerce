'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const slides = [
    // Example 1: Only Image
    {
      id: 1,
      type: 'image', // 'image', 'text', or 'both'
      image: '/images/hero banner/products er eta.jpeg',
    },
    {
      id: 2,
      type: 'image', // 'image', 'text', or 'both'
      image: '/images/hero banner/banner 2.jpeg',
    },
    
  
    // Example 3: Only Text with Gradient
    {
      id: 3,
      type: 'text',
      title: 'খাঁটি ঘি ও তেল',
      subtitle: 'Pure Ghee & Oil Collection',
      description: '১০০% খাঁটি এবং প্রাকৃতিক',
      buttonText: 'Order Now',
      bgColor: 'from-yellow-50 to-orange-50',
      accentColor: 'bg-yellow-500'
    },
    
    // Example 4: Only Image (Banner)
   
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  const getTextAlignment = (position) => {
    switch(position) {
      case 'left': return 'text-left items-start justify-start pl-8 sm:pl-16 lg:pl-24';
      case 'right': return 'text-right items-end justify-end pr-8 sm:pr-16 lg:pr-24';
      default: return 'text-center items-center justify-center';
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div 
        className="relative w-full overflow-hidden rounded-2xl shadow-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-[350px] sm:h-[450px] lg:h-[500px] relative"
            >
              {/* TYPE 1: Only Image */}
              {slide.type === 'image' && (
                <img 
                  src={slide.image} 
                  alt={`Slide ${slide.id}`}
                  className="w-full h-full object-cover"
                />
              )}

              {/* TYPE 2: Only Text with Gradient */}
              {slide.type === 'text' && (
                <>
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor}`}></div>
                  <div className="absolute top-10 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-white/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-10 left-10 w-40 h-40 sm:w-56 sm:h-56 bg-white/20 rounded-full blur-3xl"></div>
                  
                  <div className="relative h-full flex items-center justify-center px-6 sm:px-12 lg:px-20">
                    <div className="text-center max-w-3xl animate-fadeIn">
                      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-semibold mb-2 sm:mb-3">
                        {slide.subtitle}
                      </p>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8">
                        {slide.description}
                      </p>
                      {slide.buttonText && (
                        <button className={`${slide.accentColor} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto`}>
                          <ShoppingBag className="w-5 h-5" />
                          <span>{slide.buttonText}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* TYPE 3: Both Image + Text */}
              {slide.type === 'both' && (
                <>
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Dark Overlay for better text visibility */}
                  {slide.overlay && (
                    <div className="absolute inset-0 bg-black/40"></div>
                  )}
                  
                  <div className={`absolute inset-0 flex ${getTextAlignment(slide.textPosition)} px-6 sm:px-12 lg:px-20`}>
                    <div className={`max-w-2xl animate-fadeIn ${slide.textPosition === 'center' ? 'text-center' : ''}`}>
                      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight drop-shadow-lg">
                        {slide.title}
                      </h1>
                      <p className="text-lg sm:text-xl lg:text-2xl text-white font-semibold mb-2 sm:mb-3 drop-shadow-lg">
                        {slide.subtitle}
                      </p>
                      <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 drop-shadow-lg">
                        {slide.description}
                      </p>
                      {slide.buttonText && (
                        <button className={`bg-white text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 ${slide.textPosition === 'center' ? 'mx-auto' : ''}`}>
                          <ShoppingBag className="w-5 h-5" />
                          <span>{slide.buttonText}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 lg:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group z-10"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:-translate-x-1 transition-transform" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 lg:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group z-10"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? 'w-8 sm:w-10 lg:w-12 h-2 sm:h-2.5 bg-white shadow-lg'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}