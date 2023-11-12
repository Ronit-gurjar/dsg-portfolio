'use client'

import { type } from 'os'
import React from 'react'
import CountUp from 'react-countup'

type CounterCardProps={
    num: number;
    title: string;
}
const CounterCard= ({num, title}:CounterCardProps) => {
  const countTo = num;
  return (
    <div className='bg-Theme-black rounded-md p-8 flex flex-col items-center'>
       <h1 className='text-5xl lg:text-9xl'>
        <CountUp end={countTo}/>
       </h1>
       <h3 className='lg:text-5xl'>{title}</h3>
    </div>
  )
}

export default CounterCard