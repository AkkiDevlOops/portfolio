export const darkmode=(settheme)=>{
     if (theme === "rgb(255, 255, 255)") {
      // setting Dark theme 
   settheme('darkMode');
   console.log('dark mode activated');
    }else{
      // setting Light theme 
      settheme('lightMode');
      console.log('Light mode activated')
    }
}