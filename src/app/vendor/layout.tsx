"use client";
import React, { useState } from "react";
import VendorSidebar from "@/components/VendorSidebar";
import { Menu, Bell, ChevronDown, Store } from "lucide-react";

export default function VendorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Vendor Sidebar */}
      <VendorSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

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
              
              {/* Quick Actions */}
              <div className="hidden sm:flex items-center gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:text-purple-600 transition-colors text-sm border border-gray-200 rounded-lg hover:border-purple-300">
                  <Store size={16} />
                  <span>Visit Store</span>
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Balance Display */}
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg">
                <span className="text-sm font-bold text-gray-900">৳ 45,250</span>
                <span className="text-xs text-gray-600">Available</span>
              </div>

              {/* Notifications */}
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell size={20} className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              {/* Vendor Profile */}
              <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  V
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-sm font-semibold text-gray-900">Vendor Store</p>
                  <p className="text-xs text-gray-500">vendor@store.com</p>
                </div>
                <ChevronDown size={16} className="text-gray-600 hidden sm:block" />
              </button>
            </div>
          </div>

          {/* Stats Bar (Optional) */}
          <div className="px-6 py-2 bg-gradient-to-r from-purple-50 to-pink-50 border-t border-purple-100 hidden lg:block">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-gray-600">Today's Sales:</span>
                  <span className="font-bold text-gray-900 ml-1">৳8,450</span>
                </div>
                <div>
                  <span className="text-gray-600">Pending Orders:</span>
                  <span className="font-bold text-yellow-600 ml-1">12</span>
                </div>
                <div>
                  <span className="text-gray-600">New Messages:</span>
                  <span className="font-bold text-blue-600 ml-1">3</span>
                </div>
              </div>
              <button className="text-purple-600 hover:text-purple-700 font-medium">
                View Full Report →
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
            <p>© 2025 GadgetShob Vendor Panel. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-purple-600 transition-colors">Vendor Guide</a>
              <a href="#" className="hover:text-purple-600 transition-colors">Commission Info</a>
              <a href="#" className="hover:text-purple-600 transition-colors">Support</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}