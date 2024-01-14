import { CategoryItemInterface } from '@/app/Interfaces/interfaces'
import React from 'react'

const CategoryItem: React.FC<CategoryItemInterface> = ({ title, image }) => {
    return (
        <div className='m-7 flex flex-col'>
            <img alt="bags" src={image} className='h-full' />
            <div className='flex justify-between items-center py-2 text-red-custom'>{title} <i className='fa fa-arrow-right mx-1'></i></div>
        </div>
    )
}

export default CategoryItem