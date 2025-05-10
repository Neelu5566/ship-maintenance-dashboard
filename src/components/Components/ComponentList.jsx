import React, { useState, useEffect } from 'react';

function ComponentList() {
  const [components, setComponents] = useState([]);
  const [ships, setShips] = useState([]);
  const [newComponent, setNewComponent] = useState({
    name: '',
    serialNumber: '',
    installDate: '',
    lastMaintenanceDate: '',
    shipId: ''
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('components')) || [];
    setComponents(stored);
    const shipData = JSON.parse(localStorage.getItem('ships')) || [];
    setShips(shipData);
  }, []);

  const saveComponents = (updated) => {
    setComponents(updated);
    localStorage.setItem('components', JSON.stringify(updated));
  };

  const handleAdd = () => {
    if (!newComponent.name || !newComponent.serialNumber || !newComponent.installDate || !newComponent.shipId)
      return alert('All fields required');

    const entry = { id: `c${Date.now()}`, ...newComponent };
    const updated = [...components, entry];
    saveComponents(updated);

    setNewComponent({ name: '', serialNumber: '', installDate: '', lastMaintenanceDate: '', shipId: '' });
  };

  const handleDelete = (id) => {
    const updated = components.filter(c => c.id !== id);
    saveComponents(updated);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Ship Components</h2>
      <ul>
        {components.map(c => (
          <li key={c.id}>
            {c.name} - {c.serialNumber} (Ship ID: {c.shipId}) | Last Maintained: {c.lastMaintenanceDate}
            <button onClick={() => handleDelete(c.id)} style={{ marginLeft: '1rem' }}>Delete</button>
          </li>
        ))}
      </ul>

      <h3 style={{ marginTop: '2rem' }}>Add Component</h3>
      <input placeholder="Name" value={newComponent.name} onChange={(e) => setNewComponent({ ...newComponent, name: e.target.value })} />
      <input placeholder="Serial Number" value={newComponent.serialNumber} onChange={(e) => setNewComponent({ ...newComponent, serialNumber: e.target.value })} />
      <input type="date" value={newComponent.installDate} onChange={(e) => setNewComponent({ ...newComponent, installDate: e.target.value })} />
      <input type="date" value={newComponent.lastMaintenanceDate} onChange={(e) => setNewComponent({ ...newComponent, lastMaintenanceDate: e.target.value })} />
      <select value={newComponent.shipId} onChange={(e) => setNewComponent({ ...newComponent, shipId: e.target.value })}>
        <option value="">Select Ship</option>
        {ships.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
      </select>
      <button onClick={handleAdd} style={{ display: 'block', marginTop: '1rem' }}>Add Component</button>
    </div>
  );
}

export default ComponentList;
