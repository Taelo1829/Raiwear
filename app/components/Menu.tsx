import React from 'react'
import MenuItem from './MenuItem'
import { MenuInterface } from '../Interfaces/interfaces'

const Menu: React.FC<MenuInterface> = ({ toggleMenu, hidden, width }) => {
    return (
        <div className={`absolute bg-orange-custom top-0 left-0 ${width} h-screen border-r border-1 border-orange-custom ${hidden} transition-all duration-700 ease-in-out overflow-hidden`}>
            <MenuItem href="/" icon="arrow-left" toggleMenu={toggleMenu} />
            <MenuItem href="/" icon="home" routeName={"Home"} toggleMenu={toggleMenu} />
            <MenuItem href="/collection" icon="images" routeName={"Collection"} toggleMenu={toggleMenu} />
            <MenuItem href="/contact-us" icon="users" routeName={"Contact Us"} toggleMenu={toggleMenu} />
            <MenuItem href="/blog" icon="blog" routeName={"Blog"} toggleMenu={toggleMenu} />
            <MenuItem href="/faq" icon="circle-question" routeName={"FAQ"} toggleMenu={toggleMenu} />
        </div>

    )
}

export default Menu