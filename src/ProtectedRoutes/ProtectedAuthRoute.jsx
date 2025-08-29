import React, { use, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './../Contexets/authContext';

export default function ProtectedAuthRoute({children}) {
const { isLoggedin } = useContext(AuthContext)    
  return !isLoggedin ? children : <Navigate to={"/"} />
}
    