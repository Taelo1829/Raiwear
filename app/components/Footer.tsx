import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-center font-mono pb-10'>
            <div className='container flex justify-around'>
                <Link href="/terms" className='hover:underline cursor-pointer'>terms of use</Link>
                <div>privacy and cookies policy</div>
            </div>
        </div>
    )
}

export default Footer