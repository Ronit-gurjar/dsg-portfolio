'use client'

import React from 'react'

const ContactForm = () => {
  return (
    <form className='bg-Theme-black w-96 lg:w-full h-fit flex flex-col items-center justify-center relative top-0 rounded-md p-8'>
        <h1 className='text-3xl font-serif p-8 bg-Theme-cream text-Theme-black rounded-md'>Request a Free Quote</h1>
        <div  className='flex flex-col gap-4 p-4 text-white'>
        <h1 className="flex items-center justify-center input lg:input-lg input-bordered w-full max-w-xs">+91 9926215979</h1>
        <h1 className="flex items-center justify-center input lg:input-lg input-bordered w-full max-w-xs">+91 9424060563</h1>
        <h1 className="flex items-center justify-center input lg:input-lg input-bordered w-full max-w-xs">gurjardilip1984advo@gmail.com</h1>
        <h1 className="flex items-center justify-center text-center input lg:input-lg input-bordered w-full max-w-xs">A-380, Swapna city, freegunj, Shujalpur</h1>
        <div className='flex flex-col items-center justify-center text-Theme-cream'><div className='text-2xl font-extrabold'>Office Time</div><div>Morning 08:00 AM to 10:00 AM</div><div>Evening 07:00 PM to 09:00 PM</div></div>
        </div>
    </form>
  )
}

export default ContactForm