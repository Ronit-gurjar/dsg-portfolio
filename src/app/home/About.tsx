import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import figure from '../../../public/lady justice.png'
import { FaPlus } from "react-icons/fa6";
import { MdPendingActions } from "react-icons/md";
import { AiOutlineFileDone } from "react-icons/ai";

import CounterCard from '../components/card/CounterCard'

const About = () => {
  return (
    <div className='flex flex-col item-center justify-center gap-4 p-2'>
        <div><h1 className='text-4xl text-Theme-black text-center underline underline-offset-4 font-serif p-2'>Experience</h1></div>
        
        <motion.div
            className='flex flex-col lg:flex-row lg:justify-center gap-4'
            initial={{opacity: 0, scale:0}}
            whileInView={{opacity: 1, scale:1}} //to create view based animations
            transition={{type:'spring',duration:1}}
        >
            <CounterCard num={1700} title='Total Cases' icon={<FaPlus/>}/>
            <CounterCard num={1009} title='Pending Cases' icon={<MdPendingActions/>}/>
            <CounterCard num={746} title='Desposed Cases' icon={<AiOutlineFileDone/>}/>
        </motion.div>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-4'>
            <div className='w-fit'>
                <Image src={figure} alt='justice' width={500} height={400}/>
            </div>
            <div className='w-fit text-2xl text-Theme-black lg:w-6/12'>
                
                With a career spanning over a decade since embarking on self-practice in
                  <strong> 2011, Dilip Singh Gurjar</strong> has emerged as a seasoned advocate specializing in critical legal realms.
                  Renowned for expertise in navigating complex legal landscapes,
                  he have excelled in cases pertaining to the <strong>376 POCSO Act, 302, 307, 326, and NIA 138 </strong>.
                  <br/>
                  <br/>
                  <strong>Dilip Singh Gurjar</strong> brings a wealth of experience and a deep understanding of these intricate legal matters,
                  ensuring steadfast representation and advocacy for each client.
                  The track record is not just a testament to professional prowess but a commitment to upholding justice and safeguarding rights in every case undertaken.
                
            </div>
        </div>
    </div>
  )
}

export default About