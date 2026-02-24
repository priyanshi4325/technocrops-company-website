import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

function Services() {
  const services = [
    {
      title: "Web App Development",
      desc: "We design and build fast, secure web applications tailored to your business needs — from customer platforms to internal tools.",
      icon: "💻",
    },
    {
      title: "Blockchain Services",
      desc: "We develop blockchain-based solutions including smart contracts, decentralized apps, and secure trading platforms.",
      icon: "⛓️",
    },
    {
      title: "Software Testing",
      desc: "We ensure your software runs smoothly with manual, automated, performance, and security testing services.",
      icon: "🧪",
    },
    {
      title: "Staff Consultancy",
      desc: "We provide skilled developers and tech experts to support your projects and scale your team quickly.",
      icon: "👥",
    },
  ];

  return (
    <section 
      className="
        transition-colors duration-500
        /* Theme Gradients */
        bg-slate-50 dark:bg-gradient-to-b dark:from-[#08142B] dark:to-[#0B1C3D]
        py-28 
      " 
      id="services"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Services We Offer
            </h2>
            <p className="text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              We help businesses build, test, and scale digital products
              with the right technology and the right expertise.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-4 gap-10 md:gap-12">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.12}>
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="
                  group relative
                  /* Light Mode: Solid card with border */
                  bg-white border-gray-200 text-slate-900 shadow-sm
                  /* Dark Mode: Glassmorphism */
                  dark:bg-white/5 dark:border-white/10 dark:text-white dark:shadow-none
                  
                  backdrop-blur-lg border p-8 rounded-2xl text-center
                  hover:border-cyan-400/40 dark:hover:border-cyan-400/40
                  hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                  transition-all duration-300
                "
              >
                {/* Subtle internal glow for Dark Mode only */}
                <div className="hidden dark:block absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity" />

                {/* Icon Box */}
                <div className="
                  w-16 h-16 mx-auto mb-6
                  flex items-center justify-center rounded-xl
                  bg-gradient-to-br from-blue-600 to-cyan-500
                  text-2xl text-white shadow-lg
                  group-hover:rotate-6 transition-transform duration-300
                ">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;