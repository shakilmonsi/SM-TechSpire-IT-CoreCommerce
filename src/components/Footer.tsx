'use client';

import { Mail, Phone, MapPin, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  const contactInfo = {
    email: 'soday.mithai@gmail.com',
    phone: '01316313132',
    address: 'Upashahar Main Road, Bogura, Bangladesh'
  };

  const quickLinks = [
    { name: 'Return & Refund Policy', href: '/return-refund-policy' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms and Conditions', href: '/terms-conditions' },
    { name: 'About us', href: '/about' }
  ];

  const usefulLinks = [
    { name: 'Why Shop Online with Us', href: '/why-shop-online' },
    { name: 'Online Payment Methods', href: '/payment-methods' },
    { name: 'After Sales Support', href: '/support' },
    { name: 'FAQ', href: '/faq' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info Section */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="inline-block bg-white px-4 py-2 rounded-lg">
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-green-600 bg-clip-text text-transparent">
                  সবাই
                </span>
                <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-green-600 bg-clip-text text-transparent -mt-1">
                  মিঠাই
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed">
              সবাই মিঠাই রেলা গুণগত ই-কমার্স #ব্যাটফর্ম, যার মূল লক্ষ্য রয়েলা রাজিতর মুদ্র নিরাপদ শামাবাইরি লৌকে দেয়া।
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/8801316313132" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-bold text-pink-500 mb-6">Contact Us</h3>
            <div className="space-y-4">
              {/* Email */}
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-start gap-3 text-gray-300 hover:text-pink-500 transition-colors group"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm break-all">{contactInfo.email}</span>
              </a>

              {/* Phone */}
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-start gap-3 text-gray-300 hover:text-pink-500 transition-colors group"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{contactInfo.phone}</span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold text-pink-500 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-pink-500 transition-colors text-sm block hover:translate-x-1 transition-transform duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-xl font-bold text-pink-500 mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-pink-500 transition-colors text-sm block hover:translate-x-1 transition-transform duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-400 text-sm">
            © All Copyrights Reserved by <span className="text-pink-500 font-semibold">SaleEcom</span>
          </p>
        </div>
      </div>
    </footer>
  );
}