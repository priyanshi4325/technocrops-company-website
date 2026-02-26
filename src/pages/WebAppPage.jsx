import React from 'react';
import { HashLink } from 'react-router-hash-link';

const WebAppPage = () => {

    const steps = [
  { title: "Discovery", desc: "We deep-dive into your business goals and user needs." },
  { title: "UI/UX Design", desc: "Wireframing and high-fidelity prototypes for seamless flow." },
  { title: "Agile Dev", desc: "Sprints with regular updates and transparent progress." },
  { title: "QA & Launch", desc: "Rigorous testing across browsers and deployment to the cloud." }
];

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-[#08142B] text-slate-900 dark:text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Custom Web App Development
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
          We build high-performance, scalable web applications designed to solve complex business challenges.
        </p>
      </section>

      {/* Tech Stack Grid */}
      <section className="bg-gray-50 dark:bg-white/5 py-16 border-y border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-semibold text-lg">
            <div className="p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:border-cyan-400 transition-colors">React / Next.js</div>
            <div className="p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:border-cyan-400 transition-colors">Node.js</div>
            <div className="p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:border-cyan-400 transition-colors">PostgreSQL / MongoDB</div>
            <div className="p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:border-cyan-400 transition-colors">AWS / Vercel</div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
  <div className="grid md:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="text-4xl font-bold mb-6">Built for Performance & Scale</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        We don't just build websites; we build engines for business growth. Our web apps are optimized for speed, passing Core Web Vitals with flying colors.
      </p>
      <ul className="space-y-4">
        {['Clean Code Architecture', 'Mobile-Responsive UI', 'Enterprise-Grade Security'].map(item => (
          <li key={item} className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center text-sm">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-400/10 p-8 rounded-3xl border border-white/10">
        {/* You can insert a graphic or a screenshot of a dashboard here */}
        <div className="aspect-video bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-white/20">
             <div className="h-6 bg-slate-700 w-full flex gap-2 px-3 items-center">
                <div className="w-2 h-2 rounded-full bg-red-500"/>
                <div className="w-2 h-2 rounded-full bg-yellow-500"/>
                <div className="w-2 h-2 rounded-full bg-green-500"/>
             </div>
             <div className="p-4 space-y-3">
                <div className="h-4 bg-slate-700 rounded w-3/4 animate-pulse"/>
                <div className="h-4 bg-slate-700 rounded w-1/2 animate-pulse"/>
                <div className="grid grid-cols-3 gap-2 pt-4">
                    <div className="h-16 bg-cyan-500/20 rounded-lg border border-cyan-500/30"/>
                    <div className="h-16 bg-blue-500/20 rounded-lg border border-blue-500/30"/>
                    <div className="h-16 bg-purple-500/20 rounded-lg border border-purple-500/30"/>
                </div>
             </div>
        </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Have a project in mind?</h2>
        <HashLink 
  smooth 
  to="/#contact"
  className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-cyan-500/50 transition transform hover:-translate-y-1 active:scale-95"
>
  Start Your Application
</HashLink>
      </section>
    </div>
  );
};

export default WebAppPage;