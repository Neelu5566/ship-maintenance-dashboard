import React from 'react';
import KPICards from '../components/Dashboard/KPICards';
import Charts from '../components/Dashboard/Charts';
import Navbar from '../components/Authentication/Navbar';

function DashboardPage() {
  return (
    <div>
      <Navbar />
      <h1 style={{ padding: '1rem 2rem' }}>Dashboard</h1>
      <KPICards />
      <Charts />
    </div>
  );
}

export default DashboardPage;
