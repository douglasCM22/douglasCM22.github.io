import React, { useState } from 'react';
import { profileData } from '../data/profileData';
import Timeline from './Timeline';
import JobDetail from './JobDetail';

const Experience: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState(profileData.experience[0]);

  return (
    <section id="experience" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-stone-900">Professional Journey</h2>
        <p className="mt-2 text-stone-600 max-w-3xl">
          Explore my career history. Click on a role on the left to view detailed technical contributions and achievements on the right.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Timeline jobs={profileData.experience} selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
        <JobDetail job={selectedJob} />
      </div>
    </section>
  );
};

export default Experience;
