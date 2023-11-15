import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'

type ImageCardProps={
    imageSrc: StaticImageData;
    name: string;
    title: string;
    experience: number;
    contact: number;
}
const ImageCard = ({imageSrc,name,title,experience,contact}:ImageCardProps) => {
  return (
    <motion.div
            className='flex flex-col lg:flex-row lg:justify-center gap-4'
            initial={{opacity: 0.4, scale:0.7}}
            whileInView={{opacity: 1, scale:1}} //to create view based animations
            transition={{type:'spring',duration:1.5}}
        >
    <div className='w-96 h-fit group relative overflow-hidden rounded-md  outline outline-2 outline-Theme-cream'>
        <Image 
            src={imageSrc} 
            alt='test'
            width={508}
            height={600}
        />
        <div className='absolute w-full h-full bg-Theme-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <div className='text-white text-2xl flex flex-col items-center gap-3 relative top-20 p-2'>
                <h1 className='text-5xl'>{name}</h1>
                <p>{title}</p>
                <p>Exp {experience} yrs</p>
                <p>Contact: <span className='underline'>{contact}</span></p>
            </div>
        </div>
    </div>
    </motion.div>
  )
}

export default ImageCard