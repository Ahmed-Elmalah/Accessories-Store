import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useLogin from "../../../auth/useLogin";
import AuthLayout from "../../../components/auth/AuthLayout";
import AuthInput from "../../../components/auth/AuthInput";
import AuthButton from "../../../components/auth/AuthButton";

export default function Login() {
  const { login } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login({ email, password }, rememberMe);
      toast.success("Welcome back!");
    } catch (err) {
      toast.error(
        err.response?.data?.error?.message || "Invalid email or password.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-headline font-semibold text-on-surface mb-2 tracking-tight">
          Welcome Back
        </h1>
        <p className="text-sm font-body text-on-surface-variant">
          Sign in to your account
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <AuthInput
          label="Email Address"
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="space-y-1.5 w-full">
          <div className="flex justify-between items-center mb-1">
            <label className="block text-[10px] uppercase tracking-[0.2em] font-label text-on-surface-variant">
              Password
            </label>
            <Link
              className="text-[10px] font-medium text-primary hover:underline transition-all"
              to="#"
            >
              Forgot Password?
            </Link>
          </div>
          <AuthInput
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 rounded border-outline bg-surface-container-lowest text-primary focus:ring-primary focus:ring-offset-surface-container"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-[10px] text-on-surface-variant font-label tracking-widest uppercase"
          >
            Remember me
          </label>
        </div>

        <AuthButton type="submit" loading={loading} icon="login">
          Sign In
        </AuthButton>
      </form>

      {/* Divider */}
      <div className="flex items-center my-8">
        <div className="grow border-t border-outline-variant"></div>
        <span className="shrink-0 mx-4 text-on-surface-variant text-[10px] font-medium tracking-widest uppercase">
          Or
        </span>
        <div className="grow border-t border-outline-variant"></div>
      </div>

      {/* Footer Action */}
      <p className="text-sm text-center text-on-surface-variant font-light tracking-wide">
        New customer?{" "}
        <Link
          className="font-medium text-primary hover:underline transition-all"
          to="/signup"
        >
          Create an account
        </Link>
      </p>
    </AuthLayout>
  );
}
