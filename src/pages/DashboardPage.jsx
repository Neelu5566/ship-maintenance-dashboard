import React from 'react';
import KPICards from '../components/Dashboard/KPICards';
import Charts from '../components/Dashboard/Charts';

function DashboardPage() {
  return (
    <div>
      <h1 style={{ padding: '1rem 2rem' }}>Dashboard</h1>
      <KPICards />
      <Charts />
    </div>
  );
}

export default DashboardPage;
