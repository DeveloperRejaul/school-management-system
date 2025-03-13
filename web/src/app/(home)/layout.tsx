import Image from 'next/image';
import React from 'react';
import type { Metadata } from 'next';
import dashboard from '@/assets/mobile-dashboard.png'
import Navbar from '@/components/NavBar';

export const metadata: Metadata = {
  title: 'School Laine - Home',
  description: 'All-in-One School Management Solution.',
};

export default function layout() {
  return (
    <div className='w-full'>
      <section className='header flex flex-1 w-full justify-center flex-col'>
        <div className='overly'/>
        <Navbar/>
        <div className='flex h-[100vh] container m-auto pt-[80px] z-10 flex-col'>
          <h1 className='text-center w-full text-6xl font-bold pt-20 leading-[1.1]'>EduFlex – Empowering Schools with <br /> Smart Management.</h1>
          <h2 className='text-center w-full text-2xl font-bold pt-4'>Your All-in-One School Management Solution.</h2>
          
          <div className='flex justify-center pt-6 gap-x-3 '>
            <div className='btn bg-zinc-800'>Buy Now</div>
            <div className='btn bg-primary'>Pricing</div>
          </div>
          <div className='h-full w-full px-28 pt-12'>
            <Image src={dashboard} className="h-full w-full" objectFit='cover' alt='dashboard'/>
          </div>
        </div>
      </section>
      <section style={{height: "35vh"}}/>

      {/* Services */}
      <section id='services' style={{height: "100vh"}} >
        <div className='flex flex-1 w-full'>
          <div>Services</div>
        </div>
      </section>

      {/* Process */}
      <section id='process' style={{height: "100vh"}}>
        <div className='flex flex-1 w-full justify-center'>
          <div>Process</div>
        </div>
      </section>

      {/* Pricing */}
      <section id='pricing' style={{height: "100vh"}}>
        <div className='flex flex-1 w-full justify-center'>
          <div>Pricing</div>
        </div>
      </section>
      {/* About */}
      <section id='about' style={{height: "100vh"}}>
        <div className='flex flex-1 w-full justify-center'>
          <div>About</div>
        </div>
      </section>
    </div>
  )
}
