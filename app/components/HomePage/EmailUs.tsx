import React from 'react'

const EmailUs = () => {
    return (
        <div className='text-center py-10'>
            <div className='my-2 text-xl'>join our newsletter</div>
            <div className='flex flex-col items-center'>
                <div className=' w-full flex justify-center'>
                    <input placeholder='enter email address' className=' border-black border-2 p-2' /> <button className='bg-black text-white px-2 font-thin'>subscribe</button>
                </div>

            </div>

        </div>
    )
}

export default EmailUs