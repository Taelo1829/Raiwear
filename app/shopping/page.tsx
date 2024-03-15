"use client"
import React, { Component } from 'react'
import { LoginInterface, shoppingCartType } from '../Interfaces/interfaces'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Checkout from '../components/Checkout'
import { getTotal } from '../helper/helper'

class Page extends Component<LoginInterface>{
    state: shoppingCartType = {
        cart:[{
            id:1,
            name:'One piece - Luffy Straw Hat',
            description:"one size fits all",
            condition:"excellent condition",
            image:"/img/4.png",
            price:"R200",
        }]
    }

  
  render() {
    return (
      <div className='flex justify-center h-screen p-10'>
        <div className='fixed top-0 z-50 bg-orange-custom w-full p-3 text-center'>
            <b className='text-2xl'>FREE shipping on orders over R499</b>
        </div>
        <div className='container'>
            <b className='border border-1 border-black py-4 px-10 '>shopping bag({this.state.cart.length})</b>
            <hr className='my-5 border border-1 border-black'/>
            <div>
            {this.state.cart.map((item,index)=>{
                return <div key={index} className='flex justify-between my-5'>
                    <div className='border border-1 border-black'>
                        <div className='h-96 flex'>
                        <Image src={item.image} alt={item.name} width={300} height={800}/>
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
}

export default function shopping() {
const router = useRouter()  
  return (
    <div>
      <Page router={router} />
    </div>
  )
}
