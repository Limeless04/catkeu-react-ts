import { RouteConfig } from '@/types/routeConfig';

const routesConfig: RouteConfig[] = [
    {
        path: "",
        element: () => import('@/pages/home/HomePage'),
        label: "Home",
        auth: true,
        icon: "HomeOutlinedIcon"
    },
    {
        path: "/about",
        element: () => import('@/pages/about/AboutPage'),
        label: "About",
        auth: true,
        icon: "SpaceDashboardOutlinedIcon"
    },
    {
        path: '/login',
        element: () => import("@/pages/auth/LoginPage"),
        label: "Login",
        icon: "LoginOutlinedIcon"
    },
    {
        path: '/logout',
        element: () => import("@/pages/auth/Logout"),
        label: "Logout",
        icon: "LogoutOutlinedIcon"
    },
    {
        path: '/register',
        element: () => import('@/pages/auth/RegisterPage'),
        label: "Register",
        icon: "PersonAddAlt1OutlinedIcon"
    }

];

export default routesConfig;