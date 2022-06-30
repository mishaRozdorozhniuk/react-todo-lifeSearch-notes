import React, { useState } from 'react';
import CalcBtn from './CalcBtn.jsx';
import './Calculator.css';

const Calculator = () => {
  const [currentSymbol, setCurrentSymbol] = useState([]);
  const [result, setResult] = useState(0);

  const symbols = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ','];

  const operands = ['÷', '*', '+', '-', 'C'];

  const handleEqual = () => {
    const resultArr = currentSymbol.join('');
    const res = eval(resultArr);
    setResult(res);
    setCurrentSymbol([res]);
  };

  for (let index = 0; index < currentSymbol.length; index++) {
    const element = currentSymbol[index];
    if (element === 'C') {
      setCurrentSymbol([]);
      setResult(null);
    }
  }

  return (
    <div className="calc">
      <div className="calc-answer">{result || currentSymbol}</div>
      <div className="operators-wrapper">
        {operands.map((op) => (
          <CalcBtn
            key={op}
            text={op}
            setCurrentSymbol={setCurrentSymbol}
            className="calc-btn operators-btn"
            currentSymbol={currentSymbol}
            operands={operands}
          />
        ))}
      </div>
      <div className="calculator">
        {symbols.map((btn) => (
          <CalcBtn
            key={btn}
            text={btn}
            setCurrentSymbol={setCurrentSymbol}
            className="calc-btn"
            currentSymbol={currentSymbol}
            operands={operands}
          />
        ))}
        <button onClick={handleEqual}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
