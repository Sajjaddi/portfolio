"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import JobPreferences from "@/components/JobPreferences";
import SkillsBento from "@/components/SkillsBento";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#040711] text-slate-100 cyber-grid">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <JobPreferences />
        <SkillsBento />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
