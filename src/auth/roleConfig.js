// ============================================================
// roleConfig.js
// Central config file for all roles in the app.
// If you add a new role, just add it here — no need to touch
// any other file in the auth system.
// ============================================================

export const roleConfig = {
  admin: {
    redirect: "/admin",       // where to go after login
    label: "Admin",           // display name
  },
  staff: {
    redirect: "/staff",
    label: "Staff",
  },
  authenticated: {
    redirect: "/",
    label: "User",
  },
};

// Fallback redirect if the role is unknown or missing
export const defaultRedirect = "/";

// Helper: get the redirect path for a given role string
export const getRedirectByRole = (roleName = "") => {
  const name = roleName.toLowerCase().trim();
  
  if (name.includes('admin')) return roleConfig.admin.redirect;
  if (name.includes('staff')) return roleConfig.staff.redirect;
  if (name.includes('authenticated') || name.includes('user')) return roleConfig.authenticated.redirect;
  
  return defaultRedirect;
};

// Helper: check if a role string is valid/known
export const isValidRole = (roleName = "") => {
  const key = roleName.toLowerCase().trim();
  return Object.keys(roleConfig).includes(key);
};