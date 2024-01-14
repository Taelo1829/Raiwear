import React from 'react'
import { FooterItemInterface } from '../Interfaces/interfaces'

const FooterItem: React.FC<FooterItemInterface> = ({ title, index }) => {
    return (
        <div className='hover:underline cursor-pointer' key={index}>{title}</div>
    )
}

export default FooterItem