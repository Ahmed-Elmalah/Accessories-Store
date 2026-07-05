import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./auth/ProtectedRoute";

// Layouts
import StoreLayout from "./components/user/layout/StoreLayout";
import ScrollToTop from "./components/user/layout/ScrollToTop";
import DashboardLayout from "./layouts/DashboardLayout";
import StaffLayout from "./layouts/StaffLayout";

// Pages
import HomePage from "./pages/user/HomePage";
import ProductsPage from "./pages/user/ProductsPage";
import ProductDetailsPage from "./pages/user/ProductDetailsPage";
import CheckoutPage from "./pages/user/CheckoutPage";
import OrderConfirmationPage from "./pages/user/OrderConfirmationPage";
import ProfilePage from "./pages/user/ProfilePage";
import WishlistPage from "./pages/user/WishlistPage";
import OrderTrackingPage from "./pages/user/OrderTrackingPage";
import CategoriesPage from "./pages/user/CategoriesPage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import StaffDashboardPage from "./pages/staff/StaffDashboardPage";
import Products from "./pages/admin/Products";
import OrdersPage from "./pages/admin/Orders";
import AdminDashboard from "./pages/admin/AdminDashboard";
import StaffOrderDetailsPage from "./pages/staff/StaffOrderDetailsPage";

function App() {
  return (
    <>
      <ScrollToTop />
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
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/order-confirmation"
            element={<OrderConfirmationPage />}
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/tracking" element={<OrderTrackingPage />} />
          {/* other store pages like /cart can go here */}
        </Route>

        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

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

          <Route path="products" element={<Products />} />

          <Route path="orders" element={<OrdersPage />} />
          <Route
            path="promotions"
            element={<div className="p-8 text-white">صفحة العروض (قريباً)</div>}
          />
          <Route
            path="staff"
            element={
              <div className="p-8 text-white">صفحة الموظفين (قريباً)</div>
            }
          />
          <Route
            path="settings"
            element={
              <div className="p-8 text-white">صفحة الإعدادات (قريباً)</div>
            }
          />
        </Route>

        {/* Staff Protected Routes */}
        <Route
          path="/staff"
          element={
            <ProtectedRoute allowedRoles={["staff"]}>
              <StaffLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<StaffDashboardPage />} />
          <Route path="orders/:id" element={<StaffOrderDetailsPage />} />
        </Route>

        {/* Fallback 404 Route */}
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">
              <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
