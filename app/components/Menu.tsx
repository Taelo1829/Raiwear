import React, { useState } from 'react'
import MenuItem from './MenuItem'
import { MenuInterface } from '../Interfaces/interfaces'
import { getUserDetails } from '../helper/helper'

const Menu: React.FC<MenuInterface> = ({ toggleMenu, hidden, width }) => {
    const [adminOpen, setAdminOpen] = useState(false);
    const [adminHeight, setAdminHeight] = useState("max-h-0");
    function handleMouseEnter() {
        setAdminHeight("max-h-96")
        setAdminOpen(true)
    }

    function handleMouseLeave() {
        setAdminHeight("max-h-0")
        setAdminOpen(false)
    }
const User = getUserDetails()

    return (
        <div className={`absolute bg-orange-custom top-0 left-0 ${width} h-screen border-r border-1 border-orange-custom ${hidden} transition-all duration-700 ease-in-out overflow-hidden`}>
            <MenuItem href="/" icon="arrow-left" toggleMenu={toggleMenu} />
            <MenuItem href="/" icon="home" routeName={"Home"} toggleMenu={toggleMenu} />
            <MenuItem href="/collection" icon="images" routeName={"Collection"} toggleMenu={toggleMenu} />
            <MenuItem href="/contact-us" icon="phone" routeName={"Contact Us"} toggleMenu={toggleMenu} />
            <MenuItem href="/about-us" icon="users" routeName={"About Us"} toggleMenu={toggleMenu} />
           {Object.keys(User).length? <>
            <div className='border-b border-1 border-orange-custom p-5 md:px-10 flex justify-between relative'>
                <div > <i className={`fa fa-book fa-2x text-red-custom`}></i></div>
                <div className=' w-full px-5' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><span className='text-2xl'>Admin <i className={`fa fa-chevron-${(adminOpen ? "up" : "down")} float-end cursor-pointer`}></i></span></div>
            </div>
            <div className={adminHeight + ' overflow-hidden transition-all duration-700 ease-in-out '} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <MenuItem href="/admin-categories" icon="categories" routeName={"Categories"} toggleMenu={toggleMenu} />
                <MenuItem href="/clothes" icon="clothes" routeName={"Clothes"} toggleMenu={toggleMenu} />
                <MenuItem href="/specials" icon="special" routeName={"Sale"} toggleMenu={toggleMenu} />
            </div>
            </>:<></>}
            <MenuItem href="/faq" icon="circle-question" routeName={"Blog"} toggleMenu={toggleMenu} />
        </div>

    )
}

export default Menu