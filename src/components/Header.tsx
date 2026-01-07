'use client';

import { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Menu, X, ChevronDown, Heart } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [cartCount] = useState(1);
  const [placeholderText, setPlaceholderText] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const placeholders = [
    'Type your product name...',
    'Search for ghee...',
    'Find traditional foods...',
    'Look for spices...',
    'Search masala products...'
  ];

  const categories = [
    { name: 'ঘি ও তেল', nameEn: 'GHEE & OIL', href: '/category/ghee-oil' },
    { name: 'সুপারফুড এবং ওয়েলনেস', nameEn: 'SUPERFOODS & WELLNESS', href: '/category/superfoods' },
    { name: 'ঐতিহ্যবাহী খাবার', nameEn: 'TRADITIONAL FOODS', href: '/category/traditional' },
    { name: 'খেজুর গুড়', nameEn: 'DATE MOLASSES', href: '/category/date-molasses' },
    { name: 'দেশীয় ঘরোয়া পণ্য', nameEn: 'HOMEMADE PRODUCTS', href: '/category/homemade' },
    { name: 'পাপড় এবং চিপস', nameEn: 'PAPAD & CHIPS', href: '/category/papad-chips' },
    { name: 'মসলা এবং স্পাইসেস', nameEn: 'MASALA & SPICES', href: '/category/spices' },
    { name: 'মিঠাই বাজার', nameEn: 'MITHAI BAZAAR', href: '/category/mithai' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentText = placeholders[placeholderIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (placeholderText.length < currentText.length) {
          setPlaceholderText(currentText.slice(0, placeholderText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (placeholderText.length > 0) {
          setPlaceholderText(placeholderText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [placeholderText, isDeleting, placeholderIndex, placeholders]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-pink-600 to-pink-500 text-white">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="flex justify-between items-center h-10 text-xs sm:text-sm">
              <div className="flex items-center whitespace-nowrap overflow-hidden">
                <span className="hidden sm:inline">প্রতিটি মশলাদের পণ্য শতাব্দীর</span>
                <span className="sm:hidden">বিশেষ অফার</span>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <span className="font-semibold">ডেডলাইন: ৫০%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
            <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
              
              {/* Logo */}
              <a href="/" className="flex-shrink-0">
                <div className="flex flex-col leading-tight">
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-green-600 bg-clip-text text-transparent whitespace-nowrap">
                    সবাই
                  </span>
                  <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-600 to-green-600 bg-clip-text text-transparent whitespace-nowrap -mt-1">
                    মিঠাই
                  </span>
                </div>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 flex-1 justify-center">
                <a href="/" className="text-pink-600 font-semibold hover:text-pink-700 transition-colors text-sm whitespace-nowrap">
                  HOME
                </a>
                
                {/* All Categories Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setActiveDropdown('categories')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1 text-gray-700 font-semibold hover:text-pink-600 transition-colors text-sm whitespace-nowrap">
                    ALL CATEGORIES
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'categories' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === 'categories' && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fadeIn">
                      {categories.map((category, index) => (
                        <a
                          key={index}
                          href={category.href}
                          className="block px-5 py-2.5 hover:bg-pink-50 transition-colors group"
                        >
                          <div className="font-medium text-gray-800 group-hover:text-pink-600 text-sm">
                            {category.name}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">{category.nameEn}</div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a href="/products" className="text-gray-700 font-semibold hover:text-pink-600 transition-colors text-sm whitespace-nowrap">
                  PRODUCTS
                </a>
                <a href="/track-order" className="text-gray-700 font-semibold hover:text-pink-600 transition-colors text-sm whitespace-nowrap">
                  TRACK ORDER
                </a>
                <a href="/wishlist" className="text-gray-700 font-semibold hover:text-pink-600 transition-colors text-sm whitespace-nowrap">
                  MY WISHLIST <span className="text-pink-600">(0)</span>
                </a>
              </nav>

              {/* Right Side Actions */}
              <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
                
                {/* Mobile Search Icon */}
                <button 
                  className="lg:hidden p-2 hover:bg-pink-50 rounded-full transition-colors group flex-shrink-0"
                  onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                >
                  <Search className="w-5 h-5 text-gray-700 group-hover:text-pink-600 transition-colors" />
                </button>

                {/* Desktop Search Bar */}
                <div className="hidden lg:flex items-center bg-white rounded-full w-48 xl:w-64 border-2 border-pink-500 overflow-hidden transition-all">
                  <input
                    type="text"
                    placeholder={placeholderText}
                    className="bg-transparent flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 min-w-0 px-4 py-2"
                  />
                  <button className="bg-pink-500 hover:bg-pink-600 p-2.5 flex-shrink-0 transition-colors">
                    <Search className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Wishlist Icon */}
                <a href="/wishlist" className="hidden md:flex p-2 hover:bg-pink-50 rounded-full transition-colors group flex-shrink-0">
                  <Heart className="w-5 h-5 text-gray-700 group-hover:text-pink-600 transition-colors" />
                </a>

                {/* Cart */}
                <a href="/cart" className="relative p-2 hover:bg-pink-50 rounded-full transition-colors group flex-shrink-0">
                  <ShoppingCart className="w-5 h-5 text-gray-700 group-hover:text-pink-600 transition-colors" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                      {cartCount}
                    </span>
                  )}
                </a>

                {/* Login Button */}
                <a href="/login" className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-full hover:shadow-lg transition-all font-medium text-sm whitespace-nowrap flex-shrink-0">
                  <User className="w-4 h-4" />
                  <span className="hidden lg:inline">Login / SignUp</span>
                  <span className="lg:hidden">Login</span>
                </a>

                {/* Mobile Menu Toggle */}
                <button
                  className="xl:hidden p-2 hover:bg-gray-100 rounded-lg flex-shrink-0"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 text-gray-700" />
                  ) : (
                    <Menu className="w-6 h-6 text-gray-700" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isMobileSearchOpen && (
          <div className="lg:hidden bg-white border-b border-gray-100 shadow-md animate-slideDown">
            <div className="max-w-7xl mx-auto px-4 py-3">
              <div className="flex items-center bg-white rounded-lg border-2 border-pink-500 overflow-hidden">
                <input
                  type="text"
                  placeholder={placeholderText}
                  className="bg-transparent flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 min-w-0 px-4 py-2.5"
                  autoFocus
                />
                <button className="bg-pink-500 hover:bg-pink-600 p-3 flex-shrink-0 transition-colors">
                  <Search className="w-5 h-5 text-white" />
                </button>
                <button 
                  onClick={() => setIsMobileSearchOpen(false)}
                  className="ml-2 mr-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg animate-slideDown">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <nav className="space-y-1.5">
                <a href="/" className="block px-4 py-2.5 text-pink-600 font-semibold bg-pink-50 rounded-lg text-sm">
                  HOME
                </a>
                <a href="/categories" className="block px-4 py-2.5 text-gray-700 font-semibold hover:bg-gray-50 rounded-lg text-sm">
                  ALL CATEGORIES
                </a>
                <a href="/products" className="block px-4 py-2.5 text-gray-700 font-semibold hover:bg-gray-50 rounded-lg text-sm">
                  PRODUCTS
                </a>
                <a href="/track-order" className="block px-4 py-2.5 text-gray-700 font-semibold hover:bg-gray-50 rounded-lg text-sm">
                  TRACK ORDER
                </a>
                <a href="/wishlist" className="block px-4 py-2.5 text-gray-700 font-semibold hover:bg-gray-50 rounded-lg text-sm">
                  MY WISHLIST (0)
                </a>
              </nav>

              <a href="/login" className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-lg font-medium text-sm">
                <User className="w-5 h-5" />
                <span>Login / SignUp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-[104px] sm:h-[120px]"></div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
}