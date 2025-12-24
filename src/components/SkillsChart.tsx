import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { profileData } from '../data/profileData';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface SkillsChartProps {
  category: string;
}

const SkillsChart: React.FC<SkillsChartProps> = ({ category }) => {
  const chartData = profileData.skills[category as keyof typeof profileData.skills];

  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Proficiency Score (Self-Assessment)',
        data: chartData.data,
        backgroundColor: chartData.color,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default SkillsChart;
