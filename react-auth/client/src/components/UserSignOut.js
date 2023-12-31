import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import { Navigate } from "react-router-dom";

const UserSignOut = () => {
   const {actions: { signOut }} = useContext(UserContext);
   useEffect(() => signOut());
   return <Navigate to="/" replace />;
};

export default UserSignOut;
