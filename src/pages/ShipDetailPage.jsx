import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ShipDetailPage() {
  const { id } = useParams();
  const [ship, setShip] = useState(null);

  useEffect(() => {
    const ships = JSON.parse(localStorage.getItem('ships')) || [];
    const found = ships.find(s => s.id === id);
    setShip(found);
  }, [id]);

  if (!ship) return <p>Ship not found</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{ship.name} Details</h2>
      <p><strong>IMO:</strong> {ship.imo}</p>
      <p><strong>Flag:</strong> {ship.flag}</p>
      <p><strong>Status:</strong> {ship.status}</p>
      <hr />
      <p><em>(Components & Maintenance History coming soon)</em></p>
    </div>
  );
}

export default ShipDetailPage;
