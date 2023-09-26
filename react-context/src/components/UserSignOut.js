import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

const UserSignOut = () => {
  const {actions:{signOut}} = useContext(UserContext)
  useEffect(() => signOut());
  return (
    <Navigate to="/" replace />
  );
};

export default UserSignOut;