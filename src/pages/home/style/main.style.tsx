import { Container, Box, styled } from "@mui/material";


export const ContainerHome = styled(Box)({
    width: "auto",
    height: "auto",
    minHeight: "100vh",
    display: 'flex',
    overflow: "hidden"
})

export const MainContainer = styled('div')({
    width: '100%',
    maxWidth: '100vw',
    overflow: "auto",
    display: 'flex',
    flex: '1 1 0',
    flexDirection: 'column',
});
export const Content = styled('div')(({ theme }) => ({
    flex: "1",
    // width:"100%",
    height: "100%",
    padding: "44px 48px",
    [theme.breakpoints.down('mobileXl')]: {
        padding: "22px 24px"
    }
}))


export const TopicHeader = styled('section')(({ theme }) => ({
    width: "100%",
    height: 'auto',
    minHeight: "42px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    marginBottom: "32px",
    [theme.breakpoints.down('md')]: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    'span': {
        display: 'flex',
        gap: "4px",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
        }
    }
}))