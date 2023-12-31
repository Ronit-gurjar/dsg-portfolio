'use client'

import React from 'react'
import CountUp from 'react-countup'

type CounterCardProps={
    num: number;
    title: string;
    icon: JSX.Element;
}
const CounterCard= ({num, title, icon}:CounterCardProps) => {
  const countTo = num;
  return (
    <div className='bg-Theme-black rounded-md p-8 flex flex-col items-center text-white'>

       <h1 className='text-5xl flex lg:text-9xl'>
        {icon}<CountUp end={countTo}/>
       </h1>
       <h3 className='lg:text-5xl'>{title}</h3>
    </div>
  )
}

export default CounterCard