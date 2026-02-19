import Reveal from "./Reveal";
import team from "../assets/about/about-team.jpg";
import coding from "../assets/about/about-coding.jpg";
import testing from "../assets/about/about-testing.jpg";
import planning from "../assets/about/about-planning.jpg";

function About() {
  return (
    <section className="bg-white py-28 text-slate-800" id="about">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <Reveal>
          <div>

            <span className="
              bg-blue-600
              text-white
              px-4 py-1
              rounded-md
              text-sm
              font-medium
            ">
              About Us
            </span>

            <h2 className="
              text-4xl
              font-bold
              mt-6
              mb-6
              leading-snug
            ">
              Driving Digital Innovation &
              Expert Talent Solutions with expertise
            </h2>

            <p className="text-gray-600 mb-5 leading-relaxed">
              TechnoCrops is a full-service IT solutions and consultancy
              company helping businesses build and scale digital products.
            </p>

            <p className="text-gray-600 mb-5 leading-relaxed">
              We specialize in web app development, cloud solutions,
              AI, blockchain, and modern software platforms.
              Our team designs secure, scalable applications
              tailored to real business needs.
            </p>

            <p className="text-gray-600 mb-5 leading-relaxed">
              Along with end-to-end product development,
              we also provide staff augmentation services —
              helping companies extend their tech teams
              with skilled developers and specialists.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              With teams based in Indore, Bangalore, and the USA,
              we deliver technology solutions globally —
              supporting startups, enterprises, and growing businesses.
            </p>

            <button className="
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              text-white
              px-6 py-3
              rounded-lg
              shadow-lg
              hover:shadow-cyan-500/40
              transition
            ">
              Learn More
            </button>

          </div>
        </Reveal>

        {/* Right Visual */}
        <Reveal>
          <div className="grid grid-cols-2 gap-6">

  <img
    src={team}
    alt="Team collaboration"
    className="h-44 w-full object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
  />

  <img
    src={coding}
    alt="Software development"
    className="h-44 w-full object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
  />

  <img
    src={testing}
    alt="Software testing"
    className="h-44 w-full object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
  />

  <img
    src={planning}
    alt="Project planning"
    className="h-44 w-full object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-500"
  />

</div>
        </Reveal>

      </div>
    </section>
  );
}

export default About;
