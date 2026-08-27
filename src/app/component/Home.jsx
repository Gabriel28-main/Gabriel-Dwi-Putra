import React from 'react'
import foto from '../../../public/picture/foto.jpeg'
import Image from 'next/image'


export default function Home() {
    return (
        <div className='h-[100vh] w-screen bg-[#131218] flex justify-center items-center gap-80flex-wrap'>
            <div className='text-white text-5xl font-extrabold w-[700px] flex flex-col gap-10 '>
                <div className='w-[700px]'>
                    <h2 className='font-normal'>Hi,</h2>
                    <h1>I'm <span className='text-[#FFD401]'>Gabriel</span></h1>
                    <h1 className='text-6xl'>Software <span className='text-[#FFD401]'>Engineer</span></h1>
                </div>

                <div className='text-2xl font-medium '>
                    <p>I’m  a software engineer specialist on Fullstack Web development.  Building a website using Node Js is my passion.</p>
                </div>

                <div className='flex gap-10'>
                    <a
                        href="/picture/CV.pdf"
                        download="CV.pdf"
                        className="bg-[#FFD401] text-xl h-10 justify-center items-center flex w-fit p-2 text-black font-medium "
                    >
                        Download my CV
                    </a>


                    <a href='' className='border-[2px] border-[#FFD401] text-xl h-10 justify-center items-center flex w-fit p-2 text-white font-medium'     >
                        See my Projects
                    </a>
                </div>
            </div>

            <Image src={foto} alt='foto' width={400} className='rounded-2xl' />
        </div>
    )
}

