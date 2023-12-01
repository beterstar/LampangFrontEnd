import { Box, styled } from '@mui/material';
import { RouteImage } from '../../../assets/routeImage';
import { colors } from '../../../constants/colors';
import { motion } from 'framer-motion';

export const Container = styled('main')(({ theme }) => ({
    width: "100vw",
    minWidth: "auto",
    height: "100%",
    minHeight: "100vh",
    background: `url(${RouteImage.bg_login}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "0 348px",
    overflow: "hidden",
    [theme.breakpoints.down('desktopXl')]: {
        width: "100%",

        padding: "0 156px"
    },
    [theme.breakpoints.down('desktop')]: {

        padding: "0 40px"
    },
    [theme.breakpoints.down('tablet')]: {

    },
    [theme.breakpoints.down('mobileXl')]: {
        padding: "0 10px"
    },
}))

export const MainBox = styled('div')(({ theme }) => ({
    width: "100%",
    height: "100vh",
    minHeight: "100%",
    display: "flex",
    justifyContent: 'flex-end',
    alignItems: "flex-end",
    [theme.breakpoints.down('tablet')]:{
        justifyContent:"center",
        alignItems:"center",
        height:"auto",
        padding:"2rem 0.3rem"
    }
}))

export const LoginBox = styled(motion.div)(({ theme }) => ({
    width: "100%",
    maxWidth: "524px",
    height: "100%",
    maxHeight: "734px",
    // marginBottom: "124px",
    borderRadius: '8px',
    padding: '60px 48px 60px 48px',
    backgroundColor: colors.white,
    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.10),0 4px 6px -4px rgba(0,0,0,0.10)",
    marginBottom:"136px",
    'div': {
        '&:nth-of-type(2)': {
            'h1': {
                lineHeight: "42px",
                color: colors.lampang_primary,
            }
        },
    },
    [theme.breakpoints.down('tablet')]: {
        height: "auto",
        maxHeight: "1000px",
        padding:"20px 20px",
        marginTop:"5rem",
        overflow:"auto",
    }
}))