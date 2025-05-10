import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function JobCalendar() {
  const [jobs, setJobs] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('jobs')) || [];
    setJobs(stored);
  }, []);

  const getJobsForDate = (date) => {
    const formatted = date.toISOString().split('T')[0];
    return jobs.filter(job => job.scheduledDate === formatted);
  };

  const jobList = getJobsForDate(selectedDate);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Maintenance Calendar</h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
      />

      <div style={{ marginTop: '1rem' }}>
        <h3>Jobs on {selectedDate.toDateString()}:</h3>
        {jobList.length > 0 ? (
          <ul>
            {jobList.map(job => (
              <li key={job.id}>
                {job.type} - Component {job.componentId} - {job.priority} - [{job.status}]
              </li>
            ))}
          </ul>
        ) : (
          <p>No jobs scheduled.</p>
        )}
      </div>
    </div>
  );
}

export default JobCalendar;
