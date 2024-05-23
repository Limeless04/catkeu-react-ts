import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@components/ui/Navbar';
import Sidebar from '@components/ui/Sidebar';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from "@styles/theme"

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ display: 'flex' }}>
          <Navbar toggleSidebar={toggleSidebar} />
          <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
          <div style={{
            flexGrow: 1, marginTop: "10px", marginLeft: isMobile ? "20px" : "10%", marginRight: isMobile ? "20px" : "10 % ", paddingTop: isMobile ? "60px" : "40px"
          }}>
            <Outlet />
          </div>
        </div>
      </ThemeProvider >

    </>
  )
}

export default App
