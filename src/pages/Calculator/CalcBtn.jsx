import React from 'react';
import './Calculator.css';

const CalcBtn = ({ text, setCurrentSymbol, className, operands, currentSymbol }) => {
  const currentSymbolIndexChecked = currentSymbol.length === 0;

  const handleChange = () => {
    if (
      (operands.indexOf(text) === 0 && currentSymbolIndexChecked) ||
      (operands.indexOf(text) === 1 && currentSymbolIndexChecked) ||
      (operands.indexOf(text) === 2 && currentSymbolIndexChecked) ||
      (operands.indexOf(text) === 3 && currentSymbolIndexChecked) ||
      (operands.indexOf(text) === 4 && currentSymbolIndexChecked)
    ) {
      return;
    }
    setCurrentSymbol((prev) => [...prev, text]);
  };

  return (
    <div onClick={handleChange} className={className}>
      {text}
    </div>
  );
};

export default React.memo(CalcBtn);
