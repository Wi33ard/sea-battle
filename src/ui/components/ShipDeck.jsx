import { useState } from "react";
import { unitSize } from '../../utilities/consts';


export default function ShipDeck({ shipId, deckId }) {
  const [alive, setAlive] = useState(true);

  return (
    <div
      // className="shipDeck"
      style={{
        position: "absolute",
        width: unitSize+"rem",
        height: unitSize+"rem",
        top: 0,
        left: deckId*unitSize + "rem",
        backgroundColor: alive ? "blue" : "red",
        border: 'solid 0.2px gray'
      }}
    >
      deck id: {deckId}
    </div>
  );
}
