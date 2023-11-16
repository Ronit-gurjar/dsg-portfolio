'use client'

import React from 'react'
import { motion, useScroll } from 'framer-motion'
import HomeSection from './home/Home'
import About from './home/About'
import Team from './home/Team'
import Service from './home/Service'
import Footer from './home/Footer'

export default function Home() {
  const { scrollYProgress} = useScroll();
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <motion.div
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
      <HomeSection/>
      <About/>
      <Team/>
      <Service/>
      <Footer/>
      </motion.div>
    </main>
  )
}
