import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className='flex flex-col items-center placeholder:max-w-md mx-auto bg-Theme-black rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8'>
        <div className='grid grid-cols-3 gap-4'>
          <div></div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div>mid-l</div>
          <div>mid-m</div>
          <div>mid-r</div>
        </div>
        <div className='flex flex-col justify-center'>
          <div>btm-t</div>
          <div>btm-b</div>
        </div>
      </div>
    </main>
  )
}
