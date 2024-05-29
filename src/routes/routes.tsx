import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom"
import { Suspense, lazy } from "react"
import { RouteConfig } from '@/types/routeConfig';
import routesConfig from "./routesConfig";
import App from "@/App"
import ProtectedRoute from "./protectedRoutes"
import Loading from "@components/Loading"
const generateRoutes = (routesConfig: RouteConfig[]) => {
    return routesConfig.map(route => {

        const Element = lazy(route.element)

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    <Suspense fallback={<Loading />}>
                        {
                            route.auth ? (
                                <ProtectedRoute element={<Element />} />
                            ) : (
                                <Element />
                            )
                        }
                    </Suspense>
                }
            />
        )
    })
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            {generateRoutes(routesConfig)}
        </Route>
    )
);


export default router