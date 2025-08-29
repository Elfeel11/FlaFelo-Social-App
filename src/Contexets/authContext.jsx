


import React, { createContext, useState } from 'react'

export const AuthContext = createContext()


export default function AuthContextProvider({children}) {
  
  const [isLoggedin, setisLoggedin] = useState(localStorage.getItem("token") != null )
  
    return <AuthContext.Provider value={{isLoggedin, setisLoggedin}}>
        {children}    
    </AuthContext.Provider>  
}
