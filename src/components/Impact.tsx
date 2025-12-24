import React from 'react';
import { motion } from 'framer-motion';

const ImpactCard: React.FC<{ title: string; subtitle: string; description: string; tags: string[] }> = ({
  title,
  subtitle,
  description,
  tags,
}) => (
  <motion.div
    className="bg-white p-6 rounded-xl border border-stone-200 card-hover transition-all"
    whileHover={{ transform: 'translateY(-4px)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
  >
    <div className="text-amber-600 font-bold text-4xl mb-2">{title}</div>
    <div className="text-sm text-stone-400 uppercase font-semibold mb-3">{subtitle}</div>
    <p
      className="text-stone-600 mb-4"
      dangerouslySetInnerHTML={{ __html: description }}
    ></p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span key={i} className="px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-stone-900">Key Impact Highlights</h2>
        <p className="mt-2 text-stone-600">
          Specific instances where technical intervention led to measurable business or operational improvements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ImpactCard
          title="85%"
          subtitle="Data Precision Increase"
          description="At <strong>Neogrid</strong>, re-engineered core data processing algorithms and optimized SQL Server interactions to drastically improve industrial data accuracy."
          tags={['SQL Server', 'Algorithms']}
        />
        <ImpactCard
          title="Cloud"
          subtitle="Modernization"
          description="At <strong>Numeria</strong>, led the migration of public sector legacy systems to cloud-native <strong>Azure</strong> architectures, improving reliability and uptime."
          tags={['Azure', 'Migration']}
        />
        <ImpactCard
          title="Hybrid"
          subtitle="Orchestration"
          description="At <strong>Yara</strong>, implemented orchestration patterns leveraging AWS SQS/Lambda and Azure Service Bus to manage high-volume global ship control data."
          tags={['AWS + Azure', 'Serverless']}
        />
      </div>
    </section>
  );
};

export default Impact;
