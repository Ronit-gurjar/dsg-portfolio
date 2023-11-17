'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'

import RotatingButton from '../components/button/RotatingButton'
import TiltImageCard from '../components/card/TiltImageCard'
import About from './About'
import Team from './Team'
import Service from './Service'
import Footer from './Footer'

const HomeSection = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress} = useScroll();

  const handleClick = () =>{
    targetRef.current?.scrollIntoView({ behavior:'smooth'})
  }
  return (
    <>

    <motion.div
      className='hidden lg:block'
        style={{
            scaleX: scrollYProgress,
            transformOrigin: "left",
            position: "sticky",
            top: 0,
            width: "100%",
            height: "4px",
            background:"#1E1E1E",
            border:'1px solid #FEE9D0',
            borderRadius:'20px'
        }}
        />
    <motion.div>
    <div className='p-8 -mt-6 w-fit'>
        <div className='flex flex-col items-center mx-auto bg-Theme-black rounded-xl shadow-md overflow-hidden p-8'>
        <div className='flex flex-row items-center gap-20 lg:gap-40 lg:ml-56'>
          <div>
          <Image
            src="/favicon.ico"
            width={40}
            height={40}
            alt="Advocate"
          />
          </div>
          <div className='hidden lg:block'>
          <button onClick={handleClick} className='btn btn-outline text-Theme-cream'>Contact</button>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row lg:items-center mt-1 lg:mt-10 gap-10 p-6 lg:p-10'>
          <div className='flex flex-col items-center text-white text-2xl lg:text-6xl'>
            <h3 >Advocate</h3>
            <h1 className='text-2xl'>DILIP SINGH GURJAR</h1>
          </div>
          <div className='flex flex-col items-center'>
            <TiltImageCard/>
          </div>
          <div className='flex flex-col items-center text-white text-2xl lg:text-6xl'>
            <h3 >Speacialist</h3>
            <h1 className='text-3xl'>Criminal lawyer</h1>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4'>
          <div className='text-xl'>
            <p className='text-center text-lg lg:text-2xl text-Theme-cream'>
              I am <b>Dilip Singh Gurjar</b>.
              <br />
              A dedicated advocate with over a decade of experience practicing law. 
              Having built a career on trust, I am committed to helping clients achieve the justice they deserve.
              </p>
          </div>
          <div><RotatingButton/></div>
        </div>
      </div>
    </div>
    
    <About/>
    <Team/>
    <div ref={targetRef}><Service/></div>
    <Footer/>
    </motion.div>

    </>
  )
}

export default HomeSection