import { Navigate } from "react-router-dom";
import { useAuth } from "./features/auth/hooks/useAuth";

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isAuthenticated } = useAuth();

  console.log(isAuthenticated,'Authenticated')

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (user?.role !== "ADMIN") {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default AdminRoute;