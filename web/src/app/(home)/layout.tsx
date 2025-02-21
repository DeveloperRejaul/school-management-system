import React from 'react';

export default function layout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <div className='flex container flex-col'>
      <nav className='flex w-full justify-between '>
        <div>Logo</div>
        <div className='flex space-x-10'>
          <div className='cursor-pointer'>Home</div>
          <div className='cursor-pointer'>Services</div>
          <div className='cursor-pointer'>Proses</div>
          <div className='cursor-pointer'>Pricing</div>
          <div className='cursor-pointer'>About</div>
        </div>
        <div>Contact Us</div>
        <button>Change Them</button>
      </nav>
      {children}
    </div>
  )
}
