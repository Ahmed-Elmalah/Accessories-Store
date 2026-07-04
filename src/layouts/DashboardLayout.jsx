import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../auth/authStore";
import useLogin from "../auth/useLogin";

export default function DashboardLayout() {
  const { user } = useAuthStore();
  const { logOut } = useLogin();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-950 flex">
      {/* Sidebar Placeholder */}
      <aside className="w-64 border-r border-zinc-800 p-6 flex flex-col">
        <div className="text-xl font-bold text-primary mb-8">
          Accessories<span className="text-white">Store</span>
        </div>
        
        <nav className="flex-1 space-y-4">
          <p className="text-sm text-zinc-500 uppercase tracking-wider font-semibold">
            Menu
          </p>
          <a href="#" className="block text-zinc-300 hover:text-primary transition-colors">
            Dashboard
          </a>
          <a href="#" className="block text-zinc-300 hover:text-primary transition-colors">
            Orders
          </a>
          <a href="#" className="block text-zinc-300 hover:text-primary transition-colors">
            Products
          </a>
        </nav>

        <div className="pt-6 border-t border-zinc-800">
          <div className="mb-4 text-sm">
            <p className="text-zinc-400">Logged in as:</p>
            <p className="font-semibold">{user?.username}</p>
            <p className="text-xs text-primary">{user?.role?.name}</p>
          </div>
          <button 
            onClick={logOut}
            className="w-full py-2 text-sm text-white bg-red-600/10 hover:bg-red-600/20 text-red-500 rounded-lg transition-colors"
          >
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <header className="h-16 border-b border-zinc-800 flex items-center justify-end px-8">
           <button onClick={() => navigate("/")} className="text-sm text-zinc-400 hover:text-white transition">
             View Store
           </button>
        </header>
        <div className="p-8 flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
