import React from 'react'
import { InputInterface } from '../Interfaces/interfaces'

const Input: React.FC<InputInterface> = ({ label, onChange, valueToUpdate, value }) => {
    return (
        <div>
            <div className='my-3'>
                <label >{label}</label>
            </div>
            <div>
                <input className='border border-black' type='text' onChange={(e) => onChange({ [valueToUpdate]: e.target.value })} value={value} placeholder={value} ></input>
            </div>
        </div>
    )
}

export default Input