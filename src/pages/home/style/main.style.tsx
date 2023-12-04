import { Box, styled } from "@mui/material";


export const ContainerHome = styled(Box)({
    width: "100%",
    height: "auto",
    minHeight: "100vh",
    display: 'flex'
})

export const MainContainer = styled('div')({
    width: '100%',
    maxWidth:"100vw",
    display: 'flex',
    flex: "1 1 0",
    flexDirection: "column"
})

export const Content = styled('div')(({ theme }) => ({
    flex: "1",
    height: "100%",
    padding: "44px 48px",
    [theme.breakpoints.down('mobileXl')]:{
        padding:"22px 24px"
    }
}))