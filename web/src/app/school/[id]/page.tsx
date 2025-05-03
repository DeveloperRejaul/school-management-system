import React from 'react'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import Dot from '@/components/dot'
import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaSoundcloud,
} from 'react-icons/fa';
import Navbar from '@/components/NavBar'

export default function SchoolPage() {
  const slogan ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellendus!'
  const schoolName = "Innovative School"

  return (
    <div className="bg-background w-full">
      {/* nav bar section */}
      <Navbar 
        sections={["home", "admission","result","notice","tethers","about"]}
        rightButtonsText={['Login', 'Register']}
      />
      {/* Home section */}
      <section id='home' className='h-[100vh] flex flex-col justify-center items-center w-full bg-cover home-bg'>
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
      {/* Admission section */}
      <section id='admission' className='h-[100vh] flex flex-col justify-center items-center'>
        <h1>{slogan}</h1>
        <h1>{schoolName}</h1>
      </section>
      {/* Result section */}
      <section id='result' className='h-[100vh] flex flex-col justify-center items-center'>
        <h1>{slogan}</h1>
        <h1>{schoolName}</h1>
      </section>
      {/* Notice section */}
      <section id='notice' className='h-[100vh] flex flex-col justify-center items-center'>
        <h1>{slogan}</h1>
        <h1>{schoolName}</h1>
      </section>
      {/* Tethers section */}
      <section id='tethers' className='h-[100vh] flex flex-col justify-center items-center'>
        <h1>{slogan}</h1>
        <h1>{schoolName}</h1>
      </section>
      {/* About section */}
      <section id='about' className='h-[100vh] flex flex-col justify-center items-center'>
        <h1>{slogan}</h1>
        <h1>{schoolName}</h1>
      </section>
      
      {/* Footer section */}
      <section className='flex flex-col justify-center items-center'>
        <footer className="text-white py-12 px-6 md:px-16 container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {/* Column 1 */}
            <div>
              <h4 className="uppercase text-sm mb-4 text-gray-400">Information About</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {['History', 'Administration', 'Our Campus', 'Cafeteria', 'Our Teachers', 'Courses', 'Academic Calendar', 'Departments', 'Undergraduate Program', 'Contact Us'].map((item) => (
                  <li key={item}>◌ <a href="#" className='hover:underline'>{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="uppercase text-sm mb-4 text-gray-400">Information For</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {['Admissions', 'Schools', 'Events', 'News', 'Applications FAQ', 'Donations', 'Teachers', 'Media', 'Alumni', 'Athletics'].map((item) => (
                  <li key={item}>◌ <a href="#" className='hover:underline'>{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="uppercase text-sm mb-4 text-gray-400">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {['Academic Calendar', 'Research', 'Timetable', 'News list', 'Events List', 'Shortcodes', 'Typography', 'Shop'].map((item) => (
                  <li key={item}>◌ <a href="#" className='hover:underline'>{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image src={logo} height={100} width={100} alt='logo'/>
                <div>
                  <p className="text-lg font-bold">SCHOOL</p>
                  <p className="text-sm">LINE</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>📍 16-2, Best Avenue Street, CA 23653, USA</li>
                <li>📱 +1 998 71 150 30 20</li>
                <li>📠 +1 998 71 150 30 30</li>
                <li>✉️ info@stylemixthemes.com</li>
                <li>🕒 Mon – Sat: 9AM — 6PM</li>
              </ul>
              <div className="flex space-x-4 mt-6 text-white text-lg">
                <FaFacebookF className='cursor-pointer'/>
                <div className='h-6 w-[0.5px] bg-zinc-700'/>
                <FaGooglePlusG className='cursor-pointer'/>
                <div className='h-6 w-[0.5px] bg-zinc-700'/>
                <FaTwitter className='cursor-pointer'/>
                <div className='h-6 w-[0.5px] bg-zinc-700'/>
                <FaYoutube className='cursor-pointer'/>
                <div className='h-6 w-[0.5px] bg-zinc-700'/>
                <FaInstagram className='cursor-pointer'/>
                <div className='h-6 w-[0.5px] bg-zinc-700'/>
                <FaSoundcloud className='cursor-pointer'/>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  )
}


