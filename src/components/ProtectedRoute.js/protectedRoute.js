import React from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { Navigate  } from 'react-router-dom';

function ProtectedRoute({ children }) {

    const {loggedIn} = useAuth();

  return (
    loggedIn ? children : <Navigate to="/Account" />
  )
}

export default ProtectedRoute;