"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const changeTheme=()=>{
    const theme = window.getComputedStyle(document.body).backgroundColor;
    const screenbg = document.getElementById('background');
    const text = document.getElementById('text');
    const gray = document.getElementById('gray');
    console.log(screenbg.className)
    console.log(theme);
    console.log(text);

    if (theme === "rgb(255, 255, 255)") {
      // setting Dark theme 
    document.body.style.backgroundColor = "rgb(11, 12, 14)";
    screenbg.classList.remove('bg-white');
    screenbg.classList.add('bg-ink');
    text.classList.remove('text-black');
    text.classList.add('text-paper');
    gray.classList.remove('text-black');
    gray.classList.add('text-muted');
    }else{
      // setting Light theme 
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    screenbg.classList.remove('bg-ink');
    screenbg.classList.add('bg-white');
    text.classList.remove('text-paper');
     text.classList.add('text-black');
     gray.classList.remove('text-muted');
    gray.classList.add('text-black');
    }
  }
  

  // avoid hydration mismatch — theme is unknown on the server
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-11 w-11" aria-hidden="true" />;

  const isDark = theme === "dark";

  return (
    <>
    <button
      type="button"
      onClick={() => {setTheme(isDark ? "light" : "dark"),changeTheme()}}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-paper"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
    
    </>
  );
}
