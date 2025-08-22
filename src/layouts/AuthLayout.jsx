import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (  
    
      <div className=" h-screen relative max-vh-screen max-w-full bg-gradient-to-r from-red-700 via-green-600 to-black flex items-center justify-center">
      
      <div className="absolute bottom-1/8 right-1/20 w-8 h-8 bg-green-400/60 rounded-full float-slow"></div>
      <div className="absolute bottom-1/8 right-1/20 w-8 h-8 bg-green-400/60 rounded-full bounce-slow"></div>

      <div className="absolute top-1/2 left-1/4  w-8 h-8 bg-green-400/60 rounded-full float-slow"></div>
      <div className="absolute top-1/2 left-1/4  w-8 h-8 bg-black/40 rounded-full bounce-slow"></div>
      
      <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-red-400/60  rounded-full float-slow"></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-black/40 rounded-full bounce-slow"></div>

      <div className="absolute bottom-1/8 left-1/20 w-8 h-8 bg-black/60 rounded-full float-slow"></div>
      <div className="absolute bottom-1/8 left-1/20 w-8 h-8 bg-black/60 rounded-full bounce-slow"></div>
      <div className="absolute top-1/8 right-1/20 w-8 h-8 bg-red-400/60  rounded-full float-slow"></div>
      <div className="absolute top-1/8 right-1/20 w-8 h-8 bg-red-400/60  rounded-full bounce-slow"></div>

      <div className="absolute top-1/8 left-1/20 w-8 h-8 bg-green-400/60  rounded-full float-slow"></div>
      <div className="absolute top-1/8 left-1/20 w-8 h-8 bg-green-400/60  rounded-full bounce-slow"></div>
      



      <div className=' relative w-full h-fit max-w-lg rounded-4xl backdrop-blur-md  bg-red-400/60 ' >
       <div className="absolute top-1/10 right-1/4 w-6 h-6 bg-red-400/60 rounded-full bounce-slow"></div>
       <div className="absolute top-1/10 left-1/4 w-6 h-6 bg-red-400/60 rounded-full bounce-slow"></div>

     
 <Outlet />
    </div> 
    </div> 
         
  )
}
