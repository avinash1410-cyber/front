import React from 'react'
import Card from './components/Card'

function App() {
  let info={
    name:"avinash",
    age:24,
    location:"delhi"
  }
  return (
    <Card name={info}/>
  )
}

export default App