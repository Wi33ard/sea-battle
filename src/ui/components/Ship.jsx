import { useState } from 'react';
import ShipDeck from './ShipDeck';

export default function Ship({ ship }) {
  const [decks, setDecks] = useState(Array(ship.size).fill(1));

  return (
    <div 
      className="ship"
      style={{
        position: "absolute",
        height: "2rem",
        width: ship.size + "rem",        
        top: ship.id + "rem",
        border: 'solid 1px black'
      }}
    >
      { decks.map((deck, i) => <ShipDeck key={i} shipId={ship.id} deckId={i} /> )}
    </div>    
  )
}