import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RequireAuth = () => {
    console.log('require auth');
    const { auth } = useAuth();
    const location = useLocation();
    console.log(auth)

    return (
        auth?.accessToken
            ? <Outlet/>
            : <Navigate to = '/guesthome' state={{from: location}} replace/>
    );
}

export default RequireAuth;