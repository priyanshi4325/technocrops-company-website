import { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext"; 
import { HiMoon, HiSun, HiMenu, HiX } from "react-icons/hi"; 
import { Globe } from "lucide-react";
import { NavHashLink } from 'react-router-hash-link';

function Navbar() {
  const { isDark, toggleTheme } = useTheme(); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", label: "Home", path: "/#home" },
    { id: "services", label: "Services", path: "/#services" },
    { id: "about", label: "About", path: "/#about" },
    { id: "team", label: "Team", path: "/#team" },
    { id: "contact", label: "Contact", path: "/#contact" },
  ];

  useEffect(() => {
    // 1. Intersection Observer for Scroll Spy (Only runs on Home Page)
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

    // 2. Google Translate Initialization
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-white/90 text-slate-900 border-b border-gray-200 dark:bg-[#08142B]/80 dark:text-white dark:border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <NavHashLink 
          smooth 
          to="/#home" 
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
        >
          TechnoCrops
        </NavHashLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-8 font-medium">
            {navLinks.map((link) => (
              <NavHashLink
                key={link.id}
                smooth
                to={link.path}
                className={`transition-colors duration-300 relative py-1 ${
                  activeSection === link.id ? "text-blue-600 dark:text-cyan-400" : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400"
                }`}
              >
                {link.label}
                {/* Active Indicator Line */}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transition-transform duration-300 ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0'}`} />
              </NavHashLink>
            ))}
          </div>

          {/* Desktop Translate Widget */}
          <div className={`relative flex items-center justify-center w-10 h-10 rounded-xl border transition-all cursor-pointer overflow-hidden ${isDark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-white border-gray-200 shadow-sm hover:bg-gray-50"}`}>
            <Globe size={20} className="text-gray-500 dark:text-gray-400 z-0" />
            <div id="google_translate_element" className="absolute inset-0 z-10 opacity-0 cursor-pointer scale-[3] origin-center" />
          </div>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="p-2 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-yellow-400 hover:scale-110 transition-all">
            {isDark ? <HiSun size={22} /> : <HiMoon size={22} />}
          </button>

          <NavHashLink smooth to="/#contact" className="bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
            Get Quote
          </NavHashLink>
        </div>

        {/* Hamburger Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-800 dark:text-white text-2xl p-2">
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#08142B] border-t border-gray-200 dark:border-white/10 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col text-center space-y-6 py-10 px-6">
            {navLinks.map((link) => (
              <NavHashLink 
                key={link.id} 
                smooth 
                to={link.path} 
                onClick={() => setMenuOpen(false)}
                className={`text-lg transition-colors ${activeSection === link.id ? "text-cyan-500 font-bold" : "text-gray-600 dark:text-gray-300"}`}
              >
                {link.label}
              </NavHashLink>
            ))}
            
            {/* Mobile Actions */}
            <div className="flex flex-col items-center gap-4 pt-4 border-t border-gray-100 dark:border-white/5">
              <button onClick={toggleTheme} className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-gray-100 dark:bg-white/5 w-full max-w-[240px]">
                <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
                {isDark ? <HiSun className="text-yellow-400" /> : <HiMoon />}
              </button>
              
              <NavHashLink 
                smooth 
                to="/#contact" 
                onClick={() => setMenuOpen(false)}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 rounded-lg w-full max-w-[240px] text-white font-bold"
              >
                Get Quote
              </NavHashLink>
            </div>
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