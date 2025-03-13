import React from 'react'
import logo from '@/assets/logo.png'
import Image from 'next/image'

export default function SchoolPage() {
  const slogan ='lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellendus!'
  const schoolName = "Innovative School"

  return (
    <div className="bg-background">
      {/* nav bar section */}
      <nav className='flex justify-between items-center fixed container left-0 right-0 top-0 m-auto'>
        <Image src={logo} height={100} width={100} alt='logo'/>
        <ul className="flex space-x-4">
          <li className="btn">Home</li>
          <li className="btn">Admission</li>
          <li className="btn">Result</li>
          <li className="btn">Notice</li>
          <li className="btn">Tethers</li>
          <li className="btn">About</li>
        </ul>
        <div className="flex items-center">
          <button className="btn">Login</button>
          <button className="btn">Register</button>
        </div>
      </nav>

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
      {/* Home section */}
      <section className='h-[100vh] flex flex-col justify-center items-center'>
        <h1>{slogan}</h1>
        <h1>{schoolName}</h1>
      </section>
      
    </div>
  )
}
