// import logo from './logo.svg';
import './App.css';

import { useState } from "react";

function App() {
  const [step,  setStep] = useState(1)
  const [counter,  setCounter] = useState(0)
  var date = new Date()
  console.log(counter)
  date.setDate(date.getDate() + counter)
  return (
    <div className="App">
      <div className="flex-display step-container">
        <button onClick={() => setStep((s) => s - 1)}>-</button>&nbsp;
        <p>Steps: {step}</p>&nbsp;
        <button onClick={() => setStep((s) => s + 1)}>+</button> 
      </div>
      <div className="flex-display">
        <button onClick={() => setCounter((c) => c - step)}>-</button>&nbsp;
        <p>Counter: {counter}</p>&nbsp;
        <button onClick={() => setCounter((c) => c + step)}>+</button>
      </div>
      <div className='flex-display'>
        <p>{counter === 0 ? "Today is " : counter > 0 ? `${counter} days from today is ` : `${counter} days ago from today is ` }{date.toString()}</p>
      </div>
    </div>
  );
}

export default App;
