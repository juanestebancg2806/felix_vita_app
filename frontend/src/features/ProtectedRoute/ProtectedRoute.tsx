import { Navigate } from "react-router-dom";
import { useAuth } from "../../services/authService/AuthContext";
import { ProtectedRouteProps } from "./protectedRouteUtils";

/**
 * A protected route component that only renders its children if the user is authenticated.
 *
 * @component
 * @param {React.ReactNode} children - The children components to be rendered if the user is authenticated.
 * @returns {React.ReactNode} - The rendered children components or a redirection to the home page if the user is not authenticated.
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return children;
  }
  return <Navigate to="/" />;
};

export default ProtectedRoute;
