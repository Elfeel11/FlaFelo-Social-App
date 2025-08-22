import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedAuthRoute({Children}) {
    const isLoggedIn = localStorage.getItem("token") != null;
    
  return !isLoggedIn ? Children : <Navigate to={"/"} />
}
    