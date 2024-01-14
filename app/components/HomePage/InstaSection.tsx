import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed'

const InstaSection = () => {
    return (
        <div className='mt-5 flex justify-center '>
            <div className='md:w-1/2'>
                <InstagramEmbed url="https://www.instagram.com/raiwear.studio/" />
            </div>
        </div>
    )
}

export default InstaSection