import React from 'react'
import ShoppingItem from './components/HomePage/ShoppingItem'

const ShoppingList = () => {
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
        <div className="hidden md:inline-block">
            <div className="flex md:flex-wrap -mx-3 overflow-auto mt-20 px-2">
                {stock?.map((item, index) => {
                    return <ShoppingItem index={index} item={item} />
                })}
            </div>
            <div className="flex justify-center py-12"> <button className=' rounded-full p-3 bg-orange-custom text-red-custom w-40'>View All</button></div>
        </div>
    )
}

export default ShoppingList