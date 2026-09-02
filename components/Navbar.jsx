import React from 'react';
import CommandMenu from './CommandMenu';
import ThemeToggle from './ThemeToggle';
import { profile } from '../data/portfolio';
export default function Navbar(){
  return (
    <div className=' top-0 border-b border-white/20 mx-auto max-w-content'>
         <header className="flex sticky top-0 max-w-content z-40  border-surface bg-ink/90 px-5 py-3 backdrop-blur sm:px-8">
         <div className='col-span-2 flex items-center justify-center'>
           <span className="font-mono m-2  text-paper"><h1 className='md:text-4xl text-sm'>{profile.name}</h1></span>
           </div>
           < div className='col-span-5'></div>
           <div className="flex items-center gap-5 justify-center col-span-3">
             <CommandMenu />
             <ThemeToggle />
           </div>
         </header>
         </div>
  )
}
