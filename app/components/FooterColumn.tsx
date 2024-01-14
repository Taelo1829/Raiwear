import React from 'react'
import FooterItem from './FooterItem'
import { FooterColumnInterface } from '../Interfaces/interfaces'

const FooterColumn: React.FC<FooterColumnInterface> = ({ titles, mainHeading }) => {
    return (
        <div>
            <h1 className='text-xl'>{mainHeading}</h1>
            {titles.map((title: string, index: number) => {
                return <React.Fragment key={index}> <FooterItem title={title}  /></React.Fragment>
            })}
        </div>
    )
}

export default FooterColumn