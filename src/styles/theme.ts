import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';


declare module '@mui/material/styles' {
    interface PaletteColor {
        darker?: string;
        yaleBlue?: string;
    }

    interface SimplePaletteColorOptions {
        darker?: string;
        yaleBlue?: string;
    }
}


const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
    palette: {
        primary: {
            yaleBlue: "#0D3B66",
            light: blue[300],
            main: blue[500],
            dark: blue[700],
            darker: blue[900],
        }
    }
});

export default theme;