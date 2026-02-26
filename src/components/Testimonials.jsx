import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
  const testimonials = [
    {
      name: "Gaurav Agrawal",
      role: "Director, Programmers Point",
      review: "TechnoCrops delivered our ERP project ahead of schedule with flawless execution. Their team felt like an extension of ours.",
    },
    {
      name: "Alok Agrawal",
      role: "Founder, Quest Global Technologies",
      review: "We hired TechnoCrops for a Web3 prototype and they absolutely nailed it. Their technical depth and UI/UX expertise stood out.",
    },
    {
      name: "William Smith",
      role: "Founder, GrayGrids",
      review: "Their developers helped us meet aggressive deadlines without compromising quality. It felt like a true tech partnership.",
    },
  ];

  return (
    <section 
      className="
        transition-colors duration-500
        /* Light Mode */ bg-slate-50 text-slate-900
        /* Dark Mode */ dark:bg-[#08142B] dark:text-white
        py-24
      "
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
          What Our Clients Say
        </h2>

        <p className="text-slate-600 dark:text-gray-300 mb-16">
          Real feedback from organizations we’ve partnered with.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 4000, // Slightly longer delay for readability
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="pb-14 testimonial-swiper" // Added class for dot styling
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="
                /* Light Mode Card */ 
                bg-white border-gray-200 shadow-sm text-slate-900
                /* Dark Mode Card */ 
                dark:bg-white/5 dark:border-white/10 dark:text-white
                
                border backdrop-blur-lg p-10 rounded-3xl 
                transition-all duration-300
                hover:border-blue-500/30 dark:hover:border-cyan-400/40
                mx-auto max-w-2xl
              ">
                {/* Quote Icon */}
                <div className="text-blue-600 dark:text-cyan-400 text-4xl mb-6">
                  ❝
                </div>

                {/* Review */}
                <p className="italic text-slate-700 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                  "{t.review}"
                </p>

                {/* Divider Line */}
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full opacity-50" />

                {/* Client Info */}
                <h4 className="font-bold text-slate-900 dark:text-white text-xl">
                  {t.name}
                </h4>

                <p className="text-sm font-medium text-blue-600 dark:text-gray-400">
                  {t.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Inline Style to fix Swiper pagination colors based on theme */}
      <style>{`
        .dark .swiper-pagination-bullet { background: white; opacity: 0.3; }
        .dark .swiper-pagination-bullet-active { background: #22d3ee; opacity: 1; }
        
        .swiper-pagination-bullet { background: #0b1c3d; opacity: 0.2; }
        .swiper-pagination-bullet-active { background: #2563eb; opacity: 1; }
        
        .testimonial-swiper { padding-bottom: 50px !important; }
      `}</style>
    </section>
  );
}

export default Testimonials;

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// function Testimonials() {
//     const testimonials = [
//         {
//             name: "Gaurav Agrawal",
//             role: "Director, Programmers Point",
//             review:
//                 "TechnoCrops delivered our ERP project ahead of schedule with flawless execution. Their team felt like an extension of ours.",
//         },
//         {
//             name: "Alok Agrawal",
//             role: "Founder, Quest Global Technologies",
//             review:
//                 "We hired TechnoCrops for a Web3 prototype and they absolutely nailed it. Their technical depth and UI/UX expertise stood out.",
//         },
//         {
//             name: "William Smith",
//             role: "Founder, GrayGrids",
//             review:
//                 "Their developers helped us meet aggressive deadlines without compromising quality. It felt like a true tech partnership.",
//         },
//     ];

//     return (
//         <section className="bg-[#08142B] py-24 text-white">

//             <div className="max-w-6xl mx-auto px-6 text-center">

//                 <h2 className="text-3xl font-bold mb-4">
//                     What Our Clients Say
//                 </h2>

//                 <p className="text-gray-300 mb-16">
//                     Real feedback from organizations we’ve partnered with.
//                 </p>

//                 <Swiper
//                     modules={[Pagination, Autoplay]}
//                     slidesPerView={1}
//                     spaceBetween={30}
//                     loop={true}
//                     autoplay={{
//                         delay: 3000,
//                         disableOnInteraction: false,
//                     }}
//                     pagination={{ clickable: true }}
//                 >

//                     {testimonials.map((t, index) => (
//                         <SwiperSlide key={index}>

//                             <div className="
//   bg-white/5
//   border border-white/10
//   backdrop-blur-lg
//   p-8
//   rounded-2xl
//   hover:border-cyan-400/40
//   hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
//   transition
// ">

//                                 {/* Quote Icon */}
//                                 <div className="text-cyan-400 text-3xl mb-4">
//                                     ❝
//                                 </div>

//                                 {/* Review */}
//                                 <p className="italic text-gray-300 mb-6 leading-relaxed">
//                                     {t.review}
//                                 </p>

//                                 {/* Client */}
//                                 <h4 className="font-semibold text-white">
//                                     {t.name}
//                                 </h4>

//                                 <p className="text-sm text-gray-400">
//                                     {t.role}
//                                 </p>

//                             </div>


//                         </SwiperSlide>
//                     ))}

//                 </Swiper>

//             </div>
//         </section>
//     );
// }

// export default Testimonials;
