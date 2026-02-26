import React from 'react';
import { HashLink } from 'react-router-hash-link';

const BlockchainPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-[#060D1D] text-slate-900 dark:text-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-1 mb-6 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-sm font-bold tracking-widest uppercase">
          Decentralized Excellence
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Blockchain & Web3 Solutions
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
          From Smart Contracts to Custom Blockchains, we build transparent and secure ecosystems for the future of finance and data.
        </p>
      </section>

      {/* Core Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Smart Contracts", desc: "Automated, self-executing contracts audited for maximum security." },
            { title: "DApp Development", desc: "Decentralized applications with seamless Web3 wallet integrations." },
            { title: "Asset Tokenization", desc: "Transform real-world assets into digital tokens on the blockchain." }
          ].map((service, i) => (
            <div key={i} className="p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-emerald-500 transition-all">
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack: The Web3 Ledger */}
      <section className="bg-slate-900 text-white py-20 my-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Built on Industry Standards</h2>
          <div className="flex flex-wrap justify-center gap-10 opacity-70">
            {['Ethereum', 'Solana', 'Polygon', 'Rust', 'Solidity', 'Web3.js'].map(tech => (
              <span key={tech} className="text-2xl font-mono tracking-tighter">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to decentralize?</h2>
        <HashLink 
          smooth to="/#contact"
          className="bg-gradient-to-r from-blue-600 to-emerald-500 px-8 py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-emerald-500/50 transition"
        >
          Consult Our Experts
        </HashLink>
      </section>
    </div>
  );
};

export default BlockchainPage;