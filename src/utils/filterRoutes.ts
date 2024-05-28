import { RouteConfig } from '@/types/routeConfig';
import * as Realm from 'realm-web';

const filterRoutes = (routes: RouteConfig[], user: Realm.User | null): RouteConfig[] => {
    return routes.filter(route => {
        // Render /login if no user exists, otherwise render /logout
        if (route.path === '/login' && user) {
            return false;
        }
        if (route.path === '/logout' && !user) {
            return false;
        }
        return true;
    });
}

export default filterRoutes;