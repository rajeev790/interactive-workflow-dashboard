import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const AnalyticsPanel = ({ nodes }) => {
  const data = {
    labels: nodes.map(node => node.name),
    datasets: [
      {
        label: 'Execution Time',
        data: nodes.map(node => node.executionTime),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const lineData = {
    labels: nodes.map(node => node.name),
    datasets: [
      {
        label: 'Cumulative Execution Time',
        data: nodes.map((node, index) => nodes.slice(0, index + 1).reduce((sum, n) => sum + n.executionTime, 0)),
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
    ],
  };

  const pieData = {
    labels: [...new Set(nodes.map(node => node.type))],
    datasets: [
      {
        data: nodes.reduce((acc, node) => {
          acc[node.type] = (acc[node.type] || 0) + node.executionTime;
          return acc;
        }, {}),
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
      },
    ],
  };

  return (
    <div className="analytics-panel">
      <h3>Analytics</h3>
      <Bar data={data} />
      <Line data={lineData} />
      <Pie data={pieData} />
    </div>
  );
};

export default AnalyticsPanel;