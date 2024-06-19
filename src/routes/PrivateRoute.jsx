import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PetSkeleton from "../components/PetSkeleton/PetSkeleton";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <PetSkeleton/>;
  }

  if (user) {
    return children;
  }

  return (
    <Navigate to='/login' state={{ from: location }} replace={true}></Navigate>
  );
};

export default PrivateRoute;
