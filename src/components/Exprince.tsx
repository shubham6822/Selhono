import React from 'react';

export default function Experience() {
    return (
        <>
            <div className="flex justify-center items-center my-56">
                <div className="w-full max-w-6xl h-auto flex justify-between text-center items-center border-t-2 border-gray-200">
                    <div className="flex-1">
                        <h1 className="text-6xl font-bold text-[#CDA274]">12</h1>
                        <h3 className="mt-2 text-[#4D5053] text-xl font-light">Years of Experience</h3>
                    </div>
                    <div className="h-20 w-px bg-[#CDA274]"></div> {/* Divider */}
                    <div className="flex-1">
                        <h1 className="text-6xl font-bold text-[#CDA274]">1074</h1>
                        <h3 className="mt-2 text-[#4D5053] text-xl font-light">Success Projects</h3>
                    </div>
                    <div className="h-20 w-px bg-[#CDA274]"></div> {/* Divider */}
                    <div className="flex-1">
                        <h1 className="text-6xl font-bold text-[#CDA274]">98</h1>
                        <h3 className="mt-2 text-[#4D5053] text-xl font-light">Active Projects</h3>
                    </div>
                    <div className="h-20 w-px bg-[#CDA274]"></div> {/* Divider */}
                    <div className="flex-1">
                        <h1 className="text-6xl font-bold text-[#CDA274]">583</h1>
                        <h3 className="mt-2 text-[#4D5053] text-xl font-light">Happy Customers</h3>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-8 mt-36'>
                <h1 className='text-6xl text-[#292F36] m-0'>Articles & News</h1>
                <p className=' text-2xl font-inter  text-center w-4/6 text-[#4D5053] m-0 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sit illum nam similique, explicabo consectetur facilis possimus eius delectus asperiores?</p>
            </div>
        </>
    );
}
