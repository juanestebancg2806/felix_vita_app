import { Navigate } from "react-router-dom";
import { useAuth } from "../../services/authService/AuthContext";
import { ProtectedRouteProps } from "./protectedRouteUtils";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return children;
  }
  return <Navigate to="/" />;
};

export default ProtectedRoute;
