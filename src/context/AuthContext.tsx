import { useAuthStores } from "@/stores/AuthStore";
import { useEffect, createContext, useContext, } from "react";
import * as Realm from 'realm-web';
import { useState } from "react";

const app = new Realm.App({ id: import.meta.env.VITE_REALM_APP_ID });

interface AuthContextType {
    user: Realm.User | null;
    loading: boolean
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    register: (email: string, password: string) => Promise<void>
}
interface AuthProviderProps {
    children: React.ReactNode;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useAuthStores(state => [state.user, state.setUser])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (app.currentUser) {
            setUser(app.currentUser);
        }
    }, [setUser]);

    const login = async (email: string, password: string) => {
        const credentials = Realm.Credentials.emailPassword(email, password);
        setLoading(true);
        try {
            const user = await app.logIn(credentials);
            setUser(user);
        } catch (error) {
            console.error("Failed to log in", error);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        if (user) {
            setLoading(true)
            try {
                user.logOut();
                setUser(null);
            } catch (error) {
                console.error("Failed to log out", error);
            } finally {
                setLoading(false);
            }
        }
    };

    const register = async (email: string, password: string) => {
        setLoading(true)
        try {
            await app.emailPasswordAuth.registerUser({
                email: email,
                password: password,
            });
        } catch (error) {
            console.error("Failed to register user", error);
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, register }}>
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