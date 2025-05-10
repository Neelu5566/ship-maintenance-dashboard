import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Charts() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('jobs')) || [];
    setJobs(stored);
  }, []);

  const data = [
    { name: 'Open', value: jobs.filter(j => j.status === 'Open').length },
    { name: 'In Progress', value: jobs.filter(j => j.status === 'In Progress').length },
    { name: 'Completed', value: jobs.filter(j => j.status === 'Completed').length }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h3>Job Status Distribution</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          label
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default Charts;
