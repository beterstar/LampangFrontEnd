import { Navigate, Outlet } from 'react-router-dom'


// this is function to accept private route => getToken();
const getToken = () => {
    return "ACCEPT"
}

interface authenticationProps {
    token: boolean;
}
const PrivateRoute = () => {
    let auth: authenticationProps = { token: !!getToken() };
    return (
        auth.token ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoute
