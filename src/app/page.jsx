import React from 'react'
import Home from './component/Home'
import Projects from './component/projects'
// import Navbar from './component/Navbar'
// import About from './component/about'
export default function page() {
  return (
    <div className='scroll-smooth'>
      {/* <Navbar /> */}
      <Home />
      {/* <About /> */}
      <Projects />
    </div>
  )
}
