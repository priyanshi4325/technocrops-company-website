import { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext"; // 1. Import the hook
import { HiMoon, HiSun } from "react-icons/hi"; // 2. Icons for the toggle

function Navbar() {
  const { isDark, toggleTheme } = useTheme(); // 3. Use the hook
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="
      fixed w-full top-0 z-50 transition-all duration-300
      /* Light Mode */ bg-white/90 text-slate-900 border-b border-gray-200
      /* Dark Mode */ dark:bg-[#08142B]/80 dark:text-white dark:border-white/10
      backdrop-blur-md
    ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
        >
          Technocorps
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-10 font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-colors duration-300 relative py-1 ${
                  activeSection === link.id 
                    ? "text-cyan-500 dark:text-cyan-400" 
                    : "text-gray-600 dark:text-gray-300 hover:text-cyan-400"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transition-transform duration-300 ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0'}`} />
              </button>
            ))}
          </div>

          {/* 4. THE THEME TOGGLE BUTTON */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-yellow-400 hover:scale-110 transition-all"
            aria-label="Toggle Theme"
          >
            {isDark ? <HiSun size={22} /> : <HiMoon size={22} />}
          </button>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 rounded-lg shadow-lg hover:shadow-cyan-500/40 transition text-white"
          >
            Get Quote
          </button>
        </div>

        {/* Hamburger */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-gray-800 dark:text-white text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#08142B] border-t border-gray-200 dark:border-white/10">
          <div className="flex flex-col text-center space-y-6 py-10 text-gray-600 dark:text-gray-300 font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`transition-colors ${activeSection === link.id ? "text-cyan-500 dark:text-cyan-400 font-bold" : ""}`}
              >
                {link.label}
              </button>
            ))}
            
            {/* Mobile Toggle Button */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center space-x-2 mx-auto text-sm uppercase tracking-widest"
            >
              <span>{isDark ? "Switch to Light" : "Switch to Dark"}</span>
              {isDark ? <HiSun className="text-yellow-400" /> : <HiMoon />}
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 rounded-lg mx-auto w-fit text-white"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;



// import { useState, useEffect } from "react";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");

//   // Define links once to keep code DRY
//   const navLinks = [
//     { id: "home", label: "Home" },
//     { id: "services", label: "Services" },
//     { id: "about", label: "About" },
//     { id: "team", label: "Team" },
//     { id: "contact", label: "Contact" },
//   ];

//   // Intersection Observer Logic
//   useEffect(() => {
//     const sections = document.querySelectorAll("section[id]");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       {
//         rootMargin: "-40% 0px -50% 0px", // Trigger when section is in the middle
//         threshold: 0,
//       }
//     );

//     sections.forEach((section) => observer.observe(section));
//     return () => observer.disconnect();
//   }, []);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="fixed w-full top-0 z-50 bg-[#08142B]/80 backdrop-blur-md border-b border-white/10">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
//         {/* Logo */}
//         <h1
//           onClick={() => scrollToSection("home")}
//           className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
//         >
//           Technocorps
//         </h1>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-10 text-gray-300 font-medium">
//           {navLinks.map((link) => (
//             <button
//               key={link.id}
//               onClick={() => scrollToSection(link.id)}
//               className={`transition-colors duration-300 relative py-1 ${
//                 activeSection === link.id ? "text-cyan-400" : "hover:text-cyan-400"
//               }`}
//             >
//               {link.label}
//               {/* Optional: Underline for active state */}
//               <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transition-transform duration-300 ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0'}`} />
//             </button>
//           ))}
//         </div>

//         {/* Desktop CTA */}
//         <button
//           onClick={() => scrollToSection("contact")}
//           className="hidden md:block bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 rounded-lg shadow-lg hover:shadow-cyan-500/40 transition text-white"
//         >
//           Get Quote
//         </button>

//         {/* Hamburger */}
//         <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-2xl">
//           {menuOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-[#08142B] border-t border-white/10">
//           <div className="flex flex-col text-center space-y-6 py-10 text-gray-300 font-medium">
//             {navLinks.map((link) => (
//               <button
//                 key={link.id}
//                 onClick={() => scrollToSection(link.id)}
//                 className={`transition-colors ${activeSection === link.id ? "text-cyan-400 font-bold" : ""}`}
//               >
//                 {link.label}
//               </button>
//             ))}
            
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 rounded-lg mx-auto w-fit text-white"
//             >
//               Get Quote
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;