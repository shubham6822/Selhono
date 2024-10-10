import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <>
            <div className='flex justify-between items-center mx-72 mt-8'>
                <div className='flex gap-3 items-center'>
                    <Image src="/assets/homo-logo.svg" alt="home-logo" width={39} height={30} />
                    <div className='flex items-center'>
                        <p className=' font-Dmserifdisplay text-4xl text-[#292F36] m-0'>SELHONO</p>
                    </div>
                </div>
                <div className='font-jost flex items-center gap-10 text-lg'>
                    <Link href={"/"} className='no-underline text-black'>
                        Home
                    </Link>
                    <Link href={"/"} className='no-underline  text-black'>
                        Pages
                    </Link>
                    <Link href={"/"} className='no-underline  text-black'>
                        Services
                    </Link>
                    <Link href={"/"} className='no-underline  text-black'>
                        Project
                    </Link>
                    <Link href={"/"} className='no-underline  text-black'>
                        Blog
                    </Link>
                    <Link href={"/"} className='no-underline  text-black'>
                        Contact
                    </Link>
                    <Image src="/assets/search-logo.svg" alt='search' width={20} height={20} className='' />
                </div>
            </div>
        </>
    )
}
