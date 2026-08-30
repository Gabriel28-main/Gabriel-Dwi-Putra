import Image from 'next/image'
import React from 'react'
import foto from '../../../public/picture/foto.jpeg'
export default function Home() {
    return (
        <div className='bg-[#131218] h-screen w-full p-2 flex flex-col  justify-center'>
            <div className='text-white text-[35px] md:text-[50px] font-extrabold text-center flex flex-col items-center justify-center gap-10 lg:flex-row  lg:text-start lg:gap-10 lg:p-5'>
                <div>
                    <div className='lg:text-10xl lg:w-[700px]'>
                        <h1 className='lg:text-5xl'>I'm <span className='text-[#FFD401]'>Gabriel</span></h1>
                        <h1 className='lg:text-6xl'>Software <span className='text-[#FFD401]'>Engineer</span></h1>
                        <p className='font-normal text-[16px] lg:text-[20px]'>I’m  a software engineer specialist on Fullstack Web development.  Building a website using Node Js is my passion.</p>

                    </div>

                    <div className='text-[14px] font-bold flex  justify-center lg:justify-start gap-4'>
                        <a href="/picture/CV.pdf" download='CV.pdf' className='bg-[#FFD401] p-1 border-[2px] border-[#ffd401]'>Download my CV</a>
                        <a href="" className='p-1 border-[#FFD401] border-[2px]'>See my Projects</a>
                    </div>
                </div>

                <Image src={foto} alt='photo' width={300} className='rounded-4xl md:w-[350px] lg:w-[500px]' />
            </div>
        </div>
    )
}
