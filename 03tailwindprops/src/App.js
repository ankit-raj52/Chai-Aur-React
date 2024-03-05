import React from 'react';
import './App.css';
import Card from './Components/Card'

function App() {
  let myObj = {
    username: "ankit",
    age: 21
  }
  let newArr = [1,2,3]

  return (
    
    <>
      <h1 className='relative-h-400px bg-green-400 text-black p-4 rounded-xl mb-4 text-center'>Tailwind test</h1>

      <Card username="Ankit" btnText='Click Me!' />
      <Card username="charlie" />
      
      

    </>
  );
}

export default App;
