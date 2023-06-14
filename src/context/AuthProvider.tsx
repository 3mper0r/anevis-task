import { createContext, ReactNode, useState } from "react";

interface ChildrenProps {
    children: ReactNode
}

const AuthContext = createContext({})


export const AuthProvider = ({children}: ChildrenProps) => {
    const [auth, setAuth] = useState({})
    return (
        <AuthContext.Provider value={{auth, setAuth}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext