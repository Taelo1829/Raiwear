"use client"
import React, { Component } from 'react'
import EmailUs from '../components/HomePage/EmailUs'

export default class page extends Component {
    render() {
        return (
            <div className='my-5 flex justify-center items-center flex-col '>
                <div className='container'>
                    <div className='text-2xl font-bold'> ABOUT US</div>
                    <div className='bg-orange-custom p-5 my-5'>
                        <br />
                        RAIWEAR is your online destination for sustainable fashion. our collection includes upcycled clothes, thrift treasures, and custom creations—all with a commitment to eco-friendly style. our slogan, “eco-fashion for a conscious lifestyle”, embodies our ethos.
                        <br />
                        <br />
                        discover renewed fashion with our upcycled collection, where each piece is carefully repaired for quality. our thrift items, sourced locally in Johannesburg, South Africa reflect our commitment to community support. our custom creations, made with love and care, use high-quality materials from local artisans.
                        <br />
                        <br />
                        why shop RAIWEAR?
                        <br />
                        <br />
                        sustainable choices: shop with a purpose, embracing eco-friendly fashion.
                        local Impact: Support communities with our locally sourced and crafted items.
                        quality assurance: every piece, whether upcycled or custom-made, meets our high standards.

                        shop RAIWEAR—where sustainable style meets your lifestyle. redefine fashion, one conscious choice at a time!
                    </div>
                </div>
                <EmailUs />
            </div>
        )
    }
}
