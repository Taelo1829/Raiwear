import React from 'react'

const EmailUs = () => {
    return (
        <div className='text-center py-10'>
            <h1 className='text-4xl'>Be The First To Know</h1>
            <div className='my-2 text-xl'>Join our email list to be ahead of sales, new items added and exclusive offers!</div>
            <div className='flex flex-col items-center'>
                <div className=' w-full'>
                    <input placeholder='Email' className='border border-gray w-1/4 rounded p-2' /> <button className='mx-2'><i className='fa fa-arrow-right'></i></button>
                </div>

            </div>

        </div>
    )
}

export default EmailUs