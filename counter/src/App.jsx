import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)
  // let counter = 15  
  
  const addValue = () => {
    console.log("Added",counter);    
    counter=counter+1
    setCounter(counter)
  }



  const subtractValue = () => {
    if (counter > 0) {
      console.log("Subtracted", counter);
      setCounter(counter - 1);
    } else {
      console.log("Counter is already at 0");
    }
  }




  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button> 
      <button onClick={subtractValue}>Subtract value {counter}</button> 
      <br />
    </>
  )
}

export default App