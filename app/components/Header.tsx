"use client"
import React, { useState } from 'react'
import Menu from './Menu'
import Image from 'next/image'
import Link from 'next/link'
import Search from './Search'
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [hidden, setHidden] = useState("hidden")

    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }

    function updateMenu() {
        switch (hidden) {
            case "hidden":
                setHidden("");
                setTimeout(() => toggleMenu(), 1);
                break;
            default:
                toggleMenu();
                setTimeout(() => setHidden("hidden"), 700);
        }
    }

    let width: string = menuOpen ? "w-0" : "w-1/4";

    return (
        <div className='relative'>
            <div className='flex flex-col  items-center fixed w-screen pb-5 md:h-52 border-b border-1 border-orange-custom z-10 bg-white'>
                <div className='container pt-5 '>
                    <div className='flex justify-between items-center'>
                        <div className=' flex-1 px-5 md:inline-block cursor-pointer' data-modal-target="modal"><i className='fa fa-bars md:text-4xl sm:text-2xl' onClick={updateMenu}></i></div>
                        <Link className='flex-1 flex justify-center' href={"/"}><Image alt="Raiwear Logo" src="/img/4.png" className='sm:w-96 md:w-52' width={100} height={100} /></Link>
                        <div className='flex-1 px-5'>
                            <div className='float-end'>
                                <span>Login &nbsp;</span>
                                <span>Shopping Cart ({0})</span>
                            </div>
                        </div>
                    </div>
                    <Search />
                    <Menu toggleMenu={updateMenu} hidden={hidden} width={width} />
                </div>
            </div>
        </div>
    )
}

export default Header