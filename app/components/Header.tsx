import React from 'react'
import Banner from './Banner'
import Menu from './Menu'
import Image from 'next/image'
//Header: React.FC<Header> 
const Header = () => {
    let bannerHeading: string = "FREE shipping on orders over R999 & 50% off on orders from R599"
    return (
        <div className='flex flex-col  items-center'>
            <Banner heading={bannerHeading} />
            <div className='container pt-5'>
                <div className='flex justify-between items-center'>
                    <div className=' flex-1 px-5 hidden md:inline-block cursor-pointer'><i className='fa fa-search md:text-4xl sm:text-2xl'></i></div>
                    <div className=' flex-1 px-5  md:hidden'><i className='fa fa-bars'></i></div>
                    <div className='flex-1 flex justify-center'><Image alt="Raiwear Logo" src="/img/4.png" className='sm:w-96 md:w-52' width={100} height={100} /></div>
                    <div className='flex-1 px-5'>
                        <div className='float-end'>
                            <i className='fa fa-search md:text-4xl sm:text-2xl cursor-pointer md:hidden inline-block mx-2'></i>
                            <i className='fa fa-user md:text-4xl sm:text-2xl cursor-pointer mx-2 hidden md:inline-block'></i>
                            <i className='fa fa-shopping-bag  md:text-4xl sm:text-2xl cursor-pointer  mx-2'></i>
                        </div>
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default Header