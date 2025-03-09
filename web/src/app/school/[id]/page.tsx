import React from 'react'
import logo from '@/assets/logo.png'
import Image from 'next/image'

export default function SchoolPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* nav bar section */}
      <nav className='flex justify-between items-center'>
        <Image src={logo} height={100} width={100} alt='logo'/>
        <ul className="flex space-x-4">
          <li className="btn">Home</li>
          <li className="btn">About</li>
          <li className="btn">Programs</li>
          <li className="btn">Events</li>
          <li className="btn">Contact</li>
        </ul>
        <div className="flex items-center">
          <button className="btn">Login</button>
          <button className="btn">Register</button>
        </div>
      </nav>

      {/* footer section */}
      <footer className="bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Now <span className="text-primary">Subscribe</span> Us!</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod</p>
            <form className="flex justify-center">
              <input
                type="email"
                className="p-2 rounded-l-lg border border-border bg-background"
                placeholder="Your email here..."
              />
              <button
                type="submit"
                className="p-2 rounded-r-lg bg-primary hover:bg-primary/80 transition duration-200"
              >
                SUBMIT
              </button>
            </form>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4">About us</h3>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit vitae nulla at ultricies. Suspendisse consequat tempor mi, eu tristique mi.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">School links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact info</h3>
              <p className="mb-2">Address: 123 Main Street Str. London</p>
              <p className="mb-2">Phone: (531) 504-200-06</p>
              <p className="mb-4">Email: schoolname@mail.com</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="">&copy; 2023 MySchool. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
