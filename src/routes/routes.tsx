import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom"
import { RouteConfig } from '@/types/routeConfig';
import routesConfig from "./routesConfig";
import App from "@/App"
const generateRoutes = (routesConfig: RouteConfig[]) => {
    return routesConfig.map(route => (
        <Route key={route.path} path={route.path} element={route.element} />
    ))
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            {generateRoutes(routesConfig)}
        </Route>
    )
);


export default router