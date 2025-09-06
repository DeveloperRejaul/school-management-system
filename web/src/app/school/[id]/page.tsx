/* eslint-disable @typescript-eslint/ban-ts-comment */
 
import React from 'react'
import logo from '@/core/assets/logo.png'
import Image from 'next/image'
import Dot from '@/core/components/dot'
import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaSoundcloud,
} from 'react-icons/fa';
import Navbar from '@/core/components/NavBar'
import ExperienceIcon from '@/core/assets/icon/experience'
import AdmissionImage from '@/core/assets/admission.png'
import NoticeImage from '@/core/assets/notice.png'
import { headers } from 'next/headers';
import { SchoolTypes } from '@/types';
import { req } from '@/core/utils/req';


export default async function SchoolPage() {
  const headersList = headers();
  //@ts-ignore
  const schoolData = headersList.get('x-school-data');
  const data:SchoolTypes = JSON.parse(schoolData);

  const teacherss = await req('/api/school/demo')
  const noticess = await req('/api/school/demo')
  
  
  const notices = [
    {
      day: '17',
      month: 'Dec',
      content:
      'সম্মানিত অভিভাবকবৃন্দ, পঞ্চম শ্রেণির ফলাফল প্রকাশিত হয়েছে। ফলাফল নিয়ে কোনো অভিযোগ বা মতামত থাকলে অফিসে এসে যোগাযোগ করুন। - 2024',
      link: '/downloads/result1.pdf',
    },
    {
      day: '25',
      month: 'Dec',
      content:
      '৫ম থেকে পঞ্চম শ্রেণির ফলাফল প্রকাশ হয়েছে। ফলাফল দেখতে ভিজিট করুন। ফলাফল নিয়ে কোনো মতামত থাকলে অফিসে যোগাযোগ করুন। - 2024',
      link: '',
    },
    {
      day: '10',
      month: 'Dec',
      content: 'ভর্তি বিজ্ঞপ্তি................... - 2024',
      link: '/downloads/admission.pdf',
    },
  ];


  const teachers = [
    {
      name: 'Polina Kerston',
      role: 'English Teacher',
      img: 'https://shelly.merku.love/wp-content/uploads/2020/11/img5-270x405.png',
    },
    {
      name: 'Faadi Al Rahman',
      role: 'Instructor',
      img: 'https://shelly.merku.love/wp-content/uploads/2020/11/img6-270x405.png',
    },
    {
      name: 'Chikelu Obasea',
      role: 'Art Teacher',
      img: 'https://shelly.merku.love/wp-content/uploads/2020/11/img6-270x405.png',
    },
    {
      name: 'Katayama Fumiki',
      role: 'Teacher',
      img: 'https://shelly.merku.love/wp-content/uploads/2020/11/img8-270x405.png',
    },
  ];

  
  return (
    <div className="bg-background w-full">
      {/* nav bar section */}
      <Navbar 
        sections={["home", "admission","notice","tethers","about"]}
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
            <h1 className='text-zinc-400'>{data?.slogan}</h1>
            <Dot className='bg-green-700'/>
            <Dot className='bg-green-700'/>
            <Dot className='bg-green-700'/>
          </div>
          <h1 className='text-7xl font-bold font-sans'>{data?.title}</h1>
          <h2 className='text-7xl font-normal font-serif'>{data?.subTitle}</h2>
        </div>
      </section>

      {/* Why Choose Us section */}
      <section className='flex flex-1 justify-center'>
        <div className='container text-center py-10'>
          {/* Title part */}
          <div className='space-y-3'>
            <h1 className='text-4xl font-bold'>Why Choose Us</h1>
            <p className='text-xl text-zinc-400'>Ecosystem blended learning off-the-shelf learning storytelling explainer animation completion criteria.</p>
          </div>
          {/* card part */}
          <div className='grid gap-x-10 grid-cols-3 pt-10'>
            <div className='p-10 shadow shadow-zinc-700'>
              <div className='pb-10 flex justify-center'>
                <div className='bg-primary h-16 w-16 rounded-full flex justify-center items-center'>
                  <ExperienceIcon/>
                </div>
              </div>
              <h3 className='font-bold text-lg'>Experienced Teachers</h3>
              <p>Morbi vel augue et metus pellentesque lacinia eu non odio.</p>
            </div>
            <div className='p-10 shadow shadow-zinc-700'>
              <div className='p-10'>Logo</div>
              <h3 className='font-bold text-lg'>Best Learning Programm</h3>
              <p>Morbi vel augue et metus pellentesque lacinia eu non odio.</p>
            </div>
            <div className='p-10 shadow shadow-zinc-700'>
              <div className='p-10'>Logo</div>
              <h3 className='font-bold text-lg'>Global Certificate</h3>
              <p>Etiam risus neque, volutpat vel laoreet a, finibus volutpa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission section */}
      <section id='admission' className='flex flex-col justify-center items-center'>
        <div className="w-full py-12 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start rounded-lg overflow-hidden shadow-lg">
            {/* Left Image */}
            <div className="w-full h-full md:w-1/2 md:h-auto relative">
              <Image
                src={AdmissionImage}
                alt="Driving Instructor"
                objectFit="cover"
                className="object-cover rounded-lg"
              />
            </div>

            {/* Right Form */}
            <div className="w-full md:w-1/2 p-6 md:p-10 self-center">
              <h2 className="text-2xl font-bold mb-6">Application Form</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border border-zinc-700 px-4 py-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border border-zinc-700 px-4 py-2 rounded"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full bg-transparent border border-zinc-700 px-4 py-2 rounded"
                />
                <input
                  type="datetime-local"
                  className="w-full border border-zinc-700 bg-transparent px-4 py-2 rounded"
                />
                <div className="flex gap-4 flex-col sm:flex-row">
                  <select className="w-full bg-transparent border border-zinc-700 px-4 py-2 rounded">
                    <option>Course Type</option>
                    <option>Beginner</option>
                    <option>Advanced</option>
                  </select>
                  <select className="w-full bg-transparent border border-zinc-700 px-4 py-2 rounded">
                    <option>Car Type</option>
                    <option>Manual</option>
                    <option>Automatic</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                SEND INQUIRY
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Notice section */}
      <section id='notice' className='flex flex-col justify-center items-center'>
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start rounded-lg overflow-hidden shadow-lg space-x-5">
          <div className="md:w-2/3 w-full self-center">
            <h2 className="text-3xl font-bold mb-6">📢 Notice</h2>
            <div className="space-y-4">
              {notices.map((notice, idx) => (
                <div key={idx} className="p-4 rounded-md shadow-sm border border-zinc-700">
                  <div className="flex items-start gap-4">
                    <div className="text-center">
                      <div className="text-md font-bold">{notice.month}</div>
                      <div className="text-2xl font-extrabold">{notice.day}</div>
                    </div>
                    <div className="flex-1 text-sm">
                      <p className="mb-1 leading-6">{notice.content}</p>
                      {notice.link && (
                        <a
                          href={notice.link}
                          target="_blank"
                          className="text-blue-600 hover:underline text-sm inline-flex items-center gap-1"
                          rel="noopener noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12v9m0 0l-3-3m3 3l3-3M12 3v9"
                            />
                          </svg>
                              Download
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Read More Button */}
            <div className="mt-6">
              <button className="text-white px-5 py-2 bg-blue-600 rounded shadow hover:bg-gray-800 transition">
                  Read More
              </button>
            </div>
          </div>

          {/* Left Image */}
          <div className="w-full h-full md:w-1/2 md:h-auto relative">
            <Image
              src={NoticeImage}
              alt="Notice Banner"
              objectFit="cover"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
      {/* Tethers section */}
      <section id='tethers' className='flex flex-col justify-center items-center'>
        <div className="container py-16">
          <div className="mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Awesome <span className="text-orange-500">Teachers</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Rapid learning, web-based training, virtual classrooms, and big data-driven instructional design.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {teachers.map((teacher, index) => (
                <div
                  key={index}
                  className="shadow-md rounded-xl overflow-hidden group transition transform hover:-translate-y-1"
                >
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={teacher.img}
                      alt={teacher.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{teacher.name}</h3>
                    <p className="text-blue-600 text-sm">{teacher.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            See More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About and Footer section */}
      <section id='about' className='flex flex-col justify-center items-center'>
        <footer className="text-white py-12  pb-5  container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {/* Column 1 */}
            <div>
              <h4 className="uppercase text-sm mb-4 text-gray-400">Information About</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {['History', 'Administration', 'Our Campus', 'Cafeteria', 'Our Teachers', 'Courses', 'Academic Calendar', 'Departments', 'Undergraduate Program', 'Contact Us'].map((item) => (
                  <li key={item}>◌ <a className='hover:underline cursor-pointer'>{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="uppercase text-sm mb-4 text-gray-400">Information For</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {['Admissions', 'Schools', 'Events', 'News', 'Applications FAQ', 'Donations', 'Teachers', 'Media', 'Alumni', 'Athletics'].map((item) => (
                  <li key={item}>◌ <a className='hover:underline cursor-pointer'>{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="uppercase text-sm mb-4 text-gray-400">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                {['Academic Calendar', 'Research', 'Timetable', 'News list', 'Events List', 'Shortcodes', 'Typography', 'Shop'].map((item) => (
                  <li key={item}>◌ <a className='hover:underline cursor-pointer'>{item}</a></li>
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
        <div className='flex h-20 w-full bg-[#131313] items-center'>
          <div className='container m-auto'>
            <p className='text-center align-middle text-zinc-600'>Copyright All Right Reserved 2025, School Line</p>
          </div>
        </div>
      </section>
    </div>
  )
}


