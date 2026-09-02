import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from '../components/ThemeProvider'
import Navbar from "../components/Navbar";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Your Name | Developer",
  description: "Developer portfolio.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  // prevents pinch-zoom weirdness on iOS while keeping accessibility zoom available
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en" className={`${mono.variable} ${sans.variable}`} suppressHydrationWarning>
      
      <body className="font-sans antialiased">
        
        <ThemeProvider>
         <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
          {children}</ThemeProvider>
        
      </body>
      
    </html>
   
  );
}
