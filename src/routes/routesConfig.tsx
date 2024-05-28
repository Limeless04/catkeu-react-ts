
import HomePage from '@/pages/home/HomePage'
import AboutPage from '@/pages/about/AboutPage'
import { RouteConfig } from '@/types/routeConfig';
import LoginPage from "@/pages/login/LoginPage"
import Logout from "@/pages/login/Logout"

const routesConfig: RouteConfig[] = [
    {
        path: "",
        element: <HomePage />,
        label: "Home",
        auth: true,
        icon: "HomeOutlinedIcon"
    },
    {
        path: "/about",
        element: <AboutPage />,
        label: "About",
        auth: true,
        icon: "SpaceDashboardOutlinedIcon"
    },
    {
        path: '/login',
        element: <LoginPage />,
        label: "Login",
        icon: "LoginOutlinedIcon"
    },
    {
        path: '/logout',
        element: <Logout />,
        label: "Logout",
        icon: "LogoutOutlinedIcon"
    }

];

export default routesConfig;