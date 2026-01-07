'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'প্রতিটি মশলাদের গল্প শতাব্দীর',
      subtitle: 'Traditional Spices Collection',
      description: 'আমাদের প্রিমিয়াম মশলা সংগ্রহ দেখুন',
      buttonText: 'Shop Now',
      bgColor: 'from-orange-50 to-red-50',
      accentColor: 'bg-orange-500'
    },
    {
      id: 2,
      title: 'সুপারফুড এবং ওয়েলনেস',
      subtitle: 'Healthy Living Products',
      description: 'স্বাস্থ্যকর জীবনযাপনের জন্য সেরা পণ্য',
      buttonText: 'Explore More',
      bgColor: 'from-green-50 to-teal-50',
      accentColor: 'bg-green-500'
    },
    {
      id: 3,
      title: 'খাঁটি ঘি ও তেল',
      subtitle: 'Pure Ghee & Oil Collection',
      description: '১০০% খাঁটি এবং প্রাকৃতিক',
      buttonText: 'Order Now',
      bgColor: 'from-yellow-50 to-orange-50',
      accentColor: 'bg-yellow-500'
    },
    {
      id: 4,
      title: 'মিঠাই বাজার',
      subtitle: 'Traditional Sweets',
      description: 'ঐতিহ্যবাহী বাংলাদেশী মিঠাই',
      buttonText: 'View Collection',
      bgColor: 'from-pink-50 to-purple-50',
      accentColor: 'bg-pink-500'
    },
    {
      id: 5,
      title: 'বিশেষ ছাড় ৫০%',
      subtitle: 'Limited Time Offer',
      description: 'সব পণ্যে বিশাল ছাড়',
      buttonText: 'Grab Deal',
      bgColor: 'from-red-50 to-pink-50',
      accentColor: 'bg-red-500'
    }
  ];

  // Auto play
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

  // Touch handlers for mobile swipe
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

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Carousel Container */}
      <div 
        className="relative w-full overflow-hidden rounded-2xl shadow-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="min-w-full h-[350px] sm:h-[450px] lg:h-[500px] relative"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor}`}></div>
              
              {/* Decorative Circles */}
              <div className="absolute top-10 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-white/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 sm:w-56 sm:h-56 bg-white/20 rounded-full blur-3xl"></div>
              
              {/* Content */}
              <div className="relative h-full flex items-center justify-center px-6 sm:px-12 lg:px-20">
                <div className="text-center max-w-3xl animate-fadeIn">
                  {/* Title */}
                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  
                  {/* Subtitle */}
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-semibold mb-2 sm:mb-3">
                    {slide.subtitle}
                  </p>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8">
                    {slide.description}
                  </p>
                  
                  {/* Button */}
                  <button className={`${slide.accentColor} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto`}>
                    <ShoppingBag className="w-5 h-5" />
                    <span>{slide.buttonText}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 lg:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group z-10"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:-translate-x-1 transition-transform" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 lg:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group z-10"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Dot Indicators */}
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
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Slide Counter - Desktop Only */}
      <div className="hidden sm:flex items-center justify-center mt-4 text-gray-600 text-sm">
        <span className="font-semibold">{currentSlide + 1}</span>
        <span className="mx-2">/</span>
        <span>{slides.length}</span>
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