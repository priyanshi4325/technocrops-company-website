import React from 'react';

const PrivacyPolicy = () => {
  const lastUpdated = "October 2023"; // Update this to your current date

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-[#08142B] text-slate-800 dark:text-slate-300">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">Privacy Policy</h1>
        <p className="text-sm mb-12 text-slate-500">Last Updated: {lastUpdated}</p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">1. Information We Collect</h2>
            <p className="leading-relaxed">
              When you use the Technocorps contact form, we collect information that you voluntarily provide to us, including your name, email address, and project details. This data is used solely to respond to your inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our Service.</li>
              <li>To notify you about changes to our services.</li>
              <li>To provide customer support and gather feedback.</li>
              <li>To detect, prevent and address technical issues.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">3. Data Security</h2>
            <p className="leading-relaxed">
              The security of your data is important to us. We implement industry-standard encryption for our backend connectivity and email integrations to ensure your project details remain confidential.
            </p>
          </section>

          <section className="p-6 bg-blue-500/5 border border-blue-500/10 rounded-2xl">
            <h2 className="text-xl font-semibold mb-2 text-blue-500">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="font-medium mt-2">legal@technocorps.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;