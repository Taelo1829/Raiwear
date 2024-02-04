"use client"
import React, { useState } from 'react'
import Menu from './Menu'
import Image from 'next/image'
import Link from 'next/link'
import Search from './Search'
const Header = () => {
    const [hidden, setHidden] = useState("hidden")
    const [width, setWidth] = useState("w-0")
    function openMenu() {
        setHidden("");
        setTimeout(() => setWidth("w-2/4"), 1);
    }

    function closeMenu() {
        setWidth("w-0")
        setTimeout(() => setHidden("hidden"), 700);
    }

    function updateMenu() {
        switch (hidden) {
            case "hidden":
                openMenu()
                break;
            default:
                closeMenu()
                break;
        }
    }

    let hideSearch = false

    return (
        <div className='relative'>
            <div className='flex flex-col  items-center fixed w-screen pb-5 md:h-52 border-b border-1 border-orange-custom z-10 bg-white '>
                <div className='container pt-5 '>
                    <div className='flex justify-between items-center'>
                        <div className=' flex-1 px-5 md:inline-block cursor-pointer' data-modal-target="modal"><i className='fa fa-bars md:text-4xl sm:text-2xl' onClick={updateMenu}></i></div>
                        <Link className='flex-1 flex justify-center' href={"/"}><Image alt="Raiwear Logo" src="/img/4.png" className='sm:w-96 md:w-52' width={100} height={100} /></Link>
                        <div className='flex-1 px-5'>
                            <div className='float-end'>
                                <Link href={"login"}>Login &nbsp;</Link>
                                <span>Shopping Bag ({0})</span>
                            </div>
                        </div>
                    </div>
                    {hideSearch ? "" : <Search />}
                    <Menu toggleMenu={updateMenu} hidden={hidden} width={width} />
                </div>
            </div>
        </div>
    )
}

export default Header