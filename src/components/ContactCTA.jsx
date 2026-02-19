import { useState } from "react";
function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "http://127.0.0.1:8000/api/contact/submit/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    alert(data.message);
  };

  return (
    <section className="
      bg-gradient-to-b
      from-[#08142B]
      to-[#0B1C3D]
      py-28
      text-white
    " id="contact">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Tag */}
          <p className="text-cyan-400 uppercase tracking-wide mb-4">
            Contact Us
          </p>

          {/* Heading */}
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Let’s Build Something
            <br /> Great Together
          </h2>

          {/* Subtitle */}
          <p className="text-gray-300 max-w-md">
            Tell us about your idea, project, or challenge —
            our team will get back to you within 24 hours.
          </p>

          {/* Contact Info */}
          <div className="mt-10 space-y-8">

            {/* Location */}
            <div className="flex items-start gap-4">

              <div className="text-cyan-400 text-xl">📍</div>

              <div>
                <h4 className="font-semibold">
                  Our Location
                </h4>

                <p className="text-gray-300 text-sm">
                  M5, First Floor, Shagun Tower,
                  Vijay Nagar, Indore
                </p>
              </div>

            </div>

            {/* Email */}
            <div className="flex items-start gap-4">

              <div className="text-cyan-400 text-xl">✉️</div>

              <div>
                <h4 className="font-semibold">
                  Email Us
                </h4>

                <p className="text-gray-300 text-sm">
                  info@technocorps.com <br />
                  contact@technocorps.com
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="
          bg-white/5
          backdrop-blur-lg
          border border-white/10
          p-10
          rounded-2xl
          shadow-lg
        ">

          <h3 className="text-2xl font-bold mb-8">
            Send us a Message
          </h3>

          <form className="space-y-6" onSubmit={handleSubmit}>


            {/* Name */}
            <div>
              <label className="text-sm text-gray-400">
                Full Name*
              </label>

              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full bg-transparent
                  border-b border-white/20
                  py-2
                  focus:outline-none
                  focus:border-cyan-400
                  transition
                "
                name="name"
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-400">
                Email*
              </label>

              <input
                type="email"
                placeholder="Your Email Address"
                className="
                  w-full bg-transparent
                  border-b border-white/20
                  py-2
                  focus:outline-none
                  focus:border-cyan-400
                "
                name="email"
  onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm text-gray-400">
                Phone*
              </label>

              <input
                type="text"
                placeholder="Phone Number"
                className="
                  w-full bg-transparent
                  border-b border-white/20
                  py-2
                  focus:outline-none
                  focus:border-cyan-400
                "
                name="phone"
  onChange={handleChange}
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-400">
                Message*
              </label>

              <textarea
                rows="3"
                placeholder="Type your query here"
                className="
                  w-full bg-transparent
                  border-b border-white/20
                  py-2
                  focus:outline-none
                  focus:border-cyan-400
                "
                name="message"
  onChange={handleChange}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                text-white
                px-6 py-3
                rounded-lg
                shadow-lg
                hover:shadow-cyan-500/40
                transition
              "
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default ContactCTA;
