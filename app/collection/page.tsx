"use client"
import React, { Component } from 'react'
import { CategoriesStateInterface } from '../Interfaces/interfaces'
export default class page extends Component {
    state: CategoriesStateInterface = {
        active: 1
    }

    render() {
        let categories: string[] = [
            "OUTERWEAR | BLAZERS",
            "DRESSES | JUMPSUITS",
            "SHIRTS | TOPS",
            "T-SHIRTS | SWEATSHIRTS",
            "KNITWEAR",
            "PANTS | JEANS",
            "SKIRTS | SHORTS",
            "SHOES",
            "BAGS",
            "ACCESSORIES",
        ]
        return (
            <div className='flex justify-center pb-20'>
                <div className='container'>
                    <div className='flex justify-between w-1/6 my-4 text-2xl'>
                        <div className={"pr-2 " + (this.state.active === 1 ? "font-bold" : "")} onClick={() => this.setState({ active: 1 })}>WOMEN</div>
                        <div>|</div>
                        <div className={"pl-2 " + (this.state.active === 2 ? "font-bold" : "")} onClick={() => this.setState({ active: 2 })}>MEN</div>
                    </div>
                    <div className='my-5 flex flex-wrap'>
                        {categories.map((item: any, index: number) => {
                            return <div key={index} className='bg-black text-white p-3 border border-black m-3'>
                                {item}
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
