"use client";
import React from "react";
import { Plus, TrendingUp, Package, DollarSign, ShoppingBag, Star, Eye } from "lucide-react";

export default function VendorDashboard() {
  const stats = [
    { 
      label: "Store Balance", 
      value: "45,250", 
      bgGradient: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
      waveColor: "rgba(191, 219, 254, 0.5)",
      iconBg: "bg-blue-500",
      icon: <DollarSign className="w-5 h-5" />,
      trend: "+15.3%"
    },
    { 
      label: "Total Products", 
      value: "89", 
      bgGradient: "linear-gradient(135deg, #c7d2fe 0%, #e0e7ff 100%)",
      waveColor: "rgba(165, 180, 252, 0.5)",
      iconBg: "bg-indigo-500",
      icon: <Package className="w-5 h-5" />,
      trend: "+8"
    },
    { 
      label: "Orders This Month", 
      value: "156", 
      bgGradient: "linear-gradient(135deg, #fed7aa 0%, #ffedd5 100%)",
      waveColor: "rgba(251, 191, 136, 0.5)",
      iconBg: "bg-orange-500",
      icon: <ShoppingBag className="w-5 h-5" />,
      trend: "+23.5%"
    },
    { 
      label: "Pending Orders", 
      value: "12", 
      bgGradient: "linear-gradient(135deg, #fef08a 0%, #fef9c3 100%)",
      waveColor: "rgba(253, 224, 71, 0.5)",
      iconBg: "bg-yellow-500",
      icon: <ShoppingBag className="w-5 h-5" />,
      trend: "3 new"
    },
    { 
      label: "Store Rating", 
      value: "4.8", 
      bgGradient: "linear-gradient(135deg, #fef08a 0%, #fef9c3 100%)",
      waveColor: "rgba(253, 224, 71, 0.5)",
      iconBg: "bg-yellow-400",
      icon: <Star className="w-5 h-5" />,
      trend: "245 reviews"
    },
    { 
      label: "Total Views", 
      value: "8,429", 
      bgGradient: "linear-gradient(135deg, #bbf7d0 0%, #dcfce7 100%)",
      waveColor: "rgba(134, 239, 172, 0.5)",
      iconBg: "bg-green-500",
      icon: <Eye className="w-5 h-5" />,
      trend: "+12.8%"
    },
  ];

  const recentProducts = [
    { name: "Wireless Headphones", price: "৳4,500", stock: 45, status: "Active", sales: 23 },
    { name: "Smart Watch Pro", price: "৳12,999", stock: 12, status: "Active", sales: 45 },
    { name: "Phone Case Premium", price: "৳899", stock: 0, status: "Out of Stock", sales: 67 },
    { name: "USB-C Cable", price: "৳350", stock: 89, status: "Active", sales: 123 },
    { name: "Laptop Stand", price: "৳2,100", stock: 34, status: "Active", sales: 34 },
  ];

  const recentOrders = [
    { orderId: "#12845", customer: "Ahmed Khan", amount: "৳4,500", status: "Processing", date: "Today" },
    { orderId: "#12844", customer: "Fatima Ali", amount: "৳12,999", status: "Shipped", date: "Today" },
    { orderId: "#12843", customer: "Karim Rahman", amount: "৳899", status: "Delivered", date: "Yesterday" },
    { orderId: "#12842", customer: "Nadia Islam", amount: "৳2,450", status: "Processing", date: "Yesterday" },
  ];

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Vendor Overview</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your products and track sales</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">
          <Plus size={18} />
          Add New Product
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
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
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-black text-gray-900">{stat.value}</h3>
                {i === 0 && <span className="text-sm font-bold text-gray-700">৳</span>}
              </div>
              <p className="text-xs text-gray-600 mt-1">{stat.trend}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Products */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800">Recent Products</h2>
            <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600">Product</th>
                  <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600">Price</th>
                  <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600">Stock</th>
                  <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600">Sales</th>
                  <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentProducts.map((product, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-2 text-sm font-medium text-gray-900">{product.name}</td>
                    <td className="py-3 px-2 text-sm text-gray-700">{product.price}</td>
                    <td className="py-3 px-2 text-sm text-gray-700">{product.stock}</td>
                    <td className="py-3 px-2 text-sm text-gray-700">{product.sales}</td>
                    <td className="py-3 px-2">
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                        product.status === 'Active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sales Chart Placeholder */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Monthly Sales</h2>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-dashed border-blue-200 flex flex-col items-center justify-center">
            <div className="text-4xl mb-2">📊</div>
            <p className="text-gray-600 text-sm font-medium">Sales Chart</p>
            <p className="text-xs text-gray-400 mt-1">Coming Soon</p>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Recent Orders</h2>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All Orders</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600">Order ID</th>
                <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600">Customer</th>
                <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600">Amount</th>
                <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600">Status</th>
                <th className="text-left py-3 px-2 text-xs font-semibold text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-2 text-sm font-medium text-blue-600">{order.orderId}</td>
                  <td className="py-3 px-2 text-sm text-gray-900">{order.customer}</td>
                  <td className="py-3 px-2 text-sm font-semibold text-gray-900">{order.amount}</td>
                  <td className="py-3 px-2">
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                      order.status === 'Delivered' 
                        ? 'bg-green-100 text-green-700' 
                        : order.status === 'Shipped'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-sm text-gray-600">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

