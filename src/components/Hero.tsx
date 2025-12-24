import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin } from 'react-icons/fi';

import FocusChart from './FocusChart';

const Hero: React.FC = () => {
  return (
    <section className="bg-stone-50 py-12 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-4 leading-tight">
              Building Scalable <br />
              <span className="text-amber-600">Event-Driven Architectures</span>
            </h1>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Senior Engineer specializing in <strong>C#/.NET Core</strong>, <strong>TypeScript/Node.js</strong>, and <strong>Azure/AWS</strong> Cloud environments. Proven track record in modernizing legacy APIs and designing distributed systems.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <motion.a
                href="mailto:douglas.cmarques2@gmail.com"
                className="inline-flex items-center px-5 py-2.5 border border-transparent rounded-md shadow-sm text-white bg-stone-800 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail className="mr-2" />
                Contact Me
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/douglas-marques-977367146"
                target="_blank"
                className="inline-flex items-center px-5 py-2.5 border border-stone-300 rounded-md shadow-sm text-stone-700 bg-white hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin className="mr-2" />
                LinkedIn Profile
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-xl shadow-sm border border-stone-100"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-stone-500 text-xs font-bold uppercase tracking-wider mb-4 text-center">Core Focus Areas</h3>
            <div className="chart-container" style={{ height: '250px' }}>
              <FocusChart />
            </div>
            <p className="text-center text-xs text-stone-400 mt-2">Distribution of expertise based on professional history</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
