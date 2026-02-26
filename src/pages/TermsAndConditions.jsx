import React from 'react';

const TermsAndConditions = () => {
  const lastUpdated = "February 26, 2026";

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-[#08142B] text-slate-800 dark:text-slate-300">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">Terms & Conditions</h1>
        <p className="text-sm mb-12 text-slate-500">Last Updated: {lastUpdated}</p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing the TechnoCrops website and utilizing our services, you agree to comply with and be bound by the following terms and conditions. If you do not agree, please refrain from using our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">2. Services & Scope</h2>
            <p className="leading-relaxed">
              TechnoCrops provides specialized software development, blockchain solutions, and AI integration services. Each project is subject to a separate Statement of Work (SOW) defining specific deliverables and timelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">3. Intellectual Property</h2>
            <p className="leading-relaxed">
              Unless otherwise agreed in a written contract, all code, designs, and intellectual property developed for a client remain the property of TechnoCrops until full payment is received, at which point ownership transfers to the client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">4. Limitation of Liability</h2>
            <p className="leading-relaxed italic">
              TechnoCrops shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our software solutions.
            </p>
          </section>

          <section className="p-6 bg-slate-100 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10">
            <h2 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">Governing Law</h2>
            <p>These terms are governed by the laws of the jurisdiction in which TechnoCrops operates. Any disputes shall be resolved in the appropriate local courts.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;