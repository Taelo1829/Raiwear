import React from 'react'
import FooterItem from './FooterItem'
import { FooterColumnInterface } from '../Interfaces/interfaces'

const FooterColumn: React.FC<FooterColumnInterface> = ({ titles, mainHeading }) => {
    return (
        <div className='scale-75'>
            <h1 className='text-xl'>{mainHeading}</h1>
            {titles.map((title: string, index: number) => {
                return <FooterItem title={title} index={index} />
            })}
        </div>
    )
}

export default FooterColumn