"use client";
import ThemeToggle from '../components/ThemeToggle'
import CommandMenu from "../components/CommandMenu";
import ProjectEntry from "../components/ProjectEntry";
import ExperienceEntry from "../components/ExperienceEntry";
import  {TypescriptIcon} from 'react-icons'
import { profile, experience,link, projects, skills, skillsLogo } from "../data/portfolio";
import GitHubCalendar from 'react-github-calendar';
import GithubActivity from '../components/github';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='mx-2 mt-20'>
    <div id='background' className="min-h-[100dvh]   min-w-full bg-ink text-paper">
      <div id='border' className='w-full border-white/20 border-r border-l mx-auto max-w-content'>
      {/* Nav — stacks tap targets comfortably on narrow screens */}
      <div className='min-w-full fixed top-0 inset-0'>
     
      </div>
      <main className="mx-auto  max-w-content px-5  py-5 sm:px-8 sm:py-20">
        
        {/* Hero */}
        <section id="about" className="scroll-mt-5  ">
          <div className='flex'>
          <div id='border' className=' w-24 h-24 mx-4  border rounded-md col-span-1 border-white/20 p-1'>
            <img src='/akki1.jpeg'/>
           
          </div>
          <div className='flex flex-col items-center justify-center'> 
          <h1 id='text' className="font-mono text-2xl font-medium leading-tight text-paper sm:text-3xl">
            {profile.name}
          </h1>
          <div>

          
          <p className="mt-1 text-sm text-accent">{profile.role}</p>
          

          </div>
          </div>
          
          </div>
          <div className='border-t  mt-8  border-surface '>
            <h1 id='text' className='font-mono text-s uppercase mt-8 tracking-wide text-muted '>About</h1>
            <p id='gray' className="my-6 text-base leading-relaxed text-muted">{profile.bio}</p>
          </div>
          
          </section>
          <div id='border' className='border-t border-b mt-8  border-surface '>
          
          <h1 id='text' className='font-mono text-s uppercase mt-8 tracking-wide text-muted '>Connect</h1>
            <div className="my-6 justify-between flex mb-8 ">
            
             <a 
              rel="noreferrer"
                className="text-sm md:w-1/5 bg-paper rounded-xl p-2 text-black flex items-center justify-center"
              >
              Email
              </a>
              <a 
              rel="noreferrer"
                className="text-sm md:w-1/5 bg-paper rounded-xl p-2 text-black flex items-center justify-center"
              >
              Github
              </a>
               <a 
              rel="noreferrer"
                className="text-sm md:w-1/5 bg-paper rounded-xl p-2 text-black flex items-center justify-center"
              >
              LinkedIn
              </a>
               <a 
              rel="noreferrer"
                className="text-sm md:w-1/5 bg-paper rounded-xl p-2 text-black flex items-center justify-center"
              >
              Resume
              </a>
           
          </div>
          </div>
        
        

        {/* Acitity */}
        <section id="experience" className="mt-8 scroll-mt-20 sm:mt-24">
          <h2  className="font-mono text-sm uppercase mb-7 tracking-wide text-muted">Activity</h2>
          <GithubActivity/>
        </section>

        {/* Projects */}
        <div id='border' className='border-t border-b mt-8  border-surface '>
        <section id="projects" className="mt-16 scroll-mt-20 sm:mt-24">
          
          <h2 className="font-mono text-sm uppercase tracking-wide text-muted">Projects</h2>
          <div className="mt-4">
            <div className='grid md:grid-cols-2 '>
              
             
            <div className='col-span-1 m-1'>
              <a href="https://hostel-management-wheat-five.vercel.app/" className='inline-block relative z-30 '>
              <img id='border' className='border border-white/20' src='/hostelHub.png'/>
                  </a>
              


            </div>
            
         
            <div className=' col-span-1 m-1'></div>
            </div>
          </div>
        </section>
        </div>

        {/* Skills */}
        <div id='border' className='border-t border-b mt-8  border-surface '>
        <section id="skills" className="mt-16 scroll-mt-20 mb-4 sm:mt-24">
          <h2 className="font-mono text-sm uppercase tracking-wide text-muted">Skills</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <div className='max-w-content flex items-center border rounded-xl border-surface p-1 px-2' key={skill.name}>
                  <div className='w-5 h-5 mr-1.5'>
               <img  src={skill.link}/>
               </div><p >{skill.name}</p>
                </div>
             ))}
          </ul>
        </section>
        </div>


         {/* Skills */}
        <div className='border-t border-b mt-8  border-surface '>
        <section id="skills" className="mt-16 scroll-mt-20 mb-4 sm:mt-24">
          <h2 className="font-mono text-xs uppercase tracking-wide text-muted">Achievement</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            
          </ul>
        </section>
        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-surface pt-6 text-xs text-muted sm:mt-28">
          Built with Next.js and Tailwind CSS.
        </footer>
      </main>
      </div>
    </div>
    </div>
  );
}
