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
        setLoading(false)
    }
    const [loading, setLoading] = React.useState(true)
    const [products, setProducts] = React.useState([])

    if(loading) return <div className='text-center'>loading...</div>
    if(products.length){
    return (<div className='flex bg-orange-custom p-3 flex-wrap h-1/2 justify-between'>
        {products.map((item:any, index) => {
            return <div className=' w-56 h-80 p-3 text-center my-2' key={index}>
                <div className='flex bg-blue-100 w-48 h-48 justify-center items-center bg-cover bg-center' style={item.images?{backgroundImage:`url(${item.images[0]})`}:{}}>
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
}else{
    return <></>
}
}

export default OnSale