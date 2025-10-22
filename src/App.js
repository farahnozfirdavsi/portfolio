import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.style.width = '16px';
    cursor.style.height = '16px';
    cursor.style.borderRadius = '50%';
    cursor.style.position = 'fixed';
    cursor.style.pointerEvents = 'none';
    cursor.style.backgroundColor = '#44614D';
    cursor.style.zIndex = '9999';
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX - 8}px`;
      cursor.style.top = `${e.clientY - 8}px`;
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <motion.div
      style={{ y: backgroundY, opacity }}
      className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-[#F8F4EF] to-[#E7E2DB] text-[#2C2A26] p-8 font-[Inter, sans-serif] relative overflow-x-hidden"
    >
      {/* Dynamic floating shapes */}
      <motion.div
        className="absolute w-64 h-64 bg-[#C7D8CF] rounded-full top-10 left-10 opacity-30 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-[#E6D8CE] rounded-full bottom-10 right-10 opacity-30 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Header */}
      <motion.img
        src="/profile.jpg"
        alt="Farah Firdavsi"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-32 h-32 rounded-full border-4 border-[#C7D8CF] shadow-lg mt-8 mb-4 z-10"
      />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-4xl font-bold text-[#44614D] mb-3">Hi, I'm Farah Firdavsi 🌿</h1>
        <p className="max-w-lg text-[#5A5A55] leading-relaxed text-md">
          I’m a data analysis student passionate about uncovering insights and turning complexity into clarity.
        </p>
      </motion.div>

      {/* Links with more interactivity */}
      <div className="flex gap-4 mt-6 z-10">
        {[{ name: 'LinkedIn', link: 'https://linkedin.com', color: '#C7D8CF' }, { name: 'GitHub', link: 'https://github.com', color: '#E6D8CE' }].map((btn, i) => (
          <motion.a
            key={i}
            href={btn.link}
            whileHover={{ scale: 1.15, rotate: 2, boxShadow: `0px 0px 20px ${btn.color}` }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="px-5 py-2 rounded-xl font-medium shadow-md transition-colors"
            style={{ backgroundColor: btn.color, color: '#2C2A26' }}
          >
            {btn.name}
          </motion.a>
        ))}
      </div>

      {/* Scrolling fun sections */}
      <div className="mt-20 w-full max-w-3xl space-y-24 z-10">
        {/* Education */}
        <motion.section
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-[#44614D] mb-3">Education</h2>
          <div className="bg-[#F0EBE4] rounded-xl p-5 shadow-sm hover:shadow-md hover:scale-[1.02] transition">
            <p className="font-medium">University of Michigan — B.S. in Information Analysis</p>
            <p className="text-sm text-[#5A5A55]">Expected Graduation: 2027</p>
            <p className="text-sm text-[#5A5A55]">GPA: 3.8</p>
            <p className="text-sm text-[#5A5A55] mt-1">Focus: Data Analysis, Visualization, and Systems Thinking</p>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-[#44614D] mb-3">Experience</h2>
          <div className="bg-[#EDE7E0] rounded-xl p-5 shadow-sm hover:shadow-md hover:scale-[1.02] transition space-y-3">
            <div>
              <p className="font-medium">Kalamazoo Public Library — Technology Service Intern</p>
              <p className="text-sm text-[#5A5A55]">Nov 2023 – Aug 2025</p>
              <ul className="text-sm text-[#5A5A55] list-disc list-inside">
                <li>Cleaned and structured datasets for 17,000+ libraries across North America, improving data reliability for board reports.</li>
                <li>Used Python (pandas) to validate 10,000+ hotspot usage records and generate weekly summaries.</li>
                <li>Led 3 digital literacy workshops on mobile app use for 60+ participants.</li>
                <li>Documented workflows and provided technical support for community users.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Kalamazoo Public Schools — Technology Information Intern</p>
              <p className="text-sm text-[#5A5A55]">May 2024 – Aug 2024</p>
              <ul className="text-sm text-[#5A5A55] list-disc list-inside">
                <li>Analyzed performance data from 3,000+ Chromebooks to identify causes of device failure.</li>
                <li>Created Tableau dashboards to guide technology purchasing decisions.</li>
                <li>Coordinated imaging and deployment of 5,000 student devices for the academic year.</li>
                <li>Streamlined repair-tracking, reducing turnaround time by 40%.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Leadership */}
        <motion.section
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-[#44614D] mb-3">Leadership</h2>
          <div className="bg-[#E9E3DC] rounded-xl p-5 shadow-sm hover:shadow-md hover:scale-[1.02] transition space-y-3">
            <div>
              <p className="font-medium">+Tech Ross Innovation Jam — Business Analyst</p>
              <p className="text-sm text-[#5A5A55]">Sep 2025 – Present</p>
              <ul className="text-sm text-[#5A5A55] list-disc list-inside">
                <li>Conducted market and competitor analysis of 10+ comparable solutions to define scope and prototype direction.</li>
                <li>Collaborated with a team of 5 to model cost structures and success metrics for a proposed business solution.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Mintify — Vice President of Finance</p>
              <p className="text-sm text-[#5A5A55]">Aug 2025 – Present</p>
              <ul className="text-sm text-[#5A5A55] list-disc list-inside">
                <li>Managed $2,000+ annual budget, processed reimbursements, and maintained financial records in Excel.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Mintify — User Experience Analyst</p>
              <p className="text-sm text-[#5A5A55]">Sep 2025 – Present</p>
              <ul className="text-sm text-[#5A5A55] list-disc list-inside">
                <li>Analyzed form clarity and usability through surveys with 30+ participants, providing recommendations for legal aid partners.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-[#44614D] mb-3">Projects</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-[#E6D8CE] rounded-xl p-5 shadow-sm">
              <h3 className="font-medium mb-1">Campus Resource Dashboard</h3>
              <p className="text-sm text-[#5A5A55]">Under Construction...</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-[#C7D8CF] rounded-xl p-5 shadow-sm">
              <h3 className="font-medium mb-1">Data Cleaning Pipeline (Python)</h3>
              <p className="text-sm text-[#5A5A55]">Under Construction...</p>
            </motion.div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="mt-24 mb-8 text-xs text-[#8A887F] z-10">
        <p>© 2025 Farah Firdavsi | Made with 🌿 and React</p>
      </footer>
    </motion.div>
  );
}
