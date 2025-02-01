import React, { useEffect, useState } from "react";
import Intropage from "../Intropage";
import Navbar from "../Navbar";

const HomeScreen = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / scrollHeight;
      setScrollPosition(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const maxOpacity = 0.8;
  const minOpacity = 0.7; // Set a minimum brightness level
  const gradientOpacity = Math.max(minOpacity, Math.min(scrollPosition, maxOpacity));

  const backgroundOverlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${gradientOpacity})`, // Set the background color
    backgroundSize: 'cover',  // Ensures that the background covers the screen regardless of size
    backgroundPosition: 'center', // Centers the background
    backgroundAttachment: 'fixed', // Keeps the background fixed during scroll
    zIndex: -1,
  };

  return (
    <div className="relative min-h-screen text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background overlay that is responsive */}
      <div className="fixed inset-0" style={backgroundOverlayStyle}></div>
      
      {/* Content */}
      <div className="relative z-10">  
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <Intropage />
      </div>
    </div>
  );
};

export default HomeScreen;