import { useState } from "react";


export default function ShipDeck({ shipId, deckId }) {
  const [alive, setAlive] = useState(true);

  return (
    <div
      // className="shipDeck"
      style={{
        position: "absolute",
        width: "2rem",
        height: "2rem",
        top: shipId + "rem",
        left: deckId + "rem",
        backgroundColor: alive ? "blue" : "red",
      }}
    />
  );
}
