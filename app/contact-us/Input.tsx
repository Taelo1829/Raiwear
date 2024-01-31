import React from 'react'
import { InputInterface } from '../Interfaces/interfaces'

const Input: React.FC<InputInterface> = ({ label }) => {
    return (
        <div>
            <div className='my-3'>
                <label >{label}</label>
            </div>
            <div>
                {label !== "" ? <input className='border border-black' /> : ""}
            </div>
        </div>
    )
}

export default Input