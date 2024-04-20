import React from 'react'
import { ToastInterface } from '../Interfaces/interfaces'

const Toast:React.FC<ToastInterface> = ({title,message,status,show,setShow}) => {
let bgColor = 'bg-green-500'
let opacity = 'opacity-0'
if(show) {
    opacity = ' opacity-100'
}

    if(status === 'error') bgColor = 'bg-red-500 '
  return (
    <div className={'fixed top-2 z-50 right-10 text-white w-96 min-h-40 transition ease-in-out '+ bgColor + opacity}>
        <div className='text-4xl text-center py-2'>{title}</div>
        <hr/>
        <div className='text-2xl text-center py-2'>{message}</div>
        </div>
  )
}

export default Toast