import React from 'react'
import { ImageInterface } from '../Interfaces/interfaces'

const Image: React.FC<ImageInterface> = ({children,image,width,height,borderless}) => {
    if(!width){
        width = "w-48"
    }

    if(!height){
        height = "h-48"
    }
  return (
    <div className={`${width} ${height} bg-cover bg-center ${borderless?"":"border border-1 border-black"}`} style={{backgroundImage:`url(${image})`}}>
         {children}
        </div>
  )
}

export default Image