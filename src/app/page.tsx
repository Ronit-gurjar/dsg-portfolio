import React from 'react'
import { motion } from "framer-motion"
import HomeSection from './home/Home'
import About from './home/About'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <HomeSection/>
      <About/>
    </main>
  )
}
