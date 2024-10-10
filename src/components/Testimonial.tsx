import React from 'react'
import Card from './Card'

export default function Testimonial() {
    return (
        <div className='mt-36 h-[679px] bg-[#D8A876] rounded-[80px] flex justify-center items-center'>
            <div className='w-[1161px] h-[503px] flex justify-center'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-white text-5xl text-center w-[524px] '>
                        What the People Thinks About Us
                    </h1>
                    <div className='grid grid-cols-3 gap-4'>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
        </div>
    )
}
