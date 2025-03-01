"use client"; // Mark as a client component

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [links, setLinks] = useState([
    {name:"Home", isActive: true},
    {name:"Services", isActive: false},
    {name:"Process", isActive: false},
    {name:"Pricing", isActive: false},
    {name:"About", isActive: false}
  ])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
  };

  return (
    <nav className={`fixed top-0 flex justify-center h-[80px] z-[9999] w-full transition-colors duration-300  ${scrolled ? "bg-background backdrop-blur-lg border-b border-b-zinc-800" : "bg-transparent border-b border-b-transparent" }`}>
      <div className="container flex justify-between items-center h-full">
        <Image src={Logo} height={100} width={100} alt="Logo" />
        <div className="flex space-x-10">
          {links.map(e => <div key={e.name} id={`#${e.name}`} className={`btn ${e.isActive ? "bg-zinc-900" : ""}`}>{e.name}</div>)}
        </div>
        <div className="flex gap-x-3">
          <div className="!bg-blue-700 btn">Contact Us</div>
        </div>
      </div>
    </nav>
  );
}
