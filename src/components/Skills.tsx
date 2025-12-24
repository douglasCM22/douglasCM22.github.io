import React, { useState } from 'react';
import SkillsChart from './SkillsChart';
import ToolsRadarChart from './ToolsRadarChart';

const Skills: React.FC = () => {
  const [skillCategory, setSkillCategory] = useState('backend');

  return (
    <section id="skills" className="py-16 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-stone-900">Technical Arsenal</h2>
          <p className="mt-2 text-stone-600">A quantitative breakdown of my technical capabilities and tool proficiency.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-stone-800">Proficiency Levels</h3>
              <select
                id="skill-category-select"
                className="bg-stone-50 border border-stone-300 text-stone-700 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block p-2"
                onChange={(e) => setSkillCategory(e.target.value)}
              >
                <option value="backend">Backend & Frameworks</option>
                <option value="cloud">Cloud & DevOps</option>
                <option value="architecture">Architecture & Concepts</option>
              </select>
            </div>
            <div className="chart-container" style={{ height: '300px' }}>
              <SkillsChart category={skillCategory} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
            <h3 className="text-lg font-semibold text-stone-800 mb-6">Tools, Security & Testing</h3>
            <div className="chart-container" style={{ height: '300px' }}>
              <ToolsRadarChart />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-stone-500">
                Emphasis on <span className="font-bold text-amber-600">CI/CD</span> and{' '}
                <span className="font-bold text-amber-600">Security (OAuth2/MSAL)</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
