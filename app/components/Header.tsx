import React from 'react'
//Header: React.FC<Header> 
const Header = () => {
    return (
        <div className='flex justify-between p-5 items-center'>
            <div><i className='fa fa-search'></i></div>
            <div className='font-sans font-bold text-2xl'>Raiwear Studio</div>
            <div><i className='fa fa-shopping-bag'></i></div>
        </div>
    )
}

export default Header