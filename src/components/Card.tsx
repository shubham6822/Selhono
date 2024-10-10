import Image from 'next/image'
import React from 'react'

export default function Card() {
    return (
        <div className='bg-white w-[370px] h-[339px] rounded-3xl '>
            <div className='m-10'>
                <div className='flex gap-6'>
                    <Image src="/assets/hero-image.png" alt='quote-icon' width={77} height={77} className='rounded-full ' />
                    <div className='flex flex-col justify-center gap-1 '>
                        <h2 className='m-0 text-[#292F36]'>Shubham</h2>
                        <p className='m-0 font-jost text-[#4D5053]'>Moscow,Russia</p>
                    </div>
                </div>
                <div>
                    <p className='font-inter text-[#4D5053]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolores consequatur, enim ipsa maxime, et ut aliquid, adipisci voluptatem iusto placeat soluta. Unde sit culpa earum aut accusantium sequi vitae.</p>
                </div>
            </div>
        </div>
    )
}
