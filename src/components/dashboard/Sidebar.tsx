"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, ShoppingCart, Package, Settings, 
  Palette, Library, Globe, Star, Users, Ticket, 
  Image as ImageIcon, PlusSquare, Search, ShieldCheck, 
  Headphones, BookOpen, UserCircle 
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/admin" },
  { name: "Orders", icon: ShoppingCart, href: "/admin/orders" },
  { name: "Products", icon: Package, href: "/admin/products" },
  { name: "Settings", icon: Settings, href: "/admin/settings" },
  { name: "Customization", icon: Palette, href: "/admin/customization" },
  { name: "Catalog", icon: Library, href: "/admin/catalog" },
  { name: "Landing page", icon: Globe, href: "/admin/landing" },
  { name: "Review", icon: Star, href: "/admin/reviews" },
  { name: "Customer", icon: Users, href: "/admin/customers" },
  { name: "Coupon", icon: Ticket, href: "/admin/coupons" },
  { name: "Gallery", icon: ImageIcon, href: "/admin/gallery" },
  { name: "Additional Pages", icon: PlusSquare, href: "/admin/pages" },
  { name: "Seo Pages", icon: Search, href: "/admin/seo" },
  { name: "Admin Control", icon: ShieldCheck, href: "/admin/control" },
  { name: "Support", icon: Headphones, href: "/admin/support" },
  { name: "Tutorials", icon: BookOpen, href: "/admin/tutorials" },
  { name: "Profile", icon: UserCircle, href: "/admin/profile" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-100 h-screen sticky top-0 hidden md:flex flex-col overflow-y-auto custom-scrollbar">
      <div className="p-6 border-b border-gray-50">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xl italic">G</div>
           <span className="font-bold text-gray-800 tracking-tight text-xl uppercase">Gadget<span className="text-pink-500">Shob</span></span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`flex items-center justify-between px-3 py-2.5 rounded-md transition-all group ${
                isActive ? "bg-indigo-50 text-indigo-700 font-semibold" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={18} className={isActive ? "text-indigo-600" : "text-gray-400 group-hover:text-indigo-500"} />
                <span className="text-sm">{item.name}</span>
              </div>
              {isActive && <div className="w-1 h-4 bg-indigo-600 rounded-full"></div>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;