import React from 'react'
import { Outlet } from 'react-router-dom';
import MainNavbar from '../componanets/MainNavbar';

export default function MainLayout() {
  return (
    
    <div>
        <MainNavbar/>
<div className="container">
  
      <Outlet />

</div>
    </div>
  )
}
