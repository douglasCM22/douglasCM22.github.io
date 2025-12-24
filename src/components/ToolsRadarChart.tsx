import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const ToolsRadarChart: React.FC = () => {
  const data = {
    labels: ['Testing (Jest/xUnit)', 'Security (OAuth2)', 'CI/CD', 'Documentation (Swagger)', 'Code Quality', 'Collaboration'],
    datasets: [
      {
        label: 'Competency Level',
        data: [80, 90, 85, 85, 95, 90],
        backgroundColor: 'rgba(217, 119, 6, 0.2)',
        borderColor: '#d97706',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#d97706',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: '#e5e7eb',
        },
        grid: {
          color: '#e5e7eb',
        },
        pointLabels: {
          font: {
            size: 11,
            family: 'Inter',
          },
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default ToolsRadarChart;
