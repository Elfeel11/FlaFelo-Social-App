import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import MainNavbar from '../componanets/MainNavbar';
import { getUserApi } from "../Services/userServices";





export default function MainLayout() {
 


  return (
    <div className='bg-linear-to-tr from-red-200 to-stone-800 text-black shadow-lg min-h-screen'>
        <MainNavbar />
    <div className=' pb-3'>
        <div className="container">
      <Outlet  />

</div>
    </div>
  </div>)
}
