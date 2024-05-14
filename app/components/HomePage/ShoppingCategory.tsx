import React from 'react'
import CategoryItem from './CategoryItem'
import { OnSaleInterface } from '@/app/Interfaces/interfaces'

const ShoppingCategory: React.FC<OnSaleInterface> = ({products}) => {
    let collections:any[] = []
    for(let i = 0; i < products.length; i++){
        let index = collections.findIndex((item:any) => item.collection === products[i]?.collection)
        if(index === -1){
            collections.push({collection:products[i]?.collection, image:products[i]?.images && products[i]?.images[0]})
        } else {
            if(products[i]?.images && products[i]?.images[0]){
                collections[index].image = products[i].images[0]
            }
        
        }
    }
    return (
        <div className='bg-orange-custom my-5 h-1/2'>
            <div className=' px-10'>
                <p className='text-3xl text-red-custom p-3 text-center '>SHOP BY CATEGORY</p>
                <div className='flex justify-center flex-wrap'>
                    {collections.map((item:any,index:number)=>{
                        return <CategoryItem title={item.collection} image={item.image} key={index} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default ShoppingCategory