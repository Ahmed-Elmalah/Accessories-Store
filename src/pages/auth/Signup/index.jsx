import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import useLogin from "../../../auth/useLogin";
import AuthLayout from "../../../components/auth/AuthLayout";
import AuthInput from "../../../components/auth/AuthInput";
import AuthButton from "../../../components/auth/AuthButton";

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useLogin();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Must be at least 3 characters")
        .max(50, "Must be 50 characters or less")
        .required("Username is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(
          /^[0-9+\-\s()]{10,15}$/,
          "Phone number is not valid"
        )
        .required("Phone number is required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Must contain uppercase, lowercase, number, and special character"
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm your password"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await signup({
          username: values.username,
          email: values.email,
          password: values.password,
          extraFields: { phone: values.phone },
        });

        toast.success("Account created successfully!");
        navigate("/", { replace: true });
      } catch (err) {
        toast.error(
          err.response?.data?.error?.message || "An error occurred during signup."
        );
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <AuthLayout>
      <div className="mb-10 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-light tracking-tight text-white mb-3">
          Create an Account
        </h2>
        <p className="text-on-surface-variant font-light text-sm tracking-wide">
          Join our exclusive club for handmade luxury.
        </p>
      </div>

      <form className="space-y-6" onSubmit={formik.handleSubmit}>
        <div className="space-y-4">
          <AuthInput
            label="Full Name"
            id="username"
            name="username"
            type="text"
            placeholder="Evelyn Vane"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            error={formik.touched.username && formik.errors.username}
          />
          <AuthInput
            label="Email Address"
            id="email"
            name="email"
            type="email"
            placeholder="evelyn@luxury.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
          />
          <AuthInput
            label="Phone Number"
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            error={formik.touched.phone && formik.errors.phone}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AuthInput
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={formik.touched.password && formik.errors.password}
            />
            <AuthInput
              label="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              error={formik.touched.confirmPassword && formik.errors.confirmPassword}
            />
          </div>
        </div>

        <p className="text-[11px] text-on-surface-variant/60 leading-relaxed text-center mt-6">
          By creating an account, you agree to our{" "}
          <span className="text-on-surface-variant underline cursor-pointer hover:text-primary transition-colors">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-on-surface-variant underline cursor-pointer hover:text-primary transition-colors">
            Privacy Policy
          </span>
          .
        </p>

        <AuthButton type="submit" loading={loading}>
          Create Account
        </AuthButton>

        <div className="text-center pt-4 mt-4">
          <p className="text-sm font-light text-on-surface-variant tracking-wide">
            Already have an account?
            <Link
              className="text-primary hover:text-white transition-colors ml-1 font-medium underline decoration-primary/30 underline-offset-4"
              to="/login"
            >
              Log In
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
