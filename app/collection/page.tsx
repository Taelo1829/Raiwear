"use client"
import React, { Component } from 'react'
import { CategoriesStateInterface } from '../Interfaces/interfaces'
import { getProductCategories } from '../api/database'
import Link from 'next/link'
export default class page extends Component {
    componentDidMount(): void {
        this.loadData()
    }
  
    async loadData(){
        let collection = await getProductCategories();
        this.setState({collection})
    }
    render() {
        return (
            <div className='flex justify-center pb-20 h-full'>
                <div className='container'>
                    <div className='my-5 flex flex-wrap'>
                        {this.state.collection.map((item: any, index: number) => {
                            return <Link href={{
                                pathname:"/shop-new",
                                query:{category:item.title}
                            }} key={index} className='bg-black text-white p-3 border border-black m-3'>
                                {item.title.toUpperCase()}
                            </Link>
                        })}
                    </div>
                </div>
            </div>
        )
    }

    state: CategoriesStateInterface = {
        active: 1,
        collection:[]
    }
}
