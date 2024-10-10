import Image from 'next/image'
import React from 'react'

export default function Brands() {
    return (
        <div className='mt-36'>
            <div className='flex justify-around items-center'>
                <Image src="/assets/Buffer.svg" alt='brand1' width={200} height={100} />
                <Image src="/assets/bigC.svg" alt='brand1' width={300} height={200} />
                <Image src="/assets/uon.svg" alt='brand1' width={200} height={100} />
                <Image src="/assets/F.svg" alt='brand1' width={200} height={70} />
            </div>
            <div className='flex flex-col items-center gap-4 mt-36'>
                <h1 className='text-6xl text-[#292F36] m-0'>Follow Our Projects</h1>
                <p className=' text-2xl font-inter  text-center w-4/6 text-[#4D5053] m-0 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit illum nam similique, explicabo consectetur facilis possimus eius delectus asperiores?</p>
            </div>
        </div>
    )
}
