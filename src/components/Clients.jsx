import Reveal from "./Reveal";
import { motion } from "framer-motion";

import client1 from "../assets/clients/programmers-point.png";
import client2 from "../assets/clients/quest-glt.png";
import client3 from "../assets/clients/affimintus.png";

function Clients() {
  const clients = [
    { img: client1, name: "Programmers Point" },
    { img: client2, name: "Quest GLT" },
    { img: client3, name: "Affimintus Technologies" },
    // Duplicate for seamless loop
    { img: client1, name: "Programmers Point" },
    { img: client2, name: "Quest GLT" },
    { img: client3, name: "Affimintus Technologies" },
  ];

  return (
    <section 
      className="
        transition-colors duration-500
        /* Theme Responsive Backgrounds */
        bg-white dark:bg-[#08142B] 
        py-24 overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
            Trusted by Growing Businesses
          </h2>
          <p className="text-slate-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            We partner with companies across industries to build reliable and scalable technology solutions.
          </p>
        </Reveal>

        {/* The "Infinite Marquee" Container */}
        <div className="relative flex overflow-hidden">
          <motion.div 
            className="flex space-x-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 25 // Slightly slower for readability
            }}
          >
            {clients.map((client, index) => (
              <div
                key={index}
                className="
                  flex-shrink-0
                  w-64 h-32
                  flex items-center justify-center
                  /* Subtle styling to let logo pop */
                  bg-gray-50/50 dark:bg-white/5 
                  border border-gray-100 dark:border-white/10
                  rounded-2xl p-6
                  hover:bg-white dark:hover:bg-white/10
                  transition-all duration-300
                "
              >
                <img
                  src={client.img}
                  alt={client.name}
                  className="
                    h-14 w-auto
                    object-contain
                    /* Logos kept in original color */
                    transition-transform duration-300
                    hover:scale-110
                  "
                />
              </div>
            ))}
          </motion.div>

          {/* Premium Gradient Fades (Masking the edges) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-[#08142B] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-[#08142B] to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}

export default Clients;



// import Reveal from "./Reveal";

// import client1 from "../assets/clients/programmers-point.png";
// import client2 from "../assets/clients/quest-glt.png";
// import client3 from "../assets/clients/affimintus.png";

// function Clients() {
//   const clients = [
//     { img: client1, name: "Programmers Point" },
//     { img: client2, name: "Quest GLT" },
//     { img: client3, name: "Affimintus Technologies" },
//   ];

//   return (
//     <section className="
//       bg-[#08142B]
//       py-20
//       text-white
//     ">

//       <div className="max-w-7xl mx-auto px-6 text-center">

//         {/* Heading */}
//         <Reveal>
//           <h2 className="text-3xl font-bold mb-4">
//             Trusted by Growing Businesses
//           </h2>

//           <p className="text-gray-300 mb-16">
//             We partner with companies across industries
//             to build reliable and scalable technology solutions.
//           </p>
//         </Reveal>

//         {/* Logos */}
//         <div className="
//           grid md:grid-cols-3
//           gap-10
//           items-center
//         ">

//           {clients.map((client, index) => (
//             <div
//               key={index}
//               className="
//                 bg-white/5
//                 backdrop-blur-lg
//                 border border-white/10
//                 rounded-2xl
//                 p-10
//                 flex items-center justify-center
//                 hover:border-cyan-400/40
//                 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
//                 transition
//               "
//             >

//               <img
//                 src={client.img}
//                 alt={client.name}
//                 className="
//                   h-12
//                   object-contain
//                   grayscale
//                   opacity-70
//                   hover:grayscale-0
//                   hover:opacity-100
//                   transition duration-300
//                 "
//               />

//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

// export default Clients;
