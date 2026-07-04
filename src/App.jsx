import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./auth/ProtectedRoute";

// Layouts
import StoreLayout from "./layouts/StoreLayout";
import DashboardLayout from "./layouts/DashboardLayout";

// Pages
import Home from "./pages/user/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StaffDashboard from "./pages/staff/StaffDashboard";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#111111",
            color: "#ffffff",
            border: "1px solid #333333",
          },
        }}
      />
      <Routes>
      {/* Public Store Routes */}
      <Route element={<StoreLayout />}>
        <Route path="/" element={<Home />} />
        {/* other store pages like /products, /cart can go here */}
      </Route>

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Admin Protected Routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        {/* other admin pages like /admin/users can go here */}
      </Route>

      {/* Staff Protected Routes */}
      <Route
        path="/staff"
        element={
          <ProtectedRoute allowedRoles={["staff"]}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<StaffDashboard />} />
        {/* other staff pages like /staff/orders can go here */}
      </Route>
      
      {/* Fallback 404 Route */}
      <Route path="*" element={<div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white"><h1 className="text-4xl font-bold">404 - Page Not Found</h1></div>} />
    </Routes>
    </>
  );
}

export default App;
