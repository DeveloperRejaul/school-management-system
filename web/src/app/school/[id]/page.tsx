import React from 'react'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import Dot from '@/components/dot'

export default function SchoolPage() {
  const slogan ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellendus!'
  const schoolName = "Innovative School"

  return (
    <div className="bg-background w-full">
      {/* nav bar section */}
      <nav className='flex justify-between items-center fixed container left-0 right-0 top-0 m-auto z-50'>
        <Image src={logo} height={100} width={100} alt='logo'/>
        <ul className="flex space-x-4">
          <li className="btn !bg-zinc-800">Home</li>
          <li className="btn">Admission</li>
          <li className="btn">Result</li>
          <li className="btn">Notice</li>
          <li className="btn">Tethers</li>
          <li className="btn">About</li>
        </ul>
        <div className="flex items-center gap-x-3">
          <button className="btn bg-primary">Login</button>
          <button className="btn bg-primary">Register</button>
        </div>
      </nav>

      {/* Home section */}
      <section className='h-[100vh] flex flex-col justify-center items-center w-full bg-cover bg-[url(https://t3.ftcdn.net/jpg/03/91/46/10/360_F_391461057_5P0BOWl4lY442Zoo9rzEeJU0S2c1WDZR.jpg)]'>
        <div className='absolute w-full h-full bg-[#000000ad] z-0'/>
        <div className='container text-center z-10'>
          <div className='flex justify-center items-center gap-x-2 py-3'>
            <Dot className='bg-green-700'/>
            <Dot className='bg-green-700'/>
            <Dot className='bg-green-700'/>
            <h1 className='text-zinc-400'>{slogan}</h1>
            <Dot className='bg-green-700'/>
            <Dot className='bg-green-700'/>
            <Dot className='bg-green-700'/>
          </div>
          <h1 className='text-7xl font-bold font-sans'>{schoolName}</h1>
          <h2 className='text-7xl font-normal font-serif'>For Education </h2>
        </div>
      </section>
      {/* Home section */}
      <section className='h-[100vh] flex flex-col justify-center items-center'>
        <h1>{slogan}</h1>
        <h1>{schoolName}</h1>
      </section>
      {/* Home section */}
      <section className='h-[100vh] flex flex-col justify-center items-center'>
        <h1>{slogan}</h1>
        <h1>{schoolName}</h1>
      </section>
      
    </div>
  )
}
