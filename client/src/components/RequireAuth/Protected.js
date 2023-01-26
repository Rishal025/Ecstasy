import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Protected = () => {
    console.log('Protected');
    const { auth } = useAuth();
    const location = useLocation();
    console.log('authhhhhh');
    console.log(auth)

    return (
        auth?.accessToken
        ? <Navigate to = '/'/>
         : <Outlet/>
    );
}

export default Protected;