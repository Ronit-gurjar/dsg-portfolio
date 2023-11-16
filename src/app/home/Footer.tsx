'use client'

import React from 'react'

import TiltImageCard from '../components/card/TiltImageCard'
import IconButton from '../components/button/IconButton'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className='p-4 lg:mt-4'>
        <div className='flex flex-col items-center mx-auto bg-Theme-black rounded-xl shadow-md overflow-hidden p-8'>
        <div className='flex flex-col lg:flex-row lg:items-center mt-1 lg:mt-10 gap-10 p-6 lg:p-10'>
          <div className='flex flex-col items-center text-white text-2xl lg:text-6xl'>
            <h3 >Advocate</h3>
            <h1 className='text-2xl lg:text-4xl'>DILIP SINGH GURJAR</h1>
          </div>
          <div className='flex flex-col items-center'>
            <TiltImageCard/>
          </div>
          <div className='flex flex-col items-center text-white text-2xl lg:text-6xl'>
            <h3 >Let's Connnect</h3>
            <div className='text-5xl flex gap-5 lg:text-9xl p-6'>
                <IconButton icon={<FaFacebookSquare />} url='https://www.facebook.com/dilipsingh.gurjar.92?mibextid=ZbWKwL'/>
                <IconButton icon={<FaInstagramSquare />} url='https://instagram.com/gurjar.dilip1984?igshid=OGQ5ZDc2ODk2ZA=='/>
                <IconButton icon={<FaWhatsappSquare />} url='https://wa.me/qr/FPM32MVPYENEE1'/>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4'>
          <div className='p-8'>
            <p className='text-center text-Theme-cream text-5xl lg:text-8xl'>
              <b>न्यायः मम धर्मः</b>
              </p>
          </div>
          <div className='flex gap-6'>
            <p className='text-Theme-cream flex gap-1 items-center'>All rights reserved <MdCopyright /></p>
            <button className='btn btn-outline text-Theme-cream'><a href="https://github.com/Ronit-gurjar">Made by Ronit </a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer