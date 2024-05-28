import React, { createContext, useContext, useEffect, useState } from 'react';
import * as Realm from 'realm-web';

const app = new Realm.App({ id: import.meta.env.VITE_REALM_APP_ID });

interface AuthContextType {
    user: Realm.User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

interface AuthProviderProps {
    children: React.ReactNode;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<Realm.User | null>(app.currentUser);

    useEffect(() => {
        if (app.currentUser) {
            setUser(app.currentUser);
        }
    }, []);

    const login = async (email: string, password: string) => {
        const credentials = Realm.Credentials.emailPassword(email, password);
        try {
            const user = await app.logIn(credentials);
            setUser(user);
        } catch (error) {
            console.error("Failed to log in", error);
        }
    };

    const logout = () => {
        if (user) {
            user.logOut();
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};