"use client"
import React, { Component } from 'react'
import Input from './Input'

export default class page extends Component {
    render() {
        return (
            <div className='p-5 flex justify-center'>
                <div className='w-full lg:w-3/6 '>
                    <div className='text-2xl py-3'>CONTACT US</div>
                    <div className='bg-orange-custom flex justify-center'>
                        <div className='container px-20 py-5'>
                            <div className='flex justify-between' >
                                <Input label={"Name"} />
                                <Input label={"Surname"} />
                            </div>
                            <div className='flex justify-between'>
                                <Input label={"Email"} />
                                <Input label={"Mobile Number"} />
                            </div>
                            <div className='flex justify-between py-3'>
                                <div className='w-1/2'>
                                    <div>
                                        <label>Contact Reason</label>
                                    </div>
                                    <select className='w-full border border-black p-2'>
                                        <option className='text-gray-300'>Select Reason--</option>
                                        <option >Custom Order</option>
                                        <option >General Query</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='w-full'>
                                    <div><label>Message</label></div>
                                    <div ><textarea className='w-full border border-black my-3 min-h-20' /></div>
                                </div>
                            </div>
                            <div className='float-end border border-black p-1 px-4 rounded-xl bg-orange-400 text-white'>
                                Send
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
