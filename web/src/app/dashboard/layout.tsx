import React from 'react';
import SideBar from './components/side-bar';
import Header from './components/header';

export default function layout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <div className='flex flex-1 h-screen'>
      <SideBar/>
      <div className='w-full'>
        <Header/>
        {children}
      </div>
    </div>
  )
}