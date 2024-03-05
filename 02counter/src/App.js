// import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

function App() {

  const [counter, setCounter] = useState(15)


  // let counter = 15

  const addValue = () => {
    // counter = counter + 1
    setCounter(counter + 1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur Rract</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add value</button>
      <br />
      <button
      onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
