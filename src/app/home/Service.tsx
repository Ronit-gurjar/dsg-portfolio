import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Law from '../../../public/law.png'

import LabelCard from '../components/card/LabelCard'
import ContactForm from '../components/form/ContactForm'


const Service = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col item-center justify-center p-2'>
            <div><h1 className='text-4xl text-Theme-black text-center underline underline-offset-4 font-serif p-2'>Our Services</h1></div>
            <motion.div className='flex flex-col lg:flex-row gap-4 items-center justify-center mt-4'
            initial={{opacity: 0, scale:0.8}}
            whileInView={{opacity: 1, scale:1}} //to create view based animations
            transition={{type:'spring',duration:1}}
            >  
                <LabelCard label='Criminal Cases'/>
                <LabelCard label='Criminal Cases'/>
                <LabelCard label='Criminal Cases'/>
            </motion.div>
        </div>
        <div className='flex flex-col items-center justify-center lg:gap-20 lg:flex-row lg:w-fit p-10'>
            <div className='flex flex-col lg:flex-row items-center text-center p-6'>
                <div>
                    <Image src={Law} width={400} height={400} alt='law'/>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col text-center item-center justify-center'>
                        <h1 className='text-4xl lg:text-7xl text-Theme-black text-center underline underline-offset-4 font-serif p-2'>+15 Years</h1>
                        <p className='text-Theme-black text-2xl'>of Experience</p>
                    </div>
                    <p className='text-Theme-black text-3xl'>Excellence dosen't mean much if<br/> it is not used in helping others.</p>
                </div>
            </div>
            <motion.div className='w-fit flex justify-center'
            initial={{opacity: 0, y:100}}
            whileInView={{opacity: 1, y:0}} //to create view based animations
            transition={{type:'spring',duration:1}}
            >
                <ContactForm/>
            </motion.div>
        </div>
    </div>
  )
}

export default Service