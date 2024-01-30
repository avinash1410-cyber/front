import React from 'react'

function Card({name}) {
    console.log(name.name);
    console.log(name.age);
    console.log(name.location);
    console.log("hi");
  return (
    <div>{name.name}</div>
  )
}

export default Card