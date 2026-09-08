  export let currTheme = true;
  
  export const darkMode=()=> {


    const theme = window.getComputedStyle(document.body).backgroundColor;
    const screenbg = document.getElementById('background');
    const text = document.getElementById('text');
    const gray = document.getElementById('gray');
    const border = document.getElementById('border');
  
    

    if (theme === "rgb(255, 255, 255)") {
      // setting Dark theme 
      currTheme = true;
    document.body.style.backgroundColor = "rgb(11, 12, 14)";
    screenbg.classList.remove('bg-white');
    screenbg.classList.add('bg-ink');
    text.classList.remove('text-black');
    text.classList.add('text-paper');
    gray.classList.remove('text-black');
    gray.classList.add('text-muted');
    border.classList.remove('border-black');
    border.classList.add('border-white/20')
   

    

    
    }else{
      // setting Light theme 
       currTheme = false;
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    screenbg.classList.remove('bg-ink');
    screenbg.classList.add('bg-white');
    text.classList.remove('text-paper');
     text.classList.add('text-black');
     gray.classList.remove('text-muted');
    gray.classList.add('text-black');
    border.classList.remove('border-white/20');
    border.classList.add('border-black');
  
        
    }
  };

