import React from 'react'
import { checkoutInterface } from '../Interfaces/interfaces'

const Checkout: React.FC<checkoutInterface> = ({total,onClick}) => {
  return (
    <div className='border border-1 border-black flex'>
                        <div className='py-2 w-full flex flex-col items-end mx-12'>
                            <div><b className='mr-12'>total</b> <b>{total}</b></div>
                            <div>*including standard shipping fee</div>
                        </div>
                        <div className='bg-black text-white flex items-center px-10 cursor-pointer' onClick={()=>onClick()}> continue</div>
                    </div>
  )
}

export default Checkout