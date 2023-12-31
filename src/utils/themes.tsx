import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        mobile: true;
        mobileXl: true;
        tablet: true;
        tabLetXl: true;
        desktop: true;
        desktopXl: true;
    }
}

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            mobile: 320,
            mobileXl: 640,
            tablet: 768,
            tabLetXl: 1024,
            desktop: 1440,
            desktopXl: 1920,
        },
    },
    typography: {
        //normal text base
        body1:{
            fontSize:"16px",
            fontWeight:"400",
            lineHeight:"23.92px"
        },
        // heading shape
        subtitle1:{
            fontSize:"14px",
            fontWeight:"300",
            lineHeight:"21px"
        },
        // heading bold
        subtitle2:{
            fontSize:"16px",
            fontWeight:"400",
            lineHeight:"23.92px"
        },
        h1: {
            fontSize: '56px',
            fontWeight: '500',
        },
        h2: {
            fontSize: '48px',
            fontWeight: '500',
        },
        h3: {
            fontSize: '36px',
            fontWeight: '500',
        },
        h4: {
            fontSize: '28px',
            fontWeight: '500',
        },
        h5: {
            fontSize: '24px',
            fontWeight: '500',
        },
        h6: {
            fontSize: '16px',
            fontWeight: '500',
        },
        
    },
});