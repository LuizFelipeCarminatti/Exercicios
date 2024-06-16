import React, { useState } from "react";
export default props => {
    const [number, setNumber] = useState('');
    const [factorial, setFactorial] = useState(null);
  
    const calculateFactorial = () => {
      let result = 1;
      for (let i = 1; i <= number; i++) {
        result *= i;
      }
      setFactorial(result);
    };
  
    return (
      <div>
        <h2>Calculadora Fatorial</h2>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Insira um número"/>
        <button onClick={calculateFactorial}>Calcular Fatorial</button>
        {factorial !== null && (
          <p>
            O fatorial de {number} é {factorial}.
          </p>
        )}
      </div>
    );
}