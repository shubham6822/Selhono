import Image from 'next/image'
import React from 'react'

export default function Hero2() {
    return (
        <div className='mt-24 flex w-[1210px]'>
            <div className='w-[653px] h-[700px] bg-hero-1'>
                <div className='text-white pt-36 pl-7'>
                    <h1 className='text-6xl m-0  '>We create art</h1>
                    <h2 className='text-6xl m-0'>for mordern life</h2>
                    <div>
                        <p className='text-2xl font-inter w-[324px]'>
                            Lorem ipsum dolor sit amet  adipisicing elit. Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className='flex flex-col gap-14'>
                        <div className='flex gap-5'>
                            <div className='size-[93px] bg-[#FFFFFF] rounded-full flex justify-center items-center'>
                                <Image src="/assets/Call.svg" alt='quote-icon' width={32} height={32} />
                            </div>
                            <div className='flex  flex-col justify-center'>
                                <h1 className='m-0 font-jost'>0123456789</h1>
                                <h2 className='m-0 font-jost'>Call us anytime</h2>
                            </div>
                        </div>
                        <button className='bg-[#CDA274] border-none w-[227px] h-[75px] rounded-2xl font-inter text-white text-lg flex items-center justify-center gap-2'>Get Free Estimate <Image src="/assets/arrow.svg" alt='arrow-icon' width={13.18} height={15.14} /></button>
                    </div>
                </div>
            </div>
            <Image src="/assets/hero2.png" alt='hero-pattern' width={803} height={700} className='absolute right-[296px]' />
        </div>
    )
}
