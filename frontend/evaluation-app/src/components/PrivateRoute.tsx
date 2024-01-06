import React, { useEffect } from 'react';
import { Route, Navigate, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';
import Login from './Login';

interface PrivateRouteProps {
  children: React.ReactNode; // Add the children property
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
    }
  }, [navigate]);

  return <>{children}</>;
};

export default PrivateRoute;