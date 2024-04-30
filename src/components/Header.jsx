// import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <>
            <div className="container flex  justify-center h-[60px] w-[100%]
             backdrop-filter backdrop-blur-lg  bg-opacity-30 ">
                <ul className='flex  justify-around w-[100%]  text-3xl   items-center '>
                    <li className='cursor-pointer'>
                        <NavLink
                            to="/"
                            style={({ isActive }) => {
                                return isActive ? { color: "blue" } : {};
                            }}
                        >
                            Login
                        </NavLink>
                    </li>
                    <li className='cursor-pointer'>
                        <NavLink
                            to="/DataShow"
                            style={({ isActive }) => {
                                return isActive ? { color: "blue" } : {};
                            }}
                        >
                            DataShow
                        </NavLink></li>
                </ul>
            </div>



        </>
    )
}

export default Header