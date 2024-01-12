import React from 'react'

const Menu = () => {
    let classShare = "mx-3 cursor-pointer hover:underline"
    return (
        <div className='m-10 justify-center hidden md:flex font-extralight'>
            <div className={classShare}>Home</div>
            <div className={classShare}>Collection</div>
            <div className={classShare}>About Us</div>
            <div className={classShare}>Blog</div>
            <div className={classShare}>FAQ</div>
        </div>
    )
}

export default Menu