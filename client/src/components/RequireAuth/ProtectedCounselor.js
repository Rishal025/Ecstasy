import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuthCounselor from '../../hooks/useAuthCounselor'

const ProtectedCounselor = () => {
    console.log('Protected counselor');
    const { auth } = useAuthCounselor();
    const location = useLocation();
    console.log('authhhhhh');
    console.log(auth)

    return (
        auth?.accessToken
        ? <Navigate to = '/counselor'/>
         : <Outlet/>
    );
}

export default ProtectedCounselor;