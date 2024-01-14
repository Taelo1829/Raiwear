import React from 'react'
import FooterItem from './FooterItem'
import FooterColumn from './FooterColumn'

const Footer = () => {
    let firstColumnTitles: string[] = ["Search", "Contact Us", "Term Of Use", "Privacy Policy", "Terms Of Service"];
    let secondColumnTitle: string[] = ["Email Address", "raiwear@outlook.co.za", "Instagram", "raiwear.studio"];
    return (
        <div className='bg-orange-custom p-10 flex justify-center'>
            <div className='text-red-custom text-lg container flex justify-between'>
                <FooterColumn titles={firstColumnTitles} mainHeading={"Shop"} />
                <FooterColumn titles={firstColumnTitles} mainHeading={"Info"} />
                <FooterColumn titles={secondColumnTitle} mainHeading={"Contact Us"} />
            </div>
        </div>
    )
}

export default Footer