import React from 'react';
import JobList from '../components/Jobs/JobList';
import JobCalendar from '../components/Jobs/JobCalendar';
import Navbar from '../components/Authentication/Navbar';

function JobsPage() {
  return (
    <div>
      <Navbar />
      <JobList />
      <hr style={{ margin: '2rem 0' }} />
      <JobCalendar />
    </div>
  );
}

export default JobsPage;
