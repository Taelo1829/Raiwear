import React from 'react'
import { ShoppingListInterface } from '../../Interfaces/interfaces'
import Image from 'next/image'

const ShoppingItem: React.FC<ShoppingListInterface> = ({ index, item }) => {
    return (
        <div key={index} className="m-4" >
            <div>
                <Image alt={item.title} src={item.image} className="h-52" />
            </div>
            <div className=" flex flex-col items-center">
                <label >{item.title}</label>
                <p className="my-2 text-center">{item.price}</p>
                {item.available ? <button className="border border-black rounded md:rounded-full p-2 ">Add To Cart</button> : <button className="border border-gray-400 text-gray-500 rounded md:rounded-full p-2" disabled> Sold Out</button>}
            </div>
        </div>
    )
}

export default ShoppingItem