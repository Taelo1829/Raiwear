"use client"
import React from "react"
import ShopNewSection from "./components/HomePage/ShopNewSection"
import ShoppingCategory from "./components/HomePage/ShoppingCategory"
import InstaSection from "./components/HomePage/InstaSection"
import EmailUs from "./components/HomePage/EmailUs"
import OnSale from "./components/HomePage/OnSale"
export default function Home() {



  return (
    <div className='flex justify-center'>
      <div className='container'>
        <ShopNewSection />
        <OnSale />
        <ShoppingCategory />
        <EmailUs />
        <div className="flex justify-between py-5">
          <div>instagram</div>
          <div>pinterest</div>
          <div>youtube</div>
          <div>whatsapp</div>
        </div>
      </div>
    </div >
  )
}
