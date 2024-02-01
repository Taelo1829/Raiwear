import React from 'react'
import FooterItem from './FooterItem'
import FooterColumn from './FooterColumn'

const Footer = () => {
    let firstColumnTitles: string[] = ["Search", "Contact Us", "Term Of Use", "Privacy Policy", "Terms Of Service"];
    let secondColumnTitle: any[] = [<b>Email Address</b>, "raiwemarketing@outlook.com", <b>Instagram</b>, "raiwear.studio", <b>Whatsapp</b>, "+27 73 376 7873"];
    return (
        <div className='flex justify-center font-mono pb-10'>
            <div className='container flex justify-around'>
                <div>terms of use</div>
                <div>privacy and cookies policy</div>
            </div>
        </div>
    )
}

export default Footer