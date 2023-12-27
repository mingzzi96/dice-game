import Dice from "./Dice";
import "./Board.css";
import { useEffect, useState } from "react";

function Board({ name, color, gameHistory }) {
  const num = gameHistory[gameHistory.length - 1] || 1;
  const sum = gameHistory.reduce((a, b) => a + b, 0);
  const [winner, setWinner] = useState(false);

  useEffect(() => {
    if (sum >= 100) {
      setWinner(true);
    } else {
      setWinner(false);
    }
  }, [setWinner, sum]);

  return (
    <div className={winner ? "Board Board-winner" : "Board"}>
      <h2 className="Board-heading">{name}</h2>
      <Dice color={color} num={num} className="Dice" />
      <h2 className="Board-heading">총점</h2>
      <p>{sum}</p>
      <h2 className="Board-heading">기록</h2>
      <p>{gameHistory.join(", ")}</p>
    </div>
  );
}

export default Board;
