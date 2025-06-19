import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return !userInfo ? (
    <Navigate to="/login" replace />
  ) : !userInfo.isAdmin ? (
    <Navigate to="/unauthorized" replace />
  ) : (
    <Outlet />
  );
};

export default AdminRoute;
