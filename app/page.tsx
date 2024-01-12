import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex justify-center'>
      <div className='container'>
        <div className='bg-black flex justify-center relative my-10'>
          <div className='absolute top-1/2 hidden md:inline-block'>
            <button className='bg-orange-custom text-red-custom w-48 h-14 rounded-full text-2xl'>Shop New</button>
          </div>
          <img src="/img/1.png" width={"50%"} />
        </div>
        <div className='flex md:hidden justify-center'>
          <button className='border border-black rounded-full p-3'>Shop New</button>
        </div>
      </div>
    </div >
  )
}
