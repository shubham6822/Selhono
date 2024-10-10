import Brands from '@/components/Brands'
import Hero from '@/components/Hero'
import Hero2 from '@/components/Hero2'
import Testimonial from '@/components/Testimonial'
import React from 'react'

export default function page() {
  return (
    <div className='mx-72 mt-32'>
      <Hero />
      <Hero2 />
      <Testimonial />
      <Brands />
    </div>
  )
}
