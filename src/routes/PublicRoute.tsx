import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("token");

  // Already logged in
  if (token) {
    return <Navigate to="/" replace />;
  }

  // Not logged in
  return <Outlet />;
};

export default PublicRoute;