import React, { createContext, useContext } from 'react';
import { useAuthStores } from '@/stores/AuthStore';
import * as Realm from 'realm-web';


interface RealmContextType {
    user: Realm.User | null;
}

// Create a context for your Realm app
const RealmContext = createContext<RealmContextType | null>(null);

// Props for the RealmProvider component
interface RealmProviderProps {
    children: React.ReactNode;
}

// RealmProvider component to provide the Realm app to the context
export const RealmProvider: React.FC<RealmProviderProps> = ({ children }) => {
    const [user, setUser] = useAuthStores(state => [state.user, state.setUser]);

    return (
        <RealmContext.Provider value={{ user }}>
            {children}
        </RealmContext.Provider>
    );
};

// Custom hook to access the Realm context
export const useRealm = (): RealmContextType => {
    const context = useContext(RealmContext);
    if (context === null) {
        throw new Error("useRealm must be used within a RealmProvider");
    }
    return context;
};
