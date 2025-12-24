import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Job {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  details: string[];
  tech: string[];
}

interface JobDetailProps {
  job: Job;
}

const JobDetail: React.FC<JobDetailProps> = ({ job }) => {
  return (
    <div className="lg:col-span-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={job.id}
          className="bg-white rounded-xl shadow-sm border border-stone-200 p-8 h-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 pb-6 border-b border-stone-100">
            <div>
              <h3 className="text-2xl font-bold text-stone-900">{job.role}</h3>
              <div className="text-amber-600 font-medium text-lg">{job.company}</div>
            </div>
            <div className="mt-2 md:mt-0 text-right">
              <div className="text-sm text-stone-500 font-semibold bg-stone-100 px-3 py-1 rounded-full inline-block">
                {job.period}
              </div>
              <div className="text-xs text-stone-400 mt-1">{job.location}</div>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-stone-600 text-lg italic leading-relaxed mb-4">"{job.summary}"</p>
            <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-3">
              Key Responsibilities & Achievements
            </h4>
            <ul className="space-y-3">
              {job.details.map((d, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-amber-500 mt-1">➜</span>
                  <span className="text-stone-700">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {job.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-stone-100 text-stone-600 text-sm rounded-md border border-stone-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default JobDetail;
