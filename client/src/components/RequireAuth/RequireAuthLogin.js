import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuthLogin = () => {
    console.log('require auth');
    const { auth } = useAuth();
    const location = useLocation();
    console.log(auth)

    return (
        auth?.accessToken
            ? <Outlet/>
            : <Navigate to = '/login' />
    );
}

export default RequireAuthLogin;