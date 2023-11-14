import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import figure from '../../../public/lady justice.png'
import CounterCard from '../components/card/CounterCard'

const About = () => {
  return (
    <div className='flex flex-col item-center justify-center gap-4 p-2'>
        <div><h1 className='text-4xl text-Theme-black text-center underline underline-offset-4 font-serif p-2'>Experience</h1></div>
        
        <motion.div
            className='flex flex-col lg:flex-row lg:justify-center gap-4'
            initial={{opacity: 0, scale:0}}
            whileInView={{opacity: 1, scale:1}} //to create view based animations
            transition={{duration:1.5}}
        >
            <CounterCard num={1700} title='Total Cases'/>
            <CounterCard num={1009} title='Pending Cases'/>
            <CounterCard num={746} title='Desposed Cases'/>
        </motion.div>
        <div className='flex flex-col lg:flex-row justify-center gap-8'>
            <div className='w-fit'>
                <Image src={figure} alt='justice' width={700} height={500}/>
            </div>
            <div className='w-96'>
                <p className='text-2xl text-Theme-black bg-Theme-cream -mt-48 lg:mt-0 lg:p-10'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Maxime dolorum, sequi sint explicabo placeat et ullam exercitationem.
                    Ut iste necessitatibus quia, praesentium magni recusandae totam dolore, voluptatibus ex, corrupti libero!
                   
                </p>
            </div>
        </div>
    </div>
  )
}

export default About