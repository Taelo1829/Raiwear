import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ShopNewSection = () => {
    return (<>
        <div className='bg-black flex justify-center relative my-10'>
            <div className='absolute top-1/2 hidden md:inline-block'>
                <Link className='bg-orange-custom text-red-custom w-48 h-14 rounded-full text-2xl p-5 ' href="/collection" >Shop New</Link>
            </div>
            <Image src="/img/1.png" width={300} height={300} alt="raiwear logos" />
        </div>
        <div className='flex md:hidden justify-center '>
            <Link className='border border-black rounded-full p-3' href="/collection" >Shop New</Link>
        </div></>

    )
}

export default ShopNewSection