"use client"
import Link from 'next/link'
import React, { Component } from 'react'

export default class page extends Component {
    render() {
        return (
            <div className='flex justify-center'>
                <div className='container flex justify-between'>
                    <div className='w-full px-5'>
                        <div className='py-10'>log in to your account</div>
                        <div><input placeholder='email' className='border-b border-black my-5  w-full' /></div>
                        <div><input placeholder='password' className='border-b border-black my-5  w-full' /></div>
                        <div><button className='border border-black w-full my-5'>login</button></div>
                        <div><button className=' w-full'>have you forgotten your password?</button></div>
                    </div>
                    <div className='w-full px-5'>
                        <div className='py-10 text-center'>need an account?</div>
                        <div className='border border-black w-full my-5 text-center' ><Link href={"/register"} className='w-100 cursor-pointer'>register</Link></div>
                    </div>
                </div>
            </div>
        )
    }
}
