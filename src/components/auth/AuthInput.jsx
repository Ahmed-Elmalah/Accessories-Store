import React, { useState } from "react";

export default function AuthInput({ label, id, error, ...props }) {
  const [isFocused, setIsFocused] = useState(false);

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
          className={`w-full bg-surface-container-lowest border ${
            error ? "border-red-500" : "border-outline-variant"
          } text-on-surface py-4 px-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none placeholder:text-zinc-700 rounded-lg`}
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
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
