"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Package, Heart, MapPin, 
  CreditCard, Gift, Bell, Settings, 
  HelpCircle, LogOut, X, User
} from "lucide-react";

interface UserSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const userMenuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/user" },
  { name: "My Orders", icon: Package, href: "/user/orders" },
  { name: "Wishlist", icon: Heart, href: "/user/wishlist", badge: "12" },
  { name: "Addresses", icon: MapPin, href: "/user/addresses" },
  { name: "Payment Methods", icon: CreditCard, href: "/user/payments" },
  { name: "Reward Points", icon: Gift, href: "/user/rewards" },
  { name: "Notifications", icon: Bell, href: "/user/notifications", badge: "3" },
  { name: "Account Settings", icon: Settings, href: "/user/settings" },
  { name: "Help & Support", icon: HelpCircle, href: "/user/support" },
];

const UserSidebar: React.FC<UserSidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname();

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
              <Link href="/user" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-lg shadow-md">
                  U
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-gray-900 tracking-tight text-sm">
                    MY ACCOUNT
                  </span>
                  <span className="text-xs text-gray-500">Customer Panel</span>
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

          {/* User Profile Card */}
          <div className="p-4 border-b border-gray-100 flex-shrink-0">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Ahmed Khan</p>
                  <p className="text-xs text-gray-600">ahmed@email.com</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-blue-100">
                <span className="text-xs text-gray-600">Reward Points</span>
                <span className="text-sm font-bold text-blue-600">850 pts</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
            {userMenuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-150 group ${
                    isActive 
                      ? "bg-blue-50 text-blue-700" 
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon 
                      size={18} 
                      className={`${
                        isActive ? "text-blue-600" : "text-gray-500"
                      }`} 
                    />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-gray-100 flex-shrink-0">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-colors">
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
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

export default UserSidebar;