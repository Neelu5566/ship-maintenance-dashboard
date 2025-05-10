import React from 'react';
import JobList from '../components/Jobs/JobList';
import JobCalendar from '../components/Jobs/JobCalendar';

function JobsPage() {
  return (
    <div>
      <JobList />
      <hr style={{ margin: '2rem 0' }} />
      <JobCalendar />
    </div>
  );
}

export default JobsPage;
