import React from 'react'

export default function Navbar() {
    return (
        <div className='w-screen fixed h-20 items-center flex gap-[750px] justify-center'>
            <div className='items-center'>
                <h3 className='font-extrabold text-white text-xl'>Gabriel Dwi Putra</h3>
            </div>
            <div className='text-white flex gap-25 items-center'>
                <a href="">Home</a>
                <a href="">About Me</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
            </div>
        </div>
    )
}
