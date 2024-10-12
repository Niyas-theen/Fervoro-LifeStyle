import React from 'react'

const NewSeasonSection = () => {
    return (
        <div className='bg-[#f9f9f6] flex flex-col justify-center items-center p-6'>
            <div className=' flex flex-nowrap gap-2'>
                <img src="./polo.jpg" alt="" className='w-[49%] object-cover' />
                <img src="./striped.jpg" alt="" className='w-[49%] object-cover' />
            </div>
            <div className='py-2 '>
                <img src="./shirt.jpg" alt="" className='w-full object-cover' />
            </div>
            <div className='flex flex-nowrap gap-2'>
                <img src="./round neck.jpg" alt="" className='w-[49%] object-cover' />
                <img src="./Trackpant.jpg" alt="" className='w-[49%] object-cover' />
            </div>
        </div>
    )
}

export default NewSeasonSection