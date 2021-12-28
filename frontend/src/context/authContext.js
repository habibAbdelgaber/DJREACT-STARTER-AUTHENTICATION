import React, { useState } from "react";
import { authService } from "../services/authentication";


export const AuthContext = React.createContext(null)

export function AuthContextProvider({children}){

    const [user, setUser] = useState(() =>{
        authService.getUser()
    })
    function logout(){
            authService.login()
            setUser(null)
    }
    function login(){
            const user = authService.login()
            setUser(user)
    }
    return(
        <AuthContext.Provider value={{
            logout,
            login,
            user
        }}>
            {children}
        </AuthContext.Provider>
        )
}