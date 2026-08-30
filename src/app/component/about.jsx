import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <div className='w-screen bg-[#2B2D3A] h-[700px] flex justify-center items-center gap-[250px] max-phone:flex max-phone:flex-wrap max-phone:w-screen max-phone:h-fit  '>
      <div className='text-white flex flex-col gap-15'>
        <div>
          <h2>ABOUT ME</h2>
          <h1 className='text-[70px] font-bold max-phone:text-[20px]'>I've been building
            <br />website since 2025</h1>
          <p className='w-[600px] text-[20px]'>Starting with exploring the basics and walking step-by-step toward the top, I am committed to continuous learning, mastering modern web technologies, and turning complex ideas into seamless, high-performance digital experiences.</p>
        </div>


        <div className='flex underline'>
          <p className='font-bold'>More About Me</p>
          <ArrowRight />
        </div>
      </div>

      <div className='flex flex-col text-white'>
        <div className='flex'>
          <div className='flex items-center text-white font-bold'>
            <h2 className='text-[90px]'>2</h2>
            <h3 className='text-[30px]'>Years of <br />experience</h3>
          </div>
          <div className='flex items-center text-white font-bold'>
            <h2 className='text-[90px]'>15</h2>
            <h3 className='text-[30px]'>Successful <br />Projects</h3>
          </div>
        </div>
        <div className='w-[500px] text- xl'>
          <p>For 2 Years of Building website, I’ve learned about Next.js & Express.js. Not only Js, i also explore the other programming language such as Golang & Python.</p>
        </div>
      </div>
    </div>
  )
}
