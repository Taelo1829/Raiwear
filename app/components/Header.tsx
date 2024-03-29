"use client"
import React, { useState } from 'react'
import Menu from './Menu'
import Image from 'next/image'
import Link from 'next/link'
import Search from './Search'
import { getUserDetails } from '../helper/helper'
import { useRouter,usePathname } from 'next/navigation'

const Header = () => {
    const pathName = usePathname()
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
const User = getUserDetails()
    return (
        <div className={'relative ' +(pathName === "/shopping"?"pt-10":"")}>
            <div className='flex flex-col  items-center fixed w-screen pb-5 md:h-52 border-b border-1 border-orange-custom z-10 bg-white '>
                <div className='container pt-5 '>
                    <div className='flex justify-between items-center'>
                        <div className=' flex-1 px-5 md:inline-block cursor-pointer' data-modal-target="modal"><Link href={"/collection"}><i className='fa fa-bars md:text-4xl sm:text-2xl' ></i></Link></div>
                        <Link className='flex-1 flex justify-center' href={"/"}><Image alt="Raiwear Logo" src="/img/4.png" className='sm:w-96 md:w-52' width={100} height={100} /></Link>
                        <div className='flex-1 px-5'>
                            <div className='float-end'>
                               {pathName === "/shopping"? <Link href={"/contact-us"}>help</Link>:""}
                              {!User && pathName !== "/login"? <Link href={"login"}>log in &nbsp;</Link>:User?<Link href={"/user"} className='mx-2'>{User.displayName}</Link>:""}
                              <Link href={"shopping"}>Shopping Bag(0) &nbsp;</Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center my-2'>
                      <Link href={"/collection"} className='hover:underline mx-5 font-mono'>collection</Link>  
                      <Link href={"/about-us"} className='hover:underline mx-5 font-mono'>about us</Link>  
                      <Link href={"/contact-us"} className='hover:underline mx-5 font-mono'>contact us</Link>  
                      <Link href={"/blog"} className='hover:underline mx-5 font-mono'>blog</Link>  
                   {User?   <Link href={"/admin"} className='hover:underline mx-5 font-mono'>admin</Link>  :<> </>}
                    </div>
                    {hideSearch ? "" : <Search />}
                    <Menu toggleMenu={updateMenu} hidden={hidden} width={width} />
                </div>
            </div>
        </div>
    )
}

export default Header