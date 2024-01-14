import Image from 'next/image'
import React from 'react'

const ShopNewSection = () => {
    return (<>
        <div className='bg-black flex justify-center relative my-10'>
            <div className='absolute top-1/2 hidden md:inline-block'>
                <button className='bg-orange-custom text-red-custom w-48 h-14 rounded-full text-2xl' >Shop New</button>
            </div>
            <Image src="/img/1.png" width={300} height={300} alt="raiwear logos" />
        </div>
        <div className='flex md:hidden justify-center '>
            <button className='border border-black rounded-full p-3' >Shop New</button>
        </div></>

    )
}

export default ShopNewSection