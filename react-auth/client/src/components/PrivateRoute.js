import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const PrivateRoute = () => {
   const location = useLocation()
   console.log(location);
   const { authUser } = useContext(UserContext);
   if (authUser) {
      return <Outlet />;
   } else {
      return <Navigate to="signin" state={{from: location.pathname}}/>;
   }
};

export default PrivateRoute;
