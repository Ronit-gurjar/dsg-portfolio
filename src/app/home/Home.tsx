'use client'

import React from 'react'
import Image from 'next/image'

import RotatingButton from '../components/button/RotatingButton'
import TiltImageCard from '../components/card/TiltImageCard'

const HomeSection = () => {
  return (
    <div className='p-4'>
        <div className='flex flex-col items-center mx-auto bg-Theme-black rounded-xl shadow-md overflow-hidden p-8'>
        <div className='flex flex-row items-center gap-20 lg:gap-40'>
          <div>
          <Image
            src="/favicon.ico"
            width={40}
            height={40}
            alt="Advocate"
          />
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
            <p className='text-center lg:text-2xl'>
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
  )
}

export default HomeSection