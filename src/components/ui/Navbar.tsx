import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface NavbarProps {
    toggleSidebar: () => void
}

function Navbar({ toggleSidebar }: NavbarProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar position="fixed" sx={{
            height: isMobile ? "50px" : "40px",
            paddingLeft: "10%",
            paddingRight: "10%",
            backgrounColor: theme.palette.primary.darker
        }}>
            <IconButton
                color="inherit"
                aria-label="open sidebar"
                onClick={toggleSidebar}
                sx={{
                    position: 'absolute',
                    left: isMobile ? '10px' : '10%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant={isMobile ? "subtitle1" : "h6"} sx={{ lineHeight: isMobile ? '50px' : '40px', paddingLeft: isMobile ? "10px" : "60px" }}>
                Navbar
            </Typography>
        </AppBar>
    );
}

export default Navbar