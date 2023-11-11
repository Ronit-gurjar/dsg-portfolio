import Image from 'next/image'
import pfp from '../../public/profile.jpg'
import { BsChevronDoubleDown } from 'react-icons/bs';

export default function Home() {
  const imageStyle = {
    borderRadius: '50%',
    outline: '2px solid #fff',
    outlineOffset: '10px'
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className='flex flex-col items-center mx-auto bg-Theme-black rounded-xl shadow-md overflow-hidden md:max-w-4xl p-8'>
        <div className='flex flex-row items-center gap-40'>
          <div>
          <Image
            src="/favicon.ico"
            width={40}
            height={40}
            alt="Advocate"
          />
          </div>
          <div className='flex flex-row gap-2'>
            <button className="btn btn-outline">book a session</button>
          </div>
        </div>
        <div className='grid grid-row-3 gap-6 p-6'>
          <div className='flex flex-col items-center text-white text-2xl'>
            <h3 >Advocate</h3>
            <h1 className='text-decoration-solid'>DILIP SINGH GURJAR</h1>
          </div>
          <div className='flex flex-col items-center'>
          <Image
            src={pfp}
            width={400}
            height={500}
            alt="Dilip Singh Gurjar"
            style={imageStyle}
          />
          </div>
          <div className='flex flex-col items-center text-white text-2xl'>
            <h3 >Speacialist</h3>
            <h1 className=' text-3xl'>Criminal law</h1>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-6'>
          <div className='text-xl'>
            <p>
              I am <b>Dilip Singh Gurjar</b>.
              <br />
              a dedicated advocate with over a decade of experience practicing law. 
              Having built a career on trust, I am committed to helping clients achieve the justice they deserve.
              </p>
          </div>
          <div><button className='btn btn-neutral'><BsChevronDoubleDown/>see more</button></div>
        </div>
      </div>
    </main>
  )
}
