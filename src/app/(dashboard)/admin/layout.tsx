import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50/50">
      {/* বাম পাশে স্টিকি সাইডবার */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* উপরের টপবার (Topbar) */}
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-30">
          <h2 className="font-semibold text-gray-800 text-lg">Dashboard Control</h2>
          <div className="flex items-center gap-4">
             <div className="flex flex-col text-right">
                <span className="text-sm font-bold text-gray-900 leading-none">Shakil Ahmed</span>
                <span className="text-[10px] text-gray-500 font-medium">System Manager</span>
             </div>
             <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-sm">S</div>
          </div>
        </header>

        {/* মেইন কন্টেন্ট এলাকা যেখানে page.tsx এর ডাটা আসবে */}
        <main className="p-8 animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
}