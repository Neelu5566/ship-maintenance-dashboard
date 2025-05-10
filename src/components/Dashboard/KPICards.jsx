import React, { useEffect, useState } from 'react';

function KPICards() {
  const [ships, setShips] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [components, setComponents] = useState([]);

  useEffect(() => {
    setShips(JSON.parse(localStorage.getItem('ships')) || []);
    setJobs(JSON.parse(localStorage.getItem('jobs')) || []);
    setComponents(JSON.parse(localStorage.getItem('components')) || []);
  }, []);

  const totalShips = ships.length;
  const jobsInProgress = jobs.filter(j => j.status === 'In Progress').length;
  const jobsCompleted = jobs.filter(j => j.status === 'Completed').length;

  const overdueComponents = components.filter(c => {
    if (!c.lastMaintenanceDate) return false;
    const lastDate = new Date(c.lastMaintenanceDate);
    const now = new Date();
    const diff = (now - lastDate) / (1000 * 60 * 60 * 24); // days
    return diff > 180;
  }).length;

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '2rem' }}>
      <div style={cardStyle}>Total Ships: <strong>{totalShips}</strong></div>
      <div style={cardStyle}>Jobs In Progress: <strong>{jobsInProgress}</strong></div>
      <div style={cardStyle}>Jobs Completed: <strong>{jobsCompleted}</strong></div>
      <div style={cardStyle}>Overdue Components: <strong>{overdueComponents}</strong></div>
    </div>
  );
}

const cardStyle = {
  flex: '1 0 200px',
  padding: '1rem',
  background: '#f1f1f1',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

export default KPICards;
