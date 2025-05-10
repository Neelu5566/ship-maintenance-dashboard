import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ShipsPage from './pages/ShipsPage';
import ShipDetailPage from './pages/ShipDetailPage';
import JobsPage from './pages/JobsPage';
import NotificationsPage from './pages/NotificationsPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/notifications' element={<NotificationsPage />} />

        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/ships' element={<ShipsPage />} />
        <Route path='/ships/:id' element={<ShipDetailPage />} />
        <Route path='/jobs' element={<JobsPage />} />
      </Routes>
    </Router>
  );
}

export default App;