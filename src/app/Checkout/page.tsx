'use client';

import React, { useState } from 'react';
import { ChevronLeft, CheckCircle, Copy, Info, Phone } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const [selectedPayment, setSelectedPayment] = useState('cod'); // cod, bkash, nagad

  const cartItems = [
    { id: 1, name: 'Sweet Bangla – পুলি পিঠা', weight: '১ কেজি', price: 0, originalPrice: 850, image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=100&h=100&fit=crop' },
    { id: 2, name: 'Sweet Bangla – নকশী পিঠা', weight: '১ কেজি', price: 700, originalPrice: 850, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=100&h=100&fit=crop' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-6 sm:py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Top Banner Offer */}
        <div className="bg-emerald-100 text-emerald-800 p-3 rounded-lg mb-8 flex justify-between items-center text-sm font-medium border border-emerald-200">
          <p>Enjoy <span className="font-bold">10% OFF</span> on your first registration! <Link href="/register" className="underline font-bold">Register Now</Link></p>
          <button className="text-emerald-500 hover:text-emerald-700">✕</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address & Payment */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Delivery Address */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Delivery Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name*" className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-pink-500 outline-none" />
                <input type="text" placeholder="Enter Your Phone Number*" className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-pink-500 outline-none" />
                <div className="md:col-span-2">
                  <select className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-pink-500 outline-none">
                    <option>Select Division</option>
                    <option>Dhaka</option>
                    <option>Chittagong</option>
                  </select>
                </div>
                <textarea placeholder="Full Address*" rows={3} className="md:col-span-2 w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-pink-500 outline-none"></textarea>
              </div>
            </section>

            {/* Payment Options */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Select a Payment Option</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {/* COD */}
                <button 
                  onClick={() => setSelectedPayment('cod')}
                  className={`relative p-4 border-2 rounded-xl flex flex-col items-center gap-2 transition-all ${selectedPayment === 'cod' ? 'border-emerald-500 bg-emerald-50' : 'border-gray-200 hover:border-pink-200'}`}
                >
                  {selectedPayment === 'cod' && <CheckCircle className="absolute top-2 left-2 w-5 h-5 text-emerald-500 fill-white" />}
                  <img src="https://cdn-icons-png.flaticon.com/512/1554/1554401.png" alt="COD" className="w-12 h-12 grayscale-[0.5]" />
                  <span className="text-xs font-bold text-gray-700 uppercase">Cash on Delivery</span>
                </button>

                {/* bKash */}
                <button 
                  onClick={() => setSelectedPayment('bkash')}
                  className={`relative p-4 border-2 rounded-xl flex flex-col items-center gap-2 transition-all ${selectedPayment === 'bkash' ? 'border-pink-500 bg-pink-50' : 'border-gray-200 hover:border-pink-200'}`}
                >
                  {selectedPayment === 'bkash' && <CheckCircle className="absolute top-2 left-2 w-5 h-5 text-pink-500 fill-white" />}
                  <img src="https://www.logo.wine/a/logo/BKash/BKash-Logo.wine.svg" alt="bKash" className="w-12 h-12" />
                  <span className="text-xs font-bold text-gray-700 uppercase">bKash</span>
                </button>

                {/* Nagad */}
                <button 
                  onClick={() => setSelectedPayment('nagad')}
                  className={`relative p-4 border-2 rounded-xl flex flex-col items-center gap-2 transition-all ${selectedPayment === 'nagad' ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:border-orange-100'}`}
                >
                  {selectedPayment === 'nagad' && <CheckCircle className="absolute top-2 left-2 w-5 h-5 text-orange-500 fill-white" />}
                  <img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Nagad_Logo.svg" alt="Nagad" className="w-12 h-12" />
                  <span className="text-xs font-bold text-gray-700 uppercase">Nagad</span>
                </button>
              </div>

              {/* Dynamic Payment Details */}
              {(selectedPayment === 'bkash' || selectedPayment === 'nagad') && (
                <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200 animate-in fade-in duration-500">
                  <div className="bg-white p-3 rounded-lg border inline-flex items-center gap-4 mb-6 shadow-sm">
                    <img src={selectedPayment === 'bkash' ? "https://www.logo.wine/a/logo/BKash/BKash-Logo.wine.svg" : "https://upload.wikimedia.org/wikipedia/commons/8/8b/Nagad_Logo.svg"} className="w-10 h-10" />
                    <span className="font-bold text-gray-800">01315199023</span>
                    <button className="p-2 hover:bg-gray-100 rounded-md transition-colors"><Copy className="w-4 h-4 text-gray-500" /></button>
                  </div>

                  <div className="bg-pink-50 p-6 rounded-xl border border-pink-100 space-y-4">
                    <h3 className="text-pink-700 font-bold flex items-center gap-2">
                      <Phone className="w-4 h-4" /> Sweet Bangla – {selectedPayment === 'bkash' ? 'bKash' : 'Nagad'} পেমেন্ট করার নিয়ম
                    </h3>
                    
                    <div className="border-2 border-dashed border-pink-300 p-3 rounded-lg text-center text-sm font-bold text-pink-600 bg-white">
                      🎁 {selectedPayment === 'bkash' ? 'bKash' : 'Nagad'} দিয়ে পেমেন্ট করলে পাবেন ৫% ডিসকাউন্ট!
                    </div>

                    <ol className="text-sm space-y-2 text-gray-700 list-decimal list-inside leading-relaxed">
                      <li>আপনার <span className="font-bold">{selectedPayment} অ্যাপ</span> খুলুন</li>
                      <li><span className="font-bold">Send Money</span> অপশন সিলেক্ট করুন</li>
                      <li>উপরে দেওয়া <span className="font-bold">নাম্বারে</span> নির্ধারিত টাকা পাঠান</li>
                      <li>পেমেন্ট সফল হলে <span className="font-bold">Transaction ID (TrxID)</span> কপি করে রাখুন</li>
                    </ol>

                    <div className="bg-white p-4 rounded-lg border-l-4 border-pink-500">
                      <p className="text-xs font-bold text-pink-600 mb-2 flex items-center gap-1"><Info className="w-3 h-3" /> গুরুত্বপূর্ণ তথ্য:</p>
                      <ul className="text-xs space-y-1 text-gray-500">
                        <li>• অবশ্যই Send Money অপশন ব্যবহার করবেন</li>
                        <li>• Cash Out / Payment অপশন ব্যবহার করবেন না</li>
                      </ul>
                    </div>

                    <div className="bg-emerald-50 p-3 rounded-lg text-center">
                      <p className="text-xs font-bold text-emerald-700">WhatsApp Support: 01829888937</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <input type="text" placeholder={`${selectedPayment === 'bkash' ? 'bKash' : 'Nagad'} Number: 017XXXXXXXX*`} className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-pink-500" />
                    <input type="text" placeholder="Transaction ID: Transaction Id*" className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-pink-500" />
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Right Column: Order Items & Summary */}
          <div className="lg:col-span-4 space-y-6 sticky top-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-800 mb-6">Order Items ({cartItems.length} Items)</h2>
              
              <div className="space-y-4 mb-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 border rounded-xl relative group">
                    <button className="absolute -top-2 -right-2 bg-white border shadow-sm rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">✕</button>
                    <div className="w-16 h-16 rounded-lg overflow-hidden border flex-shrink-0">
                      <img src={item.image} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xs font-bold text-gray-800 leading-tight">{item.name}</h4>
                      <p className="text-[10px] text-gray-400 mt-1">KG: {item.weight}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded bg-gray-50 text-[10px]">
                          <button className="px-2 py-0.5 border-r">-</button>
                          <span className="px-3 font-bold">1</span>
                          <button className="px-2 py-0.5 border-l">+</button>
                        </div>
                        <div className="flex items-center gap-2">
                           <span className="text-sm font-bold text-gray-700">৳{item.price}</span>
                           <span className="text-[10px] text-gray-300 line-through">৳{item.originalPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t text-sm font-bold text-gray-600">
                <div className="flex justify-between">
                  <span>Sub Total:</span>
                  <span>৳ 850</span>
                </div>
                <div className="flex justify-between text-pink-600">
                  <span>Discount:</span>
                  <span>-৳ 150</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charge:</span>
                  <span>৳ 130</span>
                </div>
                <div className="flex justify-between text-lg text-gray-900 font-black pt-3 border-t">
                  <span>GrandTotal:</span>
                  <span>৳ 830</span>
                </div>
              </div>

              <button className="w-full mt-4 text-xs text-gray-400 hover:text-pink-500 transition-colors">Do have any coupon code?</button>
              
              <div className="mt-8 space-y-3">
                <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-pink-100 active:scale-95">
                  <CheckCircle className="w-5 h-5" /> Confirm Order
                </button>
                <Link href="/cart" className="flex items-center justify-center gap-2 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors">
                  <ChevronLeft className="w-4 h-4" /> Back to Cart
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}