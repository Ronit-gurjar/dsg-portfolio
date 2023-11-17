'use client'

import React from 'react'
import { motion, useScroll } from 'framer-motion'
import HomeSection from './home/Home'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between overflow-hidden ">
      <HomeSection/>
    </main>
  )
}
