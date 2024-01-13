"use client"
import React from "react"
export default function Home() {
  const stock = [{
    title: "Safari Explorer Jacket",
    image: "/img/stock/1.jpeg",
    price: "R 115.00",
    available: true
  }, {
    title: "Summer Dress Top",
    image: "/img/stock/2.jpeg",
    price: "R 200.00",
    available: false
  },
  {
    title: "Safari Explorer Jacket",
    image: "/img/stock/1.jpeg",
    price: "R 115.00",
    available: true
  }, {
    title: "Summer Dress Top",
    image: "/img/stock/2.jpeg",
    price: "R 200.00",
    available: false
  }, {
    title: "Safari Explorer Jacket",
    image: "/img/stock/1.jpeg",
    price: "R 115.00",
    available: true
  }, {
    title: "Summer Dress Top",
    image: "/img/stock/2.jpeg",
    price: "R 200.00",
    available: false
  },
  {
    title: "Safari Explorer Jacket",
    image: "/img/stock/1.jpeg",
    price: "R 115.00",
    available: true
  }, {
    title: "Summer Dress Top",
    image: "/img/stock/2.jpeg",
    price: "R 200.00",
    available: false
  }]


  return (
    <div className='flex justify-center'>
      <div className='container'>
        <div className='bg-black flex justify-center relative my-10'>
          <div className='absolute top-1/2 hidden md:inline-block'>
            <button className='bg-orange-custom text-red-custom w-48 h-14 rounded-full text-2xl' onClick={() => alert("CONGRATULATIONS MAHLATSI SEOKE YOU'VE WON R15 000")}>Shop New</button>
          </div>
          <img src="/img/1.png" width={"50%"} />
        </div>
        <div className='flex md:hidden justify-center '>
          <button className='border border-black rounded-full p-3'>Shop New</button>
        </div>
        <div className="flex md:flex-wrap -mx-3 overflow-auto mt-20 px-2">
          {stock?.map((item, index) => {
            return <div key={index} className="w-full md:w-1/4 p-3 0 md:-mx-0 sm:mx-2" >
              <div>
                <img alt={item.title} src={item.image} />
              </div>
              <div className="p-1  flex flex-col item-center text-center w-full">
                <label >{item.title}</label>
                <p className="my-2">{item.price}</p>
                {item.available ? <button className="border border-black rounded md:rounded-full p-2 ">Add To Cart</button> : <button className="border border-gray-400 text-gray-500 rounded md:rounded-full p-2" disabled> Sold Out</button>}
              </div>
            </div>
          })}
        </div>
        <div className="flex justify-center py-12"> <button className=' rounded-full p-3 bg-orange-custom text-red-custom w-40'>View All</button></div>
      </div>
    </div >
  )
}
