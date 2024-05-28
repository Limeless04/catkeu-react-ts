import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';

const Logout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = async () => {
            try {
                await logout();
                navigate('/login'); // Redirect to login page after logout
            } catch (error) {
                console.error("Failed to logout", error);
            }
        };

        handleLogout();
    }, [logout, navigate]);

    return null; // This component does not render anything
};

export default Logout;
