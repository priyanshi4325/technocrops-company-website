import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import ScrollReveal from "../components/ScrollReveal";

function Stats() {
  const stats = [
    { number: 250, suffix: "+", label: "Digital Products Delivered", icon: "🚀" },
    { number: 120, suffix: "+", label: "Global Clients Served", icon: "🌍" },
    { number: 50, suffix: "+", label: "Skilled Tech Professionals", icon: "👨‍💻" },
    { number: 10, suffix: "+", label: "Years of Industry Experience", icon: "🏆" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="
        transition-colors duration-500
        /* Light Mode */ bg-gradient-to-r from-slate-50 via-gray-100 to-slate-200 text-slate-900
        /* Dark Mode */ dark:bg-gradient-to-r dark:from-[#08142B] dark:via-[#0B1C3D] dark:to-[#142A66] dark:text-white
        py-24
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Our Impact in Numbers
            </h2>
            <p className="text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              We measure our success by the value we deliver to clients worldwide.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.12}>
              <div
                className="
                  group relative overflow-hidden
                  /* Light Mode Card */ bg-white border-gray-200 shadow-lg text-slate-900
                  /* Dark Mode Card */ dark:bg-white/5 dark:border-white/10 dark:text-white dark:shadow-none
                  backdrop-blur-lg border rounded-2xl p-8 
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                "
              >
                {/* Subtle Hover Glow - Dark Mode Only */}
                <div className="hidden dark:block absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon */}
                <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>

                {/* Counter */}
                <h3 className="text-4xl font-bold mb-2 text-blue-600 dark:text-cyan-400">
                  {inView && (
                    <CountUp
                      end={stat.number}
                      duration={2 + index * 0.3}
                      suffix={stat.suffix}
                      useEasing
                      separator=","
                    />
                  )}
                </h3>

                {/* Label */}
                <p className="text-slate-600 dark:text-gray-300 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;



// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";
// import ScrollReveal from "../components/ScrollReveal";

// function Stats() {
//   const stats = [
//     {
//       number: 250,
//       suffix: "+",
//       label: "Digital Products Delivered",
//       icon: "🚀",
//     },
//     {
//       number: 120,
//       suffix: "+",
//       label: "Global Clients Served",
//       icon: "🌍",
//     },
//     {
//       number: 50,
//       suffix: "+",
//       label: "Skilled Tech Professionals",
//       icon: "👨‍💻",
//     },
//     {
//       number: 10,
//       suffix: "+",
//       label: "Years of Industry Experience",
//       icon: "🏆",
//     },
//   ];

//   // Detect section visibility
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });

//   return (
//     <section
//       ref={ref}
//       className="
//         bg-gradient-to-r
//         from-[#08142B]
//         via-[#0B1C3D]
//         to-[#142A66]
//         py-24
//         text-white
//       "
//     >
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Section Heading */}
//         <ScrollReveal>
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">
//               Our Impact in Numbers
//             </h2>
//             <p className="text-gray-300 max-w-2xl mx-auto">
//               We measure our success by the value we deliver to clients worldwide.
//             </p>
//           </div>
//         </ScrollReveal>

//         {/* Stats Grid */}
//         <div className="grid md:grid-cols-4 gap-10 text-center">
//           {stats.map((stat, index) => (
//             <ScrollReveal key={index} delay={index * 0.12}>
//               <div
//                 className="
//                   group
//                   bg-white/5
//                   backdrop-blur-lg
//                   border border-white/10
//                   rounded-2xl
//                   p-8
//                   transition duration-300
//                   hover:-translate-y-2
//                   hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
//                 "
//               >
//                 {/* Icon */}
//                 <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110">
//                   {stat.icon}
//                 </div>

//                 {/* Counter */}
//                 <h3 className="text-4xl font-bold mb-2 text-cyan-400">
//                   {inView && (
//                     <CountUp
//                       end={stat.number}
//                       duration={2 + index * 0.3}
//                       suffix={stat.suffix}
//                       useEasing
//                       separator=","
//                     />
//                   )}
//                 </h3>

//                 {/* Label */}
//                 <p className="text-gray-300 text-sm">
//                   {stat.label}
//                 </p>
//               </div>
//             </ScrollReveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Stats;
