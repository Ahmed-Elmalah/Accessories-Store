import { Outlet, Link } from "react-router-dom";
import { useAuthStore } from "../auth/authStore";
import useLogin from "../auth/useLogin";

export default function StoreLayout() {
  const { user } = useAuthStore();
  const { logOut } = useLogin();

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col font-sans">
      <header className="border-b border-zinc-800 sticky top-0 bg-zinc-950/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tight text-white">
            Accessories<span className="text-primary">Store</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Home</Link>
            <Link to="/products" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Shop</Link>
            <Link to="/categories" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Collections</Link>
          </nav>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-zinc-400">Hello, {user.username}</span>
                {['admin', 'staff'].includes(user?.role?.name?.toLowerCase()) && (
                  <Link to={`/${user.role.name.toLowerCase()}`} className="text-sm text-primary hover:text-white transition">
                    Dashboard
                  </Link>
                )}
                <button onClick={logOut} className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Log out
                </button>
              </div>
            ) : (
              <Link to="/login" className="px-4 py-2 text-sm font-medium bg-primary text-black rounded-lg hover:bg-primary/90 transition-colors">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-zinc-900 py-12 mt-24">
        <div className="container mx-auto px-6 text-center text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} Accessories Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
