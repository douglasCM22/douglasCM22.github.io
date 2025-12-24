import React from 'react';
import { motion } from 'framer-motion';

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

interface TimelineProps {
  jobs: Job[];
  selectedJob: Job;
  setSelectedJob: (job: Job) => void;
}

const Timeline: React.FC<TimelineProps> = ({ jobs, selectedJob, setSelectedJob }) => {
  return (
    <div className="space-y-4 lg:col-span-1 h-96 lg:h-auto overflow-y-auto pr-2">
      {jobs.map((job) => (
        <motion.div
          key={job.id}
          className={`timeline-node p-4 mb-3 border-l-4 cursor-pointer rounded-r-md shadow-sm ${
            selectedJob.id === job.id
              ? 'border-amber-500 bg-amber-50'
              : 'border-stone-300 bg-white hover:bg-stone-50'
          }`}
          onClick={() => setSelectedJob(job)}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-xs text-stone-400 font-semibold uppercase">{job.period}</div>
          <div className="font-bold text-stone-800 text-lg">{job.company}</div>
          <div className="text-sm text-stone-600">{job.role}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
