import LapButton from './LapButton';
import StartButton from './StartButton';
import { useState } from "react";

export default function Buttons(props) {
    const [left, setLeft] = useState("LAP");
    const [right, setRight] = useState("START");
  
    function handleLeftButton(event) {
      if (left === "LAP" && right === "STOP") {
        props.onLap();
      } else if (left === "RESET" && right === "RESUME") {
        setLeft("LAP");
        setRight("START");
        props.onReset();
      }
    }
  
    function handleRightButton(event) {
      if (left === "LAP" && right === "START") {
        setRight("STOP");
        props.onStart();
      } else if (left === "LAP" && right === "STOP") {
        setLeft("RESET");
        setRight("RESUME");
        props.onPause();
      } else if (left === "RESET" && right === "RESUME") {
        setLeft("LAP");
        setRight("STOP");
        props.onResume();
      }
    }
  
    return (
      <div className="buttons">
        <LapButton value={left} onClick={handleLeftButton} />
        <StartButton value={right} onClick={handleRightButton} />
      </div>
    );
}