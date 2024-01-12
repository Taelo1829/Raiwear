import React from 'react'
import { BannerInterface } from '../Interfaces/interfaces'
const Banner: React.FC<BannerInterface> = ({ heading }) => {
    return (
        <div className='text-sm text-center p-2 bg-orange-custom text-red-custom w-full'>{heading}</div>
    )
}

export default Banner