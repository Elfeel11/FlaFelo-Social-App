import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './../Contexets/authContext';

export default function ProtectedRoute({children}) {
    const {isLoggedin} = useContext(AuthContext); 

  return isLoggedin ? children : <Navigate to={"/login"} />
}
