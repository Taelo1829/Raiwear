"use client"
import React, { Component } from 'react'
import Input from './Input'
import { ContactUsInterface } from '../Interfaces/interfaces'

export default class page extends Component {

    state: ContactUsInterface = {
        firstName: "",
        lastName: "",
        email: "",
        mobile: ""
    }

    constructor(props: any) {
        super(props)
        this.updateState = this.updateState.bind(this)
    }
    updateState(data: any) {
        this.setState({ ...data })
    }

    render() {
        return (
            <div className='p-5 flex justify-center'>
                <div className='w-full lg:w-3/6 '>
                    <div className='text-2xl py-3'>CONTACT US</div>
                    <div className='bg-orange-custom flex justify-center '>
                        <div className='container px-20 py-5'>
                            <div className='flex justify-between' >
                                <Input label={"First Name"} onChange={this.updateState} valueToUpdate="firstName" value={this.state.firstName} />
                                <Input label={"Last Name"} onChange={this.updateState} valueToUpdate="lastName" value={this.state.lastName} />
                            </div>
                            <div className='flex justify-between'>
                                <Input label={"Email"} onChange={this.updateState} valueToUpdate="email" value={this.state.email} />
                                <Input label={"Mobile Number"} onChange={this.updateState} valueToUpdate="mobile" value={this.state.mobile} />
                            </div>
                            <div className='flex justify-between p-3'>
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
                            <div className='flex justify-between m-3'>
                                <div className='w-full'>
                                    <div><label>Message</label></div>
                                    <div ><textarea className='w-full border border-black min-h-20' /></div>
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
