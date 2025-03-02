/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = ["home", "services", "process", "pricing", "about"];

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 100);

    const current = sections.find((id) => {
      const section = document.getElementById(id);
      if (section) {
        const sectionTop = section.offsetTop - 80;
        const sectionBottom = sectionTop + section.offsetHeight;
        return window.scrollY >= sectionTop && window.scrollY < sectionBottom;
      }
    });

    if (current && current !== activeSection) {
      setActiveSection(current);
    }
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleClick = (name: string) => {
    const section = document.getElementById(name.toLowerCase());
    if (section) {
      window.scrollTo({ behavior: "smooth", top: section.offsetTop - 80 });
      setActiveSection(name.toLowerCase());
    }
  };
  

  return (
    <nav className={`fixed top-0 flex justify-center h-[80px] z-[9999] w-full transition-colors duration-300 
      ${scrolled ? "bg-background backdrop-blur-lg border-b border-b-zinc-800" : "bg-transparent border-b border-b-transparent"}`}>
      <div className="container flex justify-between items-center h-full">
        <Image src={Logo} height={100} width={100} alt="Logo" />
        <div className="flex space-x-10">
          {sections.map((name) => (
            <div
              key={name}
              onClick={() => handleClick(name)}
              className={`btn ${activeSection === name ? "bg-zinc-900" : ""}`}
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </div>
          ))}
        </div>
        <div className="flex gap-x-3">
          <div className="!bg-blue-700 btn">Contact Us</div>
        </div>
      </div>
    </nav>
  );
}
