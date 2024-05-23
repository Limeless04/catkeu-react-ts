
import HomePage from '@/pages/home/HomePage'
import AboutPage from '@/pages/about/AboutPage'
import { RouteConfig } from '@/types/routeConfig';

const routesConfig: RouteConfig[] = [
    {
        path: "",
        element: <HomePage />,
        label: "Home",
    },
    {
        path: "/about",
        element: <AboutPage />,
        label: "About",
    },
    // Add more routes as needed
];

export default routesConfig;