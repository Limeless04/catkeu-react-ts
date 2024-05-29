import { create } from "zustand"
import * as Realm from 'realm-web';


const app = new Realm.App({ id: import.meta.env.VITE_REALM_APP_ID });

interface AuthStoresProps {
    user: Realm.User | null;
    setUser: (newData: Realm.User | null) => void
}
export const useAuthStores = create<AuthStoresProps>((set) => ({
    user: app.currentUser || null,
    setUser: (newData) => set({ user: newData }),
}))