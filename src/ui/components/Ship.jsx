import { useState } from 'react';
import ShipDeck from './ShipDeck';
import { unitSize } from '../../utilities/consts';

export default function Ship({ ship }) {
  const [decks, setDecks] = useState(Array(ship.size).fill(1));

  return (
    <div 
      className="ship"
      style={{
        position: "absolute",
        height: unitSize+"rem",
        width: ship.size*unitSize + "rem",        
        top: ship.id*unitSize + "rem",
        border: 'solid 0.2px white'
      }}
    >
      { decks.map((deck, i) => <ShipDeck key={i} shipId={ship.id} deckId={i} /> )}
      Ship: {ship.id}
    </div>    
  )
}