import Brands from '@/components/Brands'
import Hero from '@/components/Hero'
import Hero2 from '@/components/Hero2'
import ProjectCard from '@/components/ProjectCard'
import Testimonial from '@/components/Testimonial'
import React from 'react'

export default function page() {
  return (
    <div className='mx-72 mt-32'>
      <Hero />
      <Hero2 />
      <Testimonial />
      <Brands />
      <div className='grid grid-cols-2 gap-x-40'>
        <ProjectCard url='/image/Rectangle4.png' />
        <ProjectCard url='/image/Rectangle5.png' />
        <ProjectCard url='/image/Rectangle6.png' />
        <ProjectCard url='/image/Rectangle7.png' />
      </div>
    </div>
  )
}
