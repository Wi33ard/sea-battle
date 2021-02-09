import { useState } from 'react';
import Ship from './Ship';

export default function ShipBox() {
  const shipsKit = [
    { id: 1, size: 1, direction: 'horizontal' },
    { id: 2, size: 1, direction: 'horizontal' },
    { id: 3, size: 1, direction: 'horizontal' },
    { id: 4, size: 1, direction: 'horizontal' },
    { id: 5, size: 2, direction: 'horizontal' },
    { id: 6, size: 2, direction: 'horizontal' },
    { id: 7, size: 2, direction: 'horizontal' },
    { id: 8, size: 3, direction: 'horizontal' },
    { id: 9, size: 3, direction: 'horizontal' },
    { id: 10, size: 4, direction: 'horizontal' }
  ];
  const [ships, setShips] = useState(shipsKit);

  return (
    <div className="shipbox">
      <h4>ShipBox</h4>
      { ships.map((ship) => <Ship key={ship.id} ship={ship} />)}
    </div>    
  )
}