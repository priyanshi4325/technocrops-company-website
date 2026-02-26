import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

function FAQ() {
  const faqs = [
    {
      question: "What services does Technocorps offer?",
      answer: "We provide end-to-end IT services including custom software development, web and mobile apps, cloud solutions, blockchain, AI integrations, testing, and staff augmentation.",
    },
    {
      question: "How do I get started with a project?",
      answer: "Reach out through our contact page or email us. We’ll schedule a discovery call to understand your goals and propose the right solution.",
    },
    {
      question: "Do you offer dedicated developers?",
      answer: "Yes. You can hire dedicated developers or scale your team through our flexible staff augmentation services.",
    },
    {
      question: "What makes Technocorps different?",
      answer: "We combine technical expertise with a partnership approach — focusing on transparency, innovation, and long-term success.",
    },
    {
      question: "Which industries do you serve?",
      answer: "We work across FinTech, EdTech, HealthTech, E-commerce, Real Estate, and emerging startups.",
    },
    {
      question: "Do you work internationally?",
      answer: "Yes. We serve global clients including India and the USA, working seamlessly across time zones.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndexes(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  // Helper to render FAQ items to avoid code duplication
  const renderFAQColumn = (items, startIndex) => (
    <div className="flex flex-col gap-4 flex-1">
      {items.map((faq, i) => {
        const index = startIndex + i;
        const isOpen = openIndexes.includes(index);

        return (
          <motion.div
            key={index}
            layout
            className={`
              transition-all duration-300 border rounded-xl overflow-hidden
              ${isOpen ? 'ring-1 ring-blue-500/50' : ''}
              /* Light Mode */ bg-white border-gray-200 
              /* Dark Mode */ dark:bg-white/5 dark:border-white/10
            `}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-5 flex justify-between items-center group"
            >
              <span className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                {faq.question}
              </span>
              <ChevronDown 
                size={20}
                className={`text-blue-600 dark:text-cyan-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-slate-600 dark:text-gray-300 text-sm leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <section className="
      transition-colors duration-500
      /* Light Mode */ bg-slate-50
      /* Dark Mode */ dark:bg-gradient-to-b dark:from-[#08142B] dark:to-[#0B1C3D]
      py-28
    " id="faq">
      <div className="max-w-7xl mx-auto px-6">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-blue-600 dark:text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-3">
              FAQ
            </p>
            <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-6">
          {renderFAQColumn(faqs.slice(0, 3), 0)}
          {renderFAQColumn(faqs.slice(3, 6), 3)}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

// import { useState } from "react";
// import { motion } from "framer-motion";

// function FAQ() {
//   const faqs = [
//     {
//       question: "What services does Technocorps offer?",
//       answer:
//         "We provide end-to-end IT services including custom software development, web and mobile apps, cloud solutions, blockchain, AI integrations, testing, and staff augmentation.",
//     },
//     {
//       question: "How do I get started with a project?",
//       answer:
//         "Reach out through our contact page or email us. We’ll schedule a discovery call to understand your goals and propose the right solution.",
//     },
//     {
//       question: "Do you offer dedicated developers?",
//       answer:
//         "Yes. You can hire dedicated developers or scale your team through our flexible staff augmentation services.",
//     },
//     {
//       question: "What makes Technocorps different?",
//       answer:
//         "We combine technical expertise with a partnership approach — focusing on transparency, innovation, and long-term success.",
//     },
//     {
//       question: "Which industries do you serve?",
//       answer:
//         "We work across FinTech, EdTech, HealthTech, E-commerce, Real Estate, and emerging startups.",
//     },
//     {
//       question: "Do you work internationally?",
//       answer:
//         "Yes. We serve global clients including India and the USA, working seamlessly across time zones.",
//     },
//   ];

//   const [openIndexes, setOpenIndexes] = useState([]);

//   const toggleFAQ = (index) => {
//     if (openIndexes.includes(index)) {
//       setOpenIndexes(openIndexes.filter((i) => i !== index));
//     } else {
//       setOpenIndexes([...openIndexes, index]);
//     }
//   };

//   return (
//     <section className="
//       bg-gradient-to-b
//       from-[#08142B]
//       to-[#0B1C3D]
//       py-28
//       text-white
//     ">

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-20">
//           <p className="text-cyan-400 font-medium mb-3">
//             FAQ
//           </p>

//           <h2 className="text-4xl font-bold mb-6">
//             Frequently Asked Questions
//           </h2>
//         </div>

//         {/* Two Columns */}
//         <div className="flex flex-col md:flex-row gap-6">

//           {/* Column 1 */}
//           <div className="flex flex-col gap-6 flex-1">

//             {faqs.slice(0, 3).map((faq, index) => {
//               const isOpen = openIndexes.includes(index);

//               return (
//                 <motion.div
//                   key={index}
//                   whileHover={{ y: -4 }}
//                   className="
//                     bg-white/5
//                     backdrop-blur-lg
//                     border border-white/10
//                     rounded-xl
//                     overflow-hidden
//                     hover:border-cyan-400/40
//                     transition
//                   "
//                 >

//                   {/* Question */}
//                   <button
//                     onClick={() => toggleFAQ(index)}
//                     className="
//                       w-full text-left
//                       px-6 py-5
//                       flex justify-between items-center
//                       font-medium
//                     "
//                   >
//                     {faq.question}

//                     <span
//                       className={`
//                         transform transition duration-300
//                         text-cyan-400
//                         ${isOpen ? "rotate-180" : ""}
//                       `}
//                     >
//                       ⌄
//                     </span>

//                   </button>

//                   {/* Answer */}
//                   <div
//                     className={`
//                       px-6 text-gray-300 text-sm leading-relaxed
//                       transition-all duration-500 ease-in-out overflow-hidden
//                       ${isOpen
//                         ? "max-h-96 pb-5 opacity-100"
//                         : "max-h-0 opacity-0"}
//                     `}
//                   >
//                     {faq.answer}
//                   </div>

//                 </motion.div>
//               );
//             })}

//           </div>

//           {/* Column 2 */}
//           <div className="flex flex-col gap-6 flex-1">

//             {faqs.slice(3, 6).map((faq, i) => {
//               const index = i + 3;
//               const isOpen = openIndexes.includes(index);

//               return (
//                 <motion.div
//                   key={index}
//                   whileHover={{ y: -4 }}
//                   className="
//                     bg-white/5
//                     backdrop-blur-lg
//                     border border-white/10
//                     rounded-xl
//                     overflow-hidden
//                     hover:border-cyan-400/40
//                     transition
//                   "
//                 >

//                   <button
//                     onClick={() => toggleFAQ(index)}
//                     className="
//                       w-full text-left
//                       px-6 py-5
//                       flex justify-between items-center
//                       font-medium
//                     "
//                   >
//                     {faq.question}

//                     <span
//                       className={`
//                         transform transition duration-300
//                         text-cyan-400
//                         ${isOpen ? "rotate-180" : ""}
//                       `}
//                     >
//                       ⌄
//                     </span>

//                   </button>

//                   <div
//                     className={`
//                       px-6 text-gray-300 text-sm leading-relaxed
//                       transition-all duration-500 ease-in-out overflow-hidden
//                       ${isOpen
//                         ? "max-h-96 pb-5 opacity-100"
//                         : "max-h-0 opacity-0"}
//                     `}
//                   >
//                     {faq.answer}
//                   </div>

//                 </motion.div>
//               );
//             })}

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default FAQ;
