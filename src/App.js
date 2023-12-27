import Board from "./Board";
import Button from "./Button";
import { useState } from "react";
import "./App.css";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <>
      <div className="App">
        <h2 className="App-title">주사위 게임</h2>
        <Button className="App-button" onClick={handleRollClick} color="blue">
          던지기
        </Button>
        <Button className="App-button" onClick={handleClearClick} color="red">
          처음부터
        </Button>
        <div className="App-boards">
          <Board name="나" color="blue" gameHistory={myHistory} />
          <Board name="상대" color="red" gameHistory={otherHistory} />
        </div>
      </div>
    </>
  );
}

export default App;
