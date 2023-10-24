import Image from 'next/image'
import pfp from '../../public/profile.jpg'

export default function Home() {
  const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #fff',
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className='flex flex-col items-center mx-auto bg-Theme-black rounded-xl shadow-md overflow-hidden md:max-w-4xl p-8'>
        <div className='grid grid-cols-2 gap-4 items-center'>
          <div>
          <Image
            src="/favicon.ico"
            width={30}
            height={30}
            alt="Dilip Singh Gurjar"
            style={imageStyle}
          />
          </div>
          <div><button className="btn btn-outline">Button</button></div>
        </div>
        <div className='grid grid-row-3 gap-4 p-8'>
          <div className='flex flex-col items-center text-white'>
            <h3 >Advocate</h3>
            <h1 className='text-decoration-solid'>DILIP SINGH GURJAR</h1>
          </div>
          <div className='flex flex-col items-center'>
          <Image
            src={pfp}
            width={200}
            height={300}
            alt="Dilip Singh Gurjar"
            style={imageStyle}
          />
          </div>
          <div className='flex flex-col items-center text-white text-3xl'>
            <h3 >Speacialist</h3>
            <h1>Criminal law</h1>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <div>btm-t</div>
          <div>btm-b</div>
        </div>
      </div>
    </main>
  )
}
