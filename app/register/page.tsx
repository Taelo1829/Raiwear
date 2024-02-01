"use client"
import React, { Component } from 'react'

export default class page extends Component {
    render() {
        return (
            <div className='flex justify-center'>
                <div className='container'>
                    <div className='py-10'>personal details</div>
                    <div><input placeholder='first name' className='border-b border-black my-5  w-1/2' /></div>
                    <div><input placeholder='last name' className='border-b border-black my-5  w-1/2' /></div>
                    <div><input placeholder='email' className='border-b border-black my-5  w-1/2' /></div>
                    <div><input placeholder='password' className='border-b border-black my-5  w-1/2' /></div>
                    <div><input type='checkbox' />I want to receive personalised commercial communications
                        from RAIWEAR by email.</div>
                    <div><input type="checkbox" /> I have read and understand the privacy and cookies policy
                    </div>
                    <div><button className='border border-black w-1/2 my-5 py-3'>create account</button></div>

                </div>
            </div>
        )
    }
}
