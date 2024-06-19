import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import PetSkeleton from "../components/PetSkeleton/PetSkeleton";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <PetSkeleton/>;
  }

  if (user && isAdmin) {
    return children;
  }

  return (
    <Navigate
      to='/dashboard'
      state={{ from: location }}
      replace={true}
    ></Navigate>
  );
};

export default AdminRoute;
