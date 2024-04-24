import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-center font-mono py-5 items-center '>
            <div className='container flex justify-around items-center '>
                <Link href="/terms" className='hover:underline'>terms of use</Link>
                <Link href="privacy" className='hover:underline'>privacy and cookies policy</Link>
            </div>
        </div>
    )
}

export default Footer