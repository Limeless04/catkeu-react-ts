// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';

interface ProtectedRouteProps {
    element: React.ReactElement;
}

const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
    const { user } = useAuth();
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return element;
};

export default ProtectedRoute;
