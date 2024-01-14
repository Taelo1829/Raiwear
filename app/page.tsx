"use client"
import React from "react"
import ShopNewSection from "./components/HomePage/ShopNewSection"
import ShoppingCategory from "./components/HomePage/ShoppingCategory"
import InstaSection from "./components/HomePage/InstaSection"
export default function Home() {



  return (
    <div className='flex justify-center'>
      <div className='container'>
        <ShopNewSection />
        <ShoppingCategory />
        <InstaSection />
      </div>
    </div >
  )
}
