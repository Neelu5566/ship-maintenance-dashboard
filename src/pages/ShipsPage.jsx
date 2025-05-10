import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ComponentList from '../components/Components/ComponentList';
import Navbar from '../components/Authentication/Navbar';

function ShipsPage() {
  const [ships, setShips] = useState([]);
  const [newShip, setNewShip] = useState({ name: '', imo: '', flag: '', status: 'Active' });

  useEffect(() => {
    const storedShips = JSON.parse(localStorage.getItem('ships')) || [];
    setShips(storedShips);
  }, []);

  const saveShips = (updatedShips) => {
    setShips(updatedShips);
    localStorage.setItem('ships', JSON.stringify(updatedShips));
  };

  const handleAddShip = () => {
    if (!newShip.name || !newShip.imo || !newShip.flag) return alert("All fields required");

    const newEntry = {
      id: `s${Date.now()}`,
      ...newShip
    };
    const updatedShips = [...ships, newEntry];
    saveShips(updatedShips);
    setNewShip({ name: '', imo: '', flag: '', status: 'Active' });
  };

  const handleDeleteShip = (id) => {
    const updatedShips = ships.filter(ship => ship.id !== id);
    saveShips(updatedShips);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Ships List</h2>

      <ul>
        {ships.map(ship => (
          <li key={ship.id}>
            <strong>{ship.name}</strong> ({ship.imo}) - {ship.flag} - {ship.status}
            <button onClick={() => handleDeleteShip(ship.id)} style={{ marginLeft: '1rem' }}>Delete</button>
            <Link to={`/ships/${ship.id}`} style={{ marginLeft: '1rem' }}>View</Link>
          </li>
        ))}
      </ul>

      <h3 style={{ marginTop: '2rem' }}>Add New Ship</h3>
      <input
        placeholder="Name"
        value={newShip.name}
        onChange={(e) => setNewShip({ ...newShip, name: e.target.value })}
      />
      <input
        placeholder="IMO Number"
        value={newShip.imo}
        onChange={(e) => setNewShip({ ...newShip, imo: e.target.value })}
      />
      <input
        placeholder="Flag"
        value={newShip.flag}
        onChange={(e) => setNewShip({ ...newShip, flag: e.target.value })}
      />
      <select
        value={newShip.status}
        onChange={(e) => setNewShip({ ...newShip, status: e.target.value })}
      >
        <option value="Active">Active</option>
        <option value="Under Maintenance">Under Maintenance</option>
      </select>
      <button onClick={handleAddShip} style={{ display: 'block', marginTop: '1rem' }}>Add Ship</button>

      <hr style={{ margin: '2rem 0' }} />

      <ComponentList />
      <Navbar />
    </div>
  );
}

export default ShipsPage;