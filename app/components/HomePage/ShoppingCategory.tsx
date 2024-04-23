import React from 'react'
import CategoryItem from './CategoryItem'
import { OnSaleInterface } from '@/app/Interfaces/interfaces'

const ShoppingCategory: React.FC<OnSaleInterface> = ({products}) => {
    return (
        <div className='bg-orange-custom my-5'>
            <div>
                <p className='text-3xl text-red-custom p-3 text-center'>SHOP BY CATEGORY</p>
                <div className='flex justify-center w-100 flex-wrap'>
                    <CategoryItem title='Bags & Accessories' image="/img/stock/bags.jpg" />
                    <CategoryItem title='Shoes' image="/img/stock/boots.jpg" />
                    <CategoryItem title='Hats' image="/img/stock/hats.jpg" />
                    <CategoryItem title='Shirts' image="/img/stock/shirts.jpg" />
                </div>
            </div>
        </div>
    )
}

export default ShoppingCategory