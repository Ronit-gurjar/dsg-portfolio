'use client'

import React from 'react'
import Image from 'next/image'
import text from '../../../../public/rotated text.png'
import { BsChevronDoubleDown } from 'react-icons/bs';
import { motion } from "framer-motion"

const RotatingButton = () => {
  return (
    
        <button className='relative flex items-center justify-center'>
            <motion.div
            initial={{
                rotate: '0deg'
            }}
            animate={{
                rotate: '360deg',
                transition:{
                    duration: 3,
                    repeat: Infinity
                }
            }}
            >
              <Image src={text} alt='advocate' width={80} height={80}/>
            </motion.div>
              <motion.div 
              initial={{
                scale:1
              }}
              whileHover={{
                scale:1.5
              }}
              className='absolute'><BsChevronDoubleDown/></motion.div>
        </button>
  )
}

export default RotatingButton