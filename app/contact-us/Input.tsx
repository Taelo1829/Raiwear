import React from 'react'
import { InputInterface } from '../Interfaces/interfaces'

const Input: React.FC<InputInterface> = ({ label, onChange, valueToUpdate, value }) => {
    return (
        <div className='w-full'>
            <div className='m-3'>
                <label >{label}</label>
            </div>
            <div className='mx-3'>
                <input className='border border-black w-full h-9' type='text' onChange={(e) => onChange({ [valueToUpdate]: e.target.value })} value={value} placeholder={value} ></input>
            </div>
        </div>
    )
}

export default Input