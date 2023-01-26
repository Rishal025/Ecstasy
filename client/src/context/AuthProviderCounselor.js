import { createContext, useState } from "react";

const AuthContextCounselor = createContext({});

export const AuthProviderCounselor = ({ children }) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContextCounselor.Provider value={{ auth, setAuth}}>
            {children}
        </AuthContextCounselor.Provider>
    )
}

export default AuthContextCounselor;