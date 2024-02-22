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
                        <div className='text-2xl font-bold'>WHY SHOP AT RAIWEAR?</div>
                        <br />
                        sustainable choices: shop with a purpose, embracing eco-friendly fashion.
                        local Impact: Support communities with our locally sourced and crafted items.
                        quality assurance: every piece, whether upcycled or custom-made, meets our high standards.

                        shop RAIWEAR—where sustainable style meets your lifestyle. redefine fashion, one conscious choice at a time!
                        <div>
                            <br />
                            <br />
                            <div className='text-2xl font-bold'>UPCYCLES</div>
                            <br />
                            at RAIWEAR, we believe in transforming fashion into a force for positive change. our dedication to upcycling stems from a passion for sustainability and a profound love for clothing. by giving new life to pre-loved garments, we aim to extend their journey and promote a culture of mindful consumption. With each upcycled piece, we not only embrace the uniqueness of individual styles but also actively contribute to reducing environmental impact and promoting a world where fashion cares for both you and the planet. Join us in the pursuit of a more conscious and stylish future.
                            <br />
                            <br />
                            <div className='text-2xl font-bold'> RAIWEAR ORIGINALS</div>
                            <br />
                            RAIWEAR Originals, where fashion meets your unique vision. these designs are the heart of our creativity, carefully crafted with a commitment to individuality and sustainability.
                            if you {"can't"}find your desired size or a specific piece is sold out, {"don't"} fret. Connect with us, share your specifications, and let us bring your dream garment to life. at RAIWEAR we believe in making fashion as unique as you are.
                        </div>
                    </div>

                </div>
                <EmailUs />
            </div>
        )
    }
}
