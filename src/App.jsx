import { useState } from "react";
import "./App.css";

function App() {
  const [current, setCurrent] = useState("0");
  const [previous, setPrevious] = useState(null);
  const [operator, setOperator] = useState(null);

  // Add number
  const handleNumber = (num) => {
    if (current === "0") {
      setCurrent(num);
    } else {
      setCurrent(current + num);
    }
  };

  // Add decimal
  const handleDecimal = () => {
    if (!current.includes(".")) {
      setCurrent(current + ".");
    }
  };

  // Select operator
  const handleOperator = (op) => {
    setPrevious(current);
    setOperator(op);
    setCurrent("0");
  };

  // Calculate result
  const calculate = () => {
    if (!operator || !previous) return;

    const prev = parseFloat(previous);
    const curr = parseFloat(current);
    let result = 0;

    switch (operator) {
      case "+":
        result = prev + curr;
        break;
      case "-":
        result = prev - curr;
        break;
      case "×":
        result = prev * curr;
        break;
      case "÷":
        result = prev / curr;
        break;
      default:
        return;
    }

    setCurrent(result.toString());
    setOperator(null);
    setPrevious(null);
  };

  const clear = () => {
    setCurrent("0");
    setPrevious(null);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <div className="display">{current}</div>

      <div className="buttons">
        <button onClick={clear}>C</button>
        <button onClick={() => handleOperator("÷")}>÷</button>
        <button onClick={() => handleOperator("×")}>×</button>
        <button onClick={() => handleOperator("-")}>-</button>

        <button onClick={() => handleNumber("7")}>7</button>
        <button onClick={() => handleNumber("8")}>8</button>
        <button onClick={() => handleNumber("9")}>9</button>
        <button onClick={() => handleOperator("+")}>+</button>

        <button onClick={() => handleNumber("4")}>4</button>
        <button onClick={() => handleNumber("5")}>5</button>
        <button onClick={() => handleNumber("6")}>6</button>
        <button onClick={calculate}>=</button>

        <button onClick={() => handleNumber("1")}>1</button>
        <button onClick={() => handleNumber("2")}>2</button>
        <button onClick={() => handleNumber("3")}>3</button>

        <button onClick={() => handleNumber("0")}>0</button>
        <button onClick={handleDecimal}>.</button>
      </div>
    </div>
  );
}

export default App;