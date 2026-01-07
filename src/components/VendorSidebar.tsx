"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Package, ShoppingBag, DollarSign, 
  Star, MessageSquare, Settings, BarChart3, 
  Image, Truck, Gift, Users, Bell, HelpCircle, 
  UserCircle, X, ChevronRight, Store
} from "lucide-react";

interface VendorSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const vendorMenuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/vendor" },
  { name: "My Products", icon: Package, href: "/vendor/products", hasSubmenu: true },
  { name: "Orders", icon: ShoppingBag, href: "/vendor/orders", hasSubmenu: true },
  { name: "Earnings", icon: DollarSign, href: "/vendor/earnings" },
  { name: "Store Settings", icon: Store, href: "/vendor/store-settings" },
  { name: "Reviews", icon: Star, href: "/vendor/reviews" },
  { name: "Messages", icon: MessageSquare, href: "/vendor/messages", badge: "3" },
  { name: "Analytics", icon: BarChart3, href: "/vendor/analytics" },
  { name: "Media Library", icon: Image, href: "/vendor/media" },
  { name: "Shipping", icon: Truck, href: "/vendor/shipping" },
  { name: "Promotions", icon: Gift, href: "/vendor/promotions" },
  { name: "Customers", icon: Users, href: "/vendor/customers" },
  { name: "Notifications", icon: Bell, href: "/vendor/notifications", badge: "5" },
  { name: "Settings", icon: Settings, href: "/vendor/settings" },
  { name: "Help & Support", icon: HelpCircle, href: "/vendor/support" },
  { name: "Profile", icon: UserCircle, href: "/vendor/profile" },
];

const VendorSidebar: React.FC<VendorSidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname();
  const [showUpgradeBanner, setShowUpgradeBanner] = useState(true);

  return (
    <>
      {/* Sidebar */}
      <aside 
        className={`fixed top-10 pb-10 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 bg-white border-r border-gray-200`}
      >
        <div className="h-full flex flex-col overflow-hidden">
          {/* Logo */}
          <div className="p-5 border-b border-gray-200 flex-shrink-0">
            <div className="flex items-center justify-between">
              <Link href="/vendor" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-black text-lg italic shadow-md">
                  V
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-gray-900 tracking-tight text-sm">
                    VENDOR
                  </span>
                  <span className="text-xs text-gray-500">Dashboard</span>
                </div>
              </Link>
              <button 
                onClick={() => setSidebarOpen(false)} 
                className="md:hidden text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Store Info Card */}
          <div className="p-4 border-b border-gray-100 flex-shrink-0">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Store size={16} className="text-purple-600" />
                <span className="text-sm font-bold text-gray-900">My Store</span>
              </div>
              <p className="text-xs text-gray-600">Store Rating: ⭐ 4.8</p>
              <p className="text-xs text-gray-600 mt-1">Balance: <span className="font-bold text-purple-600">৳45,250</span></p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
            {vendorMenuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-150 group ${
                    isActive 
                      ? "bg-purple-50 text-purple-700" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon 
                      size={18} 
                      className={`${
                        isActive ? "text-purple-600" : "text-gray-500"
                      }`} 
                    />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                    {item.hasSubmenu && (
                      <ChevronRight 
                        size={14} 
                        className={`${
                          isActive ? "text-purple-600" : "text-gray-400"
                        }`}
                      />
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Upgrade Banner with Close Button */}
          {showUpgradeBanner && (
            <div className="p-4 border-t border-gray-100 flex-shrink-0">
              <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-lg text-white">
                {/* Close Button */}
                <button 
                  onClick={() => setShowUpgradeBanner(false)}
                  className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  aria-label="Close upgrade banner"
                >
                  <X size={14} className="text-white" />
                </button>
                
                <p className="text-sm font-bold mb-1">Upgrade to Pro</p>
                <p className="text-xs opacity-90 mb-3 pr-4">Get more features and better commission rates</p>
                <button className="w-full bg-white text-purple-600 px-3 py-2 rounded-md text-xs font-bold hover:bg-gray-100 transition-colors">
                  Upgrade Now
                </button>
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default VendorSidebar;