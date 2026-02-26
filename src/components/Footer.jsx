import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="
      transition-colors duration-500
      /* Light Mode */ bg-slate-50 text-slate-900
      /* Dark Mode */ dark:bg-[#08142B] dark:text-white
      pt-20 pb-10
    ">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Column 1 — Company */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 tracking-tight">
              Techno<span className="text-blue-600 dark:text-cyan-400">Crops</span>
            </h3>
            <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
              We build digital products, automation systems, and scalable platforms
              that help businesses grow faster and operate smarter.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: <FaLinkedinIn />, color: "hover:bg-blue-600" },
                { icon: <FaTwitter />, color: "hover:bg-sky-400" },
                { icon: <FaFacebookF />, color: "hover:bg-blue-800" },
                { icon: <FaInstagram />, color: "hover:bg-pink-600" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center 
                    bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-gray-400 
                    transition-all duration-300 hover:text-white ${social.color}
                  `}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>


          {/* Column 2 — Services */}
          <div>
            <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Services</h4>
            <ul className="space-y-4 text-slate-500 dark:text-gray-400 text-sm">
              {["Web App Development", "Blockchain Solutions", "Software Testing", "Staff Augmentation", "AI Integrations"].map((item) => {

                // 1. Define your routes in a simple mapping object
                const routes = {
                  "Web App Development": "/services/web-app-development",
                  "Blockchain Solutions": "/services/blockchain-solutions",
                  "Software Testing": "/services/software-testing",
                  "Staff Augmentation": "/services/staff-augmentation",
                  "AI Integrations": "/services/ai-integrations",
                };

                // 2. Determine the path, default to "#" if not built yet
                const path = routes[item] || "#";

                return (
                  <li key={item}>
                    <Link
                      to={path}
                      className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-cyan-400">
                        →
                      </span>
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-4 text-slate-500 dark:text-gray-400 text-sm">
              {["About Us", "Services", "Contact"].map((item) => {
                // Map the text to your section IDs on the Home page
                const sectionMap = {
                  "About Us": "about",
                  "Services": "services",
                  "Contact": "contact",
                };

                return (
                  <li key={item}>
                    <HashLink
                      smooth
                      to={`/#${sectionMap[item]}`}
                      className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-cyan-400">
                        →
                      </span>
                      {item}
                    </HashLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Contact</h4>
            <ul className="space-y-4 text-slate-500 dark:text-gray-400 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-blue-600 dark:text-cyan-400 shrink-0" />
                <span>M5, First Floor, Shagun Tower, Vijay Nagar, Indore</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-blue-600 dark:text-cyan-400 shrink-0" />
                <span>info@technocorps.com</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-blue-600 dark:text-cyan-400 shrink-0" />
                <span>+91 99999 99999</span>
              </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent mb-8"></div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-400 dark:text-gray-500 text-xs gap-4">
          <p>© {currentYear} TechnoCrops. All rights reserved.</p>

          <div className="flex gap-8">
            <Link
              to="/privacy-policy"
              className="hover:text-blue-600 dark:hover:text-white transition-colors duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="hover:text-blue-600 dark:hover:text-white transition-colors duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;


// function Footer() {
//   return (
//     <footer className="
//       bg-[#08142B]
//       text-white
//       pt-20
//       pb-10
//     ">

//       <div className="max-w-7xl mx-auto px-6">

//         {/* TOP GRID */}
//         <div className="grid md:grid-cols-4 gap-12 mb-16">

//           {/* Column 1 — Company */}
//           <div>

//             <h3 className="text-2xl font-bold mb-4">
//               TechnoCrops
//             </h3>

//             <p className="text-gray-400 text-sm leading-relaxed">
//               We build digital products, automation systems,
//               and scalable platforms that help businesses
//               grow faster and operate smarter.
//             </p>

//             {/* Social Icons */}
//             <div className="flex gap-4 mt-6 text-gray-400">

//               <i className="ri-linkedin-fill hover:text-cyan-400 cursor-pointer"></i>
//               <i className="ri-twitter-fill hover:text-cyan-400 cursor-pointer"></i>
//               <i className="ri-facebook-fill hover:text-cyan-400 cursor-pointer"></i>
//               <i className="ri-instagram-fill hover:text-cyan-400 cursor-pointer"></i>

//             </div>

//           </div>

//           {/* Column 2 — Services */}
//           <div>

//             <h4 className="font-semibold mb-4">
//               Services
//             </h4>

//             <ul className="space-y-3 text-gray-400 text-sm">

//               <li className="hover:text-white cursor-pointer">
//                 Web App Development
//               </li>

//               <li className="hover:text-white cursor-pointer">
//                 Blockchain Solutions
//               </li>

//               <li className="hover:text-white cursor-pointer">
//                 Software Testing
//               </li>

//               <li className="hover:text-white cursor-pointer">
//                 Staff Augmentation
//               </li>

//               <li className="hover:text-white cursor-pointer">
//                 AI Integrations
//               </li>

//             </ul>

//           </div>

//           {/* Column 3 — Quick Links */}
//           <div>

//             <h4 className="font-semibold mb-4">
//               Quick Links
//             </h4>

//             <ul className="space-y-3 text-gray-400 text-sm">

//               <li className="hover:text-white cursor-pointer">
//                 About Us
//               </li>

//               <li className="hover:text-white cursor-pointer">
//                 Services
//               </li>

//               <li className="hover:text-white cursor-pointer">
//                 Careers
//               </li>

//               <li className="hover:text-white cursor-pointer">
//                 Blog
//               </li>

//               <li className="hover:text-white cursor-pointer">
//                 Contact
//               </li>

//             </ul>

//           </div>

//           {/* Column 4 — Contact */}
//           <div>

//             <h4 className="font-semibold mb-4">
//               Contact
//             </h4>

//             <ul className="space-y-4 text-gray-400 text-sm">

//               <li>
//                 📍 M5, First Floor, Shagun Tower,
//                 Vijay Nagar, Indore
//               </li>

//               <li>
//                 ✉️ info@technocorps.com
//               </li>

//               <li>
//                 ☎️ +91 99999 99999
//               </li>

//             </ul>

//           </div>

//         </div>

//         {/* DIVIDER */}
//         <div className="
//           h-px
//           bg-gradient-to-r
//           from-transparent
//           via-white/20
//           to-transparent
//           mb-8
//         "></div>

//         {/* BOTTOM BAR */}
//         <div className="
//           flex flex-col md:flex-row
//           justify-between
//           items-center
//           text-gray-500
//           text-sm
//           gap-4
//         ">

//           <p>
//             © {new Date().getFullYear()} TechnoCrops.
//             All rights reserved.
//           </p>

//           <div className="flex gap-6">

//             <span className="hover:text-white cursor-pointer">
//               Privacy Policy
//             </span>

//             <span className="hover:text-white cursor-pointer">
//               Terms & Conditions
//             </span>

//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// }

// export default Footer;
