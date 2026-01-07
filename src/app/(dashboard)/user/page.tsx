"use client";
import React from "react";
import { Package, MapPin, Heart, Clock, Gift, CreditCard, TrendingUp } from "lucide-react";

export default function UserDashboard() {
  const stats = [
    { 
      label: "Total Orders", 
      value: "24", 
      bgGradient: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
      waveColor: "rgba(191, 219, 254, 0.5)",
      iconBg: "bg-blue-500",
      icon: <Package className="w-5 h-5" />
    },
    { 
      label: "Pending Orders", 
      value: "3", 
      bgGradient: "linear-gradient(135deg, #fef08a 0%, #fef9c3 100%)",
      waveColor: "rgba(253, 224, 71, 0.5)",
      iconBg: "bg-yellow-500",
      icon: <Clock className="w-5 h-5" />
    },
    { 
      label: "Wishlist Items", 
      value: "12", 
      bgGradient: "linear-gradient(135deg, #fecaca 0%, #fee2e2 100%)",
      waveColor: "rgba(252, 165, 165, 0.5)",
      iconBg: "bg-red-500",
      icon: <Heart className="w-5 h-5" />
    },
    { 
      label: "Reward Points", 
      value: "850", 
      bgGradient: "linear-gradient(135deg, #c7d2fe 0%, #e0e7ff 100%)",
      waveColor: "rgba(165, 180, 252, 0.5)",
      iconBg: "bg-indigo-500",
      icon: <Gift className="w-5 h-5" />
    },
  ];

  const recentOrders = [
    { 
      orderId: "#ORD-12845", 
      product: "Wireless Headphones", 
      date: "Jan 05, 2025", 
      amount: "৳4,500", 
      status: "Delivered",
      image: "🎧"
    },
    { 
      orderId: "#ORD-12844", 
      product: "Smart Watch Pro", 
      date: "Jan 03, 2025", 
      amount: "৳12,999", 
      status: "Shipped",
      image: "⌚"
    },
    { 
      orderId: "#ORD-12843", 
      product: "Phone Case Premium", 
      date: "Dec 28, 2024", 
      amount: "৳899", 
      status: "Processing",
      image: "📱"
    },
    { 
      orderId: "#ORD-12842", 
      product: "USB-C Cable", 
      date: "Dec 25, 2024", 
      amount: "৳350", 
      status: "Delivered",
      image: "🔌"
    },
  ];

  const savedAddresses = [
    { type: "Home", address: "House 42, Road 12, Dhanmondi, Dhaka 1209", isDefault: true },
    { type: "Office", address: "Level 5, Building 8, Gulshan 2, Dhaka 1212", isDefault: false },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-2xl text-white shadow-lg">
        <h1 className="text-2xl font-bold mb-1">Welcome back, Ahmed! 👋</h1>
        <p className="text-blue-100 text-sm">Track your orders and manage your account</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            className="relative p-4 rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden"
            style={{ background: stat.bgGradient }}
          >
            {/* Wave Overlay */}
            <div 
              className="absolute top-0 right-0 rounded-bl-[100px]"
              style={{
                width: '120px',
                height: '120px',
                background: stat.waveColor,
                clipPath: 'ellipse(70% 60% at 80% 20%)'
              }}
            ></div>
            
            {/* Icon */}
            <div className={`relative ${stat.iconBg} w-10 h-10 rounded-full flex items-center justify-center text-white mb-2 shadow-md z-10`}>
              {stat.icon}
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <p className="text-xs font-semibold text-gray-700 mb-1">{stat.label}</p>
              <h3 className="text-2xl font-black text-gray-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Recent Orders</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
          </div>
          
          <div className="space-y-3">
            {recentOrders.map((order, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="text-4xl">{order.image}</div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{order.product}</p>
                  <p className="text-xs text-gray-500 mt-1">{order.orderId} • {order.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{order.amount}</p>
                  <span className={`inline-block px-2 py-1 mt-1 text-xs font-semibold rounded-full ${
                    order.status === 'Delivered' 
                      ? 'bg-green-100 text-green-700' 
                      : order.status === 'Shipped'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Addresses */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Saved Addresses</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Add New</button>
          </div>
          
          <div className="space-y-3">
            {savedAddresses.map((addr, i) => (
              <div key={i} className="p-4 border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-blue-600" />
                    <span className="font-semibold text-gray-900 text-sm">{addr.type}</span>
                  </div>
                  {addr.isDefault && (
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                      Default
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{addr.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
          <Package className="w-8 h-8 mx-auto mb-2 text-blue-600 group-hover:scale-110 transition-transform" />
          <p className="text-sm font-semibold text-gray-900">Track Order</p>
        </button>
        <button className="p-4 bg-white rounded-xl border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all text-center group">
          <Heart className="w-8 h-8 mx-auto mb-2 text-red-600 group-hover:scale-110 transition-transform" />
          <p className="text-sm font-semibold text-gray-900">Wishlist</p>
        </button>
        <button className="p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all text-center group">
          <CreditCard className="w-8 h-8 mx-auto mb-2 text-indigo-600 group-hover:scale-110 transition-transform" />
          <p className="text-sm font-semibold text-gray-900">Payment</p>
        </button>
        <button className="p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all text-center group">
          <Gift className="w-8 h-8 mx-auto mb-2 text-green-600 group-hover:scale-110 transition-transform" />
          <p className="text-sm font-semibold text-gray-900">Rewards</p>
        </button>
      </div>

      {/* Activity Summary */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Account Activity</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-600">Total Spent</p>
                <p className="text-xl font-bold text-gray-900">৳45,890</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-600">Completed Orders</p>
                <p className="text-xl font-bold text-gray-900">21</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-indigo-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-600">Points Earned</p>
                <p className="text-xl font-bold text-gray-900">850 pts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}