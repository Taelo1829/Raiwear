"use client"
import React, { Component } from 'react'

export default class page extends Component {
    constructor(props: any) {
        super(props)
        this.state = {
            active: "1"
        }
    }

    render() {
        return (
            <div className='flex justify-center'>
                <div className='container'>
                    <div className='flex justify-between w-1/6 my-4'>
                        <div>WOMEN</div>
                        <div>|</div>
                        <div>MEN</div>
                    </div>

                </div>
            </div>
        )
    }
}
