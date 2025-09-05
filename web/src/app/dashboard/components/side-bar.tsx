import Image from 'next/image'
import React from 'react'
import Logo from '@/core/assets/logo.png'
export default function SideBar() {
  return (
    <div className='w-[300px] h-full border-r border-r-border'>
      <Image src={Logo} height={150} width={150} className='m-auto' alt='Logo'/>
    </div>
  )
}
