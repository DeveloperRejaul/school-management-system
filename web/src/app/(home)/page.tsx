import React from 'react'
import Image from 'next/image';
import dashboard from '@/core/assets/mobile-dashboard.png'
import Navbar from '@/core/components/NavBar';
import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaSoundcloud,
  FaCheck,
} from 'react-icons/fa';
import logo from '@/core/assets/logo.png'
import ScrollButton from '@/core/components/buttons/ScrollButton';
import Link from 'next/link';

export default function page() {
  const services = [
    {
      title: "Student Management",
      description: "Track student profiles, attendance, grades, and performance all in one place.",
      icon: "🎓",
    },
    {
      title: "Teacher Management",
      description: "Manage teacher profiles, schedules, and class assignments with ease.",
      icon: "👩‍🏫",
    },
    {
      title: "Class & Exam Scheduling",
      description: "Plan timetables, organize exams, and send instant updates to students & staff.",
      icon: "📅",
    },
    {
      title: "Fee & Accounting",
      description: "Automate fee collection, reminders, and financial reports seamlessly.",
      icon: "💰",
    },
    {
      title: "Parent Portal",
      description: "Engage parents with real-time updates on attendance, results, and school events.",
      icon: "👨‍👩‍👧",
    },
    {
      title: "Library Management",
      description: "Manage book inventory, track borrowing, and simplify library operations.",
      icon: "📚",
    },
    {
      title: "Transport Management",
      description: "Track school buses, manage routes, and ensure student safety during travel.",
      icon: "🚌",
    },
    {
      title: "Communication Hub",
      description: "Send instant notifications, circulars, and messages to students and staff.",
      icon: "📢",
    },
  ];
  const plans = [
    {
      name: "Basic",
      tagline: "For Small Schools & Coaching Centers",
      price: 19,
      period: "Month",
      features: [
        "Up to 300 students",
        "Attendance & basic gradebook",
        "Class & exam scheduling",
        "Parent SMS/Email (100/mo)",
        "1 Admin + 5 Staff accounts",
      ],
      cta: { label: "Buy Now", href: "#" },
      highlight: false,
    },
    {
      name: "Pro",
      tagline: "Best for Growing Institutions",
      price: 39,
      period: "Month",
      features: [
        "Up to 1,500 students",
        "Advanced gradebook & report cards",
        "Online fee collection & reminders",
        "Parent Portal & Mobile App access",
        "3 Admin + 25 Staff accounts",
      ],
      cta: { label: "Buy Now", href: "#" },
      highlight: true, // highlighted middle card
      badge: "Popular",
    },
    {
      name: "Professional",
      tagline: "For Colleges & Large Schools",
      price: 99,
      period: "Month",
      features: [
        "Unlimited students",
        "Timetable, transport & library",
        "Custom analytics & Power BI export",
        "Bulk notifications & automation",
        "SSO, Roles & fine permissions",
      ],
      cta: { label: "Buy Now", href: "#" },
      highlight: false,
    },
  ];
  const steps = [
    {
      kpi: "01",
      title: "Discovery & Demo",
      desc: "We understand your school’s structure—classes, sections, fees—and show a tailored demo.",
      meta: "30–45 mins call",
      icon: "🧭",
    },
    {
      kpi: "02",
      title: "Setup & Configuration",
      desc: "We configure academic years, roles & permissions, grading scales, transport, and library.",
      meta: "Same day setup",
      icon: "⚙️",
    },
    {
      kpi: "03",
      title: "Data Import",
      desc: "Bulk import students, guardians, staff, and subjects from Excel/CSV with validation.",
      meta: "CSV/Excel templates",
      icon: "🗂️",
    },
    {
      kpi: "04",
      title: "Training",
      desc: "Role-based training for admins, teachers, and accountants; parent portal onboarding.",
      meta: "Live + recordings",
      icon: "🎥",
    },
    {
      kpi: "05",
      title: "Go Live",
      desc: "Enable attendance, timetable, gradebook, fee collection, and notifications for all users.",
      meta: "Staged rollout",
      icon: "🚀",
    },
    {
      kpi: "06",
      title: "Support & Success",
      desc: "Dedicated success manager, monthly health checks, and feature requests queue.",
      meta: "Priority support",
      icon: "🤝",
    },
  ];
  return (
    <div className='w-full'>
      <section id='home' className='header flex flex-1 w-full justify-center flex-col'>
        <div className='overly'/>
        <Navbar rightComponent={<Link href="/dashboard" className="btn bg-primary">GoTo Dashboard</Link>}/>
        <div className='flex h-[100vh] container m-auto pt-[80px] z-10 flex-col'>
          <h1 className='text-center w-full text-6xl font-bold pt-20 leading-[1.1]'>EduFlex – Empowering Schools with <br /> Smart Management.</h1>
          <h2 className='text-center w-full text-2xl font-bold pt-4'>Your All-in-One School Management Solution.</h2>
        
          <div className='flex justify-center pt-6 gap-x-3 '>
            <ScrollButton text='Buy Now' className='bg-zinc-800' navId='pricing'/>
            <ScrollButton text='Contact US' className='bg-primary' navId=''/>
          </div>
          <div className='h-full w-full px-28 pt-12'>
            <Image src={dashboard} className="h-full w-full" objectFit='cover' alt='dashboard'/>
          </div>
        </div>
      </section>
      <section style={{height: "50vh"}}/>

      {/* Services */}
      <section id='services' className='flex flex-col justify-center items-center'>
        <div className='container text-center py-20'>
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-primary font-semibold uppercase tracking-wide text-4xl">
          Services
            </h1>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          Empowering Schools with Smarter Management
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
          Our School Management Software helps institutions streamline daily operations, 
          improve communication, and create a better learning experience.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#1f1f1f] border border-border/10 rounded-xl p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="text-primary text-4xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-primary font-medium hover:underline flex items-center gap-2"
                >
              Explore More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id='process'className='flex flex-col justify-center items-center' >
        <div className='container py-20'>
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="inline-block text-primary font-semibold uppercase tracking-wide text-4xl">
          Process
            </h1>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          How We Deliver Your School Management System
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
          From first call to go-live, our team handles configuration, data, training, and ongoing support—so you can focus on education.
            </p>
          </div>

          {/* Steps */}
          <div className="max-w-6xl mx-auto mt-14 grid md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <div
                key={s.kpi}
                className="relative rounded-2xl bg-[#1f1f1f] border border-border/10 p-6 shadow-md"
              >
                {/* Step index pill */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center rounded-full text-xs font-bold px-3 py-1 bg-primary/15 text-primary">
                Step {s.kpi}
                  </span>
                  <span className="text-2xl">{s.icon}</span>
                </div>

                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{s.desc}</p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{s.meta}</span>
                  {/* subtle progress dot line for rhythm */}
                  <span className="h-2 w-2 rounded-full bg-primary/70"></span>
                </div>

                {/* connector accent on hover */}
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id='pricing' className='flex flex-col justify-center items-center'>
        <div className='container py-20'>
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="inline-block text-primary font-semibold uppercase tracking-wide text-4xl">
          Our Pricing
            </h1>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          Affordable Plans for Every School
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
          Get special offers this month. Start streamlining your school operations easily!
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-14">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={[
                  "relative rounded-2xl border shadow-md overflow-hidden",
                  plan.highlight
                    ? "bg-primary/10 border-primary/50"
                    : "bg-[#1f1f1f] border-border/50",
                ].join(" ")}
              >
                {/* Badge for highlighted card */}
                {plan.badge && (
                  <div className="absolute -right-8 top-8 rotate-45">
                    <span className="bg-primary text-[#0b0b0b] text-xs font-bold px-10 py-1 rounded">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 md:p-10">
                  <h3
                    className={[
                      "text-2xl font-semibold",
                      plan.highlight ? "text-primary" : "text-foreground",
                    ].join(" ")}
                  >
                    {plan.name} plan
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">{plan.tagline}</p>

                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-gray-400 mb-2">/ {plan.period}</span>
                  </div>

                  <h4 className="mt-8 font-semibold">Includes:</h4>
                  <ul className="mt-4 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <FaCheck />
                        <span className="text-gray-300">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.cta.href}
                    className={[
                      "mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 font-medium transition",
                      plan.highlight
                        ? "bg-foreground text-[#0b0b0b] hover:opacity-90"
                        : "bg-primary text-[#0b0b0b] hover:opacity-90",
                    ].join(" ")}
                    aria-label={`Select ${plan.name} plan`}
                  >
                    {plan.cta.label}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* About */}
      <section id='about' className='flex flex-col justify-center items-center'>
        <div className='container'>
          <footer className="text-white py-20  pb-5">
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
        </div>
      </section>
    </div>
  )
}
