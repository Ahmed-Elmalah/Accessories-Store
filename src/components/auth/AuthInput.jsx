import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function AuthInput({ label, id, error, type = "text", ...props }) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="space-y-1.5 w-full">
      {label && (
        <label
          htmlFor={id}
          className={`block text-[10px] uppercase tracking-[0.2em] font-label transition-colors ${
            isFocused ? "text-primary" : "text-on-surface-variant"
          }`}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={inputType}
          className={`w-full bg-surface-container-lowest border ${
            error ? "border-red-500" : "border-outline-variant"
          } text-on-surface py-4 px-4 ${isPassword ? 'pr-12' : ''} text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none placeholder:text-zinc-700 rounded-lg`}
          onFocus={(e) => {
            setIsFocused(true);
            if (props.onFocus) props.onFocus(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            if (props.onBlur) props.onBlur(e);
          }}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-primary focus:outline-none transition-colors"
          >
            {showPassword ? <FiEyeOff className="text-xl" /> : <FiEye className="text-xl" />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
