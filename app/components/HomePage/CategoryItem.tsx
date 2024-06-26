import { CategoryItemInterface } from '@/app/Interfaces/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryItem: React.FC<CategoryItemInterface> = ({ title, image }) => {
    return (
        <Link href={{
            pathname:"/shop-new",
            query:{category:title}
        }} className='px-7 flex flex-col'>
            <div className='flex bg-blue-100 w-48 h-48 justify-center items-center bg-cover bg-center' style={image?{backgroundImage:`url(${image})`}:{}}></div>
            <div className='flex justify-between items-center py-2 text-red-custom'>{title} <i className='fa fa-arrow-right mx-1'></i></div>
        </Link>
    )
}

export default CategoryItem