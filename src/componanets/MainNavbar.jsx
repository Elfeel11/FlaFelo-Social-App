import React from 'react'
import {  Navbar as HeroUiNavbar ,NavbarBrand,NavbarContent,NavbarItem,Link,DropdownItem,DropdownTrigger,Dropdown,DropdownMenu,Avatar, Button,} from "@heroui/react";
import { NavLink } from 'react-router-dom';



export default function MainNavbar() {

  const isLoggedin = localStorage.getItem("token") != null


  

  return (
      <HeroUiNavbar isBordered className='bg-stone-950 text-emerald-400 mb-5'>
      <NavbarBrand>
        <p className="font-bold text-inherit">FlaFelo</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive> 
          <NavLink color="foreground">
            Feed
          </NavLink>
        </NavbarItem>
        <NavbarItem >
          <NavLink aria-current="page" color="secondary">
            Profile
          </NavLink>
        </NavbarItem>
      </NavbarContent>




      <NavbarContent as="div" justify="end">

        {
          isLoggedin ?
           <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src=" " />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Default</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        :
        <>
         <NavbarItem>
          <Button className='bg-linear-to-tr from-green-500  text-black shadow-lg'  variant="flat">
            Logoin
          </Button>
        </NavbarItem>
         <NavbarItem>
          <Button className='bg-linear-to-tr from-pink-400 to-black-500 text-black shadow-lg' color="primary" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        </>




        }


      </NavbarContent>
    </HeroUiNavbar>





  )}
