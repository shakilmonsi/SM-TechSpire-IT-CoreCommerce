"use client";
import React from "react";

export default function AdminDashboard() {
  const stats = [
    { 
      label: "Order Amount", 
      value: "255999", 
      bgColor: "bg-blue-50",
      overlayColor: "bg-blue-200/30",
      iconBg: "bg-blue-500",
      icon: "💰",
      trendColor: "text-green-600"
    },
    { 
      label: "All Orders", 
      value: "2", 
      bgColor: "bg-orange-50",
      overlayColor: "bg-orange-200/30",
      iconBg: "bg-orange-500",
      icon: "📦",
      trendColor: "text-green-600"
    },
    { 
      label: "Confirmed Orders", 
      value: "0", 
      bgColor: "bg-green-50",
      overlayColor: "bg-green-200/30",
      iconBg: "bg-green-500",
      icon: "✓",
      trendColor: "text-gray-400"
    },
    { 
      label: "Delivered Orders", 
      value: "0", 
      bgColor: "bg-red-50",
      overlayColor: "bg-red-200/30",
      iconBg: "bg-red-500",
      icon: "🚚",
      trendColor: "text-gray-400"
    },
    { 
      label: "Pending Orders", 
      value: "2", 
      bgColor: "bg-yellow-50",
      overlayColor: "bg-yellow-200/30",
      iconBg: "bg-yellow-500",
      icon: "⏳",
      trendColor: "text-green-600"
    },
    { 
      label: "Cancelled Orders", 
      value: "0", 
      bgColor: "bg-pink-50",
      overlayColor: "bg-pink-200/30",
      iconBg: "bg-pink-500",
      icon: "✕",
      trendColor: "text-gray-400"
    },
    { 
      label: "Total Products", 
      value: "23", 
      bgColor: "bg-indigo-50",
      overlayColor: "bg-indigo-200/30",
      iconBg: "bg-indigo-500",
      icon: "📦",
      trendColor: "text-green-600"
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            📅 Filter in Date
          </button>
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-green-600 hover:bg-gray-50 transition-colors">
            Today
          </button>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {stats.map((stat, i) => (
          <div 
            key={i} 
            className={`relative ${stat.bgColor} p-5 rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden group`}
          >
            {/* Curved Overlay Background - যেমন screenshot এ */}
            <div 
              className={`absolute top-0 right-0 w-32 h-32 ${stat.overlayColor} rounded-bl-full opacity-60`}
              style={{
                clipPath: 'ellipse(80% 70% at 100% 0%)'
              }}
            ></div>
            
            {/* Circular Icon */}
            <div className={`relative ${stat.iconBg} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mb-3 shadow-lg z-10`}>
              {stat.icon}
            </div>
            
            {/* Label */}
            <p className="relative text-xs font-semibold text-gray-700 mb-2 z-10">{stat.label}</p>
            
            {/* Value */}
            <div className="relative flex items-baseline gap-1 mb-2 z-10">
              <h3 className="text-3xl font-black text-gray-900">{stat.value}</h3>
              {i === 0 && <span className="text-sm font-bold text-gray-700">৳</span>}
            </div>
            
            {/* Animated Trend Indicator */}
            <div className={`relative flex items-center gap-1 z-10 ${stat.trendColor}`}>
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-y-[-2px] duration-300" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
              <span className="text-xs font-medium">Growing</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Overview Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-800">Revenue Overview</h2>
            <div className="flex gap-1">
              <button className="px-4 py-1.5 text-xs font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Yearly
              </button>
              <button className="px-4 py-1.5 text-xs font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Monthly
              </button>
              <button className="px-4 py-1.5 text-xs font-medium bg-white border border-gray-300 rounded-lg shadow-sm">
                Last Week
              </button>
            </div>
          </div>
          
          {/* Chart Area */}
          <div className="relative h-80 mt-4">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="border-t border-gray-100"></div>
              ))}
            </div>
            
            {/* Y-axis Labels */}
            <div className="absolute -left-1 top-0 bottom-0 flex flex-col justify-between text-[10px] text-gray-500 pr-2">
              <span>300,000</span>
              <span>250,000</span>
              <span>200,000</span>
              <span>150,000</span>
              <span>100,000</span>
              <span>50,000</span>
              <span>0</span>
            </div>
            
            {/* Chart Bars */}
            <div className="absolute left-12 right-0 top-0 bottom-6 flex items-end justify-around">
              {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, idx) => (
                <div key={day} className="flex flex-col items-center flex-1 max-w-[60px]">
                  <div 
                    className="w-full rounded-t-lg transition-all duration-500 hover:opacity-80"
                    style={{
                      background: idx === 1 
                        ? 'linear-gradient(to top, #3b82f6 0%, #60a5fa 100%)' 
                        : 'transparent',
                      height: idx === 1 ? '85%' : '0%',
                      boxShadow: idx === 1 ? '0 4px 12px rgba(59, 130, 246, 0.3)' : 'none'
                    }}
                  ></div>
                </div>
              ))}
            </div>
            
            {/* X-axis Labels */}
            <div className="absolute left-12 right-0 bottom-0 flex justify-around text-[10px] text-gray-600">
              {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
                <span key={day} className="text-center">{day}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Sales by Category */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Sales by Category</h2>
          <div className="h-80 flex flex-col items-center justify-center">
            <div className="text-6xl mb-4 opacity-40">🛒</div>
            <p className="text-sm font-medium text-gray-400">No Data Found</p>
          </div>
        </div>
      </div>
    </div>
  );
}