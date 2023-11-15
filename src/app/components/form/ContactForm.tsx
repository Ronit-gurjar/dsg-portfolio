'use client'

import { sendEmail } from '@/app/api/send/route'
import React from 'react'
import {BsFillSendFill} from 'react-icons/bs'

const ContactForm = () => {
  return (
    <form className='bg-Theme-black w-96 lg:w-full h-fit flex flex-col relative top-0 rounded-md p-8' action={async (formData) =>{
        await sendEmail(formData)
    }}>
        <h1 className='text-3xl font-serif p-8 bg-Theme-cream text-Theme-black rounded-md'>Request a Free Quote</h1>
        <div className='flex flex-col gap-4 p-4'>
        <input name='Name' type="text" required placeholder="Name" className="input lg:input-lg input-bordered w-full max-w-xs" />
        <input name='Email' type="text" required placeholder="Email" className="input lg:input-lg input-bordered w-full max-w-xs" />
        <textarea className="textarea lg:textarea-lg textarea-bordered" name='Message' required placeholder="Message"></textarea>
        <div className='flex items-center justify-between'>
            <div>we will relpy <br/>as soon as possible.</div>
            <button className='btn btn-outline' type='submit'><BsFillSendFill/>Send</button>
        </div>
        </div>
    </form>
  )
}

export default ContactForm