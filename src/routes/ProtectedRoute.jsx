import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

/**
 * A wrapper for routes that require authentication or specific permissions.
 * Example usage: Admin dashboards, staff portals.
 */
const ProtectedRoute = ({ isAllowed, redirectPath = '/', children }) => {
  const location = useLocation();

  if (!isAllowed) {
    // Redirect them to the redirectPath, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience.
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
