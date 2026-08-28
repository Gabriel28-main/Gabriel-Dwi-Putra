import React from 'react'

export default function Navbar() {
    return (
        <div className='w-screen fixed h-20 items-center flex gap-[750px] justify-center bg-[#131218]'>
            <div className='items-center'>
                <h3 className='font-extrabold text-white text-xl'>Gabriel Dwi Putra</h3>
            </div>
            <div className='text-white flex gap-25 items-center'>
                <a href="" className='hover:text-[#FFD401] font-bold'>Home</a>
                <a href="" className='hover:text-[#FFD401] font-bold'>About Me</a>
                <a href="" className='hover:text-[#FFD401] font-bold'>Projects</a>
                <a href="" className='hover:text-[#FFD401] font-bold'>Contact</a>
            </div>
        </div>
    )
}
