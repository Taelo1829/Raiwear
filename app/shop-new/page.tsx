"use client"
import React, { Component } from 'react'
import { getProducts } from '../api/database'
import { shopStateType } from '../Interfaces/interfaces';

export default class page extends Component {
    componentDidMount(): void {
        this.loadData()
    }
    async loadData() {
        let products = await getProducts();
        let categories:string[] = []
        for(let i = 0; i < products.length; i++){
            if(products[i]){
                let collection = products[i].collection.toLowerCase();
                if(collection && !categories.includes(collection)){
                    categories.push(collection)
                }
            }
         
        }
        this.setState({products, categories, loading:false})
    }

renderCategories(){
    return this.state.categories.map((category, index) => (<div className='text-2xl  border-b-2 py-5 flex justify-between px-4'>
        <div>{category}</div>
        <div><i className='fa fa-arrow-right'></i></div>
    </div>))
}


renderProducts(){
    return this.state.products.map((product, index) => (
    <div key={index} className='m-3 shadow-lg h-80 w-80'>
        <div className='flex bg-blue-100 w-80 h-40 justify-center items-center bg-cover bg-center' style={product.images?{backgroundImage:`url(${product.images[0]})`}:{}}></div>
        <div className='my-2'>
        <div className='text-2xl font-bold'>{product.heading}</div>
        <div>{}</div>
        <div>{product.price}</div>
        </div>
    </div>))
}
  render() {
    if(this.state.loading) return (<div className='text-center'>Loading...</div>)
    return (
            <div className='flex h-screen overflow-hidden'>
                <div className='bg-black text-white p-3 border border-black h-full w-96 overflow-y-scroll'>
                    <div className='text-3xl font-bold border-b-2 py-5'>categories</div>
                    {this.renderCategories()}
                </div>
                <div className='w-full flex flex-wrap overflow-scroll h-full'>
                    {this.renderProducts()}
                </div>
            </div>
    )
  }

  state:shopStateType = {
        loading:true,
        products:[],
        categories:[]
  }
}
