import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const FocusChart: React.FC = () => {
  const data = {
    labels: ['Backend (.NET/Node)', 'Cloud (Azure/AWS)', 'Architecture', 'Leadership'],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: ['#292524', '#d97706', '#78716c', '#e7e5e4'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          boxWidth: 10,
          font: {
            size: 10,
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default FocusChart;
