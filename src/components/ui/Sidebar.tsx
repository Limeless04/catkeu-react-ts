import React from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListItemButton from '@mui/material/ListItemButton';
import { useTheme } from '@mui/material/styles';
import routesConfig from '@/routes/routesConfig';
import {
    Link as RouterLink,
    useLocation
} from 'react-router-dom';

const DRAWERWIDTH: number = 240;
const DRAWERWIDTHMOBILE: number = 180;
interface SidebarProps {
    open: boolean
    toggleSidebar: () => void
}

function Sidebar({ open, toggleSidebar }: SidebarProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const location = useLocation()

    const activeLink = (routePath: string): boolean => {
        if (location.pathname === "/" && routePath === "") {
            return true; // Treat "/" as home route
        }
        return location.pathname === routePath;
    };
    console.log(location.pathname)

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
                {
                    routesConfig.map(route => (
                        <ListItem key={route.path}>
                            <ListItemButton
                                key={route.path}
                                selected={activeLink(route.path)}
                                onClick={toggleSidebar}
                                component={RouterLink}
                                to={route.path}
                            >
                                <ListItemText primary={route.label} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer >
    );
}

export default Sidebar