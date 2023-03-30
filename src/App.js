import React, { useState } from "react";
import "./App.css";
import { buttons } from "./buttons"; // buttons.jsからimport

function App() {
  const [input, setInput] = useState("");

  const handleClick = (event) => {
    if (input.length < 15) {
      // 入力可能な桁数を15桁に制限
      setInput(input + event.target.value);
    }
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = input ? eval(input) : "";
      setInput(result.toString().slice(0, 18)); // 表示可能な桁数を15桁に制限
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        {buttons.map((button) => (
          <button key={button.value} onClick={handleClick} value={button.value}>
            {button.label}
          </button>
        ))}
        <button onClick={handleCalculate} className="calculate">
          =
        </button>
        <button onClick={handleClear} className="clear">
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
