import React from 'react'
import Home from './component/Home'
import Navbar from './component/Navbar'
import About from './component/about'
import { Metadata } from 'next'

export const metadata = {
  title: 'Gabriel Dwi Putra',
};

export default function page() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}
