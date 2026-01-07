'use client';

import React, { useState } from 'react';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  // প্রোডাক্ট ডাটা (আপনার ইমেজের আদলে)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Sweet Bangla – খিচ্রু পিঠা Jaggery',
      price: 500,
      image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=200&h=200&fit=crop',
      category: 'খেজুর গুড় | Date Molasses',
      weight: '১ কেজি',
      quantity: 1,
    },
    {
      id: 2,
      name: 'বগুড়ার স্পেশাল দই | Special Curd',
      price: 800,
      image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=200&h=200&fit=crop',
      category: 'মিষ্টি | Sweets',
      weight: '২ কেজি',
      quantity: 1,
    }
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal; // ডিসকাউন্ট থাকলে এখানে বিয়োগ করতে পারেন

  return (
    <div className="bg-white min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="flex items-center justify-between mb-8 border-b pb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">My Cart</h1>
          <span className="bg-[#D10069] text-white px-5 py-1.5 rounded-md font-bold text-sm">
            {cartItems.length} Items
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cart Table Section (Left) */}
          <div className="lg:col-span-8 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="hidden md:table-header-group">
                <tr className="border-b">
                  <th className="pb-4 font-bold text-gray-600 text-sm uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" checked readOnly className="w-4 h-4 accent-[#D10069]" />
                      PRODUCT DETAILS
                    </div>
                  </th>
                  <th className="pb-4 font-bold text-gray-600 text-sm uppercase tracking-wider text-center">QUANTITY</th>
                  <th className="pb-4 font-bold text-gray-600 text-sm uppercase tracking-wider text-center">PRICE</th>
                  <th className="pb-4 font-bold text-gray-600 text-sm uppercase tracking-wider text-center">TOTAL</th>
                  <th className="pb-4"></th>
                </tr>
              </thead>
              
              <tbody className="divide-y divide-gray-100">
                {cartItems.map((item) => (
                  <tr key={item.id} className="flex flex-col md:table-row py-4 md:py-0">
                    {/* Details Column */}
                    <td className="py-6 md:w-[40%]">
                      <div className="flex items-center gap-4">
                        <input type="checkbox" checked readOnly className="w-4 h-4 accent-[#D10069] hidden md:block" />
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl border p-1 flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-sm sm:text-base font-bold text-[#4A148C] leading-tight">{item.name}</h3>
                          <p className="text-[11px] sm:text-xs text-gray-500 mt-1">Category: {item.category}</p>
                          <p className="text-[11px] sm:text-xs font-bold text-gray-700 mt-1 bg-gray-100 w-fit px-2 py-0.5 rounded">ওজন: {item.weight}</p>
                        </div>
                      </div>
                    </td>

                    {/* Quantity Column */}
                    <td className="py-2 md:py-6 text-center">
                      <div className="flex justify-center">
                        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                          <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 hover:bg-gray-100 text-gray-600 border-r">-</button>
                          <span className="px-4 py-1 font-bold text-sm min-w-[40px]">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 hover:bg-gray-100 text-gray-600 border-l">+</button>
                        </div>
                      </div>
                    </td>

                    {/* Price Column */}
                    <td className="py-2 md:py-6 text-center">
                       <span className="md:hidden text-xs text-gray-400 mr-2 uppercase">Price:</span>
                       <span className="text-sm font-bold text-gray-700">৳ {item.price}</span>
                    </td>

                    {/* Total Column */}
                    <td className="py-2 md:py-6 text-center">
                      <span className="md:hidden text-xs text-gray-400 mr-2 uppercase">Total:</span>
                      <span className="text-sm font-bold text-gray-700">{item.price * item.quantity}</span>
                    </td>

                    {/* Action Column */}
                    <td className="py-2 md:py-6 text-center">
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Link href="/shop" className="inline-flex items-center gap-2 mt-8 text-sm font-bold text-gray-400 hover:text-[#D10069] transition-colors uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4" /> Continue Shopping
            </Link>
          </div>

          {/* Order Summary Section (Right) */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg p-6 border-2 border-[#D10069]/20 shadow-sm sticky top-8">
              <h2 className="text-xl font-black text-gray-800 mb-6 uppercase tracking-tight">Order Summary</h2>
              
              <div className="space-y-4 border-t pt-4">
                <div className="flex justify-between text-sm font-bold text-gray-600">
                  <span>Sub Total</span>
                  <span className="text-gray-900">৳ {subtotal}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-gray-600">
                  <span>Discount</span>
                  <span className="text-gray-900">৳ 0</span>
                </div>
                
                <div className="pt-6 border-t mt-4">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-base font-black text-gray-800 uppercase">GrandTotal</span>
                    <span className="text-xl font-black text-gray-900">৳ {total}</span>
                  </div>
                  
                  <button className="w-full bg-[#D10069] hover:bg-[#b00058] text-white py-4 rounded-md font-black text-sm uppercase tracking-widest transition-all active:scale-[0.98] shadow-md">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}