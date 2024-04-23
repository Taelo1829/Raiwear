"use client"
import React, { useEffect } from "react"
import ShopNewSection from "./components/HomePage/ShopNewSection"
import ShoppingCategory from "./components/HomePage/ShoppingCategory"
import InstaSection from "./components/HomePage/InstaSection"
import EmailUs from "./components/HomePage/EmailUs"
import OnSale from "./components/HomePage/OnSale"
import { useRouter } from "next/router"
import { getProducts } from "./api/database"
export default function Home(props:any) {
  useEffect(() => {
    if(props.searchParams.signout === ""){
      if(typeof window !== "undefined"){
          localStorage.removeItem("currentUser");
      window.location.href = "/"
      }
    }
  },[])

  useEffect(()=>{
    loadData()
},[])

async function loadData(){
 let products = await getProducts();
 setProducts(products)
    setLoading(false)
}
const [loading, setLoading] = React.useState(true)
const [products, setProducts] = React.useState([])
  return (
   loading?<div className="text-center">loading...</div>: <div className='flex justify-center'>
      <div className='container'>
        <ShopNewSection />
        <OnSale products={products}/>
        <ShoppingCategory products={products}/>
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
