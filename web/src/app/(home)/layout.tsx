import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/logo.png'
export default function layout() {
  return (
    <div className='w-full'>
      <section className='header flex flex-1 w-full justify-center flex-col'>
        <div className='overly'/>
        <nav className='fixed top-0 flex justify-center h-[80px] z-10 w-full'>
          <div className='container flex justify-between items-center h-full'>
            <Image src={Logo} height={100} width={100} alt='Logo'/>
            <div className='flex space-x-10'>
              <div className='btn'>Home</div>
              <div className='btn'>Services</div>
              <div className='btn'>Proses</div>
              <div className='btn'>Pricing</div>
              <div className='btn'>About</div>
            </div>
            <div className='flex gap-x-3'>
              <div className='!bg-blue-700 btn'>Contact Us</div>
            </div>
          </div>
        </nav>
        <div className='flex h-[100vh] container m-auto'>
          <div className='pt-[80px]'>
            {/* contents */}
            <h1>Your school partner</h1>
          </div>
        </div>
      </section>
      <section style={{height: "100vh"}}>
        <div className='flex flex-1 w-full justify-center'>
          <div></div>
        </div>
      </section>
    </div>
  )
}
