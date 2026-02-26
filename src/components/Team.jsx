import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import ScrollReveal from "../components/ScrollReveal"; // Ensure this path matches your project

function Team() {
  const team = [
    {
      name: "Rajat Agrawal",
      role: "Founder & Director",
      desc: "Blockchain, Web3 Development & R&D Head",
      img: "https://st4.depositphotos.com/9998432/22597/v/1600/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
    },
    {
      name: "Tanveer Ahmed",
      role: "Chief Technical Operations",
      desc: "Oracle Certified Database Administrator",
      img: "https://st4.depositphotos.com/9998432/22597/v/1600/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
    },
    {
      name: "Chetan Sawaldekar",
      role: "Chief of Staff",
      desc: "Data Science, Data Analytics & AI/ML Expert",
      img: "https://st4.depositphotos.com/9998432/22597/v/1600/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
    },
    {
      name: "Chhaya Bundela",
      role: "Head of Talent Strategy",
      desc: "Staff Augmentation & Delivery Expert",
      img: "https://st4.depositphotos.com/9998432/22597/v/1600/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
    },
  ];

  return (
    <section 
      className="
        transition-colors duration-500
        bg-slate-50 text-slate-900
        dark:bg-gradient-to-b dark:from-[#08142B] dark:to-[#0B1C3D] dark:text-white
        py-28
      " 
      id="team"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Heading with Reveal */}
        <ScrollReveal>
          <p className="text-blue-600 dark:text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-3">
            Our Team
          </p>
          <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
            Meet The Leadership
          </h2>
          <p className="text-slate-600 dark:text-gray-300 max-w-2xl mx-auto mb-20 leading-relaxed">
            Our leadership team brings deep technical expertise,
            industry experience, and a shared vision to help
            businesses build and scale impactful digital products.
          </p>
        </ScrollReveal>

        {/* Team Grid */}
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 0.15} // This creates the staggered "wave" effect
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="
                  group relative
                  bg-white border-gray-200 shadow-sm
                  dark:bg-white/5 dark:border-white/10 dark:shadow-none
                  backdrop-blur-lg border rounded-2xl p-8 transition-all duration-300
                  hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                "
              >
                {/* Avatar Container */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="
                    absolute inset-0 rounded-full
                    bg-gradient-to-br from-cyan-400 to-blue-500
                    blur-md opacity-0 group-hover:opacity-60
                    transition-opacity duration-300
                  "></div>

                  <img
                    src={member.img}
                    alt={member.name}
                    className="
                      relative w-full h-full object-cover
                      rounded-full border-2 border-transparent
                      group-hover:border-white/20
                      grayscale group-hover:grayscale-0
                      transition-all duration-500
                    "
                  />
                </div>

                <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">
                  {member.name}
                </h3>

                <p className="text-blue-600 dark:text-cyan-400 text-sm font-medium mb-3">
                  {member.role}
                </p>

                <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                  {member.desc}
                </p>

                {/* Social Icons */}
                <div className="
                  flex justify-center space-x-5
                  text-slate-400 dark:text-gray-500
                  opacity-0 group-hover:opacity-100
                  transform translate-y-2 group-hover:translate-y-0
                  transition-all duration-300
                ">
                  <a href="#" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                    <FaLinkedinIn size={18} />
                  </a>
                  <a href="#" className="hover:text-blue-400 dark:hover:text-cyan-400 transition-colors">
                    <FaTwitter size={18} />
                  </a>
                  <a href="#" className="hover:text-blue-800 dark:hover:text-cyan-400 transition-colors">
                    <FaFacebookF size={18} />
                  </a>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;


// import { motion } from "framer-motion";

// function Team() {
//   const team = [
//     {
//       name: "Rajat Agrawal",
//       role: "Founder & Director",
//       desc: "Blockchain, Web3 Development & R&D Head",
//       img: "https://st4.depositphotos.com/9998432/22597/v/1600/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
//     },
//     {
//       name: "Tanveer Ahmed",
//       role: "Chief Technical Operations",
//       desc: "Oracle Certified Database Administrator",
//       img: "https://st4.depositphotos.com/9998432/22597/v/1600/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
//     },
//     {
//       name: "Chetan Sawaldekar",
//       role: "Chief of Staff",
//       desc: "Data Science & AI/ML Expert",
//       img: "https://st4.depositphotos.com/9998432/22597/v/1600/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
//     },
//     {
//       name: "Chhaya Bundela",
//       role: "Head of Talent Strategy",
//       desc: "Staff Augmentation & Delivery Expert",
//       img: "https://st4.depositphotos.com/9998432/22597/v/1600/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
//     },
//   ];

//   return (
//     <section className="
//       bg-gradient-to-b
//       from-[#08142B]
//       to-[#0B1C3D]
//       py-28
//       text-white
//     " id="team">

//       <div className="max-w-7xl mx-auto px-6 text-center">

//         {/* Section Tag */}
//         <p className="text-cyan-400 font-medium mb-3">
//           Our Team
//         </p>

//         {/* Heading */}
//         <h2 className="text-4xl font-bold mb-6">
//           Meet The Leadership
//         </h2>

//         {/* Subtitle */}
//         <p className="text-gray-300 max-w-2xl mx-auto mb-20">
//           Our leadership team brings deep technical expertise,
//           industry experience, and a shared vision to help
//           businesses build and scale impactful digital products.
//         </p>

//         {/* Team Grid */}
//         <div className="grid md:grid-cols-4 gap-12">

//           {team.map((member, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ y: -10 }}
//               transition={{ type: "spring", stiffness: 200 }}
//               className="
//                 bg-white/5
//                 backdrop-blur-lg
//                 border border-white/10
//                 rounded-2xl
//                 p-8
//                 group
//                 hover:border-cyan-400/40
//                 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
//                 transition
//               "
//             >

//               {/* Avatar */}
//               <div className="relative w-32 h-32 mx-auto mb-6">

//                 {/* Glow Ring */}
//                 <div className="
//                   absolute inset-0
//                   rounded-full
//                   bg-gradient-to-br
//                   from-cyan-400
//                   to-blue-500
//                   blur-md
//                   opacity-0
//                   group-hover:opacity-60
//                   transition
//                 "></div>

//                 <img
//                   src={member.img}
//                   alt={member.name}
//                   className="
//                     relative
//                     w-full h-full object-cover
//                     rounded-full
//                     grayscale
//                     group-hover:grayscale-0
//                     group-hover:scale-105
//                     transition duration-300
//                   "
//                 />

//               </div>

//               {/* Name */}
//               <h3 className="text-lg font-semibold">
//                 {member.name}
//               </h3>

//               {/* Role */}
//               <p className="text-cyan-400 text-sm mb-2">
//                 {member.role}
//               </p>

//               {/* Description */}
//               <p className="text-gray-300 text-sm leading-relaxed mb-4">
//                 {member.desc}
//               </p>

//               {/* Social Icons */}
//               <div className="
//                 flex justify-center space-x-4
//                 text-gray-400
//                 opacity-0
//                 group-hover:opacity-100
//                 transition
//               ">

//                 <i className="ri-linkedin-fill hover:text-cyan-400 cursor-pointer"></i>
//                 <i className="ri-twitter-fill hover:text-cyan-400 cursor-pointer"></i>
//                 <i className="ri-facebook-fill hover:text-cyan-400 cursor-pointer"></i>

//               </div>

//             </motion.div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

// export default Team;
