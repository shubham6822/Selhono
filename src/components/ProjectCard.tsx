import Image from 'next/image'
import React from 'react'

export default function ProjectCard({ url }: { url: string }) {
    return (
        <div className='mt-36 w-[547px]'>
            <div>
                <Image src={url} alt='project-image' width={547} height={548} />
            </div>
            <div className='mt-2 flex justify-between items-center'>
                <div>
                    <h1 className='m-0 text-[#292F36]'>Modern Bedroom</h1>
                    <p className='m-0 text-[#4D5053] font-jost'>Decor / Artchitecture</p>
                </div>
                <div className='size-[77px] rounded-full bg-[#D8A876] flex justify-center items-center'>
                    <Image src="/assets/arrow-project.svg" alt='arrow-project' width={8} height={18} />
                </div>
            </div>
        </div>
    )
}
