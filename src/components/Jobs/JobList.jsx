import React, { useEffect, useState } from 'react';
import { pushNotification } from '../../utils/localStorageUtils';

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [components, setComponents] = useState([]);
  const [ships, setShips] = useState([]);
  const [newJob, setNewJob] = useState({
    shipId: '',
    componentId: '',
    type: '',
    priority: 'Medium',
    status: 'Open',
    assignedEngineerId: '',
    scheduledDate: ''
  });

  useEffect(() => {
    setJobs(JSON.parse(localStorage.getItem('jobs')) || []);
    setComponents(JSON.parse(localStorage.getItem('components')) || []);
    setShips(JSON.parse(localStorage.getItem('ships')) || []);
  }, []);

  const saveJobs = (updated) => {
    setJobs(updated);
    localStorage.setItem('jobs', JSON.stringify(updated));
  };

  const handleAddJob = () => {
    if (!newJob.shipId || !newJob.componentId || !newJob.type || !newJob.assignedEngineerId || !newJob.scheduledDate) {
      return alert('All fields are required');
    }

    const entry = { id: `j${Date.now()}`, ...newJob };
    const updated = [...jobs, entry];
    saveJobs(updated);
    pushNotification(`Job created for component ${newJob.componentId}`);


    setNewJob({
      shipId: '',
      componentId: '',
      type: '',
      priority: 'Medium',
      status: 'Open',
      assignedEngineerId: '',
      scheduledDate: ''
    });
  };

  const updateJobStatus = (id, newStatus) => {
    const updated = jobs.map(job => job.id === id ? { ...job, status: newStatus } : job);
    saveJobs(updated);
    pushNotification(`Job ${id} status updated to ${newStatus}`);

  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Maintenance Jobs</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            [{job.status}] {job.type} - Component {job.componentId} on Ship {job.shipId} - {job.priority}
            <select
              value={job.status}
              onChange={(e) => updateJobStatus(job.id, e.target.value)}
              style={{ marginLeft: '1rem' }}
            >
              <option>Open</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </li>
        ))}
      </ul>

      <h3 style={{ marginTop: '2rem' }}>Create New Job</h3>
      <select value={newJob.shipId} onChange={(e) => setNewJob({ ...newJob, shipId: e.target.value })}>
        <option value="">Select Ship</option>
        {ships.map(ship => <option key={ship.id} value={ship.id}>{ship.name}</option>)}
      </select>

      <select value={newJob.componentId} onChange={(e) => setNewJob({ ...newJob, componentId: e.target.value })}>
        <option value="">Select Component</option>
        {components.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
      </select>

      <input
        placeholder="Job Type"
        value={newJob.type}
        onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
      />
      <select value={newJob.priority} onChange={(e) => setNewJob({ ...newJob, priority: e.target.value })}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <input
        type="date"
        value={newJob.scheduledDate}
        onChange={(e) => setNewJob({ ...newJob, scheduledDate: e.target.value })}
      />
      <input
        placeholder="Assigned Engineer ID"
        value={newJob.assignedEngineerId}
        onChange={(e) => setNewJob({ ...newJob, assignedEngineerId: e.target.value })}
      />

      <button onClick={handleAddJob} style={{ display: 'block', marginTop: '1rem' }}>Create Job</button>
    </div>
  );
}

export default JobList;
