import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;


// wrap routes like this for protection

// <Route
//   path="/checkout"
//   element={
//     <ProtectedRoute>
//       <Checkout />
//     </ProtectedRoute>
//   }
// />



// this file is not used, replaced with AdminRoute ❌