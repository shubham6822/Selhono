import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (

        <div className='flex justify-center flex-col items-center'>
            <div className='w-[1210px] h-[758px] bg-hero-pattern'>
                <div className='text-white pt-20 pl-9 '>
                    <h1 className='text-7xl m-0  '>Let&apos;s make your</h1>
                    <h2 className='text-7xl m-0'>home beautiful together</h2>
                    <div>
                        <p className='text-2xl font-inter w-[470px]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div>
                        <button className='bg-[#CDA274] border-none w-[227px] h-[75px] rounded-2xl font-inter text-white text-lg flex items-center justify-center gap-2'>Get Started <Image src="/assets/arrow.svg" alt='arrow-icon' width={13.18} height={15.14} /></button>
                    </div>
                </div>
            </div>
            <div className='w-[1158px] h-[225px] mt-24 grid grid-cols-3 text-center gap-[42px]'>
                <div>
                    <h1 className='text-[#292F36] text-3xl'>Project Plan</h1>
                    <p className='text-[#4D5053] font-inter text-lg mt-[20px] mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, distinctio! Lorem ipsum dolor sit amet.</p>
                    <div className='flex justify-center'>
                        <button className='bg-white border-none font-jost text-lg flex items-center gap-1 text-[#4D5053]'>Read more
                            <Image src="/assets/arrow-black.svg" alt='arrow-icon' width={13} height={15.14} />
                        </button>
                    </div>
                </div>
                <div>
                    <h1 className='text-[#292F36] text-3xl'>Interior work</h1>
                    <p className='text-[#4D5053] font-inter text-lg mt-[20px] mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, distinctio! Lorem ipsum dolor sit amet.</p>
                    <div className='flex justify-center'>
                        <button className='bg-white border-none font-jost text-lg flex items-center gap-1 text-[#4D5053]'>Read more
                            <Image src="/assets/arrow-black.svg" alt='arrow-icon' width={13} height={15.14} />
                        </button>
                    </div>
                </div>
                <div>
                    <h1 className='text-[#292F36] text-3xl'>Realization </h1>
                    <p className='text-[#4D5053] font-inter text-lg mt-[20px] mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, distinctio! Lorem ipsum dolor sit amet.</p>
                    <div className='flex justify-center'>
                        <button className='bg-white border-none font-jost text-lg flex items-center gap-1 text-[#4D5053]'>Read more
                            <Image src="/assets/arrow-black.svg" alt='arrow-icon' width={13} height={15.14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
