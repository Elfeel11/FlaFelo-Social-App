


import React, { createContext, useEffect, useState } from 'react'
import { getUserApi } from '../Services/userServices';

export const AuthContext = createContext()


export default function AuthContextProvider({children}) {
  
  const [isLoggedin, setisLoggedin] = useState(localStorage.getItem("token") != null )

   const [userData, setUserData] = useState([])
  
    async function getUserData() {
    const data = await getUserApi();
   if(data.message == "success")
    {
      setUserData(data.user);  
    }
  
  }
  
  useEffect(()  => {
   if(isLoggedin) {
    getUserData()
   }else{
    setUserData(null)
   } 
  }, [isLoggedin])  
  
  
    return <AuthContext.Provider value={{isLoggedin, setisLoggedin, userData}}>
        {children}    
    </AuthContext.Provider>  
}
