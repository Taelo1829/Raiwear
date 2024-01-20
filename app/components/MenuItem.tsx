import React from 'react'
import { MenuItemInterface } from '../Interfaces/interfaces'
import Link from 'next/link'

const MenuItem: React.FC<MenuItemInterface> = ({ href, icon, routeName, toggleMenu }) => {
    if (icon === "arrow-left") {
        return <div className='border-b border-1 border-orange-custom p-5 md:px-10 flex justify-end cursor-pointer' onClick={toggleMenu}>
            <i className={`fa fa-${icon} fa-2x text-red-custom`}></i>
        </div >
    } else {
        return (
            <Link className='border-b border-1 border-orange-custom p-5 md:px-10 flex justify-between' href={href} onClick={toggleMenu}>
                <div > <i className={`fa fa-${icon} fa-2x text-red-custom`}></i></div>
                <div className=' w-full px-5'><span className='text-2xl'>{routeName}</span></div>
            </Link>
        )
    }

}

export default MenuItem