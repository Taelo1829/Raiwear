import { getProducts } from '@/app/api/database'
import Image from 'next/image'
import React, { useEffect } from 'react'

const OnSale = () => {
    useEffect(()=>{
        loadData()
    },[])

   async function loadData(){
     let products = await getProducts();
     setProducts(products)
    }

    const [products, setProducts] = React.useState([])

    const placeHolder = [
        {
            "image": "https://example.com/images/item1.jpg",
            "name": "Vintage Denim Jacket",
            "size": "Medium",
            "description": "classic blue, lightly worn",
            "price": "R 40"
        },
        {
            "image": "https://example.com/images/item2.jpg",
            "name": "Floral Summer Dress",
            "size": "Small",
            "description": "bright colors, knee-length",
            "price": "R 25"
        },
        {
            "image": "https://example.com/images/item3.jpg",
            "name": "Black Leather Boots",
            "size": "9",
            "description": "high ankle, minimal wear",
            "price": "R 55"
        },
        {
            "image": "https://example.com/images/item4.jpg",
            "name": "Red Silk Scarf",
            "size": "One Size",
            "description": "vibrant color, soft texture",
            "price": "R 15"
        },
        {
            "image": "https://example.com/images/item5.jpg",
            "name": "Striped Cotton T-Shirt",
            "size": "Large",
            "description": "navy and white stripes, comfortable fit",
            "price": "R 20"
        },
        {
            "image": "https://example.com/images/item6.jpg",
            "name": "Wool Beanie",
            "size": "One Size",
            "description": "warm, dark grey color",
            "price": "R 10"
        },
        {
            "image": "https://example.com/images/item7.jpg",
            "name": "Classic White Sneakers",
            "size": "8",
            "description": "clean and versatile",
            "price": "R 50"
        },
        {
            "image": "https://example.com/images/item8.jpg",
            "name": "Leather Wristwatch",
            "size": "Adjustable",
            "description": "elegant, minimal scratches",
            "price": "R 70"
        },
        {
            "image": "https://example.com/images/item9.jpg",
            "name": "Graphic Hoodie",
            "size": "Extra Large",
            "description": "bold print, cozy material",
            "price": "R 35"
        }]
    //TODO will change when I have actual Photos
    return (<div className='flex  bg-orange-custom p-3 flex-wrap'>
        {products.map((item:any, index) => {
            return <div className=' w-1/4 h-80 p-3 text-center my-2' key={index}>
                <div className='flex bg-blue-100 w-full h-3/5 justify-center items-center'>
                    </div>
                    <div className='flex flex-col pb-2 justify-between h-1/2'>
                <div className='py-1 text-left font-medium'>{item.heading}</div>
                <div className='py-1 text-left font-extralight'>{item.size}</div>
                <div className='py-1 text-left font-extralight'>{item.description}</div>
                <div className='p-1 flex justify-between '>
                    <div className='bg-white rounded-xl w-20 h-8 flex justify-center items-center'>{item.price}</div>
                    <div className=''><i className='fa fa-plus-circle fa-2x text-white cursor-pointer'></i></div>
                </div>
                </div>
            </div>
        })}
    </div>
    )
}

export default OnSale