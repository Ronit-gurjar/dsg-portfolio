'use client'

import { type } from 'os'
import React from 'react'
import CountUp from 'react-countup'

type LabelCardProps={
    label: string;
}
const LabelCard= ({label}:LabelCardProps) => {
  return (
    <div className='bg-Theme-black rounded-md p-4 w-96 flex flex-col items-center text-white'>
       <h1 className='text-5xl'>
         {label}
       </h1>
    </div>
  )
}

export default LabelCard