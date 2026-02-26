import { useState } from "react";
import { Mail, MapPin, Send, Phone } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/contact/submit/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess("Thank you for your interest. We'll contact you soon!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(data.error || "Oops! Something went wrong!");
      }
    } catch (err) {
      setError("Server error. Please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      className="
        transition-colors duration-500
        /* Light Mode */ bg-white text-slate-900
        /* Dark Mode */ dark:bg-gradient-to-b dark:from-[#08142B] dark:to-[#0B1C3D] dark:text-white
        py-28
      " 
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* LEFT CONTENT */}
            <div>
              <p className="text-blue-600 dark:text-cyan-400 font-semibold uppercase tracking-widest text-sm mb-4">
                Contact Us
              </p>

              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Let’s Build Something <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-cyan-400 dark:to-blue-500">
                  Great Together
                </span>
              </h2>

              <p className="text-slate-600 dark:text-gray-300 max-w-md text-lg mb-10">
                Tell us about your idea, project, or challenge — our team will get back to you within 24 hours.
              </p>

              {/* Contact Info Items */}
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-white/5 text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Our Location</h4>
                    <p className="text-slate-500 dark:text-gray-400 text-sm">
                      M5, First Floor, Shagun Tower, Vijay Nagar, Indore
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="p-3 rounded-lg bg-blue-50 dark:bg-white/5 text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Email Us</h4>
                    <p className="text-slate-500 dark:text-gray-400 text-sm">
                      info@technocorps.com<br />contact@technocorps.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="
              relative overflow-hidden
              bg-white dark:bg-white/5 
              border border-gray-100 dark:border-white/10
              p-8 md:p-10 rounded-3xl
              shadow-2xl dark:shadow-none
            ">
              {/* Subtle accent line for the card top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-500" />

              <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  {/* Name */}
                  <div className="relative">
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition-all text-slate-900 dark:text-white"
                    />
                  </div>

                  {/* Email & Phone Group */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition-all text-slate-900 dark:text-white"
                    />
                    <input
                      required
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition-all text-slate-900 dark:text-white"
                    />
                  </div>

                  {/* Message */}
                  <textarea
                    required
                    name="message"
                    rows="4"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition-all text-slate-900 dark:text-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`
                    w-full flex items-center justify-center gap-3
                    bg-gradient-to-r from-blue-600 to-cyan-500
                    text-white font-bold px-6 py-4 rounded-xl
                    hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95
                    ${loading ? "opacity-70 cursor-not-allowed" : ""}
                  `}
                >
                  {loading ? "Processing..." : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {success && <p className="text-green-500 font-medium text-center animate-pulse">{success}</p>}
                {error && <p className="text-red-500 font-medium text-center">{error}</p>}
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default ContactCTA;

// import { useState } from "react";
// function ContactCTA() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [loading,setLoading] = useState(false);
//   const [success,setSuccess] = useState("");
//   const [error,setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true)
//     setSuccess("")
//     setError("")

//     try {const res = await fetch(
//       "http://127.0.0.1:8000/api/contact/submit/",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       }
//     );

//     const data = await res.json();

//     if(res.ok){
//       setSuccess("Thank you for your interest. We'll contact you soon!")
//       setFormData({
//         name:"",
//         email:"",
//         phone:"",
//         message:""
//       })
//     }
//     else{
//       setError(data.error || "Oops! Something went wrong!")
//     }}

//     catch (err){
//       setError("Server error. Please try again later")
//     }

//     finally{
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="
//       bg-gradient-to-b
//       from-[#08142B]
//       to-[#0B1C3D]
//       py-28
//       text-white
//     " id="contact">

//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <div>

//           {/* Tag */}
//           <p className="text-cyan-400 uppercase tracking-wide mb-4">
//             Contact Us
//           </p>

//           {/* Heading */}
//           <h2 className="text-4xl font-bold mb-6 leading-tight">
//             Let’s Build Something
//             <br /> Great Together
//           </h2>

//           {/* Subtitle */}
//           <p className="text-gray-300 max-w-md">
//             Tell us about your idea, project, or challenge —
//             our team will get back to you within 24 hours.
//           </p>

//           {/* Contact Info */}
//           <div className="mt-10 space-y-8">

//             {/* Location */}
//             <div className="flex items-start gap-4">

//               <div className="text-cyan-400 text-xl">📍</div>

//               <div>
//                 <h4 className="font-semibold">
//                   Our Location
//                 </h4>

//                 <p className="text-gray-300 text-sm">
//                   M5, First Floor, Shagun Tower,
//                   Vijay Nagar, Indore
//                 </p>
//               </div>

//             </div>

//             {/* Email */}
//             <div className="flex items-start gap-4">

//               <div className="text-cyan-400 text-xl">✉️</div>

//               <div>
//                 <h4 className="font-semibold">
//                   Email Us
//                 </h4>

//                 <p className="text-gray-300 text-sm">
//                   info@technocorps.com <br />
//                   contact@technocorps.com
//                 </p>
//               </div>

//             </div>

//           </div>

//         </div>

//         {/* RIGHT FORM */}
//         <div className="
//           bg-white/5
//           backdrop-blur-lg
//           border border-white/10
//           p-10
//           rounded-2xl
//           shadow-lg
//         ">

//           <h3 className="text-2xl font-bold mb-8">
//             Send us a Message
//           </h3>

//           <form className="space-y-6" onSubmit={handleSubmit}>


//             {/* Name */}
//             <div>
//               <label className="text-sm text-gray-400">
//                 Full Name*
//               </label>

//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 className="
//                   w-full bg-transparent
//                   border-b border-white/20
//                   py-2
//                   focus:outline-none
//                   focus:border-cyan-400
//                   transition
//                 "
//                 name="name"
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="text-sm text-gray-400">
//                 Email*
//               </label>

//               <input
//                 type="email"
//                 placeholder="Your Email Address"
//                 value={formData.email}
//                 className="
//                   w-full bg-transparent
//                   border-b border-white/20
//                   py-2
//                   focus:outline-none
//                   focus:border-cyan-400
//                 "
//                 name="email"
//   onChange={handleChange}
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="text-sm text-gray-400">
//                 Phone*
//               </label>

//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 className="
//                   w-full bg-transparent
//                   border-b border-white/20
//                   py-2
//                   focus:outline-none
//                   focus:border-cyan-400
//                 "
//                 name="phone"
//   onChange={handleChange}
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label className="text-sm text-gray-400">
//                 Message*
//               </label>

//               <textarea
//                 rows="3"
//                 placeholder="Type your query here"
//                 value={formData.message}
//                 className="
//                   w-full bg-transparent
//                   border-b border-white/20
//                   py-2
//                   focus:outline-none
//                   focus:border-cyan-400
//                 "
//                 name="message"
//   onChange={handleChange}
//               />
//             </div>

//             {/* Button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className=
//                 {`w-full
//                 bg-gradient-to-r
//                 from-blue-600
//                 to-cyan-500
//                 text-white
//                 px-6 py-3
//                 rounded-lg
//                 shadow-lg
//                 hover:shadow-cyan-500/40
//                 transition
//                 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
              
//             >
//               {loading ? "Sending...": "Send message"}
//             </button>

//             {/* Success */}
// {success && (
//   <p className="text-green-400 text-sm mt-4 text-center">
//     {success}
//   </p>
// )}

// {/* Error */}
// {error && (
//   <p className="text-red-400 text-sm mt-4 text-center">
//     {error}
//   </p>
// )}

//           </form>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default ContactCTA;
