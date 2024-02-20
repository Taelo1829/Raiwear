"use client"
import React, { Component } from 'react'
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
          <div className='flex flex-col justify-start items-center h-screen py-10'>
            <div className='container'>
            <div>contact us</div>
            <div className='bg-orange-custom p-10'>
                <form>
                    <label>name</label>
                    <input type="text" className='w-full border border-1' onChange={(e)=> console.log(e)}/>
                </form>
            </div>
            </div>
          </div>
        )
    }
}
