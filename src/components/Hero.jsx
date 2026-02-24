import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "../assets/lottie/hero-animation.json";
import ScrollReveal from "../components/ScrollReveal";

function Hero() {
  return (
    <section 
      className="
        relative 
        transition-colors duration-500
        /* Light Mode */ bg-slate-50
        /* Dark Mode */ dark:bg-gradient-to-br dark:from-[#08142B] dark:via-[#0B1C3D] dark:to-[#1E3A8A]
        py-28 overflow-hidden
      " 
      id="home"
    >
      {/* Dynamic Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="
          absolute top-20 left-10 
          w-72 h-72 
          bg-blue-500/10 dark:bg-blue-500/20 
          blur-3xl rounded-full
        "></div>
        <div className="
          absolute bottom-10 right-10 
          w-96 h-96 
          bg-cyan-400/10 dark:bg-cyan-400/20 
          blur-3xl rounded-full
        "></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="
              text-5xl font-bold 
              /* Theme Colors */ text-slate-900 dark:text-white 
              mb-6 leading-[1.15]
            "
          >
            Technology That
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
              Helps Your Business Grow
            </span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="
              /* Theme Colors */ text-slate-600 dark:text-gray-300 
              mb-8 leading-relaxed md:leading-8 text-lg max-w-xl
            "
          >
            We build websites, apps, and automation tools
            that help you reach more customers,
            save time, and scale your business with ease.
          </motion.p>

          <motion.button
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="
              bg-gradient-to-r from-blue-600 to-cyan-500 
              text-white px-8 py-4 rounded-lg shadow-lg 
              hover:shadow-blue-500/40 dark:hover:shadow-cyan-500/40 
              transition-all transform hover:-translate-y-1
            "
          >
            Explore Services
          </motion.button>
        </motion.div>

        {/* Right Visual */}
        <div className="relative">
          {/* Glow Behind Lottie */}
          <div className="
            absolute inset-0 
            bg-cyan-500/10 dark:bg-cyan-500/20 
            blur-3xl rounded-full -z-10
          "></div>

          <ScrollReveal delay={0.4} y={0}>
            <Lottie
              animationData={heroAnimation}
              loop={true}
              className="
                h-[480px] 
                /* Adapt drop shadow to theme */
                drop-shadow-[0_0_30px_rgba(59,130,246,0.2)] 
                dark:drop-shadow-[0_0_40px_rgba(34,211,238,0.35)] 
                hover:scale-[1.02] transition duration-500
              "
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default Hero;

// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import heroAnimation from "../assets/lottie/hero-animation.json";
// import ScrollReveal from "../components/ScrollReveal";

// function Hero() {
//   return (
//     <section className="
//   relative
//   bg-gradient-to-br
//   from-[#08142B]
//   via-[#0B1C3D]
//   to-[#1E3A8A]
//   py-28
//   overflow-hidden
// " id="home">

//   <div className="absolute inset-0 -z-10">

//   <div className="
//     absolute top-20 left-10
//     w-72 h-72
//     bg-blue-500/20
//     blur-3xl
//     rounded-full
//   "></div>

//   <div className="
//     absolute bottom-10 right-10
//     w-96 h-96
//     bg-cyan-400/20
//     blur-3xl
//     rounded-full
//   "></div>

// </div>

//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

//         <motion.div
//   initial="hidden"
//   animate="visible"
//   variants={{
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   }}
// >
//   <motion.h1
//   variants={{
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0 },
//   }}
//   transition={{ duration: 0.6 }}
//   className="
//     text-5xl
//     font-bold
//     text-white
//     mb-6
//     leading-[1.15]
//   "
// >
//   Technology That
//   <br />

//   <span className="
//     bg-gradient-to-r
//     from-cyan-400
//     to-blue-500
//     bg-clip-text
//     text-transparent
//   ">
//     Helps Your Business Grow
//   </span>
// </motion.h1>

// <motion.p
//   variants={{
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0 },
//   }}
//   transition={{ duration: 0.6 }}
//   className="
//     text-gray-300
//     mb-8
//     leading-relaxed md:leading-8
//     text-lg
//     max-w-xl
//   "
// >
//   We build websites, apps, and automation tools
//   that help you reach more customers,
//   save time, and scale your business with ease.
// </motion.p>

//   <motion.button
//     variants={{
//       hidden: { opacity: 0, y: 40 },
//       visible: { opacity: 1, y: 0 },
//     }}
//     transition={{ duration: 0.6 }}
//     className="
//   bg-gradient-to-r
//   from-blue-600
//   to-cyan-500
//   text-white
//   px-6 py-3
//   rounded-lg
//   shadow-lg
//   hover:shadow-cyan-500/40
//   transition
// "
//   >
//     Explore Services
//   </motion.button>
// </motion.div>

//         {/* Right Visual */}
//         <div className="relative">

//   {/* Glow Behind */}
//   <div className="
//     absolute inset-0
//     bg-cyan-500/20
//     blur-3xl
//     rounded-full
//     -z-10
//   "></div>

//   <ScrollReveal delay={0.4} y={0}>
//   <Lottie
//     animationData={heroAnimation}
//     loop={true}
//     className="h-[480px] drop-shadow-[0_0_40px_rgba(34,211,238,0.35)] hover:scale-[1.02] transition duration-500"
//   />
// </ScrollReveal>

// </div>

//       </div>
//     </section>
//   );
// }

// export default Hero;
