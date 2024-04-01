import React from 'react'
import {Link , useLocation} from "react-router-dom"
import {Button, Navbar, TextInput} from "flowbite-react";
import { FiSearch  } from "react-icons/fi";
import {FaMoon} from "react-icons/fa";
export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2 py-4'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
            rounded-lg text-white'>Coder's</span>
            Space
        </Link>
        <form action="">
            <TextInput
                type="text"
                placeholder = "Search..."
                rightIcon={FiSearch}
                className='hidden lg:inline'
            />
        </form>
        <Button className='w-12 h-10 lg:hidden' color="gray">
            <FiSearch></FiSearch>
        </Button>
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 hidden sm:inline' color="gray">
                <FaMoon></FaMoon>
            </Button>
            <Link to="/sign-in">
                <Button gradientDuoTone="purpleToBlue">
                     Sign In
                </Button>
            </Link>
            <Navbar.Toggle></Navbar.Toggle>
        </div>
        <Navbar.Collapse>
            <Navbar.Link active={path === '/'} href='/'>
                Home
            </Navbar.Link>
            <Navbar.Link active={path === '/about'} href='/about'>
                About
            </Navbar.Link>
            <Navbar.Link href='/projects'>
                Projects
            </Navbar.Link>
            </Navbar.Collapse>
    </Navbar>
  )
}
