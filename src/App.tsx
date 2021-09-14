import './App.css';
import React, { useState, useEffect } from 'react'


function App() {
  
  const [ firstNumber, setFirstNumber] = useState(0)
  const [ secondNumber, setSecondNumber] = useState(0)
  const [ result, setResult] = useState(0)
 
  useEffect(() => {
    if (result >= 10) {
    alert('O resultado é maior ou igual a 10')
    }
  }, [result])

  function funcaoSomaNumero() {
    
    const novoNumero = firstNumber + secondNumber

    setResult(novoNumero)
  }

  function funcaoSubtraiNumero() {

    const novoNumero = firstNumber - secondNumber

    setResult(novoNumero)
  }

  function funcaoMultiplicaNumero() {

    const novoNumero = firstNumber * secondNumber

    setResult(novoNumero)
  }

  function funcaoDivideNumero() {

    const novoNumero = firstNumber / secondNumber

    setResult(novoNumero)
  }
 
  

  return (
    <div className="App">
      <h1>Calculadora</h1>

      <label>Digite um número:</label><br />
      <input type="number" onChange={(e) => setFirstNumber(Number(e.target.value))} /> <br /> <br />
      <label>Digite um número:</label> <br />
      <input type="number" onChange={(e) => setSecondNumber(Number(e.target.value))} /> <br /> <br />
      <button onClick={funcaoSomaNumero}>Somar +</button> <br /> <br />
      <button onClick={funcaoSubtraiNumero}>Subtrair -</button> <br /> <br />
      <button onClick={funcaoMultiplicaNumero}>Multiplicar x</button> <br /> <br />
      <button onClick={funcaoDivideNumero}>Dividir /</button> <br /> <br />
      Resultado: {result}
    
    
      </div>

      
    );

    
}

export default App;
