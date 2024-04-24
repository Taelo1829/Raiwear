"use client"
import React, { Component } from 'react'
import { LoginInterface, shoppingCartType } from '../Interfaces/interfaces'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Checkout from '../components/Checkout'
import { getTotal } from '../helper/helper'
import { getProducts } from '../api/database'

class Page extends Component<LoginInterface>{
 componentDidMount(): void {
    this.loadData()
 }
  async loadData(){
    let products = await getProducts()
    this.setState({products,loading:false})
    this.updateCart()
  }

  setPrice(product: any) {
    if(product.sale && new Date(product.saleStartDate) <= new Date() && new Date(product.saleEndDate) >= new Date()){
      return product.sale
    }else{
      return product.price
    }
  }
  updateCart(){
      let cart = JSON.parse(localStorage.getItem('cart') || "[]");
      if(cart.length){
        cart = cart.map((item:any)=>{
          let product = this.state.products.find((product:any)=>product.id === item.id) ||{}
          product.price = this.setPrice(product)
          if(product.images){
            product.image = product.images[0]
          }
          return {
            ...item,
          ...product,
          }
        })
      }

      this.setState({cart,loading:false})
  }
  render() {
    if(this.state.loading) return <div className='text-center'>loading...</div>
    return (
      <div className='flex justify-center h-full p-10'>
        <div className='fixed top-0 z-50 bg-orange-custom w-full p-3 text-center'>
            <b className='text-2xl'>FREE shipping on orders over R499</b>
        </div>
        <div className='container'>
            <b className='border border-1 border-black py-4 px-10 '>shopping bag({this.state.cart.length})</b>
            <hr className='my-5 border border-1 border-black'/>
            <div className='max-h-1/2 flex'>
            {this.state.cart.map((item,index)=>{
                return <div key={index} className='flex justify-between my-5 mx-2'>
                    <div className='border border-1 border-black'>
                        <div className='h-60 flex flex-wrap'>
                        <Image src={item.image} alt={item.name} width={300} />
                        </div>
                        <div className='border-t border-1 border-black p-2'>
                           <div><b>{item.name}</b></div>
                           <div><small>{item.description}</small></div>
                           <div><small>{item.condition}</small></div>
                           <div className='bg-orange-custom-100 w-14 px-2 py-1 text-white rounded-md'>{item.price}</div>
                        </div>
                    </div>
                    </div>
            })}
            </div>
          <Checkout total={getTotal(this.state.cart)} onClick={()=>this.props.router.push("/address")}/>
        </div>
      </div>
    )
  }

  state: shoppingCartType = {
    cart:[],
    loading:true,
    products:[],
}
}

export default function Shopping() {
const router = useRouter()  
  return (
    <div>
      <Page router={router} />
    </div>
  )
}
