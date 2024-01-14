import React from 'react'
import { FooterItemInterface } from '../Interfaces/interfaces'

const FooterItem: React.FC<FooterItemInterface> = ({ title }) => {
    return (
        <div className='hover:underline cursor-pointer' >{title}</div>
    )
}

export default FooterItem