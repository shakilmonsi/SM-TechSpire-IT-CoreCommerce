"use client";
import React, { useState } from "react";
import Link from "next/link";
import UserSidebar from "@/components/UserSidebar";
import { Menu, Bell, ChevronDown, ShoppingBag, Home } from "lucide-react";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* User Sidebar */}
      <UserSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content Area */}
      <div className="md:ml-64 min-h-screen flex flex-col">
        {/* Top Navigation Bar */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-20 flex-shrink-0">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Menu size={20} className="text-gray-600" />
              </button>
              
              {/* Quick Links */}
              <div className="hidden sm:flex items-center gap-2">
                <Link 
                  href="/" 
                  className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:text-blue-600 transition-colors text-sm border border-gray-200 rounded-lg hover:border-blue-300"
                >
                  <Home size={16} />
                  <span>Back to Shop</span>
                </Link>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Reward Points Display */}
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg">
                <span className="text-sm font-bold text-blue-600">850</span>
                <span className="text-xs text-gray-600">Reward Points</span>
              </div>

              {/* Cart Button */}
              <Link 
                href="/cart"
                className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ShoppingBag size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                  3
                </span>
              </Link>

              {/* Notifications */}
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              {/* User Profile */}
              <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  A
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-semibold text-gray-900">Ahmed Khan</p>
                  <p className="text-xs text-gray-500">Customer</p>
                </div>
                <ChevronDown size={16} className="text-gray-600 hidden sm:block" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="px-6 py-4 bg-white border-t border-gray-200 flex-shrink-0">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
            <p>© 2025 GadgetShob. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-blue-600 transition-colors">Help Center</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Track Order</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Contact Us</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}