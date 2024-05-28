import React from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ListItemIcon } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListItemButton from '@mui/material/ListItemButton';
import { useTheme } from '@mui/material/styles';
import routesConfig from '@/routes/routesConfig';
import {
    Link as RouterLink
} from 'react-router-dom';
import { useAuth } from "@context/AuthContext"
import filterRoutes from '@/utils/filterRoutes';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';

const DRAWERWIDTH: number = 240;
const DRAWERWIDTHMOBILE: number = 180;
interface SidebarProps {
    open: boolean
    toggleSidebar: () => void
}

interface SidebarLinkProps {
    toggleSidebar: () => void
}

const SidebarLink = ({ toggleSidebar }: SidebarLinkProps) => {
    const { user } = useAuth();
    const filteredRoutes = filterRoutes(routesConfig, user);
    const activeLink = (routePath: string): boolean => {
        if (location.pathname === "/" && routePath === "") {
            return true; // Treat "/" as home route
        }
        return location.pathname === routePath;
    };
    return (
        filteredRoutes.map(route => (
            <ListItem key={route.path}>
                <ListItemButton
                    key={route.path}
                    selected={activeLink(route.path)}
                    onClick={toggleSidebar}
                    component={RouterLink}
                    to={route.path}
                >
                    {route.icon && (
                        <ListItemIcon>
                            {route.icon === 'HomeOutlinedIcon' && <HomeOutlinedIcon />}
                            {route.icon === 'LoginOutlinedIcon' && <LoginOutlinedIcon />}
                            {route.icon === 'LogoutOutlinedIcon' && <LogoutOutlinedIcon />}
                            {route.icon === 'SpaceDashboardOutlinedIcon' && <SpaceDashboardOutlinedIcon />}
                        </ListItemIcon>
                    )}
                    <ListItemText primary={route.label} />
                </ListItemButton>
            </ListItem>
        ))
    )
}

function Sidebar({ open, toggleSidebar }: SidebarProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Drawer
            variant="temporary"
            open={open}
            onClose={toggleSidebar}
            sx={{
                width: isMobile ? DRAWERWIDTHMOBILE : DRAWERWIDTH,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: isMobile ? DRAWERWIDTHMOBILE : DRAWERWIDTH,
                    boxSizing: 'border-box',
                },
            }}
        >
            <List>
                <SidebarLink toggleSidebar={toggleSidebar} />
            </List>
        </Drawer >
    );
}

export default Sidebar