import { useContext } from "react";
import AuthContextCounselor from "../context/AuthProviderCounselor";

const useAuthCounselor = () => {
    return useContext(AuthContextCounselor);
}

export default useAuthCounselor